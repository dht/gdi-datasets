export const layouts = {
    l1: {
        id: 'l1',
        name: 'two columns',
        items: [
            {
                id: 'i1',
                parentId: '',
                entityType: 'container',
                resolution: '1080p',
                direction: 'row',
                locationId: 'left_1',
            },
            {
                id: 'i2',
                parentId: 'i1',
                entityType: 'item',
                resolution: '1080p',
                locationId: 'left_2',
                order: 1,
            },
        ],
        tags: [],
    },
};
