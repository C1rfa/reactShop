import React from 'react';

import { CartItem } from './CartItem';

import closePic from './../img/close.svg';

export const CartList = props => {

    const items = props.order.map( item => <CartItem key={ item.id } removeItem={ props.removeItem }  handleCartItemQuanity={ props.handleCartItemQuanity } { ...item }/>)

    const closeCart = () => {
        props.closeCart();
    }

    let total = 0;

    props.order.forEach( item => {
        total += item.quantity * item.price;
    });

    return(
        <ul className="list-group cart-list">
            <li className="list-group-item active fw-bold fs-2 text-center">
                <div className="d-grid d-flex justify-content-between align-items-center">
                    { props.lang === 'en' ? 'Cart' : props.lang === 'ru' ? 'Корзина' : '' }
                    <button type="button" className="btn" onClick={ closeCart }>
                        <img src={ closePic } alt="close" className="cart-icon"/>
                    </button>
                </div>
            </li>
                { items.length ? items : props.lang === 'en' ? 'Empty' : props.lang === 'ru' ? 'Пусто' : '' }
            <li className="list-group-item active fw-bold fs-2">
                { props.lang === 'en' ? 'Total: ' + total : props.lang === 'ru' ? 'Общаяя стоимость: ' + total : '' }
            </li>
        </ul>
    );
}