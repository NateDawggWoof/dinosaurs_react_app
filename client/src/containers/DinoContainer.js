import React from 'react';
import DinoList from '../components/DinoList';

const DinoContainer = ({ allDinosaurs , togglePage}) => {
    return (
        <>
            <DinoList allDinosaurs={allDinosaurs} togglePage={togglePage} />
        </>
    )
}

export default DinoContainer;