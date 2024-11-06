import { SUBMIT_URL } from "../actionTypes";

export const submitUrl = (url) => ({
  type: SUBMIT_URL,
  payload: url,
});

export const storeQuestions = (questions) => ({
  type: "STORE_QUESTIONS",
  payload: questions,
});
