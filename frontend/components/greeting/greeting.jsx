import React from 'react';
import { Link } from 'react-router-dom'

const Greeting = ({currentUser, logout}) => {
    const personalGreeting = () => (
        <div className = "nav-bar">
            <div className="left-side-logged-nav">
            <Link to="/" >
                <img className ="logo-link" src={window.logo} alt="" />
            </Link>
            </div>
            <div className="right-side-logged-nav">
                <Link to={`/users/${currentUser.id}`} className="collection-button">My Collection</Link>
                <br/>
                    <button className="logout-btn" onClick={logout}>Log Out</button>
            </div>
        </div>
    );

    const sessionLinks = () => (
        <div className="nav-bar"> 
            <div className="left-side-nav">
            <Link to="/" >
                <img className="logo-link" src={window.logo} alt="" />
            </Link>
            <br/><br/>
            <div>
                <div className="motto">Discover amazing new music and directly support the artists who make it.</div>
                {/* <div className="gradient">directly support</div> */}
            </div>
           </div>

            <div className="right-side-nav">
                <Link to="/signup" className="login-links-right">sign up   </Link>
                <Link to="/login" className="login-links-login">log in</Link>
            </div>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;