import React from 'react'
import FeaturesCard from './FeaturesCard/FeaturesCard'
import PaginationButtons from '../PaginationButtons/PaginationButtons'

import btnArrow from '../../images/btnArrow.svg'
import background from '../../images/features-images/featuresSectionBg.svg'
import Multilingual from '../../images/features-images/features-section-card-icon/Multilingual.svg'
import SchedulingTools from '../../images/features-images/features-section-card-icon/Scheduling tools.svg'
import SmartTask from '../../images/features-images/features-section-card-icon/Smart tasks.svg'
import TrackEMails from '../../images/features-images/features-section-card-icon/Track e-Mails.svg'
import AutomateEmails from '../../images/features-images/features-section-card-icon/Automate your e-Mails.svg'
import CalendarIntegration from '../../images/features-images/features-section-card-icon/Calendar Integration.svg'
import Zapier from '../../images/features-images/features-section-card-icon/Zapier Integration.svg'
import AndMore from '../../images/features-images/features-section-card-icon/And More.svg'

import {
    heading,
    features,
    title,
} from './Features.module.css'

import { useState } from 'react'

const Features = () => {
    const [position, setPosition] = useState(0);


    const cards = [
        {
            icon: Multilingual,
            heading: "Multilingual",
            description: "Be accessible. The application is supported in multiple languages. These includes English, French, Spanish, Deutsche, Portuguese, Arabic, Ukrainian, Bahasa, and Russian",
        },
        {
            icon: SchedulingTools,
            heading: "Scheduling tools",
            description: "Liberate your time by automating integrated scheduling for your team, mentors, and experts",
        },
        {
            icon: SmartTask,
            heading: "Smart tasks",
            description: "Drive action by assigning tasks with comprehensive segmentation capabilities",
        },
        {
            icon: TrackEMails,
            heading: "Track e-Mails",
            description: "Gain clarity by sending tracked emails from within the platform to ensure receipt and interaction",
        },
        {
            icon: AutomateEmails,
            heading: "Automate your e-Mails",
            description: "Become superhuman by customizing your emails and automating communication with users throughout the platform",
        },
        {
            icon: CalendarIntegration,
            heading: "Calendar Integration",
            description: "Stay on top of everything by syncing your Google or Microsoft calendar with your AcceleratorApp calendar for easy, automated scheduling",
        },
        {
            icon: Zapier,
            heading: "Zapier Integration",
            description: "Collaborate with others by integrating your processes across departments using zapier as a bridge between AcceleratorApp and your favorite apps",
        },
        {
            icon: AndMore,
            heading: "And More...",
            description: "And more features integrated within the software to make your incubator/accelerator run more smoothly",
        },
    ]

    return (
        <section className={features} style={{ 'backgroundImage': `url(${background})` }}>
            <div className="max-w-[1131px] mx-auto mb-10 px-5 xl:px-0">
                <h2 className={heading}>Features integrated</h2>
                <p className={title}>Know all our features that we have for accelerate your business.</p>
                <div className="hidden md:grid grid-col md:grid-cols-2 lg:grid-cols-3 mt-20 mb-20 pb-20">
                    {
                        cards.map(card => <FeaturesCard card={card} key={card.heading} />)
                    }
                    <div className="mx-auto mt-20">
                        <button className="btn btnOutlined text-bold min-h-0 h-[40px] hover:bg-transparent hover:border-gray-600 hover:text-gray-900 hover:text-black"><span className="flex justify-right">Discover its functions  <img className="ml-3" src={btnArrow} alt="" /></span></button>
                    </div>
                </div>
                <div className="md:hidden max-w-[450px] mx-auto py-20">
                    <FeaturesCard card={cards[position]} />
                    <div className="flex justify-center">
                        <PaginationButtons position={position} setPosition={setPosition} items={cards} />
                    </div>
                    <div className="flex justify-center mt-14">
                        <button className="btn btnOutlined text-bold min-h-0 h-[40px] hover:bg-transparent hover:border-gray-600 hover:text-gray-900 hover:text-black"><span className="flex justify-right">Discover its functions  <img className="ml-3" src={btnArrow} alt="" /></span></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;