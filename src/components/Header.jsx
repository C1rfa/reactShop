import React from 'react';

import shopLogo from './../img/store.svg';

export const Header = props => {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={ shopLogo } alt="" width="50" height="50" className="d-inline-block align-center pe-1"/>
                <a class="nav-link" href="https://github.com/C1rfa/reactShop">Repository</a>
            </div>
        </nav>
    );
}