import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
    <div className="footer">
        <div className="footer-top">
            <div className="footer-names">
                    <a className="footer-links" href="https://github.com/kunzels">
                    <div className="github-links">
                        <div className="github"></div>
                    </div>
                </a>
                    <a className="footer-links" href="https://kunzels.github.io">
                    <div className="github-links">
                        <div className="meetMe"></div>
                    </div>
                </a>
                    <a className="footer-links" href="https://www.linkedin.com/in/kunzels/">
                        <div className="github-links">
                            <div className="linked"></div>
                        </div>
                    </a>
            </div>
        </div>
        <div className="footer-bottom"></div>
    </div>
    );
}


export default Footer;