import React from 'react';
import DinoList from '../components/DinoList';

const DinoContainer = ({ allDinosaurs }) => {
    return (
        <>
            <h2>This is DinoContainer.js</h2>
            <DinoList allDinosaurs={allDinosaurs} />
        </>
    )
}

export default DinoContainer;