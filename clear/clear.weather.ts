import { clear } from './_base';

const nodeTypes: Record<string, NodeType> = {
    weatherLocations: 'collection',
    weatherHourlyItems: 'collection',
    weatherDailyItems: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
