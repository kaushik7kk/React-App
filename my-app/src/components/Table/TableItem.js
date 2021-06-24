import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEye, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import './TableItem.css';
import Summary from '../TableUI/Summary';
import ExpandItem from '../TableUI/ExpandItem';

const TableItem = props => {

    const [showExpanded, setShowExpanded] = useState(false);
    const [Access, setAccess] = useState(props.access);

    const setAccessClass = value => {
        switch (value) {
            case 'All Access':
                return 'all'
            case 'Restricted Access':
                return 'restrict'
            case 'No Access':
                return 'none'
            default:
                return 'none';
        }
    }

    const viewClickHandler = event => {
        const department = event.target.parentElement.firstChild.innerText.trim()
        props.onView(department);
    }

    const toggleHandler = event => {
        setShowExpanded(event.target.checked);
        !event.target.checked && setAccess('No Access')
        !event.target.checked && setAccessClass('No Access');
    }

    const expandMinusHandler = show => {
        setShowExpanded(!show);
    }

    const accessChangeHandler = changedValue => {
        setAccess(changedValue);
    }

    const plusClickHandler = () => {
        setShowExpanded(true);
    }

    

    if (showExpanded) {
        console.log(Access);
        return (
            <Fragment>
                <tr className='expanded_item'>
                    <ExpandItem 
                        name={props.name} 
                        access={Access} 
                        onMinus={expandMinusHandler}
                        onAccess={accessChangeHandler}
                         />
                </tr>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <tr className='table_item'>
                {!props.detailed &&
                    <Fragment>
                        <td ><FontAwesomeIcon icon={faCircle} className='circle' /> {props.name}</td>
                        <td className={`access ${setAccessClass(Access)}`}>{Access}</td>
                        <td className='num'>{props.num}</td>
                        <td className='update'>{props.update}</td>
                        <FontAwesomeIcon icon={faEye} className='eye' onClick={viewClickHandler} />
                    </Fragment>
                }
                {props.detailed &&
                    <Fragment>
                        <td className='role'><FontAwesomeIcon icon={faPlusSquare} className='square' onClick={plusClickHandler} /> {props.name}</td>
                        <td className={`access ${setAccessClass(Access)}`}>{Access}</td>
                        <td className='summary'><Summary access={Access} /></td>
                        <td className='update'>{props.update}</td>
                        <input type='checkbox' className='toggle' onChange={toggleHandler} checked={(props.access === 'All Access') || (props.access === 'Restricted Access')} ></input>
                    </Fragment>
                }
            </tr>
        </Fragment>
    );
}

export default TableItem;