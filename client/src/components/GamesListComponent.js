import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/DinoList.css'

const gamesListComponent = ({ allDinosaurs, userName, history}) => {

    const onClickDirect1 = () => history.push('/games/quiz')
    const onClickDirect2 = () => history.push('/games/lastmeal')
    const onClickDirect3 = () => history.push('/games/dragdrop')
    const onClickDirect4 = () => history.push('/games/blockparty')
    const onClickDirect5 = () => history.push('/games/scrabble')

        
    
    
    return (
        <div id='gamesList-wrapper-block'>
            <div id='gamesList-title'>Dinos Games</div>
            <div id='gamesList-wrapper'>

            <div className='gameItems-wrapper'>
            <div className='gameItems-img-wrapper'>
                <input className='gameItems-img' type="image" onClick={onClickDirect1} src={`../image/gameQuiz.jpeg`} alt="quiz"/>
            </div>
            <div className='gameItems-name'>
                <h3>Quiz</h3>
            </div>
            </div>

            <div className='gameItems-wrapper' >
            <div className='gameItems-img-wrapper'>
                <input className='gameItems-img' type="image" src={`../image/gameLastMeal.png`} onClick={onClickDirect2} />
            </div>
            <div className='gameItems-name'>
                <h3>Last Meal</h3>
            </div>
            </div>

            <div className='gameItems-wrapper' >
            <div className='gameItems-img-wrapper'>
                <input className='gameItems-img' type="image" src={`../image/gameDrag.png`} onClick={onClickDirect3}/>
            </div>
            <div className='gameItems-name'>
                <h3>Dino Drag</h3>
            </div>
            </div>

            <div className='gameItems-wrapper' >
            <div className='gameItems-img-wrapper'>
                <input className='gameItems-img' type="image" src={`../image/gameBlock.png`} onClick={onClickDirect4}/>
            </div>
            <div className='gameItems-name'>
                <h3>Dino Blocks</h3>
            </div>
            </div>

            <div className='gameItems-wrapper' onClick={onClickDirect5}>
            <div className='gameItems-img-wrapper'>
                <input className='gameItems-img' type="image" src={`../image/gameGuess.png`} />
            </div>
            <div className='gameItems-name'>
                <h3>Dino Guess</h3>
            </div>
            </div>
            </div>
        </div>
    )
}

export default withRouter(gamesListComponent);