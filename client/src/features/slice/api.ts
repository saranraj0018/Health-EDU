import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API slice
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://13.233.215.207:5000",
  }),

  tagTypes: ["Users", "Categories", "Batches", "Departments"],
  endpoints: () => ({}),
});