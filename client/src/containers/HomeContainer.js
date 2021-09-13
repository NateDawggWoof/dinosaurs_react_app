import React, { useState } from 'react';
import HomeNameForm from '../components/HomeNameForm';
import '../styles/Home.css'

const HomeContainer = ({togglePage, saveUserName}) => {

    const [popUpUserNameDisplay, setPopUpUserNameDisplay] = useState('on');

    const showUserNamePopUp = () => {
        if (popUpUserNameDisplay =='off'){
            return <></>
        } else {
            return <HomeNameForm saveUserName={saveUserName} togglePage={togglePage}/>
        }
    }

    const toggleUserNamePopUp = () => {
        if(popUpUserNameDisplay == 'off'){
            setPopUpUserNameDisplay('on')
        } else {
            setPopUpUserNameDisplay('off')
        }
    }

   


    return (
        <div id='homepage'>
            <h1>Super Awesome HomeContainer</h1>
            <div id="user-name-popup">
                {showUserNamePopUp()}
            </div>
            <button onClick={() => {toggleUserNamePopUp()}}  id="save">Meet some dinos...</button>
        </div>
    )
}

export default HomeContainer;