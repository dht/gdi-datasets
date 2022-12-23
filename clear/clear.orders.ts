import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    appStateOrders: 'single',
    orderJournals: 'collection',
    orders: 'collection',
    coupons: 'groupedList',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
