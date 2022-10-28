import { faker } from '@faker-js/faker';
import { generateMany } from '../utils/generate';
import { writeData } from '../utils/code';

const run = async () => {
    let items;

    items = generateMany(30, generateOne);

    writeData(
        'campaigns', //
        items,
        '../nodes-seed/campaigns/node.campaigns.ts'
    );
};

export const generateOne = (index: number) => {
    const url = (domain: string) => `https://${domain}/${faker.datatype.uuid()}`; // prettier-ignore
    const randomClear = (value: string, percent: number) => percent > Math.random() ? '' : value; // prettier-ignore

    const id = String(index + 1);
    const title = faker.lorem.sentence();
    const startDate = faker.date.past().toISOString();
    const endDate = randomClear(faker.date.future().toISOString(), 0.5);
    const completedDate = randomClear(faker.date.past().toISOString(), 0.5);
    const description = faker.lorem.paragraph();
    const status = faker.helpers.arrayElement([
        'pending',
        'running',
        'completed',
        'archived',
    ]);
    const source = faker.helpers.arrayElement([
        'facebook',
        'instagram',
        'google',
        'other',
    ]);

    const budget = faker.datatype.number({ min: 100, max: 10000 });
    const budgetSpent = faker.datatype.number({ min: 0, max: budget });
    const metrics = faker.helpers.arrayElements([
        'traffic',
        'likes',
        'sales',
        'registrations',
        'leads',
    ]);

    const externalCampaignUrl = faker.internet.url();
    const destinationUrl = faker.internet.url();

    const metricsData = {
        traffic: faker.datatype.number({ min: 100, max: 10000 }),
    };

    const dataTags = ['thisWeek'];
    const tags = faker.helpers.arrayElements([
        'celebrity',
        'actor',
        'entrepreneur',
    ]);

    return {
        id,
        startDate,
        endDate,
        completedDate,
        title,
        description,
        status,
        source,
        tags,
        dataTags,
        budget,
        budgetSpent,
        metrics,
        externalCampaignUrl,
        destinationUrl,
        metricsData,
    };
};

run();
