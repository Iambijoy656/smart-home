import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export const ProductContext = createContext([])


const Main = () => {
    const products = useLoaderData();

    return (
        <ProductContext.Provider value={products}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </ProductContext.Provider>
    );
};

export default Main;