import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Layout.css'


const Layout = ({ children }) => {
    return (
        <div id='layout'>
            <Header />
            <div id='content'>
            {children}
            </div>
            <Footer />
        </div>
    )
};

export default Layout;