import { weatherDailyItems } from '../nodes-seed/weather/node.weatherDailyItems';
import { weatherHourlyItems } from '../nodes-seed/weather/node.weatherHourlyItems';
import { weatherLocations } from '../nodes-seed/weather/node.weatherLocations';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

import { config } from 'dotenv-flow';

const CLEAR = false;

config();

const destination = process.env.DESTINATION || 'FIREBASE';

if (destination === 'FIREBASE') {
    initFirebase();
}

const state = {
    weatherDailyItems,
    weatherHourlyItems,
    weatherLocations,
};

const nodeTypes: Record<string, NodeType> = {
    weatherLocations: 'collection',
    weatherHourlyItems: 'collection',
    weatherDailyItems: 'collection',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
