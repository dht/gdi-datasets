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
                        url: 'screenshot.gdi.section header-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.section header-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.section header-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.section header-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
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
                        url: 'screenshot.starter.tester-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.starter.tester-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.starter.tester-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.starter.tester-basic.normal.mobile.thumb.webp',
                        urlIsRemote: false,
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
