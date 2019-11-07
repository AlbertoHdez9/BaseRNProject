import {combineReducers} from 'redux';

// Reducers
import FilmsReducer from 'modules/films/filmsReducer';
import FilmDetailReducer from 'modules/filmDetail/filmDetailReducer';
import LoadingReducer from 'services/redux/loading/loadingReducer';

const reducer = combineReducers({
    FilmsReducer,
    FilmDetailReducer,
    LoadingReducer,
});

const rootReducer = (state, action) => {

    if (action.type === 'RESET_STATE') {
        this.state = undefined;
    }

    return reducer(state, action);
};

export default rootReducer;
