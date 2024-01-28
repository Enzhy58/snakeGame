const onload = () => {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    const renderGame = () => {
        ctx.clearRect(0, 0, width, height);

        for(let y = 0; y < row; y += 1){
            for(let x = 0; x < row; x += 1) {
                
                state.snake.tail.forEach(s => {
                    if(s.x === x && s.y === y) {
                        ctx.fillStyle = colors.snakeBody;
                        ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
                        if(s.h){
                            ctx.fillStyle = colors.snakeHead;
                            ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
                        }
                    }
                });
            }
        }
    };

    renderGame();

    const onkeydown = (e) => {
        changeDirection(e.keyCode);
        moveSnake();
        renderGame();
    };

    document.addEventListener("keydown", onkeydown);

};

window.addEventListener("load", onload);