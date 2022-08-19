import React from 'react';
import icons from '../../images/Icons.png'

import Engage from '../../images/community-card-icons/Engage.svg'
import Incubator from '../../images/community-card-icons/Incubator.svg'
import Investor from '../../images/community-card-icons/Investor.svg'
import Rocket from '../../images/community-card-icons/Rocket.svg'
import Team from '../../images/community-card-icons/Team.svg'

import {
    title,
    heading,
    paragraph,


} from './Community.module.css'
import CommunityCard from './CommunityCard/CommunityCard';


const Community = () => {

    const cards = [
        {
            icon: Incubator,
            heading: "Accelerator",
            description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
                "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            ],
            title: "Popular Features",
            features: ["Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ",]
        },
        {
            icon: Team,
            heading: "Coporations",
            description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
                "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            ],
            title: "Popular Features",
            features: ["Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ",]
        },
        {
            icon: Investor,
            heading: "Investor",
            description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
                "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            ],
            title: "Popular Features",
            features: ["Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ",]
        },
        {
            icon: Rocket,
            heading: "Startup",
            description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
                "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            ],
            title: "Popular Features",
            features: ["Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ",]
        },
        {
            icon: Engage,
            heading: "Open Challenge",
            description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
                "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            ],
            title: "Popular Features",
            features: ["Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ",]
        }
    ]

    return (
        <section className="max-w-[1131px] mx-auto my-20 px-5 xl:px-0">
            <img className="w-full" src={icons} alt="" />
            <div className="mb-16">
                <h4 className={title}>Community</h4>
                <h4 className={heading}>Lorem ipsum dolor sit amet</h4>
                <p className={paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    cards.map(card => <CommunityCard className="grid grid-cols-3 gap-10" card={card} key={card.heading} />)
                }
            </div>
        </section>
    );
};

export default Community;