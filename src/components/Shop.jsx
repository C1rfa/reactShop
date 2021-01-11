import axios from 'axios';
import React from 'react';

import { Preloader } from './Preloader';
import { Timer } from './Timer';
import { ItemList } from './ItemList';
import { Cart } from './Cart';

import { API_FORTNITE_KEY, API_FORTNITE_URL } from './../config';

export const Shop = props => {
    const [featured, setFeatured] = React.useState([]);
    const [daily, setDaily] = React.useState([]);

    const [order, setOrder] = React.useState([]);

    const [isLoading, setLoading] = React.useState(true);

    const [featuredEndDate, setFeaturedEndDate] = React.useState(null);
    const [dailyEndDate, setDailyEndDate] = React.useState(null);


    const addToCart = item => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

        if(itemIndex < 0) {
            const oldItem = daily.find(obj => obj.id === item.id) || featured.find( obj => obj.id === item.id );
            const newItem = {
                ...item,
                quantity: 1,
            };
            oldItem.isInBasket = true;
            setOrder([...order, newItem])
        } else {
            const newOrder = order.forEach((item, ind) => {
                if(itemIndex === ind) {
                    item.quantity += 1;
                }
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

    React.useEffect( ()=> {
       getGoods();
    }, []);

    React.useEffect( ()=> {
        setLoading(true);
        getGoods();
        setOrder([]);
    }, [props.lang]);

    return(<>
        <main>
            <Cart quantity={ order.length }/>
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
        </main>
    </>);
};