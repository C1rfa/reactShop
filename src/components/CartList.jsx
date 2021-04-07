import React from 'react';
import styles from './../css/cart.module.css';


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
        <div className={ styles.cartBack }>
            <div className={ styles.cartList }>
                <div className={ styles.cartHeader }>
                    <span>{ lang === 'en' ? 'Cart' : lang === 'ru' ? 'Корзина' : '' }</span>
                    <button className={ styles.cartClose }  onClick={ closeCart }>
                        <img src={ closePic } alt="close cart"/>
                    </button>
                </div>
                <li className={ styles.cartContent }>
                    { items.length ? items : lang === 'en' ? <span>Empty</span> : lang === 'ru' ? <span>Пусто</span> : '' }
                </li>
                <div className={ styles.cartFooter }>
                    { lang === 'en' ? 'Total: ' + total : lang === 'ru' ? 'Общаяя стоимость: ' + total : '' }
                </div>
            </div>
        </div>
    );
}