import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//for some reason, the GitHub API is not returning the repos data, bio, or username

//I added screenshots to the issues folder - the first showing the full result I'm supposed to get and the second showing the response I get

//because of this issue, I could only dynamically display the user's login in the sidebar component. Everything else is static - I'm not sure why I got this issue

export const getGitHubUserData = createAsyncThunk(
  //action type string
  "gitHub/getUserProfile",

  async (thunkAPI) => {
    const res = await fetch(
      `https://api.github.com/search/users?q=nefejames&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    ).then((data) => data.json());
    return res;
  }
);

const userProfileSlice = createSlice({
  name: "userData",
  initialState: {
    userData: {},
    status: null,
  },
  extraReducers: {
    [getGitHubUserData.pending]: (state, action) => {
      state.status = "loading";
    },
    [getGitHubUserData.fulfilled]: (state, action) => {
      (state.status = "success"), (state.userData = action.payload);
    },
    [getGitHubUserData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

const gitHubUserProfileReducer = userProfileSlice.reducer;

export default gitHubUserProfileReducer;
