import React from 'react';
import NavBar from '../NavBar/NavBar';
import ContentMain from './ContentMain';
import styles from './ContentLayout.module.css';
import { faWifi, faBorderAll } from '@fortawesome/free-solid-svg-icons';

const ContentLayout = props => {

    
    const innerNav = [
        {
            title: 'Access Control',
            icon: '',
            classes: 'active'
        },
        {
            title: 'Assigned Members',
            icon: '',
            classes: ''
        }
    ];

    const buttonList = [
        {
            title: 'Permissions',
            icon: faWifi,
            classes: 'active'
        },
        {
            title: 'Approval Matrix',
            icon: faBorderAll,
            classes: ''
        }
    ]

    return(
        <div className={styles.content}>
            <NavBar data={buttonList} />
            <ContentMain navData={innerNav} />
        </div>

    );
}

export default ContentLayout;
