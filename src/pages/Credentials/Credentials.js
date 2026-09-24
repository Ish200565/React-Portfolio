import React from 'react';
import HackathonsCerts from '../../components/HackathonsCerts/HackathonsCerts';
import Education from '../../components/Education/Education';
import './Credentials.css';

const Credentials = () => {
    return (
        <main className="credentials-page" id="credentials">
            <Education />
            <HackathonsCerts />
        </main>
    );
};

export default Credentials;
