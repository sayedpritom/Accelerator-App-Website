import React from 'react'
import { featuresCard } from './FeaturesCard.module.css'

const CommunityCards = (props) => {
    const { icon, heading, description } = props.card
    return (
        <div className={featuresCard}>
            <img className="h-[42px]" src={icon} alt="" />
            <h4>{heading}</h4>
            <p className="min-h-[72px]">{description}</p>
        </div>
    );
};

export default CommunityCards;