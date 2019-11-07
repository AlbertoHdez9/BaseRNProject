
export const setLoadingDefault = (value) => async(dispatch) => {
    dispatch(setLoading('isLoading', value));
};

export const setLoadingRow = (value) => async(dispatch) => {
    dispatch(setLoading('isLoadingRow', value));
};

/** *************** **/
/** PRIVATE METHODS **/
/** *************** **/
const setLoading = (prop, value) => async(dispatch) => {
    dispatch({
        type: "set_loading",
        payload: { prop, value }
    });
};