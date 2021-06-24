import React, { Fragment } from 'react';
import styles from './LastSynced.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const LastSynced = () => {
    return (
        <Fragment>
            <div className={styles.sync}>
                <FontAwesomeIcon icon={faSyncAlt} className={styles.sync_icon} />
                <span>Last synced 15 mins ago</span>
            </div>
        </Fragment>
    );
}

export default LastSynced;