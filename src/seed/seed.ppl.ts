import { appStatePpl } from '../nodes-seed/ppl/node.appStatePpl';
import { persons } from '../nodes-seed/ppl/node.persons';
import { seed } from '@gdi/store-seeder';

const state = {
    appStatePpl,
    persons,
};

const nodeTypes: Record<string, NodeType> = {
    appStatePpl: 'single',
    persons: 'collection',
};

seed(state, nodeTypes);
