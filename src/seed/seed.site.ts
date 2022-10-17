import { breakpoints } from '../nodes-seed/site/node.breakpoints';
import { fonts } from '../nodes-seed/site/node.fonts';
import { images } from '../nodes-seed/site/node.images';
import { initFirebase } from '../utils/firestore';
import { instances } from '../nodes-seed/site/node.instances';
import { instancesProps } from '../nodes-seed/site/node.instancesProps';
import { locale } from '../nodes-seed/site/node.locale';
import { meta } from '../nodes-seed/site/node.meta';
import { pageInstances } from '../nodes-seed/site/node.pageInstances';
import { pages } from '../nodes-seed/site/node.pages';
import { palette } from '../nodes-seed/site/node.palette';
import { siteProperties } from '../nodes-seed/site/node.siteProperties';
import { widgets } from '../nodes-seed/site/node.widgets';
import { seed } from '@gdi/store-seeder';

initFirebase();

const state = {
    breakpoints,
    palette,
    fonts,
    images,
    instances,
    instancesProps,
    locale,
    meta,
    pages,
    pageInstances,
    siteProperties,
    widgets,
};

const nodeTypes: Record<string, NodeType> = {
    meta: 'single',
    palette: 'single',
    fonts: 'single',
    siteProperties: 'single',
    instances: 'collection',
    breakpoints: 'collection',
    widgets: 'collection',
    images: 'collection',
    pages: 'collection',
    pageInstances: 'collection',
    instancesProps: 'collection',
};

seed(state, nodeTypes);
