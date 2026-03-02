import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({
  avatarUrl = '',
  handle = 'ishikabelel',
  className = ''
}) => {
  return (
    <div className={`profile-card ${className}`.trim()}>
      <div className="profile-card-inner">
        <img
          className="profile-avatar"
          src={avatarUrl}
          alt="Profile"
          loading="lazy"
        />
        <div className="profile-handle-bar">
          <span className="profile-handle">@{handle}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
