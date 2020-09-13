import { combineReducers } from 'redux';
import LoadingReducer from 'services/redux/loading/loadingReducer';

const reducer = combineReducers({
    LoadingReducer,
});

const rootReducer = (state, action) => {

    if (action.type === 'RESET_STATE') {
        this.state = undefined;
    }

    return reducer(state, action);
};

export default rootReducer;
