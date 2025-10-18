import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurant } from "../pages/Home";

type ProductPayload = {
  id: number;
  price: number;
};

type PurchasePayload = {
  products: ProductPayload[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement?: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

type PurchaseResponse = {
  orderId: string;
};

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
    // Criando a mutação para o checkout
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: "checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export default api;
export const { useGetRestaurantsQuery, useGetDishQuery, usePurchaseMutation } =
  api;
