import React from 'react';

import { ShopContext } from "./../context";

import { Language } from './Language';

export const Footer = props => {
    const { lang } = React.useContext(ShopContext);

    return (
        <footer className="bg-dark text-center text-lg-start">
            <div className="text-center p-3 text-white">
                © { new Date().getFullYear() } { lang === 'en' ? "for Portfolio" : lang === "ru" ? "для портфолио" : '' }
            </div>
            <Language/>
        </footer>
    );
}