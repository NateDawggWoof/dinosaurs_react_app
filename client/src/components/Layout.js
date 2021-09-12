import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Layout.css'


const Layout = ({ children, togglePage }) => {
    return (
        <div id='layout'>
            <Header togglePage={togglePage} />
            <div id='content'>
            {children}
            </div>
            <Footer />
        </div>
    )
};

export default Layout;