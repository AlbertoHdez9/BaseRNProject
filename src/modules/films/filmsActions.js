import {setLoadingDefault} from "../../services/redux/loading/loadingActions";
import {getFilms} from "../../services/api/Api";

export const getGoals = (callBackSuccess) => async(dispatch) => {
    dispatch(apiGetFilms(callBackSuccess));
};

export const apiGetFilms = (callBackSuccess) => async(dispatch) => {

    dispatch(setLoadingDefault(true));

    await dispatch(
        getFilms(
            (tag, response) => {
                if (__DEV__) console.log('apiGetGoalsByUser - Error: ', response);
                dispatch({ type: "GET_FILMS_FAILED" });
            },
            (tag, response) => {
                if (__DEV__) console.log('apiGetGoalsByUser - Success: ', response);
                dispatch({
                    type: "GET_FILMS_SUCCEED",
                    payload: response
                });

                if (callBackSuccess) {
                    dispatch(callBackSuccess);
                }
            }
        )
    );

    dispatch(setLoadingDefault(false));
};