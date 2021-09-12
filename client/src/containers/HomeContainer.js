import React from 'react';
import '../styles/Home.css'

const HomeContainer = ({togglePage}) => {

    return (
        <div id='homepage'>
            <h1>Super Awesome HomeContainer</h1>
            <button onClick={() => {togglePage('dinos')}}  id="save">Meet some dinos...</button>
        </div>
    )
}

export default HomeContainer;