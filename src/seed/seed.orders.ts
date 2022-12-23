import { appStateOrders } from '../nodes-seed/orders/node.appStateOrders';
import { orderJournals } from '../nodes-seed/orders/node.orderJournals';
import { orders } from '../nodes-seed/orders/node.orders';
import { coupons } from '../nodes-seed/orders/node.coupons';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

import { config } from 'dotenv-flow';
import { parseData } from '../utils/parseData';

const CLEAR = false;

config();

const destination = process.env.DESTINATION || 'FIREBASE';

if (destination === 'FIREBASE') {
    initFirebase();
}

const state = parseData({
    appStateOrders,
    orderJournals,
    orders,
    coupons,
});

const nodeTypes: Record<string, any> = {
    appStateOrders: 'single',
    orderJournals: 'collection',
    orders: 'collection',
    coupons: 'groupedList',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
