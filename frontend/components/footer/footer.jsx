import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
    <div className="footer">
        
        <div className="footer-top-1"></div>
        <div className="footer-top">
            <div className="footer-names">
                    <a className="footer-links" href="https://github.com/kunzels">
                    <div className="github-links">
                            <img className="github" src={window.github} />
                    </div>
                </a>
                    <a className="footer-links" href="https://kunzels.github.io">
                    <div className="github-links">
                            <img className="meetMe" src={window.person} />
                    </div>
                </a>
                    <a className="footer-links" href="https://www.linkedin.com/in/kunzels/">
                        <div className="github-links">
                            <img className="linked" src={window.linked} />
                        </div>
                    </a>
            </div>
        </div>
        <div className="footer-bottom-2"></div>
        <div className="footer-bottom"></div>
    </div>
    );
}


export default Footer;