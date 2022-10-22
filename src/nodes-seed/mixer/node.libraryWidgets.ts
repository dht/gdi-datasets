export const libraryWidgets: IWidgets = {
    'com.usegdi.templates.starter.feature-basic': {
        id: 'com.usegdi.templates.starter.feature-basic',
        name: 'feature-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.feature-basic',
            schema: {
                strings: {
                    slogan: {
                        fieldType: 'text',
                        order: 0,
                    },
                    header: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 1,
                    },
                    description: {
                        fieldType: 'longText',
                        order: 2,
                    },
                    ctaButtonText: {
                        fieldType: 'text',
                        order: 3,
                    },
                },
                colors: {
                    background: {
                        fieldType: 'color',
                        order: 0,
                    },
                    text: {
                        fieldType: 'color',
                        order: 1,
                    },
                },
                extra: {
                    href: {
                        fieldType: 'url',
                        isRequired: true,
                        order: 0,
                    },
                    imageUrl: {
                        fieldType: 'image',
                        isRequired: true,
                        order: 1,
                    },
                    animated: {
                        fieldType: 'checkbox',
                        order: 2,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    slogan: 'Move blocks around',
                    header: 'Structured',
                    description:
                        'Schema-based definition for all entities make page-structure manipulation easy and straight-forward //',
                },
                colors: {},
                extra: {
                    href: '#',
                    imageUrl: 'https://appofthebox.web.app/s1.webp',
                    animated: false,
                },
            },
            blue: {
                id: 'blue',
                strings: {
                    slogan: 'Find new blocks',
                    header: 'Extendable',
                    description:
                        'Add new NPM packages which contain new blocks & templates. Easily switch between blocks to keep block data //',
                },
                colors: {},
                extra: {
                    href: '#',
                    imageUrl: 'https://appofthebox.web.app/s2.webp',
                    animated: false,
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 519.4805194805194,
                    ratio: 1.925,
                },
                mobile: {
                    width: 500,
                    height: 196.82221283783784,
                    ratio: 2.540363675374135,
                },
            },
            blue: {
                desktop: {
                    width: 1000,
                    height: 519.4805194805194,
                    ratio: 1.925,
                },
                mobile: {
                    width: 500,
                    height: 367.0581714527027,
                    ratio: 1.3621819070834322,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 519.4805194805194,
                        ratio: 1.925,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.feature-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 207.7922077922078,
                        ratio: 1.925,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.feature-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 196.82221283783784,
                        ratio: 2.540363675374135,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.feature-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 78.72888513513514,
                        ratio: 2.540363675374135,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.feature-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 519.4805194805194,
                        ratio: 1.925,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.feature-basic.blue.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 207.7922077922078,
                        ratio: 1.925,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.feature-basic.blue.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 367.0581714527027,
                        ratio: 1.3621819070834322,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.feature-basic.blue.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 146.82326858108107,
                        ratio: 1.3621819070834322,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.feature-basic.blue.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-feature'],
        dataTags: [],
        widgetType: 'feature',
        isBlock: true,
    },
    'com.usegdi.templates.starter.footer-basic': {
        id: 'com.usegdi.templates.starter.footer-basic',
        name: 'footer-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.footer-basic',
            schema: {
                strings: {
                    copyright: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 0,
                    },
                },
                colors: {},
                extra: {},
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    copyright: 'Copyright 2022 ©',
                },
                colors: {},
                extra: {},
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 37.92106331168831,
                    ratio: 26.37056856187291,
                },
                mobile: {
                    width: 500,
                    height: 45.6714527027027,
                    ratio: 10.947757743874249,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 37.92106331168831,
                        ratio: 26.37056856187291,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.footer-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 15.168425324675324,
                        ratio: 26.37056856187291,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.footer-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 45.6714527027027,
                        ratio: 10.947757743874249,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.footer-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 18.26858108108108,
                        ratio: 10.947757743874249,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.footer-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-footer'],
        dataTags: [],
        widgetType: 'footer',
        isBlock: true,
    },
    'com.usegdi.templates.starter.hero-basic': {
        id: 'com.usegdi.templates.starter.hero-basic',
        name: 'hero-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.hero-basic',
            schema: {
                strings: {
                    slogan: {
                        fieldType: 'text',
                        order: 0,
                    },
                    header: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 1,
                    },
                    description: {
                        fieldType: 'longText',
                        order: 2,
                    },
                    ctaButtonText: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 3,
                    },
                    imageCreditsTitle: {
                        fieldType: 'text',
                        order: 4,
                    },
                    imageCreditsDescription: {
                        fieldType: 'text',
                        order: 5,
                    },
                },
                colors: {
                    background: {
                        fieldType: 'color',
                        order: 0,
                    },
                    text: {
                        fieldType: 'color',
                        order: 1,
                    },
                },
                extra: {
                    href: {
                        fieldType: 'url',
                        isRequired: true,
                        order: 0,
                    },
                    imageUrl: {
                        fieldType: 'image',
                        isRequired: true,
                        order: 1,
                    },
                    hrefSecond: {
                        fieldType: 'url',
                        order: 2,
                    },
                    headerFontSize: {
                        fieldType: 'number',
                        isRequired: true,
                        order: 3,
                    },
                    showBeta: {
                        fieldType: 'checkbox',
                        order: 4,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    ctaButtonText: 'Get Started',
                    secondButtonText: 'Github',
                    header: 'gDI',
                    description:
                        'An open-source & extendable content management system (CMS) written in ReactJS, hosted on Firebase //',
                    imageCreditsTitle: 'MidJourney AI-generated image',
                    imageCreditsDescription:
                        'futuristic phone concept neon colorful abstract --ar 3:2',
                },
                colors: {
                    text: '#fff',
                },
                extra: {
                    href: 'https://github.com/dht/gdi/docs',
                    hrefSecond: 'https://github.com/dht/gdi',
                    imageUrl: 'https://appofthebox.web.app/6.webp',
                    headerFontSize: 70,
                },
            },
            blue: {
                id: 'blue',
                strings: {
                    ctaButtonText: 'Join',
                    secondButtonText: 'Pricing',
                    header: 'SuperCharger',
                    description: '',
                },
                colors: {
                    text: '#fff',
                },
                extra: {
                    href: 'https://github.com/dht/gdi/docs',
                    hrefSecond: 'https://github.com/dht/gdi',
                    imageUrl: 'https://appofthebox.web.app/7.webp',
                    headerFontSize: 70,
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 748.051948051948,
                    ratio: 1.3368055555555556,
                },
                mobile: {
                    width: 500,
                    height: 199.79417130753802,
                    ratio: 2.502575509224255,
                },
            },
            blue: {
                desktop: {
                    width: 1000,
                    height: 748.051948051948,
                    ratio: 1.3368055555555556,
                },
                mobile: {
                    width: 500,
                    height: 149.49060388513513,
                    ratio: 3.344691820123943,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 748.051948051948,
                        ratio: 1.3368055555555556,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.hero-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 299.2207792207792,
                        ratio: 1.3368055555555556,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.hero-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 199.79417130753802,
                        ratio: 2.502575509224255,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.hero-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 79.91766852301521,
                        ratio: 2.502575509224255,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.hero-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 748.051948051948,
                        ratio: 1.3368055555555556,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.hero-basic.blue.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 299.2207792207792,
                        ratio: 1.3368055555555556,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.hero-basic.blue.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 149.49060388513513,
                        ratio: 3.344691820123943,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.hero-basic.blue.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 59.79624155405405,
                        ratio: 3.344691820123943,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.hero-basic.blue.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-hero'],
        dataTags: [],
        widgetType: 'hero',
        isBlock: true,
    },
    'com.usegdi.templates.starter.imageAndText-basic': {
        id: 'com.usegdi.templates.starter.imageAndText-basic',
        name: 'imageAndText-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.imageAndText-basic',
            schema: {
                strings: {
                    slogan: {
                        fieldType: 'text',
                        order: 0,
                    },
                    header: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 1,
                    },
                    description: {
                        fieldType: 'longText',
                        order: 2,
                    },
                    ctaButtonText: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 3,
                    },
                },
                colors: {
                    background: {
                        fieldType: 'color',
                        order: 0,
                    },
                    text: {
                        fieldType: 'color',
                        order: 1,
                    },
                },
                extra: {
                    href: {
                        fieldType: 'url',
                        isRequired: true,
                        order: 0,
                    },
                    backgroundImageUrl: {
                        fieldType: 'image',
                        order: 1,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    slogan: 'community',
                    ctaButtonText: 'How to join?',
                    header: 'People who joined recently',
                    description:
                        'With morning you are an effective team that gets things done, every minute, every hour, every day',
                },
                colors: {},
                extra: {
                    href: 'https://github.com/dht/gdi',
                    backgroundImageUrl: 'https://appofthebox.web.app/1.webp',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 563.6363636363636,
                    ratio: 1.7741935483870968,
                },
                mobile: {
                    width: 500,
                    height: 334.8975929054054,
                    ratio: 1.4929937108900904,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 563.6363636363636,
                        ratio: 1.7741935483870968,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.imageAndText-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 225.45454545454547,
                        ratio: 1.7741935483870968,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.imageAndText-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 334.8975929054054,
                        ratio: 1.4929937108900904,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.imageAndText-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 133.95903716216216,
                        ratio: 1.4929937108900904,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.imageAndText-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-imageAndText'],
        dataTags: [],
        widgetType: 'imageAndText',
        isBlock: true,
    },
    'com.usegdi.templates.starter.installation-basic': {
        id: 'com.usegdi.templates.starter.installation-basic',
        name: 'installation-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.installation-basic',
            schema: {
                strings: {
                    command: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 0,
                    },
                    nextStage: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 1,
                    },
                    nextStageLink: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 2,
                    },
                },
                colors: {
                    background: {
                        fieldType: 'color',
                        order: 0,
                    },
                    text: {
                        fieldType: 'color',
                        order: 1,
                    },
                },
                extra: {
                    hrefNextStage: {
                        fieldType: 'url',
                        isRequired: true,
                        order: 0,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    command: 'npm install -g @gdi/cli',
                    nextStage: 'After which follow the ',
                    nextStageLink: 'Getting Started Guide',
                },
                colors: {
                    text: '#fff',
                },
                extra: {
                    hrefNextStage: 'https://github.com/dht/gdi',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 389.6103896103896,
                    ratio: 2.566666666666667,
                },
                mobile: {
                    width: 500,
                    height: 123.10758023648647,
                    ratio: 4.061488326222585,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 389.6103896103896,
                        ratio: 2.566666666666667,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.installation-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 155.84415584415584,
                        ratio: 2.566666666666667,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.installation-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 123.10758023648647,
                        ratio: 4.061488326222585,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.installation-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 49.24303209459459,
                        ratio: 4.061488326222585,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.installation-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-installation'],
        dataTags: [],
        widgetType: 'installation',
        isBlock: true,
    },
    'com.usegdi.templates.starter.lineCta-basic': {
        id: 'com.usegdi.templates.starter.lineCta-basic',
        name: 'lineCta-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.lineCta-basic',
            schema: {
                strings: {
                    textStrong: {
                        fieldType: 'text',
                        order: 0,
                    },
                    text: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 1,
                    },
                    ctaButtonText: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 2,
                    },
                },
                colors: {
                    background: {
                        fieldType: 'color',
                        order: 0,
                    },
                    text: {
                        fieldType: 'color',
                        order: 1,
                    },
                },
                extra: {
                    href: {
                        fieldType: 'url',
                        isRequired: true,
                        order: 0,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    textStrong: 'Unleash',
                    text: 'the power of Firebase ©',
                    ctaButtonText: 'Visit Github',
                },
                colors: {},
                extra: {
                    href: 'https://github.com/dht/gdi',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 259.7402597402597,
                    ratio: 3.85,
                },
                mobile: {
                    width: 500,
                    height: 109.82896959459458,
                    ratio: 4.5525329231952325,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 259.7402597402597,
                        ratio: 3.85,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.lineCta-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 103.8961038961039,
                        ratio: 3.85,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.lineCta-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 109.82896959459458,
                        ratio: 4.5525329231952325,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.lineCta-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 43.93158783783783,
                        ratio: 4.5525329231952325,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.lineCta-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-lineCta'],
        dataTags: [],
        widgetType: 'lineCta',
        isBlock: true,
    },
    'com.usegdi.templates.starter.sectionHeader-basic': {
        id: 'com.usegdi.templates.starter.sectionHeader-basic',
        name: 'sectionHeader-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.sectionHeader-basic',
            schema: {
                strings: {
                    text: {
                        fieldType: 'text',
                        order: 0,
                    },
                },
                colors: {},
                extra: {
                    id: {
                        fieldType: 'text',
                        order: 0,
                    },
                    isHidden: {
                        fieldType: 'checkbox',
                        order: 1,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    text: 'Features',
                },
                colors: {},
                extra: {
                    id: 'features',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 64.93506493506493,
                    ratio: 15.4,
                },
                mobile: {
                    width: 500,
                    height: 89.37922297297297,
                    ratio: 5.594141270966218,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 64.93506493506493,
                        ratio: 15.4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.sectionHeader-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 25.974025974025974,
                        ratio: 15.4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.sectionHeader-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 89.37922297297297,
                        ratio: 5.594141270966218,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.sectionHeader-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 35.751689189189186,
                        ratio: 5.594141270966218,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.sectionHeader-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-sectionHeader'],
        dataTags: [],
        widgetType: 'sectionHeader',
        isBlock: true,
    },
    'com.usegdi.templates.starter.userBar-basic': {
        id: 'com.usegdi.templates.starter.userBar-basic',
        name: 'userBar-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.userBar-basic',
            schema: {
                strings: {},
                colors: {
                    background: {
                        fieldType: 'color',
                        order: 0,
                    },
                },
                extra: {
                    logoImageUrl: {
                        fieldType: 'url',
                        isRequired: true,
                        order: 0,
                    },
                    githubLink: {
                        fieldType: 'url',
                        isRequired: true,
                        order: 1,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {},
                colors: {
                    backgroundColor: 'white',
                },
                extra: {
                    logoImageUrl: '',
                    githubLink: 'https://github.com/dht/gdi',
                    items: [
                        {
                            href: '#installation',
                            title: 'Installation',
                        },
                        {
                            href: '#features',
                            title: 'Features',
                        },
                        {
                            href: '#community',
                            title: 'Community',
                        },
                    ],
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 64.93506493506493,
                    ratio: 15.4,
                },
                mobile: {
                    width: 500,
                    height: 35.13513513513514,
                    ratio: 14.23076923076923,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 64.93506493506493,
                        ratio: 15.4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.userBar-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 25.974025974025974,
                        ratio: 15.4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.userBar-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 35.13513513513514,
                        ratio: 14.23076923076923,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.userBar-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 14.054054054054054,
                        ratio: 14.23076923076923,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.userBar-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-userBar'],
        dataTags: [],
        widgetType: 'userBar',
        isBlock: true,
    },
    'com.usegdi.templates.starter.article-hero': {
        id: 'com.usegdi.templates.starter.article-hero',
        name: 'article-hero',
        params: {
            id: 'com.usegdi.templates.starter.article-hero',
            schema: {
                strings: {
                    slogan: {
                        fieldType: 'text',
                        order: 0,
                    },
                    header: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 1,
                    },
                    description: {
                        fieldType: 'longText',
                        order: 2,
                    },
                    ctaButtonText: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 3,
                    },
                    imageCreditsTitle: {
                        fieldType: 'text',
                        order: 4,
                    },
                    imageCreditsDescription: {
                        fieldType: 'text',
                        order: 5,
                    },
                },
                colors: {
                    background: {
                        fieldType: 'color',
                        order: 0,
                    },
                    text: {
                        fieldType: 'color',
                        order: 1,
                    },
                },
                extra: {
                    href: {
                        fieldType: 'url',
                        isRequired: true,
                        order: 0,
                    },
                    imageUrl: {
                        fieldType: 'image',
                        isRequired: true,
                        order: 1,
                    },
                    hrefSecond: {
                        fieldType: 'url',
                        order: 2,
                    },
                    headerFontSize: {
                        fieldType: 'number',
                        isRequired: true,
                        order: 3,
                    },
                    showBeta: {
                        fieldType: 'checkbox',
                        order: 4,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                container: {
                    width: 300,
                    height: 400,
                    ratio: 1,
                },
                strings: {},
                colors: {},
                extra: {
                    index: 0,
                    totalWidth: 1000,
                    article: {
                        id: '1',
                        title: 'Saepe est in sit doloribus quo minus.',
                        imageUrl: 'https://picsum.photos/seed/1/938/1119',
                        imageThumbUrl: 'https://picsum.photos/seed/1/200/238',
                        ratio: 0.838248436103664,
                        imageDescription:
                            'Voluptatum facere sint ea. Sit eveniet ut omnis aspernatur distinctio magnam exercitationem. Delectus vel tempora excepturi sunt et possimus quae deserunt.',
                        imageSource: 'Kulas LLC',
                        authorName: 'Sabrina Muller',
                        publishDate: '2022-10-09T10:42:08.436Z',
                        lastPublishDate: '2022-10-09T09:30:48.334Z',
                        lastSaveDate: '2022-10-09T00:41:05.520Z',
                        categoryBreadcrumbs: 'Kids>Garden>Computers',
                        comments: 6,
                        content:
                            'Vel dolorem sint magni quas voluptatem non voluptatem harum minima. Molestiae dicta quos. At sapiente possimus. Autem error ullam cum sapiente. Qui quis et dolorem dolor ipsum commodi vel ipsum. Aut fugit officia dolorem.\nConsequatur natus optio. Enim enim alias rerum maxime. Beatae ut veniam exercitationem voluptas velit voluptates dolor illo sint. Accusantium officiis laboriosam molestias deleniti expedita. Commodi at enim maxime fugiat. Voluptate ut perspiciatis et tempore voluptas officia ut saepe quia.',
                        intro: 'Ea nobis omnis. Cupiditate architecto at ut sed et cupiditate neque magnam laboriosam. Maiores culpa error excepturi sit. Cumque possimus id consequatur recusandae provident ea repellendus.',
                        isPublished: false,
                        linkPath: 'Inventore-esse quia alias sit unde.',
                        slogan: 'Exercitationem doloribus inventore distinctio porro.',
                        status: 'archived',
                        tags: ['friend'],
                        dataTags: [],
                        minutesSpentEditing: 0,
                        wordCount: 248,
                    },
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 1127.51677852349,
                    ratio: 0.8869047619047619,
                },
                mobile: {
                    width: 500,
                    height: 563.758389261745,
                    ratio: 0.8869047619047619,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 1127.51677852349,
                        ratio: 0.8869047619047619,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.article-hero.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 451.006711409396,
                        ratio: 0.8869047619047619,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.article-hero.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 563.758389261745,
                        ratio: 0.8869047619047619,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.article-hero.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 225.503355704698,
                        ratio: 0.8869047619047619,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/usegdi-a56c4.appspot.com/o/screenshots%2Fscreenshot.starter.article-hero.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-article'],
        dataTags: [],
        widgetType: 'article',
    },
};
