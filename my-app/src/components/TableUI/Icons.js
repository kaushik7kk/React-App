import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import styles from './Icons.module.css';

const Icons = () => {
    return (
        <Fragment>
            <FontAwesomeIcon icon={faPencilAlt} className={styles.icon} />
            <FontAwesomeIcon icon={faTrashAlt} className={styles.icon} />
        </Fragment>
    );
}

export default Icons;