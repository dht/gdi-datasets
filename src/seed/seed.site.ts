import { breakpoints } from '../nodes-seed/site/node.breakpoints';
import { fonts } from '../nodes-seed/site/node.fonts';
import { images } from '../nodes-seed/site/node.images';
import { instances } from '../nodes-seed/site/node.instances';
import { instancesProps } from '../nodes-seed/site/node.instancesProps';
import { locale } from '../nodes-seed/site/node.locale';
import { meta } from '../nodes-seed/site/node.meta';
import { pages } from '../nodes-seed/site/node.pages';
import { widgets } from '../nodes-seed/site/node.widgets';
import { seed } from '@gdi/store-seeder';

const state = {
    breakpoints,
    fonts,
    images,
    instances,
    instancesProps,
    locale,
    meta,
    pages,
    widgets,
};

const nodeTypes: Record<string, NodeType> = {
    meta: 'single',
    palette: 'single',
    fonts: 'single',
    instances: 'collection',
    breakpoints: 'collection',
    widgets: 'collection',
    images: 'collection',
    pages: 'collection',
    pageInstances: 'collection',
    instancesProps: 'collection',
};

seed(state, nodeTypes);
