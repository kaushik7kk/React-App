import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import ProfileUI from './ProfileUI';
import styles from './Icons.module.css';

const Icons = () => {
    return (
        <Fragment>
            <div className={styles.icon}>
                <ProfileUI />
                <FontAwesomeIcon icon={faBell} className={styles.icons} />
                <FontAwesomeIcon icon={faQuestionCircle} className={styles.icons} />
            </div>
        </Fragment>
    )
}

export default Icons;
