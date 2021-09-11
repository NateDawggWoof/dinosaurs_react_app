import React from 'react';

const DinoDetails = ({ selectedDinosaur }) => {

    // temporary style
    const temporaryDiv = {
        position: 'fixed',
        top: '0',
        left: '0',
    }

    return (
        <div style={temporaryDiv}>
            <img alt={selectedDinosaur.name} src={`../image/${selectedDinosaur.img}`} />
            <h2>{selectedDinosaur.name}</h2>
        </div>
    )
}

export default DinoDetails;