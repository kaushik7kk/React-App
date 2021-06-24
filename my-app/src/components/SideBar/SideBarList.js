import React from 'react';
import SideBarItem from './SideBarItem';
import styles from './SideBarList.module.css';

const SideBarList = props => {
    return (
        <ul className={styles.listMain}>
            {props.info.map(item => <button className={styles.list_item}><SideBarItem 
                title={item.name}
                icon={item.icon}
                className={item.classes}
                key={item.name}
            /></button>)}
        </ul>   
    );
}

export default SideBarList;