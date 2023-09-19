// reducer.js

import { FETCH_DATA_SUCCESS } from "../actions/actions";

const initialState = {
  data: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.data, loading: false };
    default:
      return state;
  }
};

export default reducer;
