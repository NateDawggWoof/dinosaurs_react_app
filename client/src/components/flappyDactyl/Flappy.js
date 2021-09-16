import React from 'react'



export default function Flappy () {

    document.addEventListener('DOMContentLoaded',domloaded,false);
    function domloaded(){

        context = c.getContext("2d");
        const dactyl = new Image();
        dactyl.src = '../image/terry.png';
        context.font = "20px Monospace"
        dactylX = dactylDY = score = bestScore = 0;
        interval = pipeWidth = topPipeBottomY = 35;
        dactylSize = 100;
        dactylY = pipeGap = 200;
        canvasSize = pipeX = 600;
        c.onclick = () => (dactylDY = 8) ;
        setInterval(() => {
        context.fillStyle = "skyblue";
        context.fillRect(0,0,canvasSize,canvasSize); // Draw sky
        dactylY -= dactylDY -= 0.5; // Gravity
        context.drawImage(dactyl, dactylX, dactylY, dactylSize, dactylSize); // Draw dactyl
        context.fillStyle = "darkolivegreen";
        pipeX -= 14; // Move pipe
        pipeX < -pipeWidth && // Pipe off screen?
        ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random())); // Reset pipe and randomize gap.
        context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); // Draw top pipe
        context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize); // Draw bottom pipe
        context.fillStyle = "black";
        context.fillText(`Score: ${score++}`, 10, 30); // Increase and draw score
        bestScore = bestScore < score ? score : bestScore; // New best score?
        context.fillText(`Best: ${bestScore}`, 10, 50); // Draw best score
        (((dactylY < topPipeBottomY || dactylY > topPipeBottomY + pipeGap) && pipeX < dactylSize * (524/374))// dactyl hit pipe?
        || dactylY > canvasSize) && // dactyl falls off screen
        ((dactylDY = 0), (dactylY = 200), (pipeX = canvasSize), (score = 0)); // dactyl died
        }, interval);

    }
}