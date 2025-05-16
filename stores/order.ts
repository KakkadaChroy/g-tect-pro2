import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {ID} from "assets/ts/model";
import type {FoodModel} from "~/components/food/core/model";
import type {DrinkModel} from "~/components/location/core/model";

export const useOrderStore = defineStore('order', () => {
    // init state
    const isModal = ref(false);
    const selectedItemId = ref(null);
    const orderItems = ref<FoodModel[]>([]);
    const totalPrice = ref(0);
    const isAdded = ref(false);
    const drinkId = ref(null);
    const drinkCardItems = ref<DrinkModel[]>([]);

    // handler functions
    const handleOpen = (id: ID) => {
        selectedItemId.value = id;
        isModal.value = true;
    };
    const handleClose = () => {
        isModal.value = false;
        selectedItemId.value = null;
    };
    const addToOrder = (orderItem: FoodModel) => {
        orderItems.value.push(orderItem);
    };
    const clearOrder = () => {
        orderItems.value = [];
    };
    const setTotal = (total) => {
        totalPrice.value = total;
    }
    const setIsDrinkId = (id: ID) => {
        drinkId.value = id;
    }
    const addDrinkToCart = (drinkItems: DrinkModel) => {
        drinkCardItems.value.push(drinkItems);
    }
    const removeDrinks = () => {
        drinkCardItems.value = [];
    }


    return {
        // state
        isModal,
        orderItems,
        totalPrice,
        isAdded,
        drinkId,
        drinkCardItems,

        // functions
        handleOpen,
        handleClose,
        selectedItemId,
        addToOrder,
        clearOrder,
        setTotal,
        setIsDrinkId,
        addDrinkToCart,
        removeDrinks
    };
}, {
    persist: true
})
