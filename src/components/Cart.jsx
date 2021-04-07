import React from 'react';
import styles from './../css/cart.module.css';


import { ShopContext } from './../context';

import  shoppingCartPic from './../img/shopping-cart.svg';

export const Cart = props => {
    const { order, isCartShow, switchIsCartShow } = React.useContext(ShopContext);

    const handleCart = () => {
        switchIsCartShow(!isCartShow);
    };
    
    return (
        <div className={ styles.cart } onClick={ handleCart }>
            <img src={ shoppingCartPic } alt="cart"/>
            { order.length ? <span className={ styles.cartQuantity }>{ order.length }</span> : '' }
        </div>
    );
};