import React, { useEffect, useRef } from 'react';
import * as dinoInvasion from './dinoInvasion';

const LastMealGame = () => {
    
    const canvasRef = useRef();
    useEffect(() => {
        alert('Welcome to Dino Game!')
        const canvas = canvasRef.current;
        dinoInvasion.invasionGame(canvas);
        return () => {}
    }, [])

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