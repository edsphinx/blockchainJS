import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_RESET
} from "../actions/fetchActions";

const initialState = {
  loading: false,
  response: null,
  refreshData: false,
  error: null
};

const fetch = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        refreshData: false
      };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        response: action.payload,
        refreshData: true,
        error: null
      };

    case FETCH_DATA_FAILURE:
      return {
        loading: false,
        response: null,
        error: action.payload,
        refreshData: false
      };

    case FETCH_DATA_RESET: {
      return initialState;
    }

    default:
      return state;
  }
};

export default fetch;
