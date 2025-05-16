import type {DrinkModel, PokeBarLocation} from "~/components/location/core/model";


import card1 from '@/assets/images/cards/location1.png';
import card2 from '@/assets/images/cards/location2.png';
import card3 from '@/assets/images/cards/location3.png';
import card4 from '@/assets/images/cards/location4.png';
import card5 from '@/assets/images/cards/location5.png';
import card6 from '@/assets/images/cards/location6.png';


// drink
import drink1 from '@/assets/images/cards/coca.png';
import drink2 from '@/assets/images/cards/water.png';
import drink3 from '@/assets/images/cards/tea.png';
import drink4 from '@/assets/images/cards/lemon.png';


export const locationsItems: PokeBarLocation[] = [
    {
        id: 1,
        address: 'Boston Harbor Islands, 15 State Street, Suite 1100, Boston',
        phone: '(713) 814-7100',
        email: 'pokebarharborislands@gmail.com',
        image: card1,
        hours: 'Monday - Saturday 10:30 AM - 9:00 PM Sunday - 12:00 PM - 9:00 PM',
        deliveryAvailable: true,
        pickupAvailable: true,
        km: '1 km/20 min'
    },
    {
        id: 2,
        address: '827 Boylston St, Boston',
        phone: '(715) 941-6647',
        email: 'pokebarboylston@gmail.com',
        image: card2,
        hours: 'Monday - Saturday 10:30 AM - 9:00 PM Sunday - 12:00 PM - 9:00 PM',
        deliveryAvailable: true,
        pickupAvailable: true,
        km: '3.5 km/30 min'
    },
    {
        id: 3,
        address: '372 Congress St, Boston',
        phone: '(803) 832-8595',
        email: 'pokebarcongress@gmail.com',
        image: card3,
        hours: 'Monday - Saturday 10:30 AM - 9:00 PM Sunday - 12:00 PM - 9:00 PM',
        deliveryAvailable: true,
        pickupAvailable: true,
        km: '5 km/40 min'
    },
    {
        id: 4,
        address: '1 Kendall Square, Boston',
        phone: '(719) 582-8228',
        email: 'pokebarkendallsquare@gmail.com',
        image: card4,
        hours: 'Monday - Saturday 10:30 AM - 9:00 PM Sunday - 12:00 PM - 9:00 PM',
        deliveryAvailable: true,
        pickupAvailable: true,
        km: '6 km/45 min'
    },
    {
        id: 5,
        address: '487 Cambridge St, Allston, Boston',
        phone: '(806) 472-1493',
        email: 'pokebarcambridge@gmail.com',
        image: card5,
        hours: 'Monday - Saturday 10:30 AM - 9:00 PM Sunday - 12:00 PM - 9:00 PM',
        deliveryAvailable: true,
        pickupAvailable: true,
        km: '8.5 km/50 min'
    },
    {
        id: 6,
        address: '1 Haviland St, Boston, MA 02115',
        phone: '(610) 743-8021',
        email: 'pokebarhaviland@gmail.com',
        image: card6,
        hours: 'Monday - Saturday 10:30 AM - 9:00 PM Sunday - 12:00 PM - 9:00 PM',
        deliveryAvailable: true,
        pickupAvailable: true,
        km: '10 km/1 hours'
    },
];


export const drinkItems: DrinkModel[] = [
    {
        id: 1,
        name: 'Coca Cola',
        price: 2,
        image: drink1
    },
    {
        id: 2,
        name: 'Water',
        price: 2,
        image: drink2
    },
    {
        id: 3,
        name: 'Sweet Tea',
        price: 2,
        image: drink3
    },
    {
        id: 4,
        name: 'Lemonade',
        price: 2,
        image: drink4
    },
]