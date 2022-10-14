import { appStateDeb } from '../nodes-seed/deb/node.appStateDeb';
import { highlights } from '../nodes-seed/deb/node.highlights';
import { postAuthors } from '../nodes-seed/deb/node.postAuthors';
import { posts } from '../nodes-seed/deb/node.posts';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

initFirebase();

const state = {
    appStateDeb,
    highlights,
    postAuthors,
    posts,
};

const nodeTypes: Record<string, NodeType> = {
    appStateDeb: 'single',
    posts: 'groupedList',
    highlights: 'collection',
    postAuthors: 'collection',
};

seed(state, nodeTypes);
