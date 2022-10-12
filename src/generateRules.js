const fs = require('fs');

const publicReadNodes = [
    'authState',
    'articleCategories',
    'articles',
    'fonts',
    'grounds',
    'highlights',
    'images',
    'instancesProps',
    'instances',
    'locale',
    'me',
    'pageInstances',
    'pages',
    'widgets',
];

const singles = [
    'authState',
    'appStateBiblo',
    'appStateDeb',
    'appStateDevtools',
    'appStateEvents',
    'appStateFactory',
    'appStateKnowledge',
    'appStateMixer',
    'appStateMoney',
    'appStatePpl',
    'appStateSales',
    'appStateScheduler',
    'appStateSoundboard',
    'appStateSpotify',
    'appStateStudio',
    'appStateTasks',
    'appStateThings',
    'appStateVoice',
    'fonts',
    'locale',
    'meta',
    'packages',
    'spotifyMe',
];

const rootNodes = [
    'actualManas',
    'authState',
    'appStateBiblo',
    'appStateDeb',
    'appStateDevtools',
    'appStateEvents',
    'appStateFactory',
    'appStateKnowledge',
    'appStateMixer',
    'appStateMoney',
    'appStatePpl',
    'appStateSales',
    'appStateScheduler',
    'appStateSoundboard',
    'appStateSpotify',
    'appStateStudio',
    'appStateTasks',
    'appStateThings',
    'appStateVoice',
    'articleCategories',
    'articles',
    'assets',
    'boards',
    'breakpoints',
    'buildings',
    'cameras',
    'events',
    'expectedManas',
    'fonts',
    'grounds',
    'highlights',
    'images',
    'instancesProps',
    'instances',
    'interestingReads',
    'layouts',
    'libraryImages',
    'libraryPages',
    'libraryPageInstances',
    'libraryInstancesProps',
    'libraryPalettes',
    'libraryTypography',
    'libraryWidgets',
    'linkCategories',
    'links',
    'lights',
    'locale',
    'locales',
    'me',
    'meta',
    'moneyBehaviors',
    'moneyLines',
    'nodes',
    'packages',
    'pageInstances',
    'pages',
    'particles',
    'playback',
    'persons',
    'posts',
    'postAuthors',
    'projects',
    'readCategories',
    'recentSessions',
    'roles',
    'sales',
    'scheduleBlocks',
    'scheduleItems',
    'scheduleSessions',
    'sessions',
    'spotifyMe',
    'stores',
    'studioItems',
    'things',
    'tickets',
    'users',
    'weatherDailyItems',
    'weatherHourlyItems',
    'weatherLocations',
    'widgets',
    'worklogs',
];

const run = async () => {
    const content = rootNodes
        .map((nodeName) => {
            const readPermissions = publicReadNodes.includes(nodeName)
                ? 'if true'
                : 'if isAdmin()';

            const isSingle = singles.includes(nodeName);

            if (isSingle) {
                return;
            }

            return `        match /${nodeName}/{document=**} {
            allow read: ${readPermissions};
            allow write: if isAdmin();
        }`;
        })
        .filter((i) => i)
        .join('\n\n');

    fs.writeFileSync('firestore.rules.admin', template(content));
};

const template = (content) => {
    return `rules_version = '2';
service cloud.firestore {
    match /databases/{database}/documents {  	

        // match /{document=**} {
        //    allow read: if isAdmin();
        //    allow write: if true;
        // }
        
        // match /{document=**} {
        //    allow read: if isAdmin();
        //    allow write: if isAdmin();
        // }

        function isAdmin() {
            return get(/databases/$(database)/documents/roles/$(request.auth.uid)).data.role == "admin";
        }
        
        match /singles/{name} {
            allow read: if isAdmin();
            allow write: if isAdmin();    
        }

${content}
    }
}
`;
};

run();
