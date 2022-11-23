import { faker } from '@faker-js/faker';

export const parseData = (data: Json) => {
    const parseItem = (key: string, value: string) => {
        if (typeof value === 'string') {
            return parseString(key, value);
        } else if (typeof value === 'object') {
            return parseData(value);
        } else {
            return value;
        }
    };

    return Object.keys(data).reduce((acc, key) => {
        const value = data[key];

        if (Array.isArray(value)) {
            acc[key] = value.map((item) => parseItem(key, item));
        } else {
            acc[key] = parseItem(key, value);
        }

        return acc;
    }, {} as Json);
};

function parseString(_key: string, value: string) {
    const regexLorem = /{lorem-([\d]+)-?([\d]+)?}/g;
    const matchLorem = regexLorem.exec(value);

    if (matchLorem) {
        const [, min, max] = matchLorem;

        const length = faker.datatype.number({
            min: Number(min),
            max: Number(max ?? min),
        });

        return faker.lorem.sentence(length);
    }

    return value;
}
