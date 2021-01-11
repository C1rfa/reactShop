import React from 'react';

import  shoppingCartPic from './../img/shopping-cart.svg';


export const Cart = props => {
    const { quantity=0 } = props;
    
    return (
        <div className="cart">
            <img src={ shoppingCartPic } alt="my cart" className="cart-icon"/>
            { quantity > 0 ? <span className="fw-bold fs-5 text-white cart-quantity">{ quantity }</span> : '' }
        </div>
    );
};