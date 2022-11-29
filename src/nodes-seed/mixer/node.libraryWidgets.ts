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
                    slogan: 'Join my 15th October course',
                    ctaButtonText: 'Join Course',
                },
                colors: {},
                extra: {
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
};
