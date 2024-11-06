import { SUBMIT_URL } from "../actionTypes";

const initialState = {
  url: "",
  questions: [],
};

const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_URL:
      return { ...state, url: action.payload };
    case "STORE_QUESTIONS":
      return { ...state, questions: action.payload };
    default:
      return state;
  }
};

export default urlReducer;
