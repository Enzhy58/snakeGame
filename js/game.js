const onload = () => {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    const _renderSnake = (snake, x, y) => {
        snake.tail.forEach(s => {
            if (s.x === x && s.y === y) {
                ctx.fillStyle = colors.snakeBody;
                ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
                if (s.h) {
                    ctx.fillStyle = colors.snakeHead;
                    ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
                }
            }
        });
    };

    const _renderFood = (food, x, y) => {
        if (food.apples.x === x && food.apples.y === y) {
            ctx.fillStyle = colors.apples;
            ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
        }
    };

    const _renderMap = (map, x, y) => {
        map.cords.forEach(m => {
            if (m.x === x && m.y === y) {
                ctx.fillStyle = colors.wall;
                ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
            }
        });
    };

    const renderGame = () => {
        ctx.clearRect(0, 0, width, height);

        const { snake, food, maps, level } = state;

        for (let y = 0; y < row; y += 1) {
            for (let x = 0; x < row; x += 1) {

                _renderSnake(snake, x, y);

                _renderFood(food, x, y);

                _renderMap(maps[`map${level}`], x, y);


            }
        }
    };

    renderGame();

    let startTime      = 0,
        currentTime    = 0,
        time           = 0,
        currentSecond  = 0;

    animateRAFInterval.start(() => {

        if(startTime === 0) {
            startTime = new Date().getTime();
        }

        currentTime = new Date().getTime();
        time = currentTime - startTime;
        currentSecond = Math.floor(time / state.snake.speed);

        if (currentSecond > 0) {
            startTime = 0;

            moveSnake();
            addNewFood();
            renderGame();

        }
    });

    const onkeydown = (e) => {
        changeDirection(e.keyCode);

    };

    document.addEventListener("keydown", onkeydown);

};

window.addEventListener("load", onload);