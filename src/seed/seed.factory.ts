import { appStateKnowledge } from '../nodes-seed/knowledge/node.appStateKnowledge';
import { linkCategories } from '../nodes-seed/knowledge/node.linkCategories';
import { links } from '../nodes-seed/knowledge/node.links';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

initFirebase();

const state = {
    appStateKnowledge,
    linkCategories,
    links,
};

const nodeTypes: Record<string, NodeType> = {
    appStateFactory: 'single',
    layouts: 'groupedList',
    articles: 'collection',
    articleCategories: 'collection',
};

seed(state, nodeTypes);
