import { appStateSpotify } from '../nodes-seed/spotify/node.appStateSpotify';
import { playback } from '../nodes-seed/spotify/node.playback';
import { spotifyMe } from '../nodes-seed/spotify/node.spotifyMe';
import { seed } from '@gdi/store-seeder';

const state = {
    appStateSpotify,
    playback,
    spotifyMe,
};

const nodeTypes: Record<string, NodeType> = {
    appStateSpotify: 'single',
    spotifyMe: 'single',
    playback: 'single',
};

seed(state, nodeTypes);
