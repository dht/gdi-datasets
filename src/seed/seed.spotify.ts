import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStateSpotify: 'single',
    spotifyMe: 'single',
    playback: 'single',
};

seed(state, nodeTypes);
