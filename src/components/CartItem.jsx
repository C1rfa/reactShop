import React from "react";
import styles from './../css/cart.module.css';


import { ShopContext } from './../context';

import removePic from './../img/rubbish-bin.svg';
import minusPic from './../img/minus.svg';
import plusPic from './../img/add.svg';

export const CartItem = props => {
    const { removeItem, cartItemQuanityChanger } = React.useContext(ShopContext);

    const removeItemHandler = () => {
        removeItem(props.id);
    };

    const cartItemQuanityHandler = e => {
        cartItemQuanityChanger(props.id, e.target.id);
    };

    return(

        <li className={ styles.cartItem }>
            <div className={ styles.cartItemHeader }>
                <img src={ props.image } alt={ props.name } className={ styles.cartImg } />
                <h5>{ props.name }</h5>
                <img onClick={ removeItemHandler } src={ removePic } className={ styles.cartPic } alt="remove" />
            </div>
            <div className={ styles.cartItemContent }>
                <p>{ props.description }</p>
            </div>
            <div className={ styles.cartItemFooter }>
                <small className={ styles.cartPrice }>{ props.price }</small>
                <div className={ styles.cartQuantity }>
                    <img onClick={ cartItemQuanityHandler } id="plus" src={ plusPic } alt="plus" className={ styles.cartPic }/>
                    <small>{ props.quantity }</small>
                    { props.quantity > 1 ? <img onClick={ cartItemQuanityHandler } id="minus" src={ minusPic }  alt="minus" className={ styles.cartPic }/> : ''}
                </div>
            </div>
        </li>
        // <li className="list-group-item list-group-item-action" aria-current="true">
        //     <div className="d-flex w-100 align-items-center">
        //         <img src={ props.image } alt={ props.name } className="cart-image border border-2 bg-secondary border-dark"/>
        //         <h5 className="mb-1 fs-3 fw-bold ps-3 flex-fill">{ props.name }</h5>
        //         <img onClick={ removeItemHandler } src={ removePic } alt="remove" className="cart-icon"/>
        //     </div>
        //     <p className="mb-1 fs-4 fw-normal text-dark">{ props.description }</p>
        //     <div className="d-flex w-100 align-items-center">
        //         <small className="mb-1 fs-3 fw-bold ps-3 flex-fill">{ props.price }</small>
        //         <div className="d-flex align-items-center justify-content-between"></div>
        //             <img onClick={ cartItemQuanityHandler } id="plus" src={ plusPic } alt="plus" className="cart-pi-icon"/>
        //             <small className="mb-1 fs-3 fw-bold pe-3 ps-3">{ props.quantity }</small>
        //             { props.quantity > 1 ? <img onClick={ cartItemQuanityHandler } id="minus" src={ minusPic }  alt="minus" className="cart-pi-icon"/> : ''}
        //         <div/>
        //     </div>
        // </li>
    );
}