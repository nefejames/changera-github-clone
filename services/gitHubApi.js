import { createApi } from "@reduxjs/toolkit/query";

//couldn't gfigure it out
export const gitHubApi = createApi({
  reducerPath: "gitHubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/users/nefejames",
  }),
  endpoints: (builder) => ({
    getGitHubUserData: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});
