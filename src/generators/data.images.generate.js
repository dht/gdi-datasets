const fs = require('fs');
const { faker } = require('@faker-js/faker');

const run = async () => {
    let items;

    items = generateMany(30);

    fs.writeFileSync(
        './data.images.ts',
        'export const libraryImages = ' + JSON.stringify(items, null, 4)
    );
};

const generateMany = (count) => {
    const items = {};

    [...new Array(count)].map((_i, index) => {
        const item = generate(index);
        items[item.id] = item;
    });

    return items;
};

const tags = ['nature', 'geek', 'background', 'team', 'friend', 'people'];

export const generate = (index) => {
    const id = String(index + 1);

    const width = rnd(800, 1600);
    const height = rnd(500, 1200);

    const ratio = width / height;

    const widthThumb = 200;
    const heightThumb = Math.floor(200 / ratio);

    return {
        id,
        title: faker.lorem.sentence(),
        imageUrl: `https://picsum.photos/seed/${id}/${width}/${height}`,
        imageThumbUrl: `https://picsum.photos/seed/${id}/${widthThumb}/${heightThumb}`,
        tags: faker.helpers.arrayElements(tags),
        ratio: width / height,
        isFavorite: faker.datatype.number({ min: 0, max: 10 }) < 4,
        isTemporary: faker.datatype.number({ min: 0, max: 10 }) < 2,
    };
};

const rnd = (min, max) => Math.floor(min + Math.random() * (max - min));

run();
