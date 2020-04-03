import Axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_DATA_RESET = "FETCH_DATA_RESET";

export const fetch_data_request = () => {
  return {
    type: FETCH_DATA_REQUEST
  };
};

export const fetch_data_success = result => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: result
  };
};

export const fetch_data_failure = error => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  };
};

export const fetch_data_reset = () => {
  return {
    type: FETCH_DATA_RESET
  };
};

export const fetchRequest = (url, user, options, type) => {
  return dispatch => {
    dispatch(fetch_data_request());

    switch (type) {
      case "GET":
        Axios.get(url, options)
          .then(response => {
            console.log(response.data);
            dispatch(fetch_data_success(response.data));
          })
          .catch(err => dispatch(fetch_data_failure(err.response.data)));
        break;
      case "POST":
        Axios.post(url, user, options)
          .then(response => {
            dispatch(fetch_data_success(response.data));
          })
          .catch(err => dispatch(fetch_data_failure(err.response.data)));
        break;
      case "PUT":
        Axios.put(url, user, options)
          .then(response => {
            dispatch(fetch_data_success(response.data));
          })
          .catch(err => dispatch(fetch_data_failure(err.response.data)));
        break;
      default:
        Axios.get(url, user, options)
          .then(response => {
            dispatch(fetch_data_success(response.data));
          })
          .catch(err => dispatch(fetch_data_failure(err.response.data)));
        break;
    }
  };
};

export const reset = () => {
  return dispatch => {
    dispatch(fetch_data_reset());
  };
};
