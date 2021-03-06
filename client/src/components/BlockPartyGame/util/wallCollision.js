import React, {useEffect, useRef} from 'react' 
import data from '../data'
// 8.3k (gzipped: 3.3k)

export default function wallCollision (ballObj, canvas, player, paddleProps) {


    if (ballObj.y + ballObj.rad > canvas.height) {
        player.lives--;
        ballObj.x = paddleProps.x;
        ballObj.y = paddleProps.y - 30;
        ballObj.dx = 6 * (Math.random() * 2 - 1);
        ballObj.dy = -6;
      }
        if(ballObj.y - ballObj.rad <= 0){
            ballObj.dy *= -1
        }
        if(ballObj.x - ballObj.rad < 0 || ballObj.x + ballObj.rad > canvas.width ){
            ballObj.dx *= -1
        }

    }

