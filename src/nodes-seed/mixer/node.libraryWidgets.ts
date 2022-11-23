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
                    imageUrl: 'https://via.placeholder.com/350x150',
                    href: '#contactMe',
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
                        url: 'screenshot.gdi.about me-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.about me-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.about me-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.about me-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
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
                extra: {},
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
                extra: {},
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
                        url: 'screenshot.gdi.contact us-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.contact us-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.contact us-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.contact us-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
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
                strings: {},
                colors: {},
                extra: {},
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
                        url: 'screenshot.gdi.cta action-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.cta action-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.cta action-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.cta action-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
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
                    text: 'Copyright &copy; 2022 David All Rights Reserved',
                },
                colors: {},
                extra: {},
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
                        url: 'screenshot.gdi.footer-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.footer-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.footer-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.footer-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
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
                    imageUrl: 'https://via.placeholder.com/350x150',
                    socialDatasetId: 'social',
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
                        url: 'screenshot.gdi.hero-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.hero-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.hero-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.hero-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
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
                        url: 'screenshot.gdi.my numbers-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.my numbers-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.my numbers-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.my numbers-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
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
                        url: 'screenshot.gdi.my portfolio-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.my portfolio-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.my portfolio-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.my portfolio-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
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
                        url: 'screenshot.gdi.my resume-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.my resume-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.my resume-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.my resume-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
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
                        url: 'screenshot.gdi.my services-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.my services-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.my services-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.my services-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
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
                    servicesDatasetId: 'quotes',
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
                        url: 'screenshot.gdi.quotes-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.quotes-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.quotes-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.quotes-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
                    },
                },
            },
        },
        tags: ['type-quotes'],
        dataTags: [],
        widgetType: 'quotes',
        isBlock: true,
    },
    'com.usegdi.templates.starter.topHeader-basic': {
        id: 'com.usegdi.templates.starter.topHeader-basic',
        name: 'topHeader-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.topHeader-basic',
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
                strings: {},
                colors: {},
                extra: {},
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
                        url: 'screenshot.gdi.apps-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.apps-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.apps-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.apps-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
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
                    version: '0.9.1',
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
                        url: 'screenshot.gdi.features-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.features-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.features-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.features-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
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
                    text: '&copy; gDI 2022',
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
                        url: 'screenshot.gdi.footer-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.footer-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.footer-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.footer-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
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
                    installation: 'npm install -g @gdi/cli',
                    ctaButtonText: 'Get started',
                    secondaryButtonText: 'View demo',
                },
                colors: {},
                extra: {
                    href: '#',
                    imageUrl: '',
                    hrefSecondary: '#',
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
                        url: 'screenshot.gdi.hero-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.hero-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.hero-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.hero-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
                    },
                },
            },
        },
        tags: ['type-hero'],
        dataTags: [],
        widgetType: 'hero',
        isBlock: true,
    },
    'com.usegdi.templates.gdi.pageApp-basic': {
        id: 'com.usegdi.templates.gdi.pageApp-basic',
        name: 'pageApp-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.gdi.pageApp-basic',
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
                strings: {},
                colors: {},
                extra: {
                    appsDatasetId: 'apps',
                    contentUrl: '#',
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
                        url: 'screenshot.gdi.page app-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.page app-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.page app-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.page app-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
                    },
                },
            },
        },
        tags: ['type-pageApp'],
        dataTags: [],
        widgetType: 'pageApp',
        isBlock: true,
    },
    'com.usegdi.templates.gdi.pageTemplate-basic': {
        id: 'com.usegdi.templates.gdi.pageTemplate-basic',
        name: 'pageTemplate-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.gdi.pageTemplate-basic',
            schema: {
                strings: {},
                colors: {},
                extra: {
                    templatesDatasetId: {
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
                strings: {},
                colors: {},
                extra: {
                    templatesDatasetId: 'apps',
                    contentUrl: '#',
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
                        url: 'screenshot.gdi.page template-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.page template-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.page template-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.page template-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
                    },
                },
            },
        },
        tags: ['type-pageTemplate'],
        dataTags: [],
        widgetType: 'pageTemplate',
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
                        url: 'screenshot.gdi.templates-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.templates-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.templates-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.templates-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
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
                        order: 0,
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
                },
                colors: {},
                extra: {
                    href: '#',
                    hrefSecondary: '#',
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
                        url: 'screenshot.gdi.twins-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.twins-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.twins-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.twins-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
                    },
                },
            },
        },
        tags: ['type-twins'],
        dataTags: [],
        widgetType: 'twins',
        isBlock: true,
    },
    'com.usegdi.templates.tech.bigOne-basic': {
        id: 'com.usegdi.templates.tech.bigOne-basic',
        name: 'bigOne-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.tech.bigOne-basic',
            schema: {
                strings: {},
                colors: {},
                extra: {},
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {},
                colors: {},
                extra: {},
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
                        url: 'screenshot.gdi.big one-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.big one-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.big one-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.big one-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
                    },
                },
            },
        },
        tags: ['type-bigOne'],
        dataTags: [],
        widgetType: 'bigOne',
        isBlock: true,
    },
    'com.usegdi.templates.tech.ctaLine-basic': {
        id: 'com.usegdi.templates.tech.ctaLine-basic',
        name: 'ctaLine-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.tech.ctaLine-basic',
            schema: {
                strings: {},
                colors: {},
                extra: {},
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {},
                colors: {},
                extra: {},
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
                        url: 'screenshot.gdi.cta line-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.cta line-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.cta line-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.cta line-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
                    },
                },
            },
        },
        tags: ['type-ctaLine'],
        dataTags: [],
        widgetType: 'ctaLine',
        isBlock: true,
    },
    'com.usegdi.templates.tech.fourPack-basic': {
        id: 'com.usegdi.templates.tech.fourPack-basic',
        name: 'fourPack-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.tech.fourPack-basic',
            schema: {
                strings: {},
                colors: {},
                extra: {},
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {},
                colors: {},
                extra: {},
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
                        url: 'screenshot.gdi.four pack-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.four pack-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.four pack-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.four pack-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
                    },
                },
            },
        },
        tags: ['type-fourPack'],
        dataTags: [],
        widgetType: 'fourPack',
        isBlock: true,
    },
    'com.usegdi.templates.gdi.pageBlog-basic': {
        id: 'com.usegdi.templates.gdi.pageBlog-basic',
        name: 'pageBlog-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.gdi.pageBlog-basic',
            schema: {
                strings: {},
                colors: {},
                extra: {},
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {},
                colors: {},
                extra: {},
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
                        url: 'screenshot.gdi.page blog-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.page blog-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.page blog-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.page blog-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
                    },
                },
            },
        },
        tags: ['type-pageBlog'],
        dataTags: [],
        widgetType: 'pageBlog',
        isBlock: true,
    },
    'com.usegdi.templates.tech.sixPack-basic': {
        id: 'com.usegdi.templates.tech.sixPack-basic',
        name: 'sixPack-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.tech.sixPack-basic',
            schema: {
                strings: {},
                colors: {},
                extra: {},
            },
        },
        sampleData: {
            normal: {
                id: 'normal',
                strings: {},
                colors: {},
                extra: {},
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
                        url: 'screenshot.gdi.six pack-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.six pack-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.six pack-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.six pack-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
                    },
                },
            },
        },
        tags: ['type-sixPack'],
        dataTags: [],
        widgetType: 'sixPack',
        isBlock: true,
    },
    'com.usegdi.templates.tech.topHeader-basic': {
        id: 'com.usegdi.templates.tech.topHeader-basic',
        name: 'topHeader-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.tech.topHeader-basic',
            schema: {
                strings: {
                    slogan: {
                        fieldType: 'text',
                        order: 0,
                    },
                },
                colors: {},
                extra: {
                    logoImageUrl: {
                        fieldType: 'image',
                        isRequired: true,
                        order: 1,
                    },
                    hrefExtra: {
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
                    slogan: 'come into focus',
                },
                colors: {},
                extra: {
                    logoImageUrl: '',
                    hrefExtra: '#',
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
    'com.usegdi.templates.gdi.card-1': {
        id: 'com.usegdi.templates.gdi.card-1',
        name: 'card-1',
        description: '',
        params: {
            id: 'com.usegdi.templates.card.card-1',
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
                strings: {},
                colors: {},
                extra: {
                    href: '#',
                },
            },
            blue: {
                id: 'blue',
                strings: {
                    slogan: 'Try GDI',
                    header: 'Open Source Web Presence',
                    description:
                        'With GDI you can unlock hundreds of custom designs made by people around the world with a passion for elegant, beautiful UI',
                    ctaButtonText: 'Join free',
                },
                colors: {
                    background: 'dodgerblue',
                    text: 'pink',
                },
                extra: {
                    imageUrl: 'https://picsum.photos/seed/10/400/280',
                    href: '#',
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
            blue: {
                desktop: {
                    width: 1000,
                    height: 400,
                    ratio: 2.5,
                },
                mobile: {
                    width: 500,
                    height: 1383,
                    ratio: 0.3615328994938539,
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
                        url: 'screenshot.card.card-1.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.card.card-1.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.card.card-1.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.card.card-1.normal.mobile.thumb.webp',
                        urlIsRemote: false,
                    },
                },
            },
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.card.card-1.blue.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.card.card-1.blue.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.card.card-1.blue.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.card.card-1.blue.mobile.thumb.webp',
                        urlIsRemote: false,
                    },
                },
            },
        },
        tags: ['type-card'],
        dataTags: [],
        widgetType: 'card',
        isBlock: true,
    },
};
