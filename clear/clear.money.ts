import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    appStateMoney: 'single',
    moneyLines: 'collection',
    moneyBehaviors: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
