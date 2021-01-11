import React from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Shop } from "./components/Shop";


export const App = props => {

    const [ lang, setLang ] = React.useState('en');

    return(
        <div>
            <Header/>
            <Shop lang={ lang }/>
            <Footer lang={ lang } setLang={ setLang }/>
        </div>
    );
}