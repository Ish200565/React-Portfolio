import React from 'react';
import HackathonsCerts from '../../components/HackathonsCerts/HackathonsCerts';
import Education from '../../components/Education/Education';
import './Credentials.css';

const Credentials = () => {
    return (
        <main className="credentials-page">
            
            <HackathonsCerts />
            <Education />
        </main>
    );
};

export default Credentials;
