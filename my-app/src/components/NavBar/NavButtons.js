import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import './NavButtons.css';

const NavButtons = props => {
    return (
        <div className='nav_buttons'>
            {props.data.map(button => <button className={`nav_button ${button.classes}`} key={button.title}>
                <FontAwesomeIcon icon={button.icon} className='nav_button_icon' />
                <span className='nav_text'>{button.title}</span>
            </button>)}
        </div>
    );
}

export default NavButtons;