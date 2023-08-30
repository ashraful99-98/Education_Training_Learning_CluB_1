import React from 'react';
import './NotFound.css'
import emoji from '../../images/emoji.png'

const NotFound = () => {
    return (
        <div className="not-found">
            <img className="emoji" src={emoji} alt="" />
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>This page you doesn't looking exist</p>
        </div>
    );
};

export default NotFound;