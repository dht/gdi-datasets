import { authState } from '../nodes-seed/auth/node.authState';
import { me } from '../nodes-seed/auth/node.me';
import { roles } from '../nodes-seed/auth/node.roles';
import { users } from '../nodes-seed/auth/node.users';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';
import { config } from 'dotenv-flow';

config();

const destination = process.env.DESTINATION || 'FIREBASE';

if (destination === 'FIREBASE') {
    initFirebase();
}

const state = {
    authState,
    me,
    roles,
    users,
};

const nodeTypes: Record<string, NodeType> = {
    users: 'collection',
    roles: 'collection',
};

seed(state, nodeTypes, destination);
