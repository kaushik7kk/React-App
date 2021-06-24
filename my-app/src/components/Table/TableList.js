import React from 'react';
import TableItem from './TableItem';

const TableList = props => {

    const viewHandler = dept => {
        props.onView(dept);
    }

    return (
        <tbody>
            {props.data.map(item => <TableItem
                name={item.name}
                access={item.access}
                num={item.num}
                update={item.lastUpdated}
                key={item.name}
                onView={viewHandler}
                detailed={props.detailed}
            />)}
        </tbody>
    );
}

export default TableList;