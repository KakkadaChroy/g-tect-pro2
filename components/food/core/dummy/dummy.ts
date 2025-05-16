import type {FoodModel} from "~/components/food/core/model";

import card1 from '@/assets/images/cards/card1.png';
import card2 from '@/assets/images/cards/card2.png';
import card3 from '@/assets/images/cards/card3.png';
import card4 from '@/assets/images/cards/card4.png';

export const foodItems: FoodModel[] = [
    {
        id: 1,
        image: card1,
        title: 'California Crunch Bowl',
        price: 20,
        description: 'Shrimp • Crab • Cucumber • Green Onion • Carrot • Edamame • Avocado • Soy Sauce • Tempura Flakes • Spicy Mayo Drizzle'
    },
    {
        id: 2,
        image: card2,
        title: 'Rainbow Bowl',
        price: 10,
        description: 'Crab • Salmon • Avocado • Cucumber • Pineapple • Carrot • Sesame Seeds • House Sauce'
    },
    {
        id: 3,
        image: card3,
        title: 'Volcano Bowl',
        price: 12,
        description: 'Spicy Salmon • Spicy Tuna • Green Onion • Cabbage • Cucumber • Carrot • Jalapeño • Ginger'
    },
    {
        id: 4,
        image: card4,
        price: 18,
        title: 'Tuna Lover\'s Bowl',
        description: 'Tuna • Ground Spicy Tuna • Avocado • Carrot • Cucumber • Edamame • Watermelon Radish'
    }
];