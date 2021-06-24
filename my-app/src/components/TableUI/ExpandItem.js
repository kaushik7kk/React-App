import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare } from '@fortawesome/free-regular-svg-icons';
import React, { Fragment } from 'react';
import styles from './ExpandItem.module.css';

const ExpandItem = props => {

    const restrictHandler = event => {
        props.onAccess('Restricted Access');
    }

    const allHandler = event => {
        props.onAccess('All Access');
    }

    const minusHandler = () => {
        props.onMinus(true);
    }

    return (
        <Fragment>
            <div className={styles.main_row}>
                <td><FontAwesomeIcon icon={faMinusSquare} className={styles.minus} onClick={minusHandler} /> {props.name} </td>
                <td></td>
                <td></td>
                <td></td>
                <input type='checkbox' className='toggle' checked={(props.access === 'All Access') || (props.access === 'Restricted Access')} ></input>
            </div>
            <span className={styles.intro} >All aspects in the {props.name.toLowerCase()} module</span>
            <div className={styles.actions} >
                <div className={styles.radios}>
                    <p>Access Control</p>
                    <div>
                        <input type='radio' id='all' name='Access' onClick={allHandler} />
                        <label id='all'>All Access</label>
                    </div>
                    <div>
                        <input type='radio' id='restricted' name='Access' onClick={restrictHandler} />
                        <label id='restricted'>Restricted Access</label>
                    </div>
                </div>
                <div className={styles.permissions}>
                    <p>Permissions</p>
                    <div>
                        <input type='checkbox' id='view' />
                        <label>View items in access</label>
                    </div>
                    <div>
                        <input type='checkbox' id='edit' />
                        <label>Edit items in access</label>
                    </div>
                    <div>
                        <input type='checkbox' id='create' />
                        <label>Create items in access</label>
                    </div>
                    <div>
                        <input type='checkbox' id='delete' />
                        <label>Delete items in access</label>
                    </div>
                </div>
            </div>


        </Fragment>
    );
}

export default ExpandItem;