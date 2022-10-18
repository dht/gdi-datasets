import { faker } from '@faker-js/faker';
import { generateMany } from '../utils/generate';
import { writeData } from '../utils/code';
import icons from '../resources/icons.json';

const run = async () => {
    let items;

    items = generateMany(50, generateOne);

    writeData(
        'inboxMessages', //
        items,
        '../nodes-seed/dashboard/node.inboxMessages.ts'
    );
};

export const generateOne = (index: number) => {
    const id = String(index + 1);
    const date = faker.date.recent();
    const title = faker.lorem.sentence();
    const description = faker.lorem.paragraphs(3);
    const color = faker.color.rgb();
    const iconName = faker.helpers.arrayElement(icons).name;
    const messageType = faker.helpers.arrayElement(['info']);
    const itemId = faker.datatype.uuid().substring(0, 4);
    const href = Math.random() > 0.7 ? faker.internet.url() : '';
    const itemType = faker.helpers.arrayElement([
        'article',
        'person',
        'event',
        'page',
        'sale',
        'link',
        'post',
        'ticket',
    ]);

    return {
        id,
        date,
        title,
        description,
        color,
        iconName,
        messageType,
        itemType,
        itemId,
        href,
    };
};

run();
