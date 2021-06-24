import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import styles from './ProfileUI.module.css';

const ProfileUI = () => {
    return (
        <div className={styles.profile_content} >
            <FontAwesomeIcon icon={faUserCircle} className={styles.icon}/>
            <div className={styles.text}>User</div>
        </div>
    )
}

export default ProfileUI;