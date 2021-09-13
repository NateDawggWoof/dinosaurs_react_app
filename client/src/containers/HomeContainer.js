import React from 'react';
import '../styles/Home.css'
import { withRouter } from 'react-router-dom';

const HomeContainer = ({ history }) => {

    const onClickDirect = () => history.push('/dinosaurs');

    return (
        <div id='homepage'>
            <h1>Super Awesome HomeContainer</h1>
            <button id="save" onClick={onClickDirect}>Meet some dinos...</button>
        </div>
    )
}

export default withRouter(HomeContainer);