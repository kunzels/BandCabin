import React from 'react';
import { Link } from 'react-router-dom'

const Greeting = ({currentUser, logout}) => {
    const personalGreeting = () => (
        <div>
            <h1>Welcome to BandCabin, {currentUser.username}</h1>
            <button onClick={logout}>Log Out</button>
        </div>
    );

    const sessionLinks = () => (
        <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up!</Link>
            
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;