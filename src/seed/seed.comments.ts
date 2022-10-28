import { appStateComments } from '../nodes-seed/comments/node.appStateComments';
import { comments } from '../nodes-seed/comments/node.comments';
import { pendingComments } from '../nodes-seed/comments/node.pendingComments';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

initFirebase();

const state = {
    appStateComments,
    comments,
    pendingComments,
};

const nodeTypes: Record<string, NodeType> = {
    appStateComments: 'single',
    comments: 'groupedList',
    pendingComments: 'groupedList',
};

seed(state, nodeTypes);
