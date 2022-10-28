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
        'leads', //
        items,
        '../nodes-seed/leads/node.leads.ts'
    );
};

export const generateOne = (index: number) => {
    const url = (domain: string) => `https://${domain}/${faker.datatype.uuid()}`; // prettier-ignore
    const randomClear = (value: string, percent: number) => percent > Math.random() ? '' : value; // prettier-ignore

    const id = String(index + 1);
    const title = faker.lorem.sentence();
    const leadName = faker.name.fullName();
    const leadCompanyName = faker.company.name();
    const leadEmail = randomClear(faker.internet.email(), 0.5);
    const leadPhoneNumber = randomClear(faker.phone.number(), 0.3);
    const leadNotes = randomClear(faker.lorem.paragraph(), 0.5);
    const source = faker.helpers.arrayElement([
        'campaign',
        'landingPage',
        'manual',
        'other',
    ]);
    const sourceId = faker.datatype.uuid();
    const status = faker.helpers.arrayElement([
        'active',
        'inactive',
        'lost',
        'sale',
        'pending',
    ]);

    const statusDate = faker.date.past().toISOString();
    const endDate = randomClear(faker.date.future().toISOString(), 0.5);
    const description = faker.lorem.paragraph();
    const personId = faker.datatype.uuid();
    const nextVisitDate = faker.date.future().toISOString();

    const itemsCount = faker.datatype.number({ min: 0, max: 10 });
    const items = generateManyArr(itemsCount, generateJournal);

    const dataTags = ['thisWeek'];
    const tags = faker.helpers.arrayElements([
        'celebrity',
        'actor',
        'entrepreneur',
    ]);

    return {
        id,
        title,
        leadName,
        leadCompanyName,
        leadEmail,
        leadPhoneNumber,
        leadNotes,
        source,
        sourceId,
        status,
        statusDate,
        endDate,
        description,
        personId,
        nextVisitDate,
        items,
        tags,
        dataTags,
    };
};

const generateJournal = (index: number) => {
    const id = String(index + 1);

    const entryType = faker.helpers.arrayElement(['contact', 'comment']);

    const entryDate = faker.date.past().toISOString();
    const description = faker.lorem.paragraph();
    const status = faker.helpers.arrayElement([
        'active',
        'inactive',
        'lost',
        'sale',
        'pending',
    ]);

    return {
        id,
        entryType,
        entryDate,
        description,
        status,
    };
};

run();
