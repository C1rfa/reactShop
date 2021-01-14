/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React from 'react';

import { Preloader } from './Preloader';
import { Timer } from './Timer';
import { ItemList } from './ItemList';
import { Cart } from './Cart';
import { CartList } from './CartList';

import { API_FORTNITE_KEY, API_FORTNITE_URL } from './../config';

export const Shop = props => {
    const [featured, setFeatured] = React.useState([]);
    const [daily, setDaily] = React.useState([]);

    const [order, setOrder] = React.useState([]);

    const [isLoading, setLoading] = React.useState(true);
    const [isCartShow, setCartShow] = React.useState(false);

    const [featuredEndDate, setFeaturedEndDate] = React.useState(null);
    const [dailyEndDate, setDailyEndDate] = React.useState(null);


    const handleCart = () => {
        setCartShow(!isCartShow);
    }

    const addToCart = item => {
        const oldItem = daily.find(obj => obj.id === item.id) || featured.find( obj => obj.id === item.id );
        const newItem = {
            ...item,
            quantity: 1,
        };
        oldItem.isInBasket = true;
        setOrder([...order, newItem]);
    };

    const handleCartItemQuanity = (id, action) => {
        const newOrder = order.map( item => {
            if (item.id === id) {
                if(action === 'plus') {
                    item.quantity += 1;
                } else if(action === 'minus') {
                    item.quantity -= 1;
                }
            }
            return item;
        });
        setOrder(newOrder);
    };

    const removeItem = id => {
        const newOrder = order.filter(item => item.id !== id);
        const item = featured.find(item => item.id === id) || daily.find(item => item.id === id);
        item.isInBasket = false;
        setOrder(newOrder);
    };

    const remadeCart = () => {
        if (order.length) {
            const newOrder = order.map(item => {
                const oldItem = daily.find(obj => obj.id === item.id) || featured.find(obj => obj.id === item.id);
                oldItem.isInBasket = true;
                item.name = oldItem.name;
                item.description = oldItem.description;
                return item;
            });
            setOrder(newOrder);
        }
    };

    const getGoods = () => {
        axios({
            url:API_FORTNITE_URL,
            method:'get',
            headers:{
                Authorization: API_FORTNITE_KEY,
            },
            params: {
                lang: props.lang,
            }
        })
        .then(response => response.data)
        .then(data => {
            setFeatured(data.featured);
            setFeaturedEndDate(data.endingDates.featured);
            setDaily(data.daily);
            setDailyEndDate(data.endingDates.featured);
            setLoading(false);
        });
    };

    //Using when language has been changed.
    React.useEffect( ()=> {
        getGoods();
    }, [props.lang]);

    //Remade cart when daily/featured items comes. Mostly needs when language chnage has been toggled.
    React.useEffect(()=>{
        remadeCart();
    }, [daily, featured]);


    return(<>
        <main>
            <Cart quantity={ order.length } handleCart={ handleCart }/>
            { isLoading ? 
                <Preloader/> : 
                <>
                    <Timer endDate={ featuredEndDate } title={ props.lang === "en" ? "featured items" : props.lang === "ru" ? "Избранные товары" : "" } lang={ props.lang }/>
                    <div className="goods">
                        <ItemList items={ featured } setOrder={ addToCart } lang={ props.lang }/>
                    </div>

                    <Timer endDate={ dailyEndDate } title={ props.lang === "en" ? "daily items" : props.lang === "ru" ? "Ежедневные товары" : "" } lang={ props.lang }/>
                    <div className="goods">
                        <ItemList items={ daily } setOrder={ addToCart } lang={ props.lang }/>
                    </div>
                </> }
                { isCartShow && <CartList order={ order } removeItem={ removeItem }  handleCartItemQuanity={ handleCartItemQuanity } closeCart={ handleCart } lang={ props.lang }/> }
        </main>
    </>);
};