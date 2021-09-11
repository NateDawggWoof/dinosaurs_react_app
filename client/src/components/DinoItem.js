import React from 'react';
import DinoDetails from './DinoDetails';

const DinoItem = ({ dinosaur, onClickSelected }) => {
    /* "name": "Stegosaurus",
    "nickname": "Stig",
    "diet": "Herbivore", */

    const handleSelected = () => {
        onClickSelected(dinosaur)
    }

    // temporary styles
    const temporaryDiv = {
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer'
    }
    const temporaryStyle = {
        width: '50px',
        height: 'auto'

    }
    // moved images into src folder, because of react app file directoring
    return (
        <div style={temporaryDiv} onClick={handleSelected}>
            <img style={temporaryStyle} alt={dinosaur.name} src={`../image/${dinosaur.img}`} />
            <h2>{dinosaur.name}</h2>
        </div>
    )
}

export default DinoItem;