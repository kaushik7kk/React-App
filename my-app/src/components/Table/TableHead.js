import React, { Fragment } from 'react';
import styles from './TableHead.module.css';

const TableHead = props => {

    return (
        <thead>
            <th className={styles.table_head} >
                {!props.detailed &&
                    <Fragment>
                        <td className={styles.headings} >Department/Role</td>
                        <td className={styles.headings} >Access Level</td>
                        <td className={styles.headings} >No of members</td>
                        <td className={styles.headings} >Last Updated</td>
                    </Fragment>
                }
                {props.detailed &&
                    <Fragment>
                        <td className={styles.headings} >Department/Role</td>
                        <td className={styles.headings} >Access Level</td>
                        <td className={styles.headings} >Summary</td>
                        <td className={styles.headings} >Last Updated</td>
                    </Fragment>
                }

            </th>
        </thead>
    );
}

export default TableHead;
