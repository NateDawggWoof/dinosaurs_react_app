import React from 'react';
import DinoList from '../components/DinoList';

const DinoContainer = ({ allDinosaurs }) => {
    return (
        <>
            <DinoList allDinosaurs={allDinosaurs} />
        </>
    )
}

export default DinoContainer;