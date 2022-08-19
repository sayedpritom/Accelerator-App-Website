import React from 'react';
import {
    btnGroup,
} from './PaginationButtons.module.css';

const PaginationButtons = (props) => {
    const position = props.position;
    const setPosition = props.setPosition;
    const items = props.items;

    return (
        <div className={btnGroup}>
            {
                [...Array(items.length).keys()].map((number, index) =>
                    <button
                        key={index}
                        className={position === number && 'bg-primary'}
                        onClick={() => setPosition(number)}>
                    </button>)
            }
        </div>
    );
};

export default PaginationButtons;