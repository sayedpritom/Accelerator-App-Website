import React from 'react';
import arrow from '../../images/footer-images/btnArrowWhite.svg';
import LinkedIn from '../../images/footer-images/social-icons/Linkedin.svg'
import Facebook from '../../images/footer-images/social-icons/Facebook.svg'
import Instagram from '../../images/footer-images/social-icons/Instagram.svg'
import Twitter from '../../images/footer-images/social-icons/Twitter.svg'
import GlobeIcon from '../../images/footer-images/GlobeIcon.svg'
import {
    footer,
    community,
    signUp,
    emailForm,
    footerTitle,
    footerLink,
    links,
    follow

} from './Footer.module.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {

    const notify = (e) => {
        e.preventDefault();
        (/\S+@\S+\.\S+/.test(e.target.email.value)) ? toast.success("Email Address Received. Thank you!") : toast.error("Error! Please provide a valid Email") 
        
    }

    return (
        <footer className={footer}>
            <section className={`max-w-[1131px] mx-auto px-5 xl:px-0`}>
                <div>
                    <h2 className={community}>Join our growing community</h2>
                    <p className={signUp}>Sign up for news and updates about AcceleratorApp</p>
                </div>

                <form onSubmit={notify} className={emailForm} action="">
                    <input type="email" placeholder='Your Email' name="email" id="" />
                    <button type="submit"><img src={arrow} alt="" /></button>
                </form>
                <div className="grid grid-col lg:grid-cols-9">
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4">
                            <div className={links}>
                                <ul>
                                    <li><span className={footerTitle}>Community</span></li>
                                    <li><a className={footerLink}>Incubator/Accelerator</a></li>
                                    <li><a className={footerLink}>Corporations</a></li>
                                    <li><a className={footerLink}>Startups</a></li>
                                    <li><a className={footerLink}>Open Challenges</a></li>
                                </ul>
                            </div>
                            <div className={links}>
                                <ul>
                                    <li><span className={footerTitle}>Modules</span></li>
                                    <li><a className={footerLink}>Coaching Module</a></li>
                                    <li><a className={footerLink}>Data Module</a></li>
                                    <li><a className={footerLink}>Ecosystem Module</a></li>
                                    <li><a className={footerLink}>LMS Module</a></li>
                                    <li><a className={footerLink}>Events</a></li>
                                    <li><a className={footerLink}>Application Processing</a></li>
                                </ul>
                            </div>
                            <div className={links}>
                                <ul>
                                    <li><span className={footerTitle}>Company</span></li>
                                    <li><a className={footerLink}>About Us</a></li>
                                    <li><a className={footerLink}>Careers <span className="bg-primary text-white text-bold px-1 rounded text-[8px] ml-1 inline-block">We're hiring</span></a></li>
                                    <li><a className={footerLink}>Blogs</a></li>
                                    <li><a className={footerLink}>Pricing</a></li>
                                    <li><a className={footerLink}>Contact Us</a></li>
                                </ul>
                            </div>
                            <div className={links}>
                                <ul>
                                    <li><span className={footerTitle}>Documentation</span></li>
                                    <li><a className={footerLink}>Documentation</a></li>
                                    <li><a className={footerLink}>Release Log</a></li>
                                    <li><a className={footerLink}>FAQ</a></li>
                                    <li><a className={footerLink}>Legal</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={links}>
                        <ul>
                            <li><span className={footerTitle}>Follow</span></li>
                            <div className="flex justify-between lg:block">
                                <li><a className={footerLink}><img src={LinkedIn} alt="" /></a></li>
                                <li><a className={footerLink}><img src={Facebook} alt="" /></a></li>
                                <li><a className={footerLink}><img src={Instagram} alt="" /></a></li>
                                <li><a className={footerLink}><img src={Twitter} alt="" /></a></li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="hidden md:block h-[1px] bg-gray-700 my-3" />
                <div className="flex flex-col md:flex-row text-center md:justify-between py-2">
                    <div>
                        <p className={footerLink}>Privacy</p>
                        <p className={footerLink}>Cookies</p>
                        <div className="md:hidden h-[1px] bg-gray-700 my-3 w-2/3 mx-auto"></div>
                        <p className={footerLink}>Terms of Use</p>
                        <p className={footerLink}>PDA</p>
                        <p className={footerLink}>Sub Processors</p>
                    </div>
                    <div className="flex align-center justify-center">
                        <p className={footerLink}>Copyright © 2022 AcceleratorApp All Rights Reserved</p>
                        <div className="h-5 w-[1px] mt-2 mr-4 bg-gray-500"></div>
                        <img className={`w-[18px]  ${footerLink}`} src={GlobeIcon} alt="" />
                        <p className={`mr-[0!important] ${footerLink}`}>English</p>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </footer>
    );
};

export default Footer;