import { faker } from '@faker-js/faker';
import { generateMany } from '../utils/generate';
import { writeData } from '../utils/code';
import { formatDateWithTime } from '../utils/date';

const run = async () => {
    let items;

    items = generateMany(3, generateOne);

    writeData(
        'orderJournals', //
        items,
        '../nodes-seed/orders/node.orderJournals.ts'
    );
};

export const generateOne = (index: number) => {
    const id = String(index + 1);

    const title = faker.lorem.word();
    const entryDate = formatDateWithTime(faker.date.recent());
    const orderId = String(faker.datatype.number({ max: 10 }));

    return {
        id,
        orderId,
        title,
        entryDate,
    };
};

run();
