import React from 'react';
import { CgCloseR } from "react-icons/cg";

const DinoDetails = ({ selectedDinosaur, onClickClose }, ) => {
    

    // "name": "Tyrannosaurus",
    // "nickname": "Tyra",
    // "diet": "Carnivore",
    // "size": "3.7 - 6.1. metres",
    // "img": "02.png",
    // "period": "Cretaceous Period",
    // "weight": "4,500 - 8,000 kg",
    // "fact": {
    //   "1": "The name Tyrannosaurus Rex comes from Greek and Latin and means 'Tyrant Lizard King'.",
    //   "2": "They had 50-60 teeth, which were each the size of a banana!",
    //   "3": "Their huge tail helped to keep them balanced - just like a pet cat!"

    
    return (
        <div className='dinoDetails-wrapper'>
                <img className='dinoDetails-img' alt={selectedDinosaur.name} src={`../image/${selectedDinosaur.img}`} />
                <div className='dinoDetails-content-wrapper'>
                    <div className='dinoDetails-name-close-wrapper'>
                        <div className='dinoDetails-name'>{selectedDinosaur.name}</div>       
                        <div className='dinoDetails-close' onClick={onClickClose}><CgCloseR size='50'/></div>
                    </div>
                    <div className='dinoDetails-text-wrapper'>
                        <div className='dinoDetails-nick'><div className='dinoDetails-label'>Nickname:&nbsp;</div><b>{selectedDinosaur.nickname}</b></div>
                        <div className='dinoDetails-period'><div className='dinoDetails-label'>Period:&nbsp;</div><b>{selectedDinosaur.period}</b></div>
                        <div className='dinoDetails-diet'><div className='dinoDetails-label'>Diet:&nbsp;</div><b>{selectedDinosaur.diet}</b></div>
                        <div className='dinoDetails-size-weight-wrapper'>
                            <div className='dinoDetails-size'><div className='dinoDetails-label'>Size:&nbsp;</div><b>{selectedDinosaur.size}</b></div>
                            <div className='dinoDetails-weight'><div className='dinoDetails-label'>Weight:&nbsp;</div><b>{selectedDinosaur.weight}</b></div>
                        </div>

                        <div className='dinoDetails-facts-wrapper'>
                            <div className='dinoDetails-label'>Facts:</div>
                            <div className='dinoDetails-facts'>
                            {
                                selectedDinosaur.fact.map((one, index) => {
                                    return <div className='dinoDetails-one-fact'>{index + 1}: {one}</div>
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )   
}

export default DinoDetails;
