import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStateMoney: 'single',
    moneyLines: 'collection',
    moneyBehaviors: 'collection',
};

seed(state, nodeTypes);
