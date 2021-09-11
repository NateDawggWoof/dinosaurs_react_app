import React from 'react';

const DinoDetails = ({ selectedDinosaur, onClickClose }, ) => {
    
    // temporary style
    const temporaryDiv = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',

        display: 'flex',
        justify_content: 'center',
        align_items: 'center',
        background: "grey",
        opacity: '0.9'

    }

    const closeButton = {
        position: 'absolute',
        top: '50px',
        right: '50px'
    }
    //no on-click in the close button
    return (
        <div style={temporaryDiv}>
             <button style={closeButton} onClick={onClickClose}>❌</button> 
            <img alt={selectedDinosaur.name} src={`../image/${selectedDinosaur.img}`} />
            <h2>{selectedDinosaur.name}</h2>
        </div>
    )
}

export default DinoDetails;