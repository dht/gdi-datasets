export const libraryWidgets: IWidgets = {
    'com.usegdi.templates.starter.aboutMe-basic': {
        id: 'com.usegdi.templates.starter.aboutMe-basic',
        name: 'aboutMe-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.aboutMe-basic',
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
                colors: {},
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
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    slogan: 'My name is David Baker',
                    header: 'An experienced New York based photographer',
                    description: '{lorem-43}',
                    ctaButtonText: 'Contact me',
                },
                colors: {},
                extra: {
                    imageUrl: 'https://static-b9ebe.web.app/ny-me.webp',
                    href: '#contactMe',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 533.3333333333334,
                    ratio: 1.875,
                },
                mobile: {
                    width: 500,
                    height: 270.27027027027026,
                    ratio: 1.85,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 533.3333333333334,
                        ratio: 1.875,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.aboutMe-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 213.33333333333334,
                        ratio: 1.875,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.aboutMe-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 270.27027027027026,
                        ratio: 1.85,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.aboutMe-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 108.1081081081081,
                        ratio: 1.85,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.aboutMe-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-aboutMe'],
        dataTags: [],
        widgetType: 'aboutMe',
        isBlock: true,
    },
    'com.usegdi.templates.starter.contactUs-basic': {
        id: 'com.usegdi.templates.starter.contactUs-basic',
        name: 'contactUs-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.contactUs-basic',
            schema: {
                strings: {
                    header: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 1,
                    },
                    phoneNumber: {
                        fieldType: 'text',
                        order: 2,
                    },
                },
                colors: {},
                extra: {
                    imageUrl: {
                        fieldType: 'image',
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
                    header: 'Get a quote for your project',
                    phoneNumber: '1234567890',
                },
                colors: {},
                extra: {
                    imageUrl: 'https://static-b9ebe.web.app/ny1.webp',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 416.6666666666667,
                    ratio: 2.4,
                },
                mobile: {
                    width: 500,
                    height: 202.70270270270268,
                    ratio: 2.466666666666667,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 416.6666666666667,
                        ratio: 2.4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.contactUs-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 166.66666666666669,
                        ratio: 2.4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.contactUs-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 202.70270270270268,
                        ratio: 2.466666666666667,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.contactUs-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 81.08108108108108,
                        ratio: 2.466666666666667,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.contactUs-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-contactUs'],
        dataTags: [],
        widgetType: 'contactUs',
        isBlock: true,
    },
    'com.usegdi.templates.starter.ctaAction-basic': {
        id: 'com.usegdi.templates.starter.ctaAction-basic',
        name: 'ctaAction-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.ctaAction-basic',
            schema: {
                strings: {
                    slogan: {
                        fieldType: 'text',
                        order: 0,
                    },
                    ctaButtonText: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 3,
                    },
                },
                colors: {},
                extra: {
                    imageUrl: {
                        fieldType: 'image',
                        isRequired: true,
                        order: 0,
                    },
                    href: {
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
                strings: {
                    slogan: 'Join my 15th October course',
                    ctaButtonText: 'Join Course',
                },
                colors: {},
                extra: {
                    imageUrl: 'https://static-b9ebe.web.app/ny2.webp',
                    href: '#',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 416.6666666666667,
                    ratio: 2.4,
                },
                mobile: {
                    width: 500,
                    height: 202.70270270270268,
                    ratio: 2.466666666666667,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 416.6666666666667,
                        ratio: 2.4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.ctaAction-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 166.66666666666669,
                        ratio: 2.4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.ctaAction-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 202.70270270270268,
                        ratio: 2.466666666666667,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.ctaAction-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 81.08108108108108,
                        ratio: 2.466666666666667,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.ctaAction-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-ctaAction'],
        dataTags: [],
        widgetType: 'ctaAction',
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
                    text: {
                        fieldType: 'text',
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
                    text: '2022 David All Rights Reserved',
                },
                colors: {},
                extra: {},
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 71.52777777777779,
                    ratio: 13.980582524271844,
                },
                mobile: {
                    width: 500,
                    height: 61.824406804265195,
                    ratio: 8.08742090454648,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 71.52777777777779,
                        ratio: 13.980582524271844,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.footer-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 28.611111111111114,
                        ratio: 13.980582524271844,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.footer-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 61.824406804265195,
                        ratio: 8.08742090454648,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.footer-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 24.729762721706077,
                        ratio: 8.08742090454648,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.footer-basic.normal.mobile.thumb.webp?alt=media',
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
                },
                colors: {},
                extra: {
                    imageUrl: {
                        fieldType: 'image',
                        isRequired: true,
                        order: 1,
                    },
                    socialDatasetId: {
                        fieldType: 'dataset',
                        order: 3,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    slogan: 'The work of',
                    header: 'David Baker',
                    description: 'Portraits * landscapes * photography',
                },
                colors: {},
                extra: {
                    imageUrl: 'https://picsum.photos/seed/11/1557/882',
                    socialDatasetId: 'social',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 625,
                    ratio: 1.6,
                },
                mobile: {
                    width: 500,
                    height: 304.05405405405406,
                    ratio: 1.6444444444444444,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 625,
                        ratio: 1.6,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.hero-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 250,
                        ratio: 1.6,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.hero-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 304.05405405405406,
                        ratio: 1.6444444444444444,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.hero-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 121.62162162162163,
                        ratio: 1.6444444444444444,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.hero-basic.normal.mobile.thumb.webp?alt=media',
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
    'com.usegdi.templates.starter.myNumbers-basic': {
        id: 'com.usegdi.templates.starter.myNumbers-basic',
        name: 'myNumbers-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.myNumbers-basic',
            schema: {
                strings: {},
                colors: {},
                extra: {
                    numbersDatasetId: {
                        fieldType: 'dataset',
                        order: 0,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {},
                colors: {},
                extra: {
                    numbersDatasetId: 'myNumbers',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 343.1857638888889,
                    ratio: 2.9138737827241683,
                },
                mobile: {
                    width: 500,
                    height: 153.44172297297297,
                    ratio: 3.258566120820146,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 343.1857638888889,
                        ratio: 2.9138737827241683,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myNumbers-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 137.27430555555557,
                        ratio: 2.9138737827241683,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myNumbers-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 153.44172297297297,
                        ratio: 3.258566120820146,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myNumbers-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 61.376689189189186,
                        ratio: 3.258566120820146,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myNumbers-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-myNumbers'],
        dataTags: [],
        widgetType: 'myNumbers',
        isBlock: true,
    },
    'com.usegdi.templates.starter.myPortfolio-basic': {
        id: 'com.usegdi.templates.starter.myPortfolio-basic',
        name: 'myPortfolio-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.myPortfolio-basic',
            schema: {
                strings: {
                    header: {
                        fieldType: 'text',
                        order: 0,
                    },
                    description: {
                        fieldType: 'longText',
                        isRequired: true,
                        order: 1,
                    },
                },
                colors: {},
                extra: {
                    portfolioDatasetId: {
                        fieldType: 'dataset',
                        order: 2,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    header: 'My Portfolio',
                    description: '{lorem-14}',
                },
                colors: {},
                extra: {
                    portfolioDatasetId: 'myPortfolio',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 739.2686631944445,
                    ratio: 1.3526882036077557,
                },
                mobile: {
                    width: 500,
                    height: 359.4594594594595,
                    ratio: 1.3909774436090225,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 739.2686631944445,
                        ratio: 1.3526882036077557,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myPortfolio-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 295.70746527777777,
                        ratio: 1.3526882036077557,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myPortfolio-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 359.4594594594595,
                        ratio: 1.3909774436090225,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myPortfolio-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 143.78378378378378,
                        ratio: 1.3909774436090225,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myPortfolio-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-myPortfolio'],
        dataTags: [],
        widgetType: 'myPortfolio',
        isBlock: true,
    },
    'com.usegdi.templates.starter.myResume-basic': {
        id: 'com.usegdi.templates.starter.myResume-basic',
        name: 'myResume-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.myResume-basic',
            schema: {
                strings: {
                    header: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 1,
                    },
                    description: {
                        fieldType: 'longText',
                        order: 2,
                    },
                },
                colors: {},
                extra: {
                    resumeDatasetId: {
                        fieldType: 'dataset',
                        order: 0,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    header: 'My Resume',
                    description: '{lorem-14}',
                },
                colors: {},
                extra: {
                    resumeDatasetId: 'myResume',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 833.0403645833334,
                    ratio: 1.2004220233675902,
                },
                mobile: {
                    width: 500,
                    height: 485.3990709459459,
                    ratio: 1.0300802575200645,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 833.0403645833334,
                        ratio: 1.2004220233675902,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myResume-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 333.2161458333333,
                        ratio: 1.2004220233675902,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myResume-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 485.3990709459459,
                        ratio: 1.0300802575200645,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myResume-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 194.15962837837836,
                        ratio: 1.0300802575200645,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myResume-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-myResume'],
        dataTags: [],
        widgetType: 'myResume',
        isBlock: true,
    },
    'com.usegdi.templates.starter.myServices-basic': {
        id: 'com.usegdi.templates.starter.myServices-basic',
        name: 'myServices-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.myServices-basic',
            schema: {
                strings: {
                    header: {
                        fieldType: 'text',
                        order: 0,
                    },
                    description: {
                        fieldType: 'longText',
                        isRequired: true,
                        order: 1,
                    },
                },
                colors: {},
                extra: {
                    servicesDatasetId: {
                        fieldType: 'dataset',
                        order: 2,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    header: 'My Services',
                    description: '{lorem-14}',
                },
                colors: {},
                extra: {
                    servicesDatasetId: 'myServices',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 507.04210069444446,
                    ratio: 1.97222281666631,
                },
                mobile: {
                    width: 500,
                    height: 243.7816722972973,
                    ratio: 2.0510155471828853,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 507.04210069444446,
                        ratio: 1.97222281666631,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myServices-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 202.81684027777777,
                        ratio: 1.97222281666631,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myServices-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 243.7816722972973,
                        ratio: 2.0510155471828853,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myServices-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 97.5126689189189,
                        ratio: 2.0510155471828853,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.myServices-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-myServices'],
        dataTags: [],
        widgetType: 'myServices',
        isBlock: true,
    },
    'com.usegdi.templates.starter.quotes-basic': {
        id: 'com.usegdi.templates.starter.quotes-basic',
        name: 'quotes-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.quotes-basic',
            schema: {
                strings: {},
                colors: {},
                extra: {
                    quotesDatasetId: {
                        fieldType: 'dataset',
                        order: 0,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {},
                colors: {},
                extra: {
                    quotesDatasetId: 'quotes',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 434.7222222222222,
                    ratio: 2.3003194888178915,
                },
                mobile: {
                    width: 500,
                    height: 211.48648648648648,
                    ratio: 2.364217252396166,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 434.7222222222222,
                        ratio: 2.3003194888178915,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.quotes-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 173.88888888888889,
                        ratio: 2.3003194888178915,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.quotes-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 211.48648648648648,
                        ratio: 2.364217252396166,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.quotes-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 84.5945945945946,
                        ratio: 2.364217252396166,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.quotes-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-quotes'],
        dataTags: [],
        widgetType: 'quotes',
        isBlock: true,
    },
    'com.usegdi.templates.starter.sectionHeader-basic': {
        id: 'com.usegdi.templates.starter.sectionHeader-basic',
        name: 'sectionHeader-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.gdi.sectionHeader-basic',
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
                    href: {
                        fieldType: 'text',
                        order: 1,
                    },
                    isHidden: {
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
                    text: 'Features',
                },
                colors: {},
                extra: {
                    id: 'features',
                    href: '',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 69.44444444444444,
                    ratio: 14.4,
                },
                mobile: {
                    width: 500,
                    height: 33.78394874366554,
                    ratio: 14.799927734727857,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 69.44444444444444,
                        ratio: 14.4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.sectionHeader-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 27.77777777777778,
                        ratio: 14.4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.sectionHeader-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 33.78394874366554,
                        ratio: 14.799927734727857,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.sectionHeader-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 13.513579497466216,
                        ratio: 14.799927734727857,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.sectionHeader-basic.normal.mobile.thumb.webp?alt=media',
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
    'com.usegdi.templates.starter.tester-basic': {
        id: 'com.usegdi.templates.starter.tester-basic',
        name: 'tester-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.tester-basic',
            schema: {
                strings: {
                    header: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 0,
                    },
                    ctaButtonText: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 1,
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
                    backgroundImageUrl: {
                        fieldType: 'image',
                        isRequired: true,
                        order: 2,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    header: 'Tester',
                    ctaButtonText: 'Join free',
                },
                colors: {
                    background: '#1a7870',
                    text: '#aaef69',
                },
                extra: {
                    imageUrl: 'https://picsum.photos/seed/12/1557/882',
                    href: '#',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 533.3333333333334,
                    ratio: 1.875,
                },
                mobile: {
                    width: 500,
                    height: 270.27027027027026,
                    ratio: 1.85,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 533.3333333333334,
                        ratio: 1.875,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.tester-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 213.33333333333334,
                        ratio: 1.875,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.tester-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 270.27027027027026,
                        ratio: 1.85,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.tester-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 108.1081081081081,
                        ratio: 1.85,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.tester-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-tester'],
        dataTags: [],
        widgetType: 'tester',
        isBlock: true,
    },
    'com.usegdi.templates.starter.topHeader-basic': {
        id: 'com.usegdi.templates.starter.topHeader-basic',
        name: 'topHeader-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.topHeader-basic',
            schema: {
                strings: {},
                colors: {},
                extra: {
                    logoUrl: { fieldType: 'image', isRequired: true, order: 1 },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {},
                colors: {},
                extra: {
                    logoUrl: 'https://static-b9ebe.web.app/logo-blake6b.svg',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 400,
                    ratio: 2.5,
                },
                mobile: {
                    width: 500,
                    height: 1337,
                    ratio: 0.3739715781600598,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.top header-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.top header-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.top header-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.top header-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
                    },
                },
            },
        },
        tags: ['type-topHeader'],
        dataTags: [],
        widgetType: 'topHeader',
        isBlock: true,
    },
    'com.usegdi.templates.gdi.apps-basic': {
        id: 'com.usegdi.templates.gdi.apps-basic',
        name: 'apps-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.gdi.apps-basic',
            schema: {
                strings: {
                    header: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 1,
                    },
                },
                colors: {},
                extra: {
                    appsDatasetId: {
                        fieldType: 'dataset',
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
                    header: 'Apps',
                },
                colors: {},
                extra: {
                    appsDatasetId: 'apps',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 1097.3958333333333,
                    ratio: 0.9112482202183199,
                },
                mobile: {
                    width: 500,
                    height: 877.9166666666667,
                    ratio: 0.5695301376364499,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 1097.3958333333333,
                        ratio: 0.9112482202183199,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.apps-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 438.95833333333337,
                        ratio: 0.9112482202183199,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.apps-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 877.9166666666667,
                        ratio: 0.5695301376364499,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.apps-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 351.1666666666667,
                        ratio: 0.5695301376364499,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.apps-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-apps'],
        dataTags: [],
        widgetType: 'apps',
        isBlock: true,
    },
    'com.usegdi.templates.gdi.features-basic': {
        id: 'com.usegdi.templates.gdi.features-basic',
        name: 'features-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.gdi.features-basic',
            schema: {
                strings: {
                    header: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 1,
                    },
                    version: {
                        fieldType: 'text',
                        order: 2,
                    },
                },
                colors: {},
                extra: {
                    featuresDatasetId: {
                        fieldType: 'dataset',
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
                    header: 'Features',
                    version: 'v0.16.0',
                },
                colors: {},
                extra: {
                    featuresDatasetId: 'features',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 378.21044921875,
                    ratio: 2.644030597424394,
                },
                mobile: {
                    width: 500,
                    height: 302.568359375,
                    ratio: 1.6525191233902463,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 378.21044921875,
                        ratio: 2.644030597424394,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.features-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 151.2841796875,
                        ratio: 2.644030597424394,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.features-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 302.568359375,
                        ratio: 1.6525191233902463,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.features-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 121.02734375,
                        ratio: 1.6525191233902463,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.features-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-features'],
        dataTags: [],
        widgetType: 'features',
        isBlock: true,
    },
    'com.usegdi.templates.gdi.footer-basic': {
        id: 'com.usegdi.templates.gdi.footer-basic',
        name: 'footer-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.gdi.footer-basic',
            schema: {
                strings: {
                    text: {
                        fieldType: 'text',
                        order: 0,
                    },
                },
                colors: {},
                extra: {
                    linksDatasetId: {
                        fieldType: 'dataset',
                        order: 0,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    text: 'gDI 2022',
                },
                colors: {},
                extra: {
                    linksDatasetId: 'footerLinks',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 62.862141927083336,
                    ratio: 15.907825749239432,
                },
                mobile: {
                    width: 500,
                    height: 50.289713541666664,
                    ratio: 9.942391093274646,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 62.862141927083336,
                        ratio: 15.907825749239432,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.footer-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 25.144856770833336,
                        ratio: 15.907825749239432,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.footer-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 50.289713541666664,
                        ratio: 9.942391093274646,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.footer-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 20.115885416666668,
                        ratio: 9.942391093274646,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.footer-basic.normal.mobile.thumb.webp?alt=media',
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
    'com.usegdi.templates.gdi.hero-basic': {
        id: 'com.usegdi.templates.gdi.hero-basic',
        name: 'hero-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.gdi.hero-basic',
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
                    installation: {
                        fieldType: 'text',
                        order: 2,
                    },
                    ctaButtonText: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 3,
                    },
                    secondaryButtonText: {
                        fieldType: 'text',
                        order: 4,
                    },
                },
                colors: {},
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
                    hrefSecondary: {
                        fieldType: 'url',
                        order: 2,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    slogan: "There's a new CMS in town",
                    header: 'gDI',
                    ctaButtonText: 'Get started',
                    secondaryButtonText: 'Visit Github',
                },
                colors: {},
                extra: {
                    installation: 'npm install -g @gdi/cli',
                    href: 'https://usegdi.com/docs/docs/getting-started/installation',
                    hrefSecondary: 'https://github.com/dht/gdi',
                    imageUrl: 'https://static-b9ebe.web.app/gdi-hero.jpg',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 260.4166666666667,
                    ratio: 3.84,
                },
                mobile: {
                    width: 500,
                    height: 208.33323160807294,
                    ratio: 2.400001171875572,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 260.4166666666667,
                        ratio: 3.84,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.hero-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 104.16666666666667,
                        ratio: 3.84,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.hero-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 208.33323160807294,
                        ratio: 2.400001171875572,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.hero-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 83.33329264322917,
                        ratio: 2.400001171875572,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.hero-basic.normal.mobile.thumb.webp?alt=media',
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
    'com.usegdi.templates.gdi.templates-basic': {
        id: 'com.usegdi.templates.gdi.templates-basic',
        name: 'templates-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.gdi.templates-basic',
            schema: {
                strings: {},
                colors: {},
                extra: {
                    appsDatasetId: {
                        fieldType: 'dataset',
                        isRequired: true,
                        order: 0,
                    },
                    contentUrl: {
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
                strings: {
                    header: 'Templates',
                },
                colors: {},
                extra: {
                    templatesDatasetId: 'templates',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 381.25000000000006,
                    ratio: 2.622950819672131,
                },
                mobile: {
                    width: 500,
                    height: 305,
                    ratio: 1.639344262295082,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 381.25000000000006,
                        ratio: 2.622950819672131,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.templates-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 152.5,
                        ratio: 2.622950819672131,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.templates-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 305,
                        ratio: 1.639344262295082,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.templates-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 122,
                        ratio: 1.639344262295082,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.templates-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-templates'],
        dataTags: [],
        widgetType: 'templates',
        isBlock: true,
    },
    'com.usegdi.templates.gdi.topHeader-basic': {
        id: 'com.usegdi.templates.gdi.topHeader-basic',
        name: 'topHeader-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.gdi.topHeader-basic',
            schema: {
                strings: {},
                colors: {},
                extra: {
                    logoImageUrl: {
                        fieldType: 'image',
                        isRequired: true,
                        order: 0,
                    },
                    githubUrl: {
                        fieldType: 'url',
                        order: 1,
                    },
                    socialDatasetId: {
                        fieldType: 'dataset',
                        isRequired: true,
                        order: 2,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {},
                colors: {},
                extra: {
                    logoImageUrl: '',
                    githubUrl: '#',
                    socialDatasetId: '',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 50.61848958333333,
                    ratio: 19.755627009646304,
                },
                mobile: {
                    width: 500,
                    height: 32.955729166666664,
                    ratio: 15.17186882655077,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 50.61848958333333,
                        ratio: 19.755627009646304,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.topHeader-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 20.247395833333332,
                        ratio: 19.755627009646304,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.topHeader-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 32.955729166666664,
                        ratio: 15.17186882655077,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.topHeader-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 13.182291666666666,
                        ratio: 15.17186882655077,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.topHeader-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-topHeader'],
        dataTags: [],
        widgetType: 'topHeader',
        isBlock: true,
    },
    'com.usegdi.templates.gdi.twins-basic': {
        id: 'com.usegdi.templates.gdi.twins-basic',
        name: 'twins-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.gdi.twins-basic',
            schema: {
                strings: {
                    header: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 0,
                    },
                    description: {
                        fieldType: 'longText',
                        isRequired: true,
                        order: 1,
                    },
                    buttonText: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 3,
                    },
                    headerSecondary: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 2,
                    },
                    descriptionSecondary: {
                        fieldType: 'longText',
                        isRequired: true,
                        order: 3,
                    },
                    buttonTextSecondary: {
                        fieldType: 'text',
                        isRequired: true,
                        order: 3,
                    },
                    notes: {
                        fieldType: 'longText',
                        isRequired: false,
                        order: 4,
                    },
                },
                colors: {},
                extra: {
                    href: {
                        fieldType: 'url',
                        isRequired: true,
                        order: 0,
                    },
                    hrefSecondary: {
                        fieldType: 'url',
                        isRequired: true,
                        order: 1,
                    },
                    rotation: {
                        fieldType: 'number',
                        isRequired: false,
                        order: 2,
                    },
                },
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {
                    header: 'Build for [Firebase]',
                    description:
                        "Use Firebase to host your site, store your data and manage your users. You can do all that with Firebase's free Spark plan*",
                    buttonText: 'See features',
                    headerSecondary: 'Made with [React]',
                    descriptionSecondary:
                        "It's easy to extend the CMS with your React skills. Create new templates, apps or data stores. Use JSONs to import & export anything",
                    buttonTextSecondary: 'Visit Github',
                    notes: '* The Blaze plan is required for Image Uploading. Thumbnail resizing is done via Cloud Functions. It can still be free for low usage.',
                },
                colors: {},
                extra: {
                    href: '#features',
                    hrefSecondary: 'https://github.com/dht/gdi',
                    rotation: 0,
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 390.625,
                    ratio: 2.56,
                },
                mobile: {
                    width: 500,
                    height: 312.5,
                    ratio: 1.6,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 390.625,
                        ratio: 2.56,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.twins-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 156.25,
                        ratio: 2.56,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.twins-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 312.5,
                        ratio: 1.6,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.twins-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 125,
                        ratio: 1.6,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.gdi.twins-basic.normal.mobile.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
            },
        },
        tags: ['type-twins'],
        dataTags: [],
        widgetType: 'twins',
        isBlock: true,
    },
    'com.usegdi.templates.gdi.sectionHeader-basic': {
        id: 'com.usegdi.templates.gdi.sectionHeader-basic',
        name: 'sectionHeader-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.gdi.sectionHeader-basic',
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
                    href: {
                        fieldType: 'text',
                        order: 1,
                    },
                    isHidden: {
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
                    text: 'Features',
                },
                colors: {},
                extra: {
                    id: 'features',
                    href: '',
                },
            },
        },
        dimensions: {
            normal: {
                desktop: {
                    width: 1000,
                    height: 69.44444444444444,
                    ratio: 14.4,
                },
                mobile: {
                    width: 500,
                    height: 33.78394874366554,
                    ratio: 14.799927734727857,
                },
            },
        },
        screenshots: {
            normal: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 69.44444444444444,
                        ratio: 14.4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.sectionHeader-basic.normal.desktop.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 400,
                        height: 27.77777777777778,
                        ratio: 14.4,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.sectionHeader-basic.normal.desktop.thumb.webp?alt=media',
                        urlIsRemote: true,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 33.78394874366554,
                        ratio: 14.799927734727857,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.sectionHeader-basic.normal.mobile.large.webp?alt=media',
                        urlIsRemote: true,
                    },
                    thumb: {
                        width: 200,
                        height: 13.513579497466216,
                        ratio: 14.799927734727857,
                        url: 'https://storage.googleapis.com/download/storage/v1/b/life-b033c.appspot.com/o/screenshots%2Fscreenshot.starter.sectionHeader-basic.normal.mobile.thumb.webp?alt=media',
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
};
