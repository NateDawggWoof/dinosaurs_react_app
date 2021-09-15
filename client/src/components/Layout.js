import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Layout.css'


const Layout = ({ children, userName, setUserName }) => {
    return (
        <div id='layout'>
            <Header userName={userName} setUserName={setUserName} />
            <div id='content'>
            {children}
            </div>
            <Footer />
        </div>
    )
};

export default Layout;