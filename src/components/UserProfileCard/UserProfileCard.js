import React from 'react';
import './UserProfileCard.css'; //connects the css file for styling

const USerProfileCard=()=>{
    return(
        <div className="card">
            <img
            className="card-avatar"
            src="https://via.placeholder.com/100"
            alt="User Avatar"
        />
        <h2 className="card-name">John Doe</h2>
        <p className="card-bio">A passionate developer with experience in React and Node.js.</p>
        </div>
        )  ;
};
export default USerProfileCard;