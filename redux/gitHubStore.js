import { configureStore } from "@reduxjs/toolkit";
import gitHubUserProfileReducer from "./gitHubSlice";

const store = configureStore({
  reducer: {
    userData: gitHubUserProfileReducer,
  },
});

export default store;
