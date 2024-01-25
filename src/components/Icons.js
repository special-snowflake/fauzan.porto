import React from 'react';

const Icon = ({ type }) => {
  const getIconPath = (type) => {
    const iconMap = {
      linkedin: '/assets/icons/linkedin.svg',
      github: '/assets/icons/github.svg',
      email: '/assets/icons/email.svg',
      discord: '/assets/icons/discord.svg',
      dribbble: '/assets/icons/dribbble.svg',
      facebook: '/assets/icons/facebook.svg',
      instagram: '/assets/icons/instagram.svg',
      line: '/assets/icons/line.svg',
      medium: '/assets/icons/medium.svg',
      pinterest: '/assets/icons/pinterest.svg',
      reddit: '/assets/icons/reddit.svg',
      telegram: '/assets/icons/telegram.svg',
      twitter: '/assets/icons/twitter.svg',
      whatsapp: '/assets/icons/whatsapp.svg'
    };

    return iconMap[type] || '';
  };

  return (
    <img
      src={getIconPath(type)}
      alt={type}
      className="w-6 h-6 mr-2"
      style={{ fill: 'white' }}
    />
  );
};

export default Icon;
