import React from 'react';
import { CgCloseR } from "react-icons/cg";

const DinoDetails = ({ selectedDinosaur, onClickClose }, ) => {

    return (
        <div className='dinoDetails-wrapper'>
                <img className='dinoDetails-img' alt={selectedDinosaur.name} src={`../image/${selectedDinosaur.img}`} />
                <div className='dinoDetails-content-wrapper'>
                    <div className='dinoDetails-name-close-wrapper'>
                        <div className='dinoDetails-name'>{selectedDinosaur.name}</div>       
                        <div className='dinoDetails-close' onClick={onClickClose}><CgCloseR size='50'/></div>
                    </div>
                    <div className='dinoDetails-text-wrapper'>
                        <div className='dinoDetails-nick'>Nickname: <b>{selectedDinosaur.nickname}</b></div>
                        <div className='dinoDetails-diet'>Diet: <b>{selectedDinosaur.diet}</b></div>
                        <div className='dinoDetails-facts'>Facts: <b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</b></div>
                    </div>
                </div>
        </div>
    )   
}

export default DinoDetails;