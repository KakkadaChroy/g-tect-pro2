const useHooks = defineStore('hooks', () => {
    // init state
    const isLoginModal = ref<boolean>(false);


    // handler functions
    const handleOpen = () => isLoginModal.value = true;
    const handleClose = () => isLoginModal.value = false;

    return {
        isLoginModal,

        // function
        handleOpen,
        handleClose,
    }
})