import { clear } from './_base';

const nodeTypes: Record<string, NodeType> = {
    appStateOrders: 'single',
    orderJournals: 'collection',
    orders: 'collection',
    coupons: 'groupedList',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
