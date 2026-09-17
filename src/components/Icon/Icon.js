import React from 'react';

const paths = {
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.4 1.4-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-2v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L9 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H7.6v-2h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L9 9l1.4-1.4.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h2v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L20 9l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v2h-.2a1.7 1.7 0 0 0-1.8 1Z" /></>,
    database: <><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" /></>,
    bot: <><rect x="4" y="7" width="16" height="12" rx="2" /><path d="M12 3v4M8 12h.01M16 12h.01M8 16h8" /></>,
    cloud: <><path d="M7.5 18h9a4.5 4.5 0 0 0 .9-8.9A6 6 0 0 0 6 10.5 3.8 3.8 0 0 0 7.5 18Z" /></>,
    activity: <><path d="M3 12h4l2-5 4 10 2-5h6" /></>,
    flame: <><path d="M12 21a6 6 0 0 0 5.5-8.4c-.7-1.5-2.1-2.6-3.8-4.1.1 1.8-.5 3-1.5 3.8.1-3.4-1.5-5.6-3.4-7.3.1 3.2-2.8 5.1-2.8 9.2A6.2 6.2 0 0 0 12 21Z" /></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
    package: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></>,
    github: <><path d="M15 22v-3.2c0-1.1-.4-1.8-1-2.3 3.3-.4 6.8-1.6 6.8-7.2 0-1.6-.6-2.9-1.6-3.9.2-.4.7-1.9-.2-3.9 0 0-1.3-.4-4.1 1.5a14 14 0 0 0-7.5 0C4.6 1.2 3.3 1.6 3.3 1.6c-.9 2-.4 3.5-.2 3.9-1 1-1.6 2.3-1.6 3.9 0 5.6 3.5 6.8 6.8 7.2-.6.5-1 1.3-1 2.6V22" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" /></>,
    x: <><path d="M5 4 19 20M19 4 5 20" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none" /></>,
    folder: <><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h5l2 2h8A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z" /></>,
    certificate: <><circle cx="12" cy="10" r="6" /><path d="m9 15-1 6 4-2 4 2-1-6M9.5 10l1.7 1.7 3.3-3.4" /></>
};

const Icon = ({ name, className = '' }) => (
    <svg
        className={`portfolio-icon ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        {paths[name]}
    </svg>
);

export default Icon;
