import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import './Footer.css'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-flex">
                    <div className="footer-item footer-item-lg-5 footer-item-md">
                        <div className="footer-content">
                            <div className="footer-logo">
                                <Logo width="100px" />
                                <h1 className="footer-title">TYPE YOUR BLOG</h1>
                            </div>
                            <div>
                                <p className="footer-text">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-item footer-item-lg-2 footer-item-md">
                        <div className="footer-content">
                            <h3 className="footer-heading">Company</h3>
                            <ul className="footer-list">
                                <li className="footer-list-item">
                                    <Link className="footer-link" to="/">
                                        Features
                                    </Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link className="footer-link" to="/">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link className="footer-link" to="/">
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link className="footer-link" to="/">
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-item footer-item-lg-2 footer-item-md">
                        <div className="footer-content">
                            <h3 className="footer-heading">Support</h3>
                            <ul className="footer-list">
                                <li className="footer-list-item">
                                    <Link className="footer-link" to="/">
                                        Account
                                    </Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link className="footer-link" to="/">
                                        Help
                                    </Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link className="footer-link" to="/">
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link className="footer-link" to="/">
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-item footer-item-lg-3 footer-item-md">
                        <div className="footer-content">
                            <h3 className="footer-heading">Legals</h3>
                            <ul className="footer-list">
                                <li className="footer-list-item">
                                    <Link className="footer-link" to="/">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link className="footer-link" to="/">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link className="footer-link" to="/">
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;