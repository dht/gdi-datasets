const fs = require('fs');
const { faker } = require('@faker-js/faker');

const run = async () => {
    let items;

    items = generateMany(30);

    fs.writeFileSync(
        './data.images.ts',
        'export const ppl = ' + JSON.stringify(items, null, 4)
    );
};

const generateMany = (count) => {
    const items = {};

    [...new Array(count)].map((_i, index) => {
        const item = generate(index);
        items[item.id] = item;
    });

    return items;
};

const url = (domain) => `https://${domain}/${faker.datatype.uuid()}`;
const randomClear = (value, percent) => percent > Math.random() ? '' : value; // prettier-ignore

export const generate = (index) => {
    const id = String(index + 1);
    const number = faker.datatype.number({ min: 1, max: 1000 });
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const key = `${firstName}_${lastName}_${number}`;
    const imageUrl = `https://i.pravatar.cc/600?u=${index}`;
    const thumbUrl = `https://i.pravatar.cc/150?u=${index}`;
    const images = [`https://i.pravatar.cc/600?u=${index}`];
    const dateOfBirth = faker.date.birthdate();
    const socialTwitterUrl = randomClear(url('twitter.com'), 0.5);
    const socialFacebookUrl = randomClear(url('facebook.com'), 0.6);
    const socialInstagramUrl = randomClear(url('instagram.com'), 0.7);
    const socialLinkedInUrl = randomClear(url('linkedin.com'), 0.9);
    const pinterestUrl = randomClear(url('pinterest.com'), 0.95);
    const wikipediaUrl = randomClear(url('wikipedia.org'), 0.8);
    const website = randomClear(faker.internet.url(), 0.9);
    const phoneNumber = faker.phone.number();
    const company = faker.company.name();
    const jobTitle = faker.commerce.department();
    const netWorth = faker.datatype.number({ min: 1, max: 500000 });
    const email = faker.internet.email();
    const shortDescription = faker.lorem.sentence();
    const notes = faker.lorem.paragraphs(3);
    const height = faker.datatype.float({ min: 1.5, max: 2.2 });
    const tier = faker.datatype.number({ min: 1, max: 5 });
    const category = faker.helpers.arrayElement([
        'global',
        'local',
        'family',
        'friends',
    ]);
    const gender = faker.helpers.arrayElement(['male', 'female', 'other']);
    const nationality = faker.helpers.arrayElement(['american', 'israeli']);

    const tags = faker.helpers.arrayElements([
        'celebrity',
        'actor',
        'entrepreneur',
    ]);

    return {
        id,
        key,
        firstName,
        lastName,
        dateOfBirth,
        imageUrl,
        thumbUrl,
        shortDescription,
        socialTwitterUrl,
        socialFacebookUrl,
        socialInstagramUrl,
        socialLinkedInUrl,
        images,
        website,
        pinterestUrl,
        phoneNumber,
        wikipediaUrl,
        nationality,
        company,
        netWorth,
        height,
        jobTitle,
        notes,
        email,
        tags,
        tier,
        gender,
        category,
    };
};

run();
