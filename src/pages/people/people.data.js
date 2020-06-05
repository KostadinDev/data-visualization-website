import Francis from './../../images/portraits/francis.JPG'
import Jared from './../../images/portraits/jared.JPG'
import Mike from './../../images/portraits/mike.JPG'
import Kosta from './../../images/portraits/kosta.JPG'
import Drew from './../../images/portraits/drew.JPG'
import Brenton from './../../images/portraits/brenton.JPG'

const PEOPLE_DATA = [
    {
        id: 1,
        title: 'Faculty',
        routeName: 'faculty',
        items: [
            {
                id: 1,
                name: 'Francis Cristobal',
                imageUrl: Francis,
                major: "Computer Science",
                bio: "The Biotechnology Innovation Organization is the largest trade organization in the world that represents the biotechnology industry. It was founded in 1993 as the Biotechnology Industry Organization,"
            },
            {
                id: 2,
                name: 'Jared McLean',
                imageUrl: Jared,
                major: 'Data Science',
                bio: "The Biotechnology Innovation Organization is the largest trade organization in the world that represents the biotechnology industry. It was founded in 1993 as the Biotechnology Industry Organization,"
            },
        ]
    },
    {
        id: 2,
        title: 'Students',
        routeName: 'students',
        items: [
            {
                id: 10,
                name: 'Michael Dodge',
                imageUrl: Mike,
                major: '',
                bio: "The Biotechnology Innovation Organization is the largest trade organization in the world that represents the biotechnology industry. It was founded in 1993 as the Biotechnology Industry Organization,"
            },
            {
                id: 11,
                name: 'Drew Gotshalk',
                imageUrl: Drew,
                major: '',
                bio: "The Biotechnology Innovation Organization is the largest trade organization in the world that represents the biotechnology industry. It was founded in 1993 as the Biotechnology Industry Organization,"
            },

        ]
    },
    {
        id: 3,
        title: '',
        routeName: 'students',
        items: [
            {
                id: 31,
                name: 'Brenton Barcelona',
                imageUrl: Brenton,
                major: '',
                bio: "The Biotechnology Innovation Organization is the largest trade organization in the world that represents the biotechnology industry. It was founded in 1993 as the Biotechnology Industry Organization,"
            },
            {
                id: 32,
                name: 'Kostadin Devedzhiev',
                imageUrl: Kosta,
                major: '',
                bio: "The Biotechnology Innovation Organization is the largest trade organization in the world that represents the biotechnology industry. It was founded in 1993 as the Biotechnology Industry Organization,"
            },

        ]
    },

];

export default PEOPLE_DATA;
