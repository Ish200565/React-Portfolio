import React from 'react';
import HackathonsCerts from '../../components/HackathonsCerts/HackathonsCerts';
import Education from '../../components/Education/Education';
import './Credentials.css';

const Credentials = () => {
    return (
        <main className="credentials-page">
            <div className="credentials-heading">
                <p className="credentials-eyebrow">&gt; Portfolio archive</p>
                <h1>ACHIEVEMENTS & <span>EDUCATION</span></h1>
                <p>Hackathons, verified certifications, and the academic path behind the work.</p>
            </div>
            <HackathonsCerts />
            <Education />
        </main>
    );
};

export default Credentials;
