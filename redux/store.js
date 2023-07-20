// redux
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

// reducers

import { language_reducer } from "./reducer/language.rdc";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => {
  return configureStore({
    reducer: { language_reducer },
  });
};

export const wrapper = createWrapper(makeStore);
