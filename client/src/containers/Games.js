import React from 'react';
import DinoList from '../components/DinoList';
import '../styles/GamesContainer.css'
import GamesListComponent from '../components/GamesListComponent';

const GamesContainer = ({ allDinosaurs, userName }) => {
    return (
        <>
            <GamesListComponent allDinosaurs={allDinosaurs} userName={userName} />
        </>
    )
}

export default GamesContainer;