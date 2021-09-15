import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Layout.css'


const Layout = ({ children, userName }) => {
    return (
        <div id='layout'>
            <Header userName={userName} />
            <div id='content'>
            {children}
            </div>
            <Footer />
        </div>
    )
};

export default Layout;