import {apiKey} from 'app.json'
import {launchAsyncTask} from "./ApiServices";

/** *** **/
/** GET **/
/** *** **/
export const getFilms = (callbackError, callbackSuccess) => async(dispatch, getState) => {
    let url    = `/api/delete_goal/${goalId}`;
    let params = null;
    let config = {
        headers: {
            'Authorization': 'Bearer '+ accessToken,
            'Content-Type':  'application/json'
        }
    };

    const currentFunction      = getFilms(callbackError, callbackSuccess);
    const currentFunctionProps = {tag: 'GET_FILMS', verb: 'GET', url, config, params, callbackError, callbackSuccess};
    return dispatch(launchAsyncTask(currentFunctionProps, currentFunction));
};

export const geToken = (callbackError, callbackSuccess) => async(dispatch, getState) => {
    let url    = `/authentication/token/new?api_key=` + apiKey ;
    let params = null;
    let config = null;

    const currentFunction      = geToken(callbackError, callbackSuccess);
    const currentFunctionProps = {tag: 'GET_TOKEN', verb: 'GET', url, config, params, callbackError, callbackSuccess};
    return dispatch(launchAsyncTask(currentFunctionProps, currentFunction));
};

export const validateToken = (callbackError, callbackSuccess) => async(dispatch, getState) => {
    let url    = `/authentication/token/new?api_key=` + apiKey ;
    let params = null;
    let config = null;

    const currentFunction      = geToken(callbackError, callbackSuccess);
    const currentFunctionProps = {tag: 'GET_TOKEN', verb: 'GET', url, config, params, callbackError, callbackSuccess};
    return dispatch(launchAsyncTask(currentFunctionProps, currentFunction));
};

