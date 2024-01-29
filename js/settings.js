let width, height, board, row, ceil, colors;

width = 600;

board = {
    width,
    height: 60,
    font: "normal 25px Arial, sans-serif",
    textScore: {
        x: 80,
        y: 19
    },
    textLevel: {
        x: 500,
        y: 19
    },
    apples: {
        x: 15,
        y: 15
    }
};

height = width + board.height;

popup = {
    width: 200,
    height: 100,
    font: "normal 25px Arial, sans-serif"
};

ceil = 30;
row = width / ceil;

colors = {
    snakeHead: "#00ffff",
    snakeBody: "#1fb9dd",
    apples: "#d86464",
    wall: "#425870",
    text: "#000000",
    popup: "#e0cd1e"
};

amountLevels = 4;