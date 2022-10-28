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

    items = generateMany(30, generateOne);

    writeData(
        'pendingComments', //
        items,
        '../nodes-seed/comments/node.pendingComments.ts'
    );

    items = generateMany(30, generateOne);

    writeData(
        'comments', //
        items,
        '../nodes-seed/comments/node.comments.ts'
    );
};

export const generateOne = (index: number) => {
    const url = (domain: string) => `https://${domain}/${faker.datatype.uuid()}`; // prettier-ignore
    const randomClear = (value: string, percent: number) => percent > Math.random() ? '' : value; // prettier-ignore

    const id = String(index + 1);
    const title = faker.lorem.sentence();
    const date = faker.date.past().toISOString();
    const content = faker.lorem.paragraph();
    const parentId = faker.datatype.uuid();
    const userId = faker.datatype.uuid();

    const status = faker.helpers.arrayElement([
        'pending',
        'approved',
        'rejected',
    ]);

    const itemType = faker.helpers.arrayElement([
        'article',
        'product',
        'template',
    ]);
    const itemId = faker.datatype.uuid();
    const upVotes = faker.datatype.number({ min: 0, max: 100 });
    const downVotes = faker.datatype.number({ min: 0, max: 50 });
    const itemsCount = faker.datatype.number({ min: 0, max: 3 });

    const items = generateManyArr(itemsCount, generateCommentFeedback);

    const dataTags = ['thisWeek'];
    const tags = faker.helpers.arrayElements([
        'celebrity',
        'actor',
        'entrepreneur',
    ]);

    return {
        id,
        date,
        title,
        content,
        parentId,
        userId,
        status,
        itemType,
        itemId,
        tags,
        dataTags,
        upVotes,
        downVotes,
        items,
    };
};

const generateCommentFeedback = (index: number) => {
    const id = String(index + 1);

    const userId = faker.datatype.uuid();

    const isUp = Math.random() > 0.5;

    return {
        id,
        userId,
        upVote: isUp,
        downVote: !isUp,
    };
};

run();
