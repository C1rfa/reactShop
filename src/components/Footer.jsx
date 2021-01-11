import React from 'react';

import { Language } from './Language';

export const Footer = props => {
    return (
        <footer className="bg-dark text-center text-lg-start">
            <div className="text-center p-3 text-white">
                © { new Date().getFullYear() } { props.lang === 'en' ? "for Portfolio" : props.lang === "ru" ? "для портфолио" : '' }
            </div>
            <Language setLang = { props.setLang }/>
        </footer>
    );
}