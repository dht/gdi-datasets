import { ISiteStore } from '../src/types';
import { libraryWidgets } from '../src/mock.libraryWidgets';

export const state: ISiteStore = {
    meta: {
        schemaVersion: '1.0.1',
    },
    palette: {
        themeDarker: '#004578',
        themeDark: '#005a9e',
        themeDarkAlt: '#106ebe',
        themePrimary: '#0078d4',
        themeSecondary: '#2b88d8',
        themeTertiary: '#71afe5',
        themeLight: '#c7e0f4',
        themeLighter: '#deecf9',
        themeLighterAlt: '#eff6fc',
        black: '#000000',
        blackTranslucent40: 'rgba(0,0,0,.4)',
        neutralDark: '#201f1e',
        neutralPrimary: '#323130',
        neutralPrimaryAlt: '#3b3a39',
        neutralSecondary: '#605e5c',
        neutralSecondaryAlt: '#8a8886',
        neutralTertiary: '#a19f9d',
        neutralTertiaryAlt: '#c8c6c4',
        neutralQuaternary: '#d2d0ce',
        neutralQuaternaryAlt: '#e1dfdd',
        neutralLight: '#edebe9',
        neutralLighter: '#f3f2f1',
        neutralLighterAlt: '#faf9f8',
        accent: '#0078d4',
        white: '#ffffff',
        whiteTranslucent40: 'rgba(255,255,255,.4)',
        yellowDark: '#d29200',
        yellow: '#ffb900',
        yellowLight: '#fff100',
        orange: '#d83b01',
        orangeLight: '#ea4300',
        orangeLighter: '#ff8c00',
        redDark: '#a4262c',
        red: '#e81123',
        magentaDark: '#5c005c',
        magenta: '#b4009e',
        magentaLight: '#e3008c',
        purpleDark: '#32145a',
        purple: '#5c2d91',
        purpleLight: '#b4a0ff',
        blueDark: '#002050',
        blueMid: '#00188f',
        blue: '#0078d4',
        blueLight: '#00bcf2',
        tealDark: '#004b50',
        teal: '#008272',
        tealLight: '#00b294',
        greenDark: '#004b1c',
        green: '#107c10',
        greenLight: '#bad80a',
    },
    fontSizes: {
        tiny: '10px',
        xSmall: '10px',
        small: '12px',
        smallPlus: '12px',
        medium: '14px',
        mediumPlus: '16px',
        icon: '16px',
        large: '18px',
        xLarge: '20px',
        xLargePlus: '24px',
        xxLarge: '28px',
        xxLargePlus: '32px',
        superLarge: '42px',
        mega: '68px',
    },
    spacing: {
        s1: '4px',
        s2: '8px',
        m: '16px',
        l1: '20px',
        l2: '32px',
    },
    fonts: {
        typographyId: 'inter',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 'regular',
    },
    breakpoints: {
        mobile: {
            id: 'mobile',
            screenWidth: 375,
            screenHeight: 720,
            minWidth: 0,
            maxWidth: 600,
            containerWidth: 0,
            order: 0,
        },
        tablet: {
            id: 'tablet',
            screenWidth: 720,
            screenHeight: 1280,
            minWidth: 600,
            maxWidth: 1100,
            containerWidth: 720,
            order: 1,
        },
        '720p': {
            id: '720p',
            screenWidth: 1280,
            screenHeight: 720,
            minWidth: 1100,
            maxWidth: 1300,
            containerWidth: 1024,
            order: 2,
        },
        HD: {
            id: 'HD',
            screenWidth: 1360,
            screenHeight: 760,
            minWidth: 1300,
            maxWidth: 1440,
            containerWidth: 1280,
            order: 3,
        },
        'HD+': {
            id: 'HD+',
            screenWidth: 1600,
            screenHeight: 900,
            minWidth: 1440,
            maxWidth: 1700,
            containerWidth: 1360,
            order: 4,
        },
        '1080p': {
            id: '1080p',
            screenWidth: 1920,
            screenHeight: 1080,
            minWidth: 1700,
            maxWidth: 2000,
            containerWidth: 1600,
            isDefault: true,
            order: 5,
        },
        '2k': {
            id: '2k',
            screenWidth: 2560,
            screenHeight: 1440,
            minWidth: 2000,
            maxWidth: 2600,
            containerWidth: 1920,
            order: 6,
        },
        '4k': {
            id: '4k',
            screenWidth: 3840,
            screenHeight: 2160,
            minWidth: 2600,
            containerWidth: 2560,
            order: 7,
        },
    },
    instances: {
        'home-userBar-simple-1': {
            id: 'home-userBar-simple-1',
            widgetId: 'com.usegdi.templates.basic.userBar-simple',
            pageId: 'home',
            order: 1,
        },
        'home-hero-simple-1': {
            id: 'home-hero-simple-1',
            widgetId: 'com.usegdi.templates.basic.hero-simple',
            pageId: 'home',
            order: 2,
        },
        'home-sectionHeader-simple-1': {
            id: 'home-sectionHeader-simple-1',
            widgetId: 'com.usegdi.templates.basic.sectionHeader-simple',
            pageId: 'home',
            order: 3,
        },
        'home-installation-simple-1': {
            id: 'home-installation-simple-1',
            widgetId: 'com.usegdi.templates.basic.installation-simple',
            pageId: 'home',
            order: 4,
        },
        'home-sectionHeader-simple-2': {
            id: 'home-sectionHeader-simple-2',
            widgetId: 'com.usegdi.templates.basic.sectionHeader-simple',
            pageId: 'home',
            order: 5,
        },
        'home-feature-simple-1': {
            id: 'home-feature-simple-1',
            widgetId: 'com.usegdi.templates.basic.feature-simple',
            pageId: 'home',
            order: 6,
        },
        'home-feature-simple-2': {
            id: 'home-feature-simple-2',
            widgetId: 'com.usegdi.templates.basic.feature-simple',
            pageId: 'home',
            order: 7,
        },
        'home-feature-simple-3': {
            id: 'home-feature-simple-3',
            widgetId: 'com.usegdi.templates.basic.feature-simple',
            pageId: 'home',
            order: 8,
        },
        'home-feature-simple-4': {
            id: 'home-feature-simple-4',
            widgetId: 'com.usegdi.templates.basic.feature-simple',
            pageId: 'home',
            order: 9,
        },
        'home-lineCta-simple-1': {
            id: 'home-lineCta-simple-1',
            widgetId: 'com.usegdi.templates.basic.lineCta-simple',
            pageId: 'home',
            order: 10,
        },
        'home-sectionHeader-simple-3': {
            id: 'home-sectionHeader-simple-3',
            widgetId: 'com.usegdi.templates.basic.sectionHeader-simple',
            pageId: 'home',
            order: 11,
        },
        'home-imageAndText-simple-1': {
            id: 'home-imageAndText-simple-1',
            widgetId: 'com.usegdi.templates.basic.imageAndText-simple',
            pageId: 'home',
            order: 12,
        },
        'home-footer-simple-1': {
            id: 'home-footer-simple-1',
            widgetId: 'com.usegdi.templates.basic.footer-simple',
            pageId: 'home',
            order: 13,
        },
    },
    pages: {
        home: {
            id: 'home',
            title: 'Home',
            description: 'The home page',
            iconName: 'Home',
            order: 1,
        },
    },
    images: {
        '1': {
            id: '1',
            title: 'Debitis modi explicabo.',
            imageUrl: 'https://picsum.photos/seed/1/1593/948',
            imageThumbUrl:
                'https://picsum.photos/seed/1/200/119.02071563088512',
            tags: ['people', 'friend'],
            ratio: 1.6803797468354431,
        },
    },
    locale: {
        localeId: 'en-us',
        isRtl: false,
    },
    widgets: {
        ...libraryWidgets,
    },
    instancesMapColors: {},
    instancesMapStrings: {},
    instancesProps: {
        'home-hero-simple-1': {
            id: 'home-hero-simple-1',
            strings_header: 'gDI',
            strings_description:
                'An open-source & extendable content management system (CMS) written in ReactJS, hosted on Firebase //',
            strings_ctaButtonText: 'Get Started',
            strings_secondButtonText: 'Github',
            strings_imageCreditsTitle: 'MidJourney AI-generated image',
            strings_imageCreditsDescription:
                'futuristic phone concept neon colorful abstract --ar 3:2',
            colors_text: 'white',
            extra_href: 'https://github.com/dht/gdi/docs',
            extra_hrefSecond: 'https://github.com/dht/gdi/docs',
            extra_headerFontSize: 70,
            extra_imageUrl: 'https://appofthebox.web.app/6.webp',
            extra_showBeta: true,
        },
        'home-userBar-simple-1': {
            id: 'home-userBar-simple-1',
            extra_logoImageUrl: '',
            extra_githubLink: 'https://github.com/dht/gdi',
            extra_items: [
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

        'home-sectionHeader-simple-1': {
            id: 'home-sectionHeader-simple-1',
            strings_text: 'Installation',
            extra_id: 'installation',
            extra_isHidden: true,
        },
        'home-installation-simple-1': {
            id: 'home-installation-simple-1',
            strings_command: 'npm install -g @gdi/cli',
            strings_nextStage: 'After which follow the ',
            strings_nextStageLink: 'Getting Started Guide',
            colors_text: '#fff',
            extra_hrefNextStage: 'https://github.com/dht/gdi',
        },
        'home-sectionHeader-simple-2': {
            id: 'home-sectionHeader-simple-2',
            strings_text: 'Features',
            extra_id: 'features',
            extra_isHidden: true,
        },
        'home-feature-simple-1': {
            id: 'home-feature-simple-1',
            strings_slogan: 'Move blocks around',
            strings_header: 'Structured',
            strings_description:
                'Schema-based definition for all entities make page-structure manipulation easy and straight-forward //',
            extra_href: '#',
            extra_imageUrl: 'https://appofthebox.web.app/s1.webp',
            extra_animated: true,
        },
        'home-feature-simple-2': {
            id: 'home-feature-simple-2',
            strings_slogan: 'Find new blocks',
            strings_header: 'Extendable',
            strings_description:
                'Add new NPM packages which contain new blocks & templates. Easily switch between blocks to keep block data //',
            extra_href: '#',
            extra_imageUrl: 'https://appofthebox.web.app/s2.webp',
            extra_animated: true,
        },
        'home-feature-simple-3': {
            id: 'home-feature-simple-3',
            strings_slogan: 'Admin permissions',
            strings_header: 'Manageable',
            strings_description:
                "With a form-based admin-panel you can allow non-techies to edit the page's content //",
            extra_href: '#',
            extra_imageUrl: 'https://appofthebox.web.app/s3.webp',
            extra_animated: true,
        },
        'home-feature-simple-4': {
            id: 'home-feature-simple-4',
            strings_slogan: 'See preview',
            strings_header: 'Visual',
            strings_description:
                'Use the preview to see the current page structure & design, change typography, color palettes and content //',
            extra_href: '#',
            extra_imageUrl: 'https://appofthebox.web.app/s4.webp',
            extra_animated: true,
        },
        'home-lineCta-simple-1': {
            id: 'home-lineCta-simple-1',
            strings_textStrong: 'Unleash',
            strings_text: 'the power of Firebase ©',
            strings_ctaButtonText: 'Visit Github',
            extra_href: 'https://github.com/dht/gdi',
            extra_imageUrl: 'https://appofthebox.web.app/6.webp',
        },
        'home-sectionHeader-simple-3': {
            id: 'home-sectionHeader-simple-3',
            strings_text: 'Community',
            extra_id: 'community',
            extra_isHidden: true,
        },
        'home-imageAndText-simple-1': {
            id: 'home-imageAndText-simple-1',
            strings_slogan: 'community',
            strings_ctaButtonText: 'How to join?',
            strings_header: 'People who joined recently',
            strings_description:
                'Start adding your own templates and blocks, contribute your thoughts and ideas, join the discussion //',
            extra_href: 'https://github.com/dht/gdi',
            extra_backgroundImageUrl: 'https://appofthebox.web.app/1.webp',
        },
        'home-footer-simple-1': {
            id: 'home-footer-simple-1',
            strings_copyright: 'Copyright 2022 ©',
        },
    },
    strings: {},
};
