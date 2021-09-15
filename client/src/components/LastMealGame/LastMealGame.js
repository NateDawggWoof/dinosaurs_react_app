import React, { useState, useEffect, useRef } from 'react';
import * as dinoInvasion from './dinoInvasion';

const LastMealGame = () => {
    
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        dinoInvasion.invasionGame(canvas);
        return () => {
            dinoInvasion.breakGame();
        }  
    })

    const canvasBlock = {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
    }

    return (
        <div style={canvasBlock}>
            <canvas ref={canvasRef} width={800} height={600} />
        </div>
    )
}

export default LastMealGame;