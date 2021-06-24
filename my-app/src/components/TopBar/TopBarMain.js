import React, { Fragment } from 'react';
import styles from './TopBarMain.module.css';
import SiteBrand from './SiteBrand';
import Icons from './Icons/Icons';

const TopBarMain = () => {
    return(
        <Fragment>
            <div className={styles.main}>
                <SiteBrand />
                <Icons />
            </div>
        </Fragment>

    )
}

export default TopBarMain;