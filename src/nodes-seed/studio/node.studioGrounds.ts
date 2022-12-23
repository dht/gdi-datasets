export const studioGrounds = {
    g1: {
        id: 'g1',
        identifier: 'ground-1',
        type: 'color',
        boardId: 'ville',
        height: 60,
        width: 60,
        subdivisions: 10,
        position: {
            x: -2.32,
            y: 0,
            z: -3.65,
        },
        values: {
            specularColor: [255, 255, 255],
            diffuseColor: [255, 255, 255],
        },
        receiveShadows: true,
    },
    g2: {
        id: 'g2',
        identifier: 'ground-2',
        type: 'grid',
        boardId: 'ville',
        height: 60,
        width: 60,
        subdivisions: 10,
        position: {
            x: -2.32,
            y: 0.2,
            z: -3.65,
        },
        values: {
            majorUnitFrequency: 4,
            gridRatio: 0.5,
            lineColor: [0.5, 0.5, 0.5],
            opacity: 0.2,
        },
    },
    g3: {
        id: 'g3',
        identifier: 'ground-3',
        type: 'texture',
        boardId: 'ville',
        height: 60,
        width: 60,
        subdivisions: 10,
        position: {
            x: -2.32,
            y: 0.1,
            z: -3.65,
        },
        values: {
            diffuseColor: [1, 0.3, 0],
            textureUrl:
                'https://raw.githubusercontent.com/dht/gdi-assets/main/texture-grass-1c.png',
            uScale: 24,
            vScale: 24,
        },
    },
};
