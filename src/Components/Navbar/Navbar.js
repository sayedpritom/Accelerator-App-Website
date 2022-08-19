import React from 'react';
import { test } from './Navbar.module.css';
import logo from '../../images/HeaderLogo.svg'
import hamburgerIcon from '../../images/hamburgerIcon.svg';
import { headerLogo, navbarBtnWhite, navbarLinks, navbar } from './Navbar.module.css'


const Navbar = () => {
    return (
        <div className={navbar}>
            <div className="container mx-auto">
                <div className="navbar bg-transparent">
                    <div className="navbar-start">
                        <a className="btn btn-ghost normal-case text-xl" style={{ "background": "none" }}><img src={logo} alt="" /> <p className={headerLogo}>AcceleratorApp</p></a>
                    </div>
                    <div className="navbar-end">
                        <div className=" hidden lg:flex">
                            <ul className={`menu menu-horizontal p-0 ${navbarLinks}`}>
                                <li><a>Community</a></li>
                                <li><a>Modules</a></li>
                                <li><a>Company</a></li>
                                <li><a>Pricing</a></li>
                                <li><a className="btn btn-outline btn-white hover:bg-white hover:border-transparent normal-case hover:text-blue-400">Sign In</a></li>
                                <li><a className="btn btn-secondary text-primary rounded-sm hover:bg-transparent hover:text-white hover:border-white">Request a Demo</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <ul tabIndex="0" style={{ right: "65px" }} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Community</a></li>
                                <li><a>Modules</a></li>
                                <li><a>Company</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>Sign In</a></li>
                                <li className={`border-white  ${navbarBtnWhite}`}><a>Request a Demo</a></li>
                            </ul>
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <img src={hamburgerIcon} alt="" srcSet="" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;