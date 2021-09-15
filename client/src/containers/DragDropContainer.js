import React from 'react';
import DragDrop from '../components/DragDrop';

const DragDropContainer = ({ allDinosaurs }) => {
    return (
        <>
            <DragDrop allDinosaurs={allDinosaurs} />
        </>
    )
}

export default DragDropContainer;