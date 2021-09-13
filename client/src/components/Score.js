import React, {useEffect, useState} from 'react';
import Carnivore from '../styles/images/Carnivore.png'
import Herbivore from '../styles/images/Herbivore.png'
import Omnivore from '../styles/images/Omnivore.png'
import { withRouter } from 'react-router-dom';
import '../styles/Score.css'


        const Score= ({score, history}) => {

            const onClickDirect = () => history.push('/');

            if (score >=4) {
                return (
                <div className='scoreDetails'>
                <h1> Well done, you achieved: </h1>
                <h1> {score}/6</h1>
                <button className="close" onClick={onClickDirect}  id="save">Close</button>
                </div>);
            } else if (score ==0){
                return (
                <div className='scoreDetails'>
                <h2> Try again, your score is: {score}/6</h2>
                <button className="close" onClick={onClickDirect}  id="save">Close</button>
                </div>);
            } else {
                return (
                <div className='scoreDetails'>
                <h2> Not bad, you achieved: {score}/6</h2>
                <button className="close" onClick={onClickDirect}  id="save">Close</button>
                </div>);
            }
        }
        
        export default withRouter(Score);