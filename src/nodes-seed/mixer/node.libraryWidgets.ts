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
                    slogan: 'morning',
                    header: 'Wake up each morning to do',
                    description:
                        'With GDI you can unlock hundreds of custom designs made by people around the world with a passion for elegant, beautiful UI',
                    ctaButtonText: 'Join free',
                },
                colors: {
                    background: '#1a7870',
                    text: '#aaef69',
                },
                extra: {
                    imageUrl: 'https://via.placeholder.com/350x150',
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
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.about me-basic.blue.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.about me-basic.blue.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.about me-basic.blue.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.about me-basic.blue.mobile.thumb.webp',
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
                    slogan: 'morning',
                    header: 'Wake up each morning to do',
                    description:
                        'With GDI you can unlock hundreds of custom designs made by people around the world with a passion for elegant, beautiful UI',
                    ctaButtonText: 'Join free',
                },
                colors: {
                    background: '#1a7870',
                    text: '#aaef69',
                },
                extra: {
                    imageUrl: 'https://via.placeholder.com/350x150',
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
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.contact us-basic.blue.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.contact us-basic.blue.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.contact us-basic.blue.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.contact us-basic.blue.mobile.thumb.webp',
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
                strings: {
                    slogan: 'morning',
                    header: 'Wake up each morning to do',
                    description:
                        'With GDI you can unlock hundreds of custom designs made by people around the world with a passion for elegant, beautiful UI',
                    ctaButtonText: 'Join free',
                },
                colors: {
                    background: '#1a7870',
                    text: '#aaef69',
                },
                extra: {
                    imageUrl: 'https://via.placeholder.com/350x150',
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
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.cta action-basic.blue.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.cta action-basic.blue.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.cta action-basic.blue.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.cta action-basic.blue.mobile.thumb.webp',
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
                    slogan: 'morning',
                    header: 'Wake up each morning to do',
                    description:
                        'With GDI you can unlock hundreds of custom designs made by people around the world with a passion for elegant, beautiful UI',
                    ctaButtonText: 'Join free',
                },
                colors: {
                    background: '#1a7870',
                    text: '#aaef69',
                },
                extra: {
                    imageUrl: 'https://via.placeholder.com/350x150',
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
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.footer-basic.blue.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.footer-basic.blue.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.footer-basic.blue.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.footer-basic.blue.mobile.thumb.webp',
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
                    slogan: 'morning',
                    header: 'Wake up each morning to do',
                    description:
                        'With GDI you can unlock hundreds of custom designs made by people around the world with a passion for elegant, beautiful UI',
                    ctaButtonText: 'Join free',
                },
                colors: {
                    background: '#1a7870',
                    text: '#aaef69',
                },
                extra: {
                    imageUrl: 'https://via.placeholder.com/350x150',
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
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.hero-basic.blue.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.hero-basic.blue.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.hero-basic.blue.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.hero-basic.blue.mobile.thumb.webp',
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
                    slogan: 'morning',
                    header: 'Wake up each morning to do',
                    description:
                        'With GDI you can unlock hundreds of custom designs made by people around the world with a passion for elegant, beautiful UI',
                    ctaButtonText: 'Join free',
                },
                colors: {
                    background: '#1a7870',
                    text: '#aaef69',
                },
                extra: {
                    imageUrl: 'https://via.placeholder.com/350x150',
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
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.my numbers-basic.blue.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.my numbers-basic.blue.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.my numbers-basic.blue.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.my numbers-basic.blue.mobile.thumb.webp',
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
                    slogan: 'morning',
                    header: 'Wake up each morning to do',
                    description:
                        'With GDI you can unlock hundreds of custom designs made by people around the world with a passion for elegant, beautiful UI',
                    ctaButtonText: 'Join free',
                },
                colors: {
                    background: '#1a7870',
                    text: '#aaef69',
                },
                extra: {
                    imageUrl: 'https://via.placeholder.com/350x150',
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
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.my portfolio-basic.blue.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.my portfolio-basic.blue.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.my portfolio-basic.blue.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.my portfolio-basic.blue.mobile.thumb.webp',
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
                    slogan: 'morning',
                    header: 'Wake up each morning to do',
                    description:
                        'With GDI you can unlock hundreds of custom designs made by people around the world with a passion for elegant, beautiful UI',
                    ctaButtonText: 'Join free',
                },
                colors: {
                    background: '#1a7870',
                    text: '#aaef69',
                },
                extra: {
                    imageUrl: 'https://via.placeholder.com/350x150',
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
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.my resume-basic.blue.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.my resume-basic.blue.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.my resume-basic.blue.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.my resume-basic.blue.mobile.thumb.webp',
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
                    slogan: 'morning',
                    header: 'Wake up each morning to do',
                    description:
                        'With GDI you can unlock hundreds of custom designs made by people around the world with a passion for elegant, beautiful UI',
                    ctaButtonText: 'Join free',
                },
                colors: {
                    background: '#1a7870',
                    text: '#aaef69',
                },
                extra: {
                    imageUrl: 'https://via.placeholder.com/350x150',
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
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.my services-basic.blue.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.my services-basic.blue.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.my services-basic.blue.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.my services-basic.blue.mobile.thumb.webp',
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
                    slogan: 'morning',
                    header: 'Wake up each morning to do',
                    description:
                        'With GDI you can unlock hundreds of custom designs made by people around the world with a passion for elegant, beautiful UI',
                    ctaButtonText: 'Join free',
                },
                colors: {
                    background: '#1a7870',
                    text: '#aaef69',
                },
                extra: {
                    imageUrl: 'https://via.placeholder.com/350x150',
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
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.quotes-basic.blue.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.quotes-basic.blue.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.quotes-basic.blue.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.quotes-basic.blue.mobile.thumb.webp',
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
                strings: {
                    slogan: 'morning',
                    header: 'Wake up each morning to do',
                    description:
                        'With GDI you can unlock hundreds of custom designs made by people around the world with a passion for elegant, beautiful UI',
                    ctaButtonText: 'Join free',
                },
                colors: {
                    background: '#1a7870',
                    text: '#aaef69',
                },
                extra: {
                    imageUrl: 'https://via.placeholder.com/350x150',
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
            blue: {
                desktop: {
                    large: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.top header-basic.blue.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.top header-basic.blue.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.top header-basic.blue.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.top header-basic.blue.mobile.thumb.webp',
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
    'com.usegdi.templates.starter.topMenu-basic': {
        id: 'com.usegdi.templates.starter.topMenu-basic',
        name: 'topMenu-basic',
        description: '',
        params: {
            id: 'com.usegdi.templates.starter.topMenu-basic',
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
                    slogan: 'morning',
                    header: 'Wake up each morning to do',
                    description:
                        'With GDI you can unlock hundreds of custom designs made by people around the world with a passion for elegant, beautiful UI',
                    ctaButtonText: 'Join free',
                },
                colors: {
                    background: '#1a7870',
                    text: '#aaef69',
                },
                extra: {
                    imageUrl: 'https://via.placeholder.com/350x150',
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
                        url: 'screenshot.gdi.top menu-basic.normal.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.top menu-basic.normal.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.top menu-basic.normal.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1337,
                        ratio: 0.3739715781600598,
                        url: 'screenshot.gdi.top menu-basic.normal.mobile.thumb.webp',
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
                        url: 'screenshot.gdi.top menu-basic.blue.desktop.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 1000,
                        height: 400,
                        ratio: 2.5,
                        url: 'screenshot.gdi.top menu-basic.blue.desktop.thumb.webp',
                        urlIsRemote: false,
                    },
                },
                mobile: {
                    large: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.top menu-basic.blue.mobile.large.webp',
                        urlIsRemote: false,
                    },
                    thumb: {
                        width: 500,
                        height: 1383,
                        ratio: 0.3615328994938539,
                        url: 'screenshot.gdi.top menu-basic.blue.mobile.thumb.webp',
                        urlIsRemote: false,
                    },
                },
            },
        },
        tags: ['type-topMenu'],
        dataTags: [],
        widgetType: 'topMenu',
        isBlock: true,
    },
};
