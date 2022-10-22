import { faker } from '@faker-js/faker';
import { generateMany } from '../utils/generate';
import { writeData } from '../utils/code';

const run = async () => {
    let items;

    items = generateMany(3, generateOne);

    writeData(
        'articles', //
        items,
        '../nodes-seed/factory/node.articles.ts'
    );
};

const generateOne = (index: number) => {
    const id = String(index + 1);

    const width = faker.datatype.number({ min: 800, max: 1600 });
    const height = faker.datatype.number({ min: 500, max: 1200 });

    const ratio = width / height;

    const widthThumb = 200;
    const heightThumb = Math.floor(200 / ratio);
    const tags = ['nature', 'geek', 'background', 'team', 'friend', 'people'];
    const dataTags = ['2085-10-10'];

    return {
        id,
        title: faker.lorem.sentence(),
        imageUrl: `https://picsum.photos/seed/${id}/${width}/${height}`,
        imageThumbUrl: `https://picsum.photos/seed/${id}/${widthThumb}/${heightThumb}`,
        ratio: width / height,
        imageDescription: faker.lorem.paragraph(),
        imageSource: faker.company.name(),
        authorName: faker.name.fullName(),
        publishDate: faker.date.recent(),
        lastPublishDate: faker.date.recent(),
        lastSaveDate: faker.date.recent(),
        categoryBreadcrumbs: [
            faker.commerce.department(),
            faker.commerce.department(),
            faker.commerce.department(),
        ].join('>'),
        comments: faker.datatype.number(10),
        content: faker.lorem.paragraphs(2),
        intro: faker.lorem.paragraphs(1),
        isPublished: faker.datatype.boolean(),
        linkPath: faker.lorem.sentence().replace(' ', '-'),
        slogan: faker.lorem.sentence(),
        status: faker.helpers.arrayElement(['draft', 'published', 'archived']),
        tags: faker.helpers.arrayElements(tags),
        dataTags: faker.helpers.arrayElements(dataTags),
        minutesSpentEditing: faker.datatype.number(10),
        wordCount: faker.datatype.number(1000),
    };
};

run();
