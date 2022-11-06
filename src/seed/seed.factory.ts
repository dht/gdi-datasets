import { appStateFactory } from '../nodes-seed/factory/node.appStateFactory';
import { articleCategories } from '../nodes-seed/factory/node.articleCategories';
import { articles } from '../nodes-seed/factory/node.articles';
import { currentIdsFactory } from '../nodes-seed/factory/node.currentIdsFactory';
import { layouts } from '../nodes-seed/factory/node.layouts';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';
import { config } from 'dotenv-flow';

config();

const destination = process.env.DESTINATION || 'FIREBASE';

if (destination === 'FIREBASE') {
    initFirebase();
}

const state = {
    appStateFactory,
    articleCategories,
    articles,
    currentIdsFactory,
    layouts,
};

const nodeTypes: Record<string, NodeType> = {
    appStateFactory: 'single',
    layouts: 'groupedList',
    articles: 'collection',
    articleCategories: 'collection',
};

seed(state, nodeTypes, destination);
