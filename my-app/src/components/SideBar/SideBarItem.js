import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-regular-svg-icons';
import './SideBarItem.css';

const SideBarItem = props => {

    return (
        <li className={`item ${props.className}`} >
            <FontAwesomeIcon icon={props.icon} className='icons' />
            <div className='title'>
                <p>{props.title}</p>
            </div>

        </li>
    )
}

export default SideBarItem;