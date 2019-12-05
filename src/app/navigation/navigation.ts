import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'platform',
        title    : 'Platforme de stage',
        type     : 'group',
        children : [
            {
                id       : 'catalogue',
                title    : 'Catalogue des stages',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
        
            },
            {
                id       : 'condidatures',
                title    : 'Mes condidatures',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/condidatures',
        
            }
        ]
    }
];
