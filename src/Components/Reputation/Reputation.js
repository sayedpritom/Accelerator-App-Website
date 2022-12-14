import React from 'react'
import PaginationButtons from '../PaginationButtons/PaginationButtons'

import btnArrow from '../../images/btnArrow.svg'
import BgEllipse from '../../images/reputation-images/Bg-Ellipse.svg'
import GermanAccelerator from '../../images/reputation-images/GermanAccelerator.png'
import Logo2 from '../../images/reputation-images/logo2.png'
import Logo3 from '../../images/reputation-images/logo3.png'
import Logo4 from '../../images/reputation-images/logo4.png'
import Logo5 from '../../images/reputation-images/logo5.png'
import Client1 from '../../images/reputation-images/client.png'
import Client2 from '../../images/reputation-images/client2.png'
import Client3 from '../../images/reputation-images/client3.png'
import Client4 from '../../images/reputation-images/client4.png'
import Client5 from '../../images/reputation-images/client5.png'

import {
    bigHeading,
    mediumHeading,
    smallHeading,
    testimony,
    client,
    review,
    designation,
    contactUs,
    button

} from './Reputation.module.css'
import { useState } from 'react'

const Reputation = () => {
    const [position, setPosition] = useState(0)

    const reviews = [
        {
            description: `AcceleratorApp has helped us a lot to accelerate and optimize our application and selection process. We got very positive feedback from our team and applicants. It’s a great tool for every company reviewing and processing a large number of applications whilst minimizing manual work. The tool is customizable, user-friendly and the AcceleratorApp team is very responsive and supportive!`,
            designation: 'François Jolly, Director of Programs • Startup lab',
            logo: GermanAccelerator,
            photo: Client1,
        },
        {
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,",
            designation: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
            logo: Logo2,
            photo: Client2,
        },
        {
            description: "Aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut",
            designation: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
            logo: Logo3,
            photo: Client3,
        },
        {
            description: "metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
            designation: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
            logo: Logo4,
            photo: Client4,
        },
        {
            description: "Libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
            designation: 'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
            logo: Logo5,
            photo: Client5,
        },
    ]

    return (
        <section className="max-w-[1131px] mx-auto px-5 xl:px-0">
            <div className="flex justify-between flex-wrap">
                <div className="relative w-full xl:w-2/6 xl:min-w-[450px] mb-14">
                    <h1 className={`my-10 ${bigHeading}`}>What our <br /> customers say</h1>
                    <button className={`${button} btn absolute xl:static top-[690px] btnOutlined text-bold h-auto lg:h-[40px] hover:bg-transparent hover:border-gray-600 hover:text-gray-900 hover:text-black`}>150 + incubators/accelerators using AcceleratorApp <img className="w-[15px] md:w-auto ml-3" src={btnArrow} alt="" /></button>
                </div>
                <div className={`w-full xl:w-7/12 xl:min-w-[400px] ${testimony}`}>
                    <p className={review}>{reviews[position].description}</p>
                    <br />
                    <p className={designation}>François Jolly, Director of Programs • <strong>Startup lab</strong></p>
                    <br />
                    <img src={reviews[position].logo} alt="" />
                    <img className={client} src={reviews[position].photo} alt="" />
                    <div className={`absolute right-[50%] md:right-[50%] bottom-[-50px] `}>
                        <PaginationButtons position={position} setPosition={setPosition} items={reviews}  />
                    </div>
                </div>
            </div>
            <div className={contactUs} style={{ "backgroundImage": `url(${BgEllipse})` }}>
                <h4 className={smallHeading}>What are you waiting for?</h4>
                <h1 className={mediumHeading}>Join +150 companies that already trust us <br />
                    for their growth</h1>
                <div className="flex justify-center my-10">
                    <div className="btn btnCommon mx-3">Request a Demo</div>
                    <div className="btn btnOutlined mx-3">Contact Us</div>
                </div>
            </div>
        </section>
    );
};

export default Reputation;