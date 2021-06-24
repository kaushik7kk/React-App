import React, { Fragment } from 'react';
import styles from './SiteBrand.module.css';
import Logo from '../SVG/Subtract.svg';

const SiteBrand = () => {
    return (
        <Fragment>
            <div className={styles.brand_items}>
                <div  className={styles.logo}>
                    <img src={Logo} alt='My Logo' />
                </div>
                <div className={styles.bName}>
                    MY SITE
                </div>
            </div>
        </Fragment>
    )
}

export default SiteBrand;