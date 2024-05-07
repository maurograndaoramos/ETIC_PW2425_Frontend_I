window.onload = () => {

    let animeID = null;
    const startButton = document.getElementById('start-button');
    if (startButton) {
        startButton.onclick = () => {
            if(animeID) {
                cancelAnimationFrame(animeID);
                animeID = null;
                startButton.innerText = 'START ANIMATION';
            } else {
                drawArrow(0, 0, vector);
                startButton.innerText = 'STOP ANIMATION';
            }
        }
    } else {
        console.error("start-animation button not found");
    }

    const restartButton = document.getElementById('restart-button');
    if (restartButton) {
        restartButton.onclick = () => {
            if(animeID) {
                cancelAnimationFrame(animeID);
                animeID = null;
                vector.x = 0;
                vector.y = 0;
                drawArrow(0, 0, vector);
                startButton.innerText = 'STOP ANIMATION';
            }
            else {
                drawArrow(0, 0, vector);
                startButton.innerText = 'STOP ANIMATION';
            }
        }
    } else {
        console.error("restart-animation button not found");
    }

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;

    console.log('width:', width);
    console.log('height:', height);

    // const colors = ['green', 'yellow', 'blue'];

    // const blockWidth = width / colors.length;

    // for (let i = 0; i < colors.length; i++) {
    //     ctx.fillStyle = colors[i];
    //     ctx.fillRect(blockWidth*i, 0, blockWidth, height);
    // }

    // ctx.strokeStyle = 'red';
    // ctx.lineWidth = 5;
    // ctx.beginPath();
    // ctx.moveTo((blockWidth*1.5), 50);
    // ctx.lineTo((blockWidth*1.5), 200);
    // ctx.stroke();

    // ctx.strokeStyle = 'red';
    // ctx.lineWidth = 5;
    // ctx.beginPath();
    // ctx.moveTo((blockWidth*1)+20, height/5);
    // ctx.bezierCurveTo(0, height/3, width, height/3, (blockWidth*2)-20, height/5);
    // ctx.stroke();

    // ctx.strokeStyle = 'red';
    // ctx.lineWidth = 5;
    // ctx.beginPath();
    // ctx.moveTo((blockWidth*1),);
    // ctx.bezierCurveTo(width/2, height, width/2, 0, width, height);
    // ctx.stroke();

    function drawBlocksAndVector(ctx, width, height) {
        const colors = ['green', 'yellow', 'blue', 'red'];
        const blockWidth = width / colors.length;
    
        for (let i = 0; i < colors.length; i++) {
            ctx.fillStyle = colors[i];
            ctx.fillRect(blockWidth*i, 0, blockWidth, height);
        }
        
        const vector = {
            x: 0,
            y: 0
        };

        return vector;
    }
    

    const drawArrow = (x, y) => {
        ctx.strokeStyle = 'orange';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(vector.x, vector.y*2, vector.x, vector.y*4, vector.x*5, vector.x);
        // ctx.lineTo(vector.x, vector.y);
        ctx.stroke();

        vector.x += 1;
        vector.y += 0.75;

       animeID = requestAnimationFrame(() => drawArrow(x, y, vector));
    }

    const vector = drawBlocksAndVector(ctx, width, height);
    drawArrow(0, 0, vector);
}