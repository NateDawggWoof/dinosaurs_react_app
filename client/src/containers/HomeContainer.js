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
            {/* <h1>Super Awesome HomeContainer</h1>
            <div id="user-name-popup">
                {showUserNamePopUp()}
            </div>
            <button onClick={() => {toggleUserNamePopUp()}}  id="save">Meet some dinos...</button> */}
        

            <header>
                <div>
                    <img id="logopic" src="../src/styles/images/logo.png" />
                    <h1 id="logo">JURASSIC APP</h1>
                </div>
            </header>
            <p>
                <button  onClick={() => {toggleUserNamePopUp()}}  id="save"></button>
                Meet The Dinosaurs
            </p>
            <div id="user-name-popup">
                {showUserNamePopUp()}
            </div>
        </div>
    )
}

export default HomeContainer;