import React from 'react';
import styles from './../css/footer.module.css';


import { ShopContext } from "./../context";

import rusPic from './../img/russia.svg';
import usPic from './../img/united-states.svg'; 

export const Language = props => {
    const { switchLanguage } = React.useContext(ShopContext);

    const clickHandler = e => {
        switchLanguage(e.target.id);
    }

    return(
        <div className={ styles.langContainer }>
            <div className={ styles.picContEn }>
                <img onClick={ clickHandler } id="en" src={ usPic } alt="Eng"/>
            </div>
            <div className={ styles.picContRu }>
                <img onClick={ clickHandler } id="ru" src={ rusPic } alt="Rus"/>
            </div>
        </div>
    );
}