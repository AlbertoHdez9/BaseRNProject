
const INITIAL_STATE = {
    film: '',
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        /** LOADING **/
        case "set_film":
            return {
                ...state,
                film: action.payload
            };

        case "set_film_state":
            return { ...state, [action.payload.prop]: action.payload.value };

        default:
            return state;
    }
};
