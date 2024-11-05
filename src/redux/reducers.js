import { SUBMIT_URL } from "../actionTypes";

const initialState = {
  url: "",
};

const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_URL:
      return {
        ...state,
        url: action.payload,
      };
    default:
      return state;
  }
};

export default urlReducer;
