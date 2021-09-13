import React, { useState } from 'react';
import HomeNameForm from '../components/HomeNameForm';
import '../styles/Home.css'
import { withRouter } from 'react-router-dom';

const HomeContainer = ({ saveUserName, history }) => {
  
    const [popUpUserNameDisplay, setPopUpUserNameDisplay] = useState('on');
    const onClickDirect = () => history.push('/dinosaurs');

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
  
            <div id="homeheader">
                <div>
                    <img id="logopic" src="logo.png" />
                    <h1 id="logo">JURASSIC APP</h1>
                </div>
            </div>
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

export default withRouter(HomeContainer);
