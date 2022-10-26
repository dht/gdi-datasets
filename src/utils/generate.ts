import { faker } from '@faker-js/faker';
import chalk from 'chalk';

type Json = Record<string, any>;

type Item = Json & {
    id: string;
};

export const generateMany = <T extends Item>(
    count: number,
    generateOne: (index: number) => T
) => {
    process.stdout.write(
        chalk.cyan(`Generating ${chalk.magenta(count)} items... `)
    );
    const items: Record<string, any> = {};

    [...new Array(count)].forEach((_i, index) => {
        const item = generateOne(index);
        items[item.id] = item;
    });

    console.log(chalk.green('done'));

    return items;
};

export const generateManyArr = <T extends Item>(
    count: number,
    generateOne: (index: number) => T
): T[] => {
    return [...new Array(count)].map((_i, index) => {
        return generateOne(index);
    });
};

const tags = ['nature', 'geek', 'background', 'team', 'friend', 'people'];
const dataTags = ['thisWeek'];

type ImageParams = {
    width: number;
    height: number;
    widthThumb: number;
};

type UrlMethod = (id: string, width: number, height: number) => string;

export const generateImageBase = (
    index: number,
    params: ImageParams,
    urlMethod: UrlMethod
): IImage => {
    const { width, height, widthThumb } = params;

    const ratio = width / height;

    const heightThumb = Math.round(widthThumb / ratio);
    const id = String(index + 1);

    return {
        id: String(index + 1),
        title: faker.lorem.sentence(),
        imageUrl: urlMethod(id, width, height),
        imageThumbUrl: urlMethod(id, widthThumb, heightThumb),
        tags: faker.helpers.arrayElements(tags),
        dataTags: faker.helpers.arrayElements(dataTags),
        ratio: width / height,
    };
};

export const generateImage = (index: number) => {
    return generateImageBase(
        index,
        {
            width: faker.datatype.number({ min: 800, max: 1600 }),
            height: faker.datatype.number({ min: 500, max: 1200 }),
            widthThumb: 200,
        },
        (id, width, height) => {
            return `https://picsum.photos/seed/${id}/${width}/${height}`;
        }
    );
};

export const generateAvatar = (index: number) => {
    return generateImageBase(
        index,
        {
            width: 600,
            height: 150,
            widthThumb: 150,
        },
        (id, width, _height) => {
            return `https://i.pravatar.cc/${width}?u=${id}`;
        }
    );
};
