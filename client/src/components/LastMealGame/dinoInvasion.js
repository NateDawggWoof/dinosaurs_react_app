export const invasionGame = (canvas, playing) => {
    if (playing === false) {
        return;
    }
    // * Canvas states
    const ctx = canvas.getContext('2d');
        
    // * Get images
    const dinoBack = new Image(); dinoBack.src = '../image/dinoBack.png';
    const dinoLeft = new Image(); dinoLeft.src = '../image/dinoLeft.png';
    const dinoRight = new Image(); dinoRight.src = '../image/dinoRight.png';
    const meteorImg = new Image(); meteorImg.src = '../image/fallingMeteor.png';
    const meatImg = new Image(); meatImg.src = '../image/fallingMeat.png';

    // * States
    let score = 0;
    let healthBar = 3;
    let level = 1;
    let fallings_num = 15;

    // * Game elements
    let fallings = [];
    let dinoX = { type: 'left', rangeS: (canvas.width / 2) - 75, rangeE: (canvas.width / 2) };

    // ***********canvas background fnc
    function dinoBackground () { ctx.drawImage(dinoBack, 0, 0, canvas.width, canvas.height) }
    function drawText () {
        let life = ''
        if (healthBar === 3) life = '❤️❤️❤️'
        if (healthBar === 2) life = '❤️❤️'
        if (healthBar === 1) life = '❤️'
        ctx.font = '48px serif';
        ctx.fillText(`Score: ${score}`, 550, 50);
        ctx.fillText(`Life: ${life}`, 550, 100);
    }

    function setUpFallings () {
        for (let i = 0; i < fallings_num; i++) {
            let number = Math.round(Math.random())
            if (number === 0) {
                fallings.push({
                    triggered: false, type: 'meteor', img: meteorImg, width: 50, height: 150, x: Math.floor(Math.random() * 600), y: -150})}
            if (number === 1) {
                fallings.push({
                    triggered: false, type: 'meat', img: meatImg, width: 50, height: 60, x: Math.floor(Math.random() * 600), y: -60,})}
        }
    }

    function eachFalling (item, index) {
        
        function falling() {
            if (healthBar < 1) {
                alert('Game Over, play again?')
                score = 0;
                healthBar = 3;
                level = 1;
            };
            if (item.y < 600) {
                dinoBackground();
                drawText();
                for (let falling of fallings) {
                    if (falling.triggered === true) falling.y = 600;
                    ctx.drawImage(falling.img, falling.x, falling.y, falling.width, falling.height);
                }
                if (dinoX && dinoX.type === 'left') ctx.drawImage(dinoLeft, dinoX.rangeS, 470, 150, 165);
                if (dinoX && dinoX.type === 'right') ctx.drawImage(dinoRight, dinoX.rangeS - 75, 470, 150, 165);
                if ( item.triggered === false && item.type === 'meteor'
                    && (dinoX.rangeS < item.x && dinoX.rangeE > item.x) && (item.y > 350 && item.y < 400)) {
                    healthBar -= 1; item.triggered = true;
                }
                if ( item.triggered === false && item.type === 'meat'
                    && (dinoX.rangeS < item.x && dinoX.rangeE > item.x) && (item.y > 440 && item.y < 485)) {
                    score += 1; item.triggered = true;
                }
                item.y += Math.round((5 * level));
                requestAnimationFrame(falling)
            }
            cancelAnimationFrame(falling)
            if (fallings[fallings.length - 1].y >= 600) {
                console.log(level);
                fallings = [];
                if (level === 3.5) {
                    level = 3.5
                } else {
                    level += 0.5;
                }
                setUpFallings();
                fallingFnc();
            }
        }
        falling();
    }
    function fallingFnc () {
        fallings.forEach((falling, index) =>  {
            (function() {
                setTimeout(function() { eachFalling(falling, index) }, index * 350);
            })(index);
        })
    }


    // ************move dino fnc
    function dinoMouse () {
        canvas.addEventListener("mousemove", (e) => {
            if (healthBar < 1) return;
            if (e.movementX < 0) {
                dinoBackground();
                drawText();
                for (let falling of fallings) {
                    ctx.drawImage(falling.img, falling.x, falling.y, falling.width, falling.height);
                }
                ctx.drawImage(dinoLeft, e.offsetX - 75, 470, 150, 165);
                dinoX = { type: 'left', rangeS: e.offsetX - 75, rangeE: e.offsetX };
            }
            if (e.movementX > 0) {
                dinoBackground();
                drawText();
                for (let falling of fallings) {
                    ctx.drawImage(falling.img, falling.x, falling.y, falling.width, falling.height);
                }
                ctx.drawImage(dinoRight, e.offsetX - 75, 470, 150, 165);
                dinoX = { type: 'right', rangeS: e.offsetX , rangeE: e.offsetX + 75 };
            }
        });
    }

    setUpFallings();
    fallingFnc();
    dinoMouse();
}