import { faker } from '@faker-js/faker';
import { generateMany } from '../utils/generate';
import { writeData } from '../utils/code';

const run = async () => {
    let items;

    items = generateMany(30, generateOne);

    writeData(
        'libraryImages',
        items,
        '../nodes-seed/mixer/node.libraryImages.ts'
    );
};

const tags = ['nature', 'geek', 'background', 'team', 'friend', 'people'];
const dataTags = ['thisWeek'];

export const generateOne = (index: number) => {
    const id = String(index + 1);

    const width = faker.datatype.number({ min: 800, max: 1600 });
    const height = faker.datatype.number({ min: 500, max: 1200 });

    const ratio = width / height;

    const widthThumb = 200;
    const heightThumb = Math.round(200 / ratio);

    return {
        id,
        title: faker.lorem.sentence(),
        imageUrl: `https://picsum.photos/seed/${id}/${width}/${height}`,
        imageThumbUrl: `https://picsum.photos/seed/${id}/${widthThumb}/${heightThumb}`,
        tags: faker.helpers.arrayElements(tags),
        dataTags: faker.helpers.arrayElements(dataTags),
        ratio: width / height,
    };
};

run();
