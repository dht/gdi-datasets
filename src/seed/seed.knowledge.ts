import { appStateKnowledge } from '../nodes-seed/knowledge/node.appStateKnowledge';
import { linkCategories } from '../nodes-seed/knowledge/node.linkCategories';
import { links } from '../nodes-seed/knowledge/node.links';

import { seed } from '@gdi/store-seeder';

const state = {
    appStateKnowledge,
    linkCategories,
    links,
};

const nodeTypes: Record<string, NodeType> = {
    appStateKnowledge: 'single',
    linkCategories: 'collection',
    links: 'collection',
};

seed(state, nodeTypes);
