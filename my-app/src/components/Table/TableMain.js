import React, { Fragment, useState } from 'react';
import TableHead from './TableHead';
import TableList from './TableList';
import styles from './TableMain.module.css';

const TableMain = props => {

    const initItems = [
        {
            name: 'Management Team',
            access: 'All Access',
            num: 4,
            lastUpdated: '1 min ago'
        },
        {
            name: 'Procurement Team',
            access: 'Restricted Access',
            num: 8,
            lastUpdated: '1 min ago'
        },
        {
            name: 'Project Team',
            access: 'Restricted Access',
            num: 16,
            lastUpdated: '1 min ago'
        },
        {
            name: 'IT Team',
            access: 'Restricted Access',
            num: 4,
            lastUpdated: '1 min ago'
        },
        {
            name: 'Super Admin',
            access: 'All Access',
            num: 1,
            lastUpdated: '1 min ago'
        },
    ]

    const [detailed, setDetailed] = useState(false);
    const [tableItems, setTableItems] = useState(initItems);
    
    if (props.back) {
        setDetailed(false) && setTableItems(initItems);
    }

    const viewHandler = dept => {
        props.onView(dept);
        setTableItems([
            {
                name: 'Budget',
                access: 'All Access',
                lastUpdated: '1 min ago'
            },
            {
                name: 'Bidding',
                access: 'No Access',
                lastUpdated: '1 min ago'
            },
            {
                name: 'Vendor Portal',
                access: 'Restricted Access',
                lastUpdated: '1 min ago'
            },
            {
                name: 'Purchase Order/Work Order',
                access: 'Restricted Access',
                lastUpdated: '1 min ago'
            },
            {
                name: 'Organisational Profile',
                access: 'All Access',
                lastUpdated: '1 min ago'
            },
            {
                name: 'Permissions & Access Control',
                access: 'No Access',
                lastUpdated: '1 min ago'
            }
        ]);
        setDetailed(true);
    }


    return (
        <Fragment>
            <table className={styles.main}>
                <TableHead detailed={detailed} />
                <TableList data={tableItems} onView={viewHandler} detailed={detailed} />
            </table>
        </Fragment>
    );
}

export default TableMain;
