import React, { useState } from 'react';
import DinoItem from './DinoItem'
import DinoDetails from './DinoDetails'

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
            <h2>This is DinoList</h2>
            {dinoNodes}
            { selectedDinosaur ? <DinoDetails selectedDinosaur={selectedDinosaur} onClickClose={onClickClose}/> : null }
        </>
    )
}

export default DinoList;