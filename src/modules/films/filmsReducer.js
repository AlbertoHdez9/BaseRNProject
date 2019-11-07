
const INITIAL_STATE = {
    films: '',
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        /** LOADING **/
        case "set_films":
            return {
                ...state,
                films: action.payload
            };

        case "set_films_state":
            return { ...state, [action.payload.prop]: action.payload.value };

        default:
            return state;
    }
};
