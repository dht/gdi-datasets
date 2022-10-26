import { faker } from '@faker-js/faker';
import { generateImage, generateMany } from '../utils/generate';
import { writeData } from '../utils/code';

const run = async () => {
    let items;

    items = generateMany(100, generateOne);

    writeData(
        'products', //
        items,
        '../nodes-seed/products/node.products.ts'
    );
};

export const generateOne = (index: number) => {
    const url = (domain: string) => `https://${domain}/${faker.datatype.uuid()}`; // prettier-ignore
    const randomClear = (value: string, percent: number) => percent > Math.random() ? '' : value; // prettier-ignore

    const id = String(index + 1);

    const dataTags = ['thisWeek'];
    const tags = faker.helpers.arrayElements([
        'celebrity',
        'actor',
        'entrepreneur',
    ]);

    const name = faker.commerce.productName();
    const category = faker.commerce.department();
    const description = faker.commerce.productDescription();
    const price = faker.commerce.price();
    const image = generateImage(index);

    const status = faker.helpers.arrayElement([
        'draft',
        'published',
        'archived',
    ]);

    return {
        id,
        name,
        description,
        status,
        imageUrl: image.imageUrl,
        imageThumbUrl: image.imageThumbUrl,
        ratio: image.ratio,
        items: [],
        price: parseFloat(price),
        priceCurrency: '$',
        category,
        dataTags,
        tags,
    };
};

run();
