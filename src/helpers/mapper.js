import data from '../../public/assets/data.json';

export const mapper = (key) => {
  return data[key];
};

/**
 * Projects in display order.
 *
 * The data file is authored oldest-first, so reading it bottom-to-top puts the
 * newest work first. Both the home page's featured rows and the /projects list
 * use this single helper so their ordering can never drift apart again.
 */
export const projectsInDisplayOrder = () => [...data.projects.list].reverse();
