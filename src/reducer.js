export const reducer = (state, {type, payload}) => {
    switch (type) {
        case 'SWITCH_LANGUAGE':
            return {
                ...state,
                lang: payload.lang,
            };
        case 'SWITCH_CART_STATUS':
            return {
                ...state,
                isCartShow: payload.cartStatus,
            };
        case 'SWITCH_LOADING_STATUS':
            return {
                ...state,
                isLoading: payload.loadingStatus,
            };
        case 'SET_GOODS':
                return {
                    ...state,
                    featured: payload.featured,
                    daily: payload.daily,
                    featuredEndDate: payload.featuredEndDate,
                    dailyEndDate: payload.dailyEndDate,
                };
        case 'SET_ORDER':
            return {
                ...state,
                order: payload.order,
            };
        default:
            return state;
    }
};