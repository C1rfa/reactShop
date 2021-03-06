import React from 'react';
import styles from './../css/card.module.css';

import { ShopContext } from './../context';

import toCartPic from './../img/add-to-cart.svg';
import dollarPic from './../img/dollar.svg';

export const Item = props => {
    const { addToCart, lang } = React.useContext(ShopContext);

    const addToCartHandler = () => {
        addToCart({
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            image: props.image,
        });
    };


    return(
        <div className={ styles.card }>
            <div className={styles.cardInner}>
                <div className={ styles.cardFront }>
                    <img src={ props.image } alt={ props.name }/>
                </div>
                <div className={ styles.cardBack }>
                    <h5 className={ styles.cardTitle }>{ props.name }</h5>
                    <p className={ styles.cardDescription }>{ props.description }</p>
                </div>
            </div>
            <div className={ styles.cardFooter }>
                <img src={ dollarPic } alt="price"/>
                <p>{ props.price } { lang === 'en' ? 'USD' : lang === 'ru' ? 'рублей' : '' }</p>
            </div>
            { props.isInBasket ? 
                    lang === 'en' ?  <p className={ styles.inCart }>Already in cart</p> : lang === 'ru' ?  <p className={ styles.inCart }>Уже в корзине</p> : '' 
                    : 
                    <button onClick={ addToCartHandler } className={ styles.addToCart }>
                        <img src={ toCartPic } alt="to Cart" className='icon'/> { lang === 'en' ? 'Add to Cart' : lang === 'ru' ? 'Добавить в корзину' : '' }
                    </button> }
            {/* <button className={ styles.addToCart }>
                <img src={ toCartPic } alt="to Cart" className='icon'/> { lang === 'en' ? 'Add to Cart' : lang === 'ru' ? 'Добавить в корзину' : '' }
            </button> */}
        </div>
        // <div className="card border-dark rounded border-5">
        //     <img src={ props.image } className="card-img-top bg-secondary" alt={ props.name }/>
        //     <div className="card-body bg-dark text-white text-center">
        //         <h5 className="card-title">{ props.name }</h5>
        //         <p className="card-text">{ props.description }</p>
        //     </div>
        //     <ul className="list-group list-group-flush">
        //         <li className="list-group-item bg-dark text-white fw-bold text-uppercase d-flex justify-content-evenly"> 
        //             <img src={ dollarPic } alt="price" className="icon"/>
        //             <p>{ props.price } { lang === 'en' ? 'USD' : lang === 'ru' ? 'рублей' : '' }</p>
        //         </li>
        //     </ul>
        //     <div className="card-body d-grid bg-dark">
        //         { props.isInBasket ? 
        //             lang === 'en' ?  <p className="text-white btn fw-bold bg-success border-5 rounded d-flex justify-content-center">Already in cart</p> : lang === 'ru' ? <p className="text-white btn fw-bold bg-success border-5 rounded d-flex justify-content-center">Уже в корзине</p> : '' 
        //             : 
        //             <button onClick={ addToCartHandler } className="btn btn-outline-success border-5 rounded fw-bold" type="button">
        //                 <img src={ toCartPic } alt="to Cart" className='icon'/> { lang === 'en' ? 'Add to Cart' : lang === 'ru' ? 'Добавить в корзину' : '' }
        //             </button> }
        //     </div>
        // </div>
    );
}