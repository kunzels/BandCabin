import React from 'react';
import { Link } from 'react-router-dom'

const Greeting = ({currentUser, logout}) => {
    const personalGreeting = () => (
        <div className = "nav-bar">
            <Link to="/" >
                <img className ="logo-link" src={window.logo} alt="" />
            </Link>
            <h1 className="welcome">{currentUser.username}</h1>
            <div className="logout-button">
            <button onClick={logout}>Log Out</button>
            </div>
        </div>
    );

    const sessionLinks = () => (
        <div className="nav-bar"> 
            <div className="left-side-nav">
            <Link to="/" >
                <img className="logo-link" src={window.logo} alt="" />
            </Link>
            <p>Discover amazing new music and directly support the artists who make it.</p>
           </div>

            <div className="right-side-nav">
                <Link to="/signup" className="login-links-left">sign up   </Link>
                <Link to="/login" className="login-links-right">log in</Link>
            </div>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;