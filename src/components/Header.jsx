import React from 'react';
import styles from './../css/header.module.css';

import shopLogo from './../img/store.svg';

export const Header = props => {
    return(
        <header className={ styles.mainHeader }>
            <div className={ styles.headerLogo }>
                <img src={ shopLogo } alt="logo"/>
            </div>
            <a className={ styles.headerLink } href="https://github.com/C1rfa/reactShop">Repo</a>
        </header>
    );
}