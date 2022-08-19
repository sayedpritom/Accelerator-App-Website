import React from 'react'
import { card, cardHeader } from './CommunityCard.module.css'
import bulletPoints from '../../../images/community-card-icons/ListIcon.svg'

const CommunityCard = (props) => {
    const { icon, heading, description, title, features, listIcon } = props.card

    return (
        <div className={card}>
            <div className={cardHeader}>
                <img src={icon} alt="" />
                <h2>{heading}</h2>
            </div>
            <p>{description[0]}</p>
            <br />
            <p>{description[1]}</p>
            <hr className="my-6" />
            <h4 className="my-2">{title}</h4>
            <ul>
                {
                    features.map((feature, index) => <Item key={index} feature={feature}></Item>)
                }
            </ul>
            <img src="{listIcon}" alt="" />
            <button className="btn btnCommon w-full mb-5 mt-14">Get Started</button>
        </div>
    );
};

export const Item = (props) => <li> <img className="mr-2" src={bulletPoints} alt="" /> {props.feature}</li>

export default CommunityCard;

