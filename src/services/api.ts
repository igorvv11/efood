import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurant } from "../pages/Home";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-ebac.vercel.app/api/efood/",
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => "/restaurantes",
    }),
    getDish: builder.query<Restaurant, string | undefined>({
      query: (id) => `/restaurantes/${id}`,
    }),
  }),
});

export default api;
export const { useGetRestaurantsQuery, useGetDishQuery } = api;
