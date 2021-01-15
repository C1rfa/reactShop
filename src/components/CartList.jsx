import React from 'react';

import { ShopContext } from './../context';

import { CartItem } from './CartItem';

import closePic from './../img/close.svg';

export const CartList = props => {
    const { isCartShow, order, lang, switchIsCartShow } = React.useContext(ShopContext);

    const items = order.map( item => <CartItem key={ item.id } removeItem={ props.removeItem }  handleCartItemQuanity={ props.handleCartItemQuanity } { ...item }/>)

    const closeCart = () => {
        switchIsCartShow(!isCartShow);
    };

    const total = order.reduce((sum, item) => { return sum+=item.price * item.quantity }, 0)

    return(
        <ul className="list-group cart-list">
            <li className="list-group-item active fw-bold fs-2 text-center">
                <div className="d-grid d-flex justify-content-between align-items-center">
                    { lang === 'en' ? 'Cart' : lang === 'ru' ? 'Корзина' : '' }
                    <button type="button" className="btn" onClick={ closeCart }>
                        <img src={ closePic } alt="close" className="cart-icon"/>
                    </button>
                </div>
            </li>
                { items.length ? items : lang === 'en' ? 'Empty' : lang === 'ru' ? 'Пусто' : '' }
            <li className="list-group-item active fw-bold fs-2">
                { lang === 'en' ? 'Total: ' + total : lang === 'ru' ? 'Общаяя стоимость: ' + total : '' }
            </li>
        </ul>
    );
}