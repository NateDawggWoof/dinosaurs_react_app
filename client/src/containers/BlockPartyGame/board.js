import React, {useEffect, useRef} from 'react' 
import { BallMovement } from './ballMovement';
import data from './data'
import wallCollision from "./util/wallCollision";
import paddle from './paddle';
import Brick from './brick';
import BrickCollision from "./util/BrickCollision";
import PaddleHit from './util/PaddelHit';
import PlayerStats from './PlayerStats';
import AllBroken from './util/AllBroke';
import ResetBall from './util/ResetBall';


let bricks = []
let {ballObj, paddleProps, brickObj, player} = data


export default function Board () {
    const canvasRef = useRef(null);


    useEffect(() => {
        const render = () => {
        
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d');

            paddleProps.y = canvas.height - 30;


            let newBrickSet = Brick(player.level, bricks, canvas, brickObj, player)

            if(newBrickSet && newBrickSet.length > 0){
                bricks = newBrickSet
            }

     
        
            ctx.clearRect(0,0,canvas.width, canvas.height)


            PlayerStats(ctx, player, canvas)

            bricks.map((brick) =>{
                return brick.draw(ctx)
            });

            BallMovement(ctx,ballObj)

            AllBroken(bricks, player, canvas, ballObj)

            if (player.lives === 0) {
                alert("Game Over! Press ok to restart");
        
                player.lives = 5;
                player.level = 1;
                player.score = 0;
                ResetBall(ballObj, canvas, paddleProps);
                bricks.length = 0;
              }

            wallCollision(ballObj,canvas, player, paddleProps)

            let brickCollision;

            for (let i = 0; i < bricks.length; i++) {
              brickCollision = BrickCollision(ballObj, bricks[i]);
      
              if (brickCollision.hit && !bricks[i].broke) {
                // console.log(brickCollision);
                if (brickCollision.axis === "X") {
                  ballObj.dx *= -1;
                  bricks[i].broke = true;
                } else if (brickCollision.axis === "Y") {
                  ballObj.dy *= -1;
                  bricks[i].broke = true;
                }
                player.score += 10
           
              }
            }

            paddle(ctx, canvas, paddleProps)

            PaddleHit(ballObj, paddleProps)
            requestAnimationFrame(render)
        }
        render()
    },[])

    return (
        <div>
        <h1>Board</h1>
        <canvas 
        height="500px" 
        width="800px" 
        id="canvas" 
        ref={canvasRef}
        onMouseMove={(event) =>
          (paddleProps.x =
            event.clientX -
            (window.innerWidth < 900 ? 10 : (window.innerWidth * 20) / 200) -
            paddleProps.width / 2 -
            10)
        }
        height="500"
        width={
          window.innerWidth < 900
            ? window.innerWidth - 20
            : window.innerWidth - (window.innerWidth * 20) / 100
        }/>
        </div>
    )
    
    }

