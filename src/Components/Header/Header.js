import React from 'react'
import Navbar from '../Navbar/Navbar'
import backgroundImage from '../../images/HeaderBackground.svg'
import backgroundImageLooper from '../../images/HeaderLooper-3.svg'
import videoImage from '../../images/Video.svg'
import messageIcon from '../../images/messageIcon.png'
import playIcon from '../../images/playIcon.svg'
import {
    header,
    headerSmallText,
    mainHeaderText,
    headerMediumText,
    btnWhite,
    looper,
    videoBtn,
    aboutCookies,
    acceptCookieBtn,
    knowMoreBtn,
    policyBtn
} from './Header.module.css'

const Header = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${backgroundImage})` }} className={header}>
                <div style={{ backgroundImage: `url(${backgroundImageLooper})` }} className={`bg-contain md:bg-cover ${looper}`}>
                    <Navbar />
                    <div >
                        <div className="py-5 mt-20">
                            <h4 className={headerSmallText}>Join in and connect</h4>
                            <h1 className={mainHeaderText}>To faster your <br /> innovation potential</h1>
                            <p className={headerMediumText}>AcceleratorApp Innovation Community — Tools and community to <br />  facilitate innovation between all members of our community</p>
                            <button className={`btn btn-secondary border-transparent rounded-sm my-5 hover:bg-transparent hover:text-white hover:border-white ${btnWhite}`}>Schedule a Demo</button>
                        </div>
                    </div>
                    <div className="container mx-auto relative">
                        <div className={`${videoBtn}`}>
                            <button className="btn border-transparent hover:shadow-lg"><img className="mr-2" src={playIcon} alt="" /> Watch Video</button>
                        </div>
                        <img className="w-11/12 mx-auto" src={videoImage} alt="" />
                    </div>
                </div>
            </div>
            <div className={aboutCookies}>
                <div className="container mx-auto flex justify-around items-center flex-wrap">
                    <p className="max-w-[602px] mx-10 md:m-0">By using this site on the AcceleratorApp network, you agree with our use of cookies.</p>
                    <div className="flex justify-center md:justify-between flex-wrap items-center my-5">
                        <a><button className={`btn btnCommon  ml-5`}>Accept Cookies</button></a>
                        <a><button className={`btn btnOutlined  ml-5`}>Want to know more?</button></a>
                        <a><button className={`btn bg-white border-none hover:bg-white ml-5 ${policyBtn}`}>Read Our Cookie Policy</ button></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;