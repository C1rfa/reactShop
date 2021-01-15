import React from 'react';

import { ShopContext } from "./../context";

import rusPic from './../img/russia.svg';
import usPic from './../img/united-states.svg'; 

export const Language = props => {
    const { switchLanguage } = React.useContext(ShopContext);

    const clickHandler = e => {
        switchLanguage(e.target.id);
    }

    return(
        <div className="d-flex justify-content-evenly">
            <img onClick={ clickHandler } id="ru" src={ rusPic } alt="Rus" className="cart-icon"/>
            <img onClick={ clickHandler } id="en" src={ usPic } alt="Eng" className="cart-icon"/>
        </div>
    );
}