import React from 'react';
import { Link } from 'react-router-dom'

class Greeting extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.personalGreeting = this.personalGreeting.bind(this);
        this.sessionLinks = this.sessionLinks.bind(this);
    }

    logout (){
        this.props.logout();
        this.props.history.push("/")
    }


    personalGreeting (){
        <div className = "nav-bar">
            <div className="left-side-logged-nav">
            <Link to="/" >
                <img className ="logo-link" src={window.logo} alt="" />
            </Link>
            </div>
            <div className="right-side-logged-nav">
                <Link to={`/users/${this.props.currentUser.id}`} className="collection-button">My Collection</Link>
                <br/>
                    <button className="logout-btn" onClick={this.logout}>Log Out</button>
            </div>
        </div>
    };

    sessionLinks () {
        <div className="nav-bar"> 
            <div className="left-side-nav">
                <Link to="/" >
                    <img className="logo-link" src={window.logo} alt="" />
                </Link>
                <br/><br/>
                <div>
                    <div className="motto">Discover amazing new music and directly support the artists who make it.</div>
                </div>
            </div>

            <div className="right-side-nav">
                <Link to="/signup" className="login-links-right">sign up</Link>
                <Link to="/login" className="login-links-login">log in</Link>
            </div>
        </div>
    };

    render (){
        if (this.props.currentUser) {
            return (<div className="nav-bar" >
                <div className="left-side-logged-nav">
                    <Link to="/" >
                        <img className="logo-link" src={window.logo} alt="" />
                    </Link>
                </div>
                <div className="right-side-logged-nav">
                    <Link to={`/users/${this.props.currentUser.id}`} className="collection-button">My Collection</Link>
                    <br />
                    <button className="logout-btn" onClick={this.logout}>Log Out</button>
                </div>
            </div > )
        } else {
            return (<div className="nav-bar">
                <div className="left-side-nav">
                    <Link to="/" >
                        <img className="logo-link" src={window.logo} alt="" />
                    </Link>
                    <br /><br />
                    <div>
                        <div className="motto">Discover amazing new music and directly support the artists who make it.</div>
                    </div>
                </div>

                <div className="right-side-nav">
                    <Link to="/signup" className="login-links-right">sign up</Link>
                    <Link to="/login" className="login-links-login">log in</Link>
                </div>
            </div>)
        }
    }
}

export default Greeting;