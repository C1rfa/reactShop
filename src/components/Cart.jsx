import React from 'react';

import  shoppingCartPic from './../img/shopping-cart.svg';


export const Cart = props => {
    const { quantity=0 } = props;
    
    return (
        <div className="cart" onClick={ props.handleCart }>
            <img src={ shoppingCartPic } alt="my cart" className="cart-icon"/>
            { quantity ? <span className="fw-bold fs-5 text-white cart-quantity">{ quantity }</span> : '' }
        </div>
    );
};