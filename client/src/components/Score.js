import React, {useEffect, useState} from 'react';
import Carnivore from '../styles/images/Carnivore.png'
import Herbivore from '../styles/images/Herbivore.png'
import Omnivore from '../styles/images/Omnivore.png'


        const Score= ({score, togglePage}) => {



        
            return (
                <div>
                <h1>I'm the pop up</h1>
                <p> You achieved {score}/6</p>
                <button onClick={() => {togglePage('home')}}  id="save">Close</button>
                </div>
            );
        }
        
        export default Score