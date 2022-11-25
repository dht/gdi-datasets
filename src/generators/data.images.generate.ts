import { faker } from '@faker-js/faker';
import { generateMany } from '../utils/generate';
import { writeData } from '../utils/code';

const count = 100;

const run = async () => {
    let items;

    items = generateMany(count, generateOne);

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

    let width = faker.datatype.number({ min: 800, max: 1600 });
    let height = faker.datatype.number({ min: 500, max: 1200 });

    if (id === '11') {
        width = 1557;
        height = 882;
    }
    const ratio = width / height;

    const widthThumb = 200;
    const heightThumb = Math.round(200 / ratio);

    const date = ts() - index * 1000;

    return {
        id,
        _createdDate: date,
        _modifiedDate: date,
        title: faker.lorem.sentence(),
        imageUrl: `https://picsum.photos/seed/${id}/${width}/${height}`,
        imageThumbUrl: `https://picsum.photos/seed/${id}/${widthThumb}/${heightThumb}`,
        tags: faker.helpers.arrayElements(tags),
        dataTags: faker.helpers.arrayElements(dataTags),
        ratio: width / height,
    };
};

const ts = () => new Date().getTime();

run();
