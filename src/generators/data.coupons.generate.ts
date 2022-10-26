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

    items = generateMany(3, generateOne);

    writeData(
        'coupons', //
        items,
        '../nodes-seed/orders/node.coupons.ts'
    );
};

export const generateOne = (index: number) => {
    const randomClear = (value: string, percent: number) => percent > Math.random() ? '' : value; // prettier-ignore

    const id = String(index + 1);

    const dataTags = ['draft'];
    const tags = faker.helpers.arrayElements([
        'celebrity',
        'actor',
        'entrepreneur',
    ]);

    const couponType = faker.helpers.arrayElement([
        'discount',
        'freeShipping',
        'freeProduct',
        'freeGift',
    ]);

    let couponValue: Json = {};

    if (couponType === 'discount') {
        couponValue = {
            value: faker.datatype.number({ min: 1, max: 100 }),
            type: faker.helpers.arrayElement(['percent', 'amount']),
        };
    }

    const name = faker.commerce.productName();
    const startDate = formatDateWithTime(faker.date.recent());
    const endDate = randomClear(formatDateWithTime(faker.date.recent()), 0.5);
    const numberOfLines = faker.datatype.number({ min: 1, max: 6 });

    let distributionData: Json = {};

    const distribution = faker.helpers.arrayElement(['fixed', 'generate']);

    distributionData.distribution = distribution;

    if (distribution === 'fixed') {
        distributionData.amount = numberOfLines;
    } else if (distribution === 'generate') {
        const withCap = faker.datatype.boolean();

        if (withCap) {
            distributionData.cap = faker.datatype.number({ min: 1, max: 100 });
        }
    }

    const productId = randomClear(
        String(faker.datatype.number({ min: 1, max: 6 })),
        0.7
    );

    const items = generateManyArr(numberOfLines, generateCouponInstance);

    const image = generateImage(index);

    const status = faker.helpers.arrayElement([
        'active',
        'expired',
        'completed',
        'archived',
    ]);

    return {
        id,
        name,
        startDate,
        endDate,
        status,
        items,
        tags,
        ...distributionData,
        dataTags,
        imageUrl: image.imageUrl,
        imageThumbUrl: image.imageThumbUrl,
        ratio: image.ratio,
        couponType,
        couponValue,
        productId,
    };
};

const generateCouponInstance = (index: number) => {
    const wasUsed = faker.datatype.number({ min: 1, max: 10 }) <= 2;

    let data: Json = {};

    if (wasUsed) {
        data = {
            orderId: String(faker.datatype.number({ min: 1, max: 10 })),
            cartId: String(faker.datatype.number({ min: 1, max: 10 })),
            userId: String(faker.datatype.number({ min: 1, max: 10 })),
        };
    }

    return {
        id: String(index + 1),
        value: faker.datatype.uuid(),
        notes: faker.lorem.paragraph(),
        wasUsed,
        ...data,
    };
};

run();
