import React from 'react';

import { ContextProvider } from './context';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Shop } from "./components/Shop";


export const App = props => {
    return(
        <div>
            <ContextProvider>
                <Header/>
                <Shop/>
                <Footer/>
            </ContextProvider>
        </div>
    );
}