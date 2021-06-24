import React from 'react';
import Button from './Button';
import Icons from './Icons';
import styles from './Interactions.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Interactions = props => {

    const backClickHandler = () => {
        props.onBackClick();
    }

    if (props.content.contentType === 'default'){
        return (
            <div className={styles.table_actions}>
                <Button />
                <Icons />
            </div>
        );
    }

    if (props.content.contentType === 'detailed'){
        return (
            <div className={styles.detailed_actions}>
                <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} onClick={backClickHandler} />
                <span>{props.content.department}</span>
                <FontAwesomeIcon icon={faPencilAlt} className={styles.icon} />
            </div>
        )
    }
    
}

export default Interactions;