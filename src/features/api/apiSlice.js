import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jobbox-server-shorifzaman.vercel.app",
  }),
  tagTypes: ["Jobs", "Job"],
  endpoints: (builders) => ({}),
});

export default apiSlice;