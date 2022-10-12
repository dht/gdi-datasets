import * as fs from 'fs';
import { initFirebase as initFirebaseWithConfig } from '@gdi/store-seeder';

export const initFirebase = () => {
    const config = fs.readFileSync('../../../../firebaseConfig.ts', 'utf-8');

    const firebaseConfig = new Function(
        config.replace('export', '') + 'return firebaseConfig;'
    )();

    initFirebaseWithConfig(firebaseConfig);
};
