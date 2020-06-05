import ACM from '../../images/partners/acm-resized.png'
import Lava from '../../images/partners/lava-resized.png'
import IkeWai from '../../images/partners/IkeWai-resized.png'
import Imiloa from '../../images/partners/Imiloa-resized.png'
import Sage2 from '../../images/partners/SAGE2-resized.png'
import SDAV from '../../images/partners/sdav-resized.png'
import NSF from '../../images/partners/NSF-resized.png'
import Mega from '../../images/partners/MEGA-resized.png'
import UHArt from '../../images/partners/UHArt.png'

const PARTNERS_DATA = [
    {
        id: 1,
        title: 'Partners',
        routeName: '',
        items: [
            {
                id: 1,
                name: 'Francis Cristobal',
                imageUrl: NSF,
                link: "Computer Science",
            },
            {
                id: 2,
                name: 'Jared McLean',
                imageUrl: IkeWai,
                link: 'Data Science',},
            {
                id: 3,
                name: 'Jared McLean',
                imageUrl: Imiloa,
                link: 'Data Science'
            },
        ]
    },
    {
        id: 2,
        title: '',
        routeName: '',
        items: [
            {
                id: 1,
                name: 'Francis Cristobal',
                imageUrl: SDAV,
                link: "Computer Science",
            },
            {
                id: 2,
                name: 'Jared McLean',
                imageUrl: Lava,
                link: 'Data Science',},
            {
                id: 3,
                name: 'Jared McLean',
                imageUrl: ACM,
                link: 'Data Science'
            },
        ]
    },
    {
        id: 3,
        title: '',
        routeName: '',
        items: [
            {
                id: 1,
                name: 'Francis Cristobal',
                imageUrl: Sage2,
                link: "Computer Science",
            },
            {
                id: 2,
                name: 'Jared McLean',
                imageUrl: UHArt,
                link: 'Data Science',},
            {
                id: 3,
                name: 'Jared McLean',
                imageUrl: Mega,
                link: 'Data Science'
            },
        ]
    },

];

export default PARTNERS_DATA;
