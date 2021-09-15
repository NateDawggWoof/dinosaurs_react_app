export default(ctx, canvas, paddleProps,)  => {
    class Paddle {
        constructor(x) {
            // this.image = new Image();
            // // this.image.src = "../../../public/03";
            // this.image.src = "https://ih1.redbubble.net/image.698605773.5710/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg";
            this.x = x;
            this.y = canvas.height - 30;
            this.height = 20
            this.width = paddleProps.width;
            this.colors = ["red", "#FFA62B"];
        }
        move() {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = this.broke ? "white" : this.colors[1];
            ctx.strokeStyle = this.broke ? "white" : "red";
            ctx.lineWidth = 1;
            ctx.fillStyle = this.broke ? "white" : this.colors[1];
            ctx.shadowBlur = 0
            ctx.shadowColor = "blue"
            ctx.strokeRect(this.x, this.y, this.width, this.height);
            ctx.fill();
            // ctx.drawImage(this.image,
            //               this.x = 100,
            //               this.y,
            //               this.width, 
            //               this.height)
        }
    }
    let paddle = new Paddle(paddleProps.x);
    paddle.move()
    if (paddleProps.x <= 0) {
        paddleProps.x = 0;
    } else if (paddleProps.x + paddleProps.width >= canvas.width){
        paddleProps.x = canvas.width - paddleProps.width
    }
}

// function startGame() {
//     myGamePiece = new component(30, 30, "smiley.gif", 10, 120, "image");
//     myGameArea.start();
//   }



//   function component(width, height, color, x, y, type) {
//     this.type = type;
//     if (type == "image") {
//       this.image = new Image();
//       this.image.src = color;
//     }
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;
//     this.x = x;
//     this.y = y;
//     this.update = function() {
//       ctx = myGameArea.context;
//       if (type == "image") {
//         ctx.drawImage(this.image,
//           this.x,
//           this.y,
//           this.width, this.height);
//       } else {
//         ctx.fillStyle = color;
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//       }
//     }
//   }