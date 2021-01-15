import React from 'react';

import { reducer } from './reducer';

export const ShopContext = React.createContext();

const initialState = {
    lang: 'en',

    featured: [],
    featuredEndDate: null,

    daily: [],
    dailyEndDate: null,

    order: [],

    isCartShow: false,
    isLoading: false,
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = React.useReducer(reducer, initialState);

    value.switchLanguage = lang => {
        dispatch({type: 'SWITCH_LANGUAGE', payload: { lang: lang }});
    };

    value.switchIsCartShow = cartStatus => {
        dispatch({type: 'SWITCH_CART_STATUS', payload: { cartStatus: cartStatus }});
    };

    value.switchLoadingStatus = loadingStatus => {
        dispatch({type: 'SWITCH_LOADING_STATUS', payload: { loadingStatus: loadingStatus }});
    };

    value.setGoods = (featured, daily, featuredEndDate, dailyEndDate) => {
        dispatch({type: 'SET_GOODS', payload: { featured: featured,
            daily: daily,
            featuredEndDate: featuredEndDate,
            dailyEndDate: dailyEndDate,
        }});
    };

    value.addToCart = item => {
        const oldItem = value.daily.find(obj => obj.id === item.id) || value.featured.find( obj => obj.id === item.id );
        const newItem = {
            ...item,
            quantity: 1,
        };
        oldItem.isInBasket = true;
        dispatch({type: 'SET_ORDER', payload: { order: [...value.order, newItem] }});
    };

    value.removeItem = itemId => {
        const newOrder = value.order.filter(item => item.id !== itemId);
        const item = value.featured.find(item => item.id === itemId) || value.daily.find(item => item.id === itemId);
        item.isInBasket = false;

        dispatch({type: 'SET_ORDER', payload: { order: newOrder }});
    };

    value.cartItemQuanityChanger = (itemId, action) => {
        const newOrder = value.order.map( item => {
            if (item.id === itemId) {
                if(action === 'plus') {
                    item.quantity += 1;
                } else if(action === 'minus') {
                    item.quantity -= 1;
                }
            }
            return item;
        });

        dispatch({type: 'SET_ORDER', payload: { order: newOrder }});
    };

    value.remadeCart = () => {
        if (value.order.length) {
            const newOrder = value.order.map(item => {
                const oldItem = value.daily.find(obj => obj.id === item.id) || value.featured.find(obj => obj.id === item.id);
                oldItem.isInBasket = true;
                item.name = oldItem.name;
                item.description = oldItem.description;
                return item;
            });

            dispatch({type: 'SET_ORDER', payload: { order: newOrder }});
        }
    };



    return (
        <ShopContext.Provider value={ value }>
            { children }
        </ShopContext.Provider>
    );
};