import React, { Fragment, useState } from 'react';
import Interactions from '../TableUI/Interactions';
import TableMain from '../Table/TableMain';
import NavBar from '../NavBar/NavBar';
import styles from './ContentMain.module.css';

const ContentMain = props => {

    const [triggerBack, setTriggerBack] = useState(false);

    const backClickHandler = () => {
        setContentToggle({
            department: '',
            contentType: 'default'
        });
        setTriggerBack(true);
    }

    const [contentToggle, setContentToggle] = useState(
        {
            department: '',
            contentType: 'default'
        }
    );

    const viewHandler = dept => {
        setContentToggle({
            department: dept,
            contentType: 'detailed'
        })
    }

    return (
        <Fragment>
            <Interactions content={contentToggle} onBackClick={backClickHandler} />
            <div className={styles.navbar} >
                {contentToggle.contentType === 'detailed' && <NavBar data={props.navData} inner={true} />}
            </div>
            <TableMain onView={viewHandler} back={triggerBack} />
        </Fragment>
    );

}

export default ContentMain;