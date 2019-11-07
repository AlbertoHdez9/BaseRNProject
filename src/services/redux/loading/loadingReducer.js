
const INITIAL_STATE = {
    isLoading: false,
    isLoadingRow: false
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        /** LOADING **/
        case "set_loading":
            return { ...state, [action.payload.prop]: action.payload.value };

        default:
            return state;
    }
};
