/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React from 'react';

import { ShopContext } from './../context';

import { Preloader } from './Preloader';
import { Timer } from './Timer';
import { ItemList } from './ItemList';
import { Cart } from './Cart';
import { CartList } from './CartList';

import { API_FORTNITE_KEY, API_FORTNITE_URL } from './../config';

export const Shop = props => {
    const { featured, daily, featuredEndDate, dailyEndDate, isLoading, isCartShow, lang, switchLoadingStatus, setGoods, remadeCart } = React.useContext(ShopContext);


    const getGoods = () => {
        switchLoadingStatus(!isLoading);
        axios({
            url:API_FORTNITE_URL,
            method:'get',
            headers:{
                Authorization: API_FORTNITE_KEY,
            },
            params: {
                lang: lang,
            }
        })
        .then(response => response.data)
        .then(data => {
            setGoods(data.featured, data.daily, data.endingDates.featured, data.endingDates.daily);
        })
        .finally(() => {
            switchLoadingStatus(!!isLoading);
        });
    };

    //Using when language has been changed.
    React.useEffect( ()=> {
        getGoods();
    }, [lang]);

    //Remade cart when daily/featured items comes. Mostly needs when language has been changed.
    React.useEffect(()=>{
        remadeCart();
    }, [daily, featured]);


    return(<>
        <main className="content">
            {/* <Cart /> */}
            { isLoading ? 
                <Preloader/> : 
                <>
                    <Timer endDate={ featuredEndDate } title={ lang === "en" ? "featured items" : lang === "ru" ? "Избранные товары" : "" }/>
                    <div className="goods">
                        <ItemList items={ featured }/>
                    </div>

                    <Timer endDate={ dailyEndDate } title={ lang === "en" ? "daily items" : lang === "ru" ? "Ежедневные товары" : "" }/>
                    <div className="goods">
                        <ItemList items={ daily }/>
                    </div>
                </> }
                { isCartShow && <CartList/> }
        </main>
    </>);
};