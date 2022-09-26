import { CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

//define a service user over a url

const appApi = CreateApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001",
  }),

  endpoints: (builder) => ({
    //creating user
    signupUser: builder.mutation({
      query: (user) => ({
        URL: "/users",
        method: "POST",
        body: user,
      }),
    }),
    //login user
    loginUser: builder.mutation({
      query: (user) => ({
        URL: "/users/login",
        method: "GET",
        body: user,
      }),
    }),
    //logout user
    logoutUser: builder.mutation({
      query: (payload) => ({
        URL: "/logout",
        method: "DELETE",
        body: payload,
      }),
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = appApi;

export default appApi;
