import React, { useState } from 'react';
import DinoItem from './DinoItem'
import DinoDetails from './DinoDetails'
import '../styles/DinoList.css'

const DinoList = ({ allDinosaurs, togglePage}) => {

    const [ selectedDinosaur, setSelectedDinosaur ] = useState(null);

    const onClickSelected = (clickedDinosaur) => {
        setSelectedDinosaur(clickedDinosaur)
    }

    const onClickClose = () => {
        setSelectedDinosaur(null)
    } 

    const dinoNodes = allDinosaurs.map((dinosaur, index) => {
        return <DinoItem dinosaur={dinosaur} key={index} onClickSelected={onClickSelected}/>
        
    })
    
    return (
        <div id='dinoList-wrapper-block'>
            <div id='dinoList-title'>Dinosaurs</div>
            <div id='dinoList-wrapper'>
                {dinoNodes}
            </div>
            <div id='dinoList-button-wrapper'>
                <button id='dinoList-button' onClick={() => {togglePage('quiz')}}>Quiz Master</button>
            </div>
            { selectedDinosaur ? <DinoDetails selectedDinosaur={selectedDinosaur} onClickClose={onClickClose}/> : null }
        </div>
    )
}

export default DinoList;