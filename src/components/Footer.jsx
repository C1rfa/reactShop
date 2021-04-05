import React from 'react';
import styles from './../css/footer.module.css';

import { ShopContext } from "./../context";

import { Language } from './Language';

export const Footer = props => {
    const { lang } = React.useContext(ShopContext);

    return (
        <footer className={ styles.mainFooter }>
            <div className={ styles.footerCopyright }>
                © { new Date().getFullYear() } { lang === 'en' ? "for Portfolio" : lang === "ru" ? "для портфолио" : '' }
            </div>
            <Language/>
        </footer>
    );
}