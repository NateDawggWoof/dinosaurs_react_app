import React, { useState } from 'react';
import DinoItem from './DinoItem'
import DinoDetails from './DinoDetails'
import '../styles/DinoList.css'

const DinoList = ({ allDinosaurs }) => {

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
        <>
            <h2>Dinosaurs</h2>
            <div id='dinoList-wrapper'>
                {dinoNodes}
            </div>
            { selectedDinosaur ? <DinoDetails selectedDinosaur={selectedDinosaur} onClickClose={onClickClose}/> : null }
        </>
    )
}

export default DinoList;