import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Button.module.css';

const Button = () => {
    return (
        <Fragment>
            <button className={styles.role_button}>
                <FontAwesomeIcon icon={faPlus} className={styles.icon} />
                <span>Add Role</span>
            </button>
        </Fragment>
    );
}

export default Button;
