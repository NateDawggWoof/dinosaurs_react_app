import React from 'react';
import { GiDiplodocus } from "react-icons/gi";
import { withRouter } from 'react-router-dom';

const Header = ({ history }) => {

    const onClickHome = () => history.push('/')
    const onClickTab = (e) => {
        const stringURL = e.target.innerHTML.toLowerCase();
        history.push(`/${stringURL}`)
    }

    return (
        <div id='header-wrapper-block'>
        <header id='header-wrapper'>
            <div id='header-logo' onClick={onClickHome}><GiDiplodocus size='40' />&nbsp;DinoApp</div>
            <div id='header-tab'>
                <div id='header-dinosaurs' onClick={onClickTab}>Dinosaurs</div>
                <div id='header-quiz' onClick={onClickTab}>Quiz</div>
            </div>
        </header>
        </div>
    )
};

export default withRouter(Header);