import React, { useState } from 'react';
import NamePopUp from './NamePopUp';
import { GiDiplodocus } from "react-icons/gi";
import { withRouter } from 'react-router-dom';

const Header = ({ history, userName, setUserName }) => {
    
    const [ namePopUp, setNamePopUp ] = useState(false);

    const onClickHome = () => history.push('/')
    const onClickTab = (e) => {
        if (userName === '') {
            setNamePopUp(!namePopUp)
            return
        }
        const stringURL = e.target.innerHTML.toLowerCase();
        history.push(`/${stringURL}`)
    }

    return (
        <div id='header-wrapper-block'>
            <header id='header-wrapper'>
                <div id='header-logo' onClick={onClickHome}><GiDiplodocus size='40' />&nbsp;Home</div>
                <div id='header-tab'>
                    {namePopUp ? <NamePopUp setNamePopUp={setNamePopUp} userName={userName} setUserName={setUserName} /> : null}
                    {userName && !namePopUp ? <div id='header-welcome'>Welcome,<b id='header-name'>{userName}!</b></div> : null }
                    <div id='header-games' onClick={onClickTab}>Games</div>
                </div>
            </header>
        </div>
    )
};

export default withRouter(Header);