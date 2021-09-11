import React from 'react';

const DinoItem = ({ dinosaur, onClickSelected }) => {


    const handleSelected = () => {
        onClickSelected(dinosaur)
    }
  
    // moved images into src folder, because of react app file directoring
    return (
        <div className='dinoItems-wrapper' onClick={handleSelected}>
            <div className='dinoItems-img-wrapper'>
                <img className='dinoItems-img' alt={dinosaur.name} src={`../image/${dinosaur.img}`} />
            </div>
            <div className='dinoItems-name'>{dinosaur.name}</div>
        </div>
    )
}

export default DinoItem;