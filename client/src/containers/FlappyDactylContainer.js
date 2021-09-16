import React from 'react';
import Flappy from '../components/flappyDactyl/Flappy';
import "../styles/Flappy.css";

const FlappyDactylContainer = () => {
    return (
        <div id= "flappy">
            <h1>Flappy Dactyl</h1>
            <canvas id="c" width="600" height="500"></canvas>
            <Flappy/>
        </div>
    )
}

export default FlappyDactylContainer;

