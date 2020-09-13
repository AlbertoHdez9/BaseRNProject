import reducer from "./index"
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// Note: this API requires redux@>=3.1.0
const config = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
    whitelist: []
};

const reducers = persistReducer(config, reducer);

const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] && __DEV__)
    ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({shouldHotReload: false})
    : compose;

export default function configureStore() {

    const middleware = (__DEV__) ? [thunk, logger] : [thunk];
    const enhancers = [applyMiddleware(...middleware)];
    const initialState = {};

    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(...enhancers)
    );
    let persistor = persistStore(store);

    return {persistor, store};
}
