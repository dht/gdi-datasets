import { authState } from '../nodes-seed/auth/node.authState';
import { me } from '../nodes-seed/auth/node.me';
import { roles } from '../nodes-seed/auth/node.roles';
import { users } from '../nodes-seed/auth/node.users';
import { seed } from '@gdi/store-seeder';

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

seed(state, nodeTypes);
