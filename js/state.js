const state = {
    snake: {
        tail: [
            { x: 1, y: 1, d: "right", h: false },
            { x: 2, y: 1, d: "right", h: false },
            { x: 3, y: 1, d: "right", h: false },
            { x: 4, y: 1, d: "right", h: true }
        ],
        direction: "right"
    },
    food: {
        didAte: true,
        apples: { x: 5, y: 10}
    }
    level: 4,
    maps: {
        "map1": map1,
        "map2": map2,
        "map3": map3,
        "map4": map4
    }
};