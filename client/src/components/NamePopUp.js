import React from 'react';
import { withRouter } from 'react-router-dom';

const NamePopUp = ({ history, setNamePopUp, userName, setUserName }) => {

    const handleChange = (e) => {
        setUserName(e.target.value)
    }
    const handleDirect = () => {
        if (userName !== '') {
            setNamePopUp(false)
            history.push('/games')
        }
        return
    }

    const handleCancel = () => {
        setNamePopUp(false)
        setUserName('')
    }

    return (
        <div id="namePopUp-block">
            <div id='namePopUp-wrapper'>
                <div id='namePopUp-title'>🦖 Enter your name kiddo 🦕</div>
                <label id='namePopUp-name'>Name: </label>
                <input id='namePopUp-input' type='text' onChange={handleChange} required/>
                <div id='namePopUp-button-block'>
                    <button className='namePopUp-button-play' onClick={handleDirect}>Play Game!</button>
                    <button className='namePopUp-button-cancel' onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(NamePopUp);