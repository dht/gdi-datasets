import { clear } from './_base';

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

const run = async () => {
    await clear(nodeTypes);
};

run();
