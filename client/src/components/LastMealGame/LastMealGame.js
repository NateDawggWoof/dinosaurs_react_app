import React, { useState, useEffect, useRef } from 'react';
import * as dinoInvasion from './dinoInvasion';

const LastMealGame = () => {
    
    const [playing, setPlaying] = useState(true)
    const canvasRef = useRef();
    useEffect(() => {
        alert('Welcome to Dino Game!')
        const canvas = canvasRef.current;
        dinoInvasion.invasionGame(canvas, playing);
        return () => {
            setPlaying(!playing)
        }
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