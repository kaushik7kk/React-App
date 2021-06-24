import React, { Fragment } from 'react';
import styles from './Summary.module.css';

const Summary = props => {
    return (
        <Fragment>
            {(props.access === 'All Access' || props.access === 'Restricted Access') &&
            <Fragment>
            <span className={styles.links} >View</span>
            <span className={styles.links} >Create</span>
            </Fragment>
            }
            {props.access === 'All Access' && 
            <Fragment>
                <span className={styles.links} >Edit</span>
                <span className={styles.links} >Delete</span>
            </Fragment>    
            }
        </Fragment>
    );
}

export default Summary;