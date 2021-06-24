import React from 'react';
import NavButtons from './NavButtons';
import styles from './NavBar.module.css';
import LastSynced from './LastSynced';

const NavBar = props => {

    return (
        <div className={styles.navbar}>
            <NavButtons data={props.data} />
            {!props.inner && <LastSynced />}
        </div>
    );
}

export default NavBar;
