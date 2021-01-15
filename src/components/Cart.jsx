import React from 'react';

import { ShopContext } from './../context';

import  shoppingCartPic from './../img/shopping-cart.svg';

export const Cart = props => {
    const { order, isCartShow, switchIsCartShow } = React.useContext(ShopContext);

    const handleCart = () => {
        switchIsCartShow(!isCartShow);
    };
    
    return (
        <div className="cart" onClick={ handleCart }>
            <img src={ shoppingCartPic } alt="my cart" className="cart-icon"/>
            { order.length ? <span className="fw-bold fs-5 text-white cart-quantity">{ order.length }</span> : '' }
        </div>
    );
};