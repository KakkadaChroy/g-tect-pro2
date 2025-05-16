import type {OwnCardModel} from "~/components/menu/core/model";

// step1
import pic1 from '@/assets/images/menu/whiteRice.png';
import pic2 from '@/assets/images/menu/brownRice.png';
import pic3 from '@/assets/images/menu/Salad.png';
import pic4 from '@/assets/images/menu/noodles.png';
// step2
import pic5 from '@/assets/images/menu/salmon.png';
import pic6 from '@/assets/images/menu/tona.png';
import pic7 from '@/assets/images/menu/spicySalmon.png';
import pic8 from '@/assets/images/menu/shrimp.png';
import pic9 from '@/assets/images/menu/chicken.png';
import pic10 from '@/assets/images/menu/tofu.png';
import pic11 from '@/assets/images/menu/crab.png';
import pic12 from '@/assets/images/menu/octopus.png';
// step3
import pic13 from '@/assets/images/menu/corn.png';
import pic14 from '@/assets/images/menu/edama.png';
import pic15 from '@/assets/images/menu/cocumber.png';
import pic16 from '@/assets/images/menu/sweetOnion.png';
import pic17 from '@/assets/images/menu/avocado.png';
import pic18 from '@/assets/images/menu/ginger.png';
import pic19 from '@/assets/images/menu/carrot.png';
import pic20 from '@/assets/images/menu/jalapeno.png';
// step4
import pic21 from '@/assets/images/menu/ponzuSource.png';
import pic22 from '@/assets/images/menu/gojujan.png';
import pic23 from '@/assets/images/menu/sweetSoy.png';
import pic24 from '@/assets/images/menu/sriracha.png';

export const yourOwnCardItems: OwnCardModel[] = [
    {
        id: 1,
        number: 1,
        step: 'Step 1',
        title: 'Choose a Base',
        content: [
            {
                id: 1,
                name: 'White Rice',
                imageSrc: pic1,
            },
            {
                id: 2,
                name: 'Brown Rice',
                imageSrc: pic2,
            },
            {
                id: 3,
                name: 'Salad',
                imageSrc: pic3,
            },
            {
                id: 4,
                name: 'Noodles',
                imageSrc: pic4,
            },
        ],
    },
    {
        id: 2,
        number: 2,
        step: 'Step 2',
        title: 'Pick Your Protein',
        content: [
            {
                id: 1,
                name: 'Salmon',
                imageSrc: pic5,
            },
            {
                id: 2,
                name: 'Tuna',
                imageSrc: pic6,
            },
            {
                id: 3,
                name: 'Spicy Salmon',
                imageSrc: pic7,
            },
            {
                id: 4,
                name: 'Shrimp',
                imageSrc: pic8,
            },
            {
                id: 5,
                name: 'Chicken',
                imageSrc: pic9,
            },
            {
                id: 6,
                name: 'Tofu',
                imageSrc: pic10,
            },
            {
                id: 7,
                name: 'Crab',
                imageSrc: pic11,
            },
            {
                id: 8,
                name: 'Octopus',
                imageSrc: pic12,
            },
        ],
    },
    {
        id: 3,
        number: 3,
        step: 'Step 3',
        title: 'Choose Your Mix-Ins',
        content: [
            {
                id: 1,
                name: 'Corn',
                imageSrc: pic13,
            },
            {
                id: 2,
                name: 'Edamame',
                imageSrc: pic14,
            },
            {
                id: 3,
                name: 'Cucumber',
                imageSrc: pic15,
            },
            {
                id: 4,
                name: 'Sweet Onion',
                imageSrc: pic16,
            },
            {
                id: 5,
                name: 'Avocado',
                imageSrc: pic17,
            },
            {
                id: 6,
                name: 'Ginger',
                imageSrc: pic18,
            },
            {
                id: 7,
                name: 'Carrot',
                imageSrc: pic19,
            },
            {
                id: 8,
                name: 'Jalapeno',
                imageSrc: pic20,
            },
        ],
    },
    {
        id: 4,
        number: 4,
        step: 'Step 4',
        title: 'Choose a Flavor',
        content: [
            {
                id: 1,
                name: 'Ponzu Sauce',
                imageSrc: pic21,
            },
            {
                id: 2,
                name: 'Gochujan',
                imageSrc: pic22,
            },
            {
                id: 3,
                name: 'Sweet Soy',
                imageSrc: pic23,
            },
            {
                id: 4,
                name: 'Sriracha Aioli',
                imageSrc: pic24,
            }
        ],
    }
]