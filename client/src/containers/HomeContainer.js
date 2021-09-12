import React from 'react';

const HomeContainer = ({togglePage}) => {


    return (
        <>
        <h1>Super Awesome HomeContainer</h1>
        <button onClick={() => {togglePage('dinos')}}  id="save">Meet some dinos...</button>
        
        </>
    )
}

export default HomeContainer;