import { configureStore } from "@reduxjs/toolkit";
import { callsApi } from "./apis/callsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [callsApi.reducerPath]: callsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(callsApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./apis/callsApi";
