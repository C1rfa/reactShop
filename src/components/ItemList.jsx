import React from 'react';

import { Item } from './Item';

export const ItemList = props => {
    const Items = props.items.map(item => <Item setOrder={ props.setOrder } lang={ props.lang } key={ item.id } {... item}/>);

    return(
        <>
            { Items }
        </>
    );
};