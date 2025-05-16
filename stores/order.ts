import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {ID} from "assets/ts/model";
import type {FoodModel} from "~/components/food/core/model";

export const useOrderStore = defineStore('order', () => {
    // init state
    const isModal = ref(false);
    const selectedItemId = ref(null);
    const orderItems = ref<FoodModel[]>([]);
    const totalPrice = ref(0);

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


    return {
        // state
        isModal,
        orderItems,
        totalPrice,

        // functions
        handleOpen,
        handleClose,
        selectedItemId,
        addToOrder,
        clearOrder,
        setTotal
    };
}, {
    persist: true
})
