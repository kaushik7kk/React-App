import React from 'react';
import styles from './SideBarMain.module.css';
import { faBriefcase, faTasks, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import SideBarList from './SideBarList';


const SideBarMain = () =>{

    const sideList = [
        {
            name: 'Projects',
            icon: faTasks,
            classes: ''
        },
        {
            name: 'Organization Profile',
            icon: faBriefcase,
            classes: ''
        },
        {
            name: 'Access Control',
            icon: faShieldAlt,
            classes: 'active'
        }
    ]

    return(
        <div className={styles.main}>
            <SideBarList info={sideList} />
        </div>
    )
}

export default SideBarMain;