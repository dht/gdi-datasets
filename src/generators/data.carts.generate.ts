import { faker } from '@faker-js/faker';
import {
    generateImage,
    generateMany,
    generateManyArr,
} from '../utils/generate';
import { writeData } from '../utils/code';
import { formatDateWithTime } from '../utils/date';

const run = async () => {
    let items;

    items = generateMany(3, generateOne);

    writeData(
        'carts', //
        items,
        '../nodes-seed/carts/node.carts.ts'
    );
};

export const generateOne = (index: number) => {
    const randomClear = (value: string, percent: number) => percent > Math.random() ? '' : value; // prettier-ignore

    const id = String(index + 1);

    const dataTags = ['draft'];
    const tags = faker.helpers.arrayElements([
        'celebrity',
        'actor',
        'entrepreneur',
    ]);

    const name = faker.commerce.productName();
    const startDate = formatDateWithTime(faker.date.recent());
    const endDate = randomClear(formatDateWithTime(faker.date.recent()), 0.5);
    const userId = String(faker.datatype.number({ max: 10 }));
    const numberOfLines = faker.datatype.number({ min: 1, max: 6 });

    const items = generateManyArr(numberOfLines, generateProductLine);

    const image = generateImage(index);

    const status = faker.helpers.arrayElement([
        'draft',
        'completed',
        'archived',
        'abandoned',
    ]);

    return {
        id,
        name,
        startDate,
        endDate,
        userId,
        status,
        items,
        tags,
        dataTags,
        imageUrl: image.imageUrl,
        imageThumbUrl: image.imageThumbUrl,
        ratio: image.ratio,
    };
};

const generateProductLine = (index: number) => {
    return {
        id: String(index + 1),
        productId: faker.datatype.number({ max: 10 }),
        price: faker.datatype.number({ min: 9, max: 1200 }),
        quantity: faker.datatype.number({ min: 1, max: 10 }),
        notes: faker.lorem.sentence(),
        dateAdded: formatDateWithTime(faker.date.recent()),
    };
};

run();
