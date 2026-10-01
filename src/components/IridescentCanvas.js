'use client';

import { useEffect, useRef } from 'react';

/**
 * Shader-driven liquid iridescence — the hero's only chromatic surface.
 *
 * Raw WebGL2 (fallback WebGL1) fullscreen fragment shader. Domain-warped fbm
 * noise produces a flowing, molten liquid field that blends the DESIGN.md
 * palette — sage (160,224,171) -> molten amber (255,172,46) -> deep oxblood
 * (165,45,37) — at a patient tempo (time scaled by 0.06), with a subtle
 * pointer-driven warp so the liquid responds to the cursor.
 *
 * Zero dependencies. The CSS .iridescent__layer spans behind this canvas act as
 * a static fallback whenever WebGL is unavailable; the .iridescent__veil sits
 * on top to keep the white headline legible.
 */
const IridescentCanvas = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;

    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) return undefined; // no WebGL -> CSS fallback stays visible

    const VERT = `
      attribute vec2 a_position;
      void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
    `;

    const FRAG = `
      precision highp float;

      uniform vec2  u_resolution;
      uniform float u_time;
      uniform vec2  u_mouse;

      vec2 hash2(vec2 p) {
        p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
        return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
              dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
          mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
              dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
          u.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.6;
        mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p = rot * p * 2.0;
          a *= 0.55;
        }
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        uv.y = 1.0 - uv.y; // top-left origin, matching u_mouse
        float aspect = u_resolution.x / u_resolution.y;
        vec2 p = uv * vec2(aspect, 1.0);

        float t = u_time * 0.06; // patient drift, nothing abrupt

        // two-stage domain warp -> liquid, molten flow
        vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2, 1.3) - t * 0.7));
        vec2 r = vec2(fbm(p + 1.8 * q + vec2(1.7, 9.2) + t * 0.5),
                      fbm(p + 1.8 * q + vec2(8.3, 2.8) - t * 0.4));
        float f = fbm(p + 1.6 * r); // fine detail

        // subtle cursor response
        vec2 m = u_mouse * vec2(aspect, 1.0);
        f += 0.15 * fbm(p * 1.5 + m * 2.0 - t);

        vec3 sage    = vec3(160.0, 224.0, 171.0) / 255.0;
        vec3 amber   = vec3(255.0, 172.0, 46.0) / 255.0;
        vec3 oxblood = vec3(165.0, 45.0, 37.0) / 255.0;

        // Symmetric sweep that provably spans the whole ramp: uv-based term is
        // [-0.55, +0.55] around 0.5, so v touches 0 (sage) and 1 (oxblood) at the
        // frame corners even before the liquid warp. The warp then breaks the
        // diagonal into flowing blobs — never a flat gradient.
        float sweep = uv.x * 0.55 + uv.y * 0.55; // 0 at origin, ~1.1 at far corner
        float warp = f + 0.15 * fbm(p * 1.5 + m * 2.0 - t);
        float v = clamp(0.5 + (sweep - 0.55) + warp * 0.8, 0.0, 1.0);
        vec3 col = v < 0.5
          ? mix(sage, amber, v * 2.0)
          : mix(amber, oxblood, (v - 0.5) * 2.0);

        float glow = smoothstep(0.55, 0.95, v);
        col += vec3(0.05, 0.03, 0.02) * glow;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compile = (type, src) => {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        gl.deleteShader(sh);
        return null;
      }
      return sh;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return undefined;

    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return undefined;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let width = 0;
    let height = 0;
    let raf = 0;
    const start = performance.now();
    let mx = 0.5;
    let my = 0.5;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      height = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    };

    const draw = (now) => {
      gl.uniform2f(uRes, width, height);
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform2f(uMouse, mx, my);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const onLost = (e) => {
      e.preventDefault();
      cancelAnimationFrame(raf);
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('webglcontextlost', onLost, false);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) {
      draw(start + 4000); // one settled static frame
    } else {
      const onMove = (e) => {
        mx = e.clientX / window.innerWidth;
        my = 1 - e.clientY / window.innerHeight;
      };
      window.addEventListener('pointermove', onMove, { passive: true });
      const loop = (now) => {
        draw(now);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', resize);
        window.removeEventListener('pointermove', onMove);
        canvas.removeEventListener('webglcontextlost', onLost);
        gl.deleteProgram(prog);
        gl.deleteBuffer(buf);
      };
    }

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('webglcontextlost', onLost);
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block'
      }}
    />
  );
};

export default IridescentCanvas;
