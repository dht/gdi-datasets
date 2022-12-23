export const studioBoards = {
    ville: {
        id: 'ville',
        identifier: 'ville',
        name: 'Ville',
        backgroundType: 'color',
        backgroundValues: {
            color: [0.97, 0.97, 0.97, 1],
        },
        useRightHandedSystem: true,
        flyIn: {
            radius: 33,
            alpha: 0.5,
            beta: 1,
            target: [0, 0, 0],
        },
    },
    earth: {
        id: 'earth',
        identifier: 'earth',
        name: 'Earth',
        backgroundType: 'triangles',
        backgroundValues: {
            paletteIndex: 0,
        },
        useRightHandedSystem: true,
    },
    planet: {
        id: 'planet',
        identifier: 'planet',
        name: 'Planet',
        backgroundType: 'triangles',
        backgroundValues: {
            paletteIndex: 22,
        },
        useRightHandedSystem: true,
    },
};
