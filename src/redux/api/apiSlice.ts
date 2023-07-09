import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5003' }),
  tagTypes: ['Comments'],  // optional line for caching
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),

    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
        invalidatesTags: ['Comments'],  // it will invalidate the cache for the Comments tag
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['Comments'],  // optional line for caching
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery, usePostCommentMutation, useGetCommentQuery } = api;