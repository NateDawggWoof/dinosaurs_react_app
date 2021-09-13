import React from 'react';
import { GiDiplodocus } from "react-icons/gi";


const Header = ({ togglePage }) => {
    return (
        <div id='header-wrapper-block'>
        <header id='header-wrapper'>
            <div id='header-logo' onClick={() => togglePage('home')}><GiDiplodocus size='40' />&nbsp;DinoApp</div>
            <div id='header-tab'>
                <div id='header-dinosaurs' onClick={() => togglePage('dinos')}>Dinosaurs</div>
                <div id='header-quiz' onClick={() => togglePage('quiz')}>Quiz</div>
            </div>
        </header>
        </div>
    )
};

export default Header;