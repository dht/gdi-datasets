import { appStateDevtools } from '../nodes-seed/devtools/node.appStateDevtools';
import { nodes } from '../nodes-seed/devtools/node.nodes';
import { stores } from '../nodes-seed/devtools/node.stores';
import { seed } from '@gdi/store-seeder';

const state = {
    appStateDevtools,
    nodes,
    stores,
};

const nodeTypes: Record<string, NodeType> = {
    appStateDevtools: 'single',
    stores: 'collection',
    nodes: 'collection',
};

seed(state, nodeTypes);
