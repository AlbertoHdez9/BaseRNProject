import axios from 'axios';
import {apiURL} from 'app.json';

let isShowingAlert = false;

export const launchAsyncTask = (currentProps, currentFunction) => async(dispatch) => {
    const { tag, verb, url, config, params, callbackError, callbackSuccess } = currentProps;
    let response   = null;
    let httpClient = axios.create();
    httpClient.defaults.baseURL = apiURL;

    if (verb === 'DEL') {
        await httpClient.delete(url, config)
            .then((result) => { response = result })
            .catch((error) => { response = error.response });
    }

    if (verb === 'GET') {
        await httpClient.get(url, config)
            .then((result) => { response = result })
            .catch((error) => { response = error.response });
    }

    if (verb === 'POST') {
        await httpClient.post(url, params, config)
            .then((result) => { response = result })
            .catch((error) => { response = error.response });
    }

    if (verb === 'PUT') {
        await httpClient.put(url, params, config)
            .then((result) => { response = result })
            .catch((error) => { response = error.response });
    }

    dispatch(onResponse(tag, response, callbackError, callbackSuccess, currentFunction));
};

/** *************** **/
/** PRIVATE METHODS **/
/** *************** **/
const onResponse = (tag, response, callbackError, callbackSuccess, currentFunction) => async(dispatch, getState) => {

    if (__DEV__) console.log('TAG: ', tag, ' | Response: ', response);

    if (response === undefined || response === null) {
        if (isShowingAlert) {
            return;
        }

        isShowingAlert = true;
        DialogManager.singleAlertOneButton(
            '',
            'Network error. Please try again later',
            () => {isShowingAlert = false}
        );
        return;
    }

    const { data, status } = response;

    switch (status) {
        case 200:
        case 201:
            callbackSuccess(tag, data);
            break;

        case 400:
            // If not exists callbackError -> Don't show anything
            if (!callbackError) {
                return;
            }

            // Show default error
            let msg = "Bad request";
            if (data && data.detail && data.detail.length > 0) {
                msg = data.detail;
            }

            DialogManager.singleAlert(msg);
            callbackError(tag, data);
            break;

        case 401:
            const message  = data && data.message ? data.message : "Bad request";
            DialogManager.singleAlert(message);
            break;

        case 402:
            callbackSuccess(tag, response); // We don't give any clues about the invalid username
            break;

        case 403:
        case 404:
            callbackError(tag, response);
            break;

        case 504:
            callbackError(tag, response);
            break;

        default:
            if (isShowingAlert) {
                return;
            }

            isShowingAlert = true;
            DialogManager.singleAlertOneButton(
                '',
                "Server error",
                () => {isShowingAlert = false}
            );
            break;
    }
};