import { faker } from '@faker-js/faker';
import { generateMany } from '../utils/generate';
import { writeData } from '../utils/code';
import { formatDateWithTime } from '../utils/date';

const run = async () => {
    let items;

    items = generateMany(10, generateOne);

    writeData(
        'reminders', //
        items,
        '../nodes-seed/events/node.reminders.ts'
    );
};

export const generateOne = (index: number) => {
    const url = (domain: string) => `https://${domain}/${faker.datatype.uuid()}`; // prettier-ignore
    const randomClear = (value: string, percent: number) => percent > Math.random() ? '' : value; // prettier-ignore

    const id = String(index + 1);
    const title = faker.lorem.sentence();
    const description = faker.lorem.paragraphs(3);
    const date = formatDateWithTime(faker.date.future());
    const itemType = faker.helpers.arrayElement([
        'person',
        'event',
        'lead',
        'sale',
        'order',
        'ticket',
    ]);
    const itemId = String(faker.datatype.number({ min: 1, max: 1000 }));
    const isCompleted = faker.datatype.boolean();

    return {
        id,
        title,
        description,
        date,
        itemType,
        itemId,
        isCompleted,
    };
};

run();
