import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    appStateCampaigns: 'single',
    campaigns: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
