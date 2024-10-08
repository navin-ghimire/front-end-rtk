import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants/api_urls';


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/products` }),

  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: (q) => ({
        url: '/',
        method: 'GET',
        params:{
          search: q?.search 
        }
      }),
      providesTags: ['Products']
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET',

      }),
      providesTags: ['Products']
    }),

    addProduct: builder.mutation({
      query: (q) => ({
        url: '/',
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'POST',
      }),
      invalidatesTags: ['Products']
    }),

    updateProduct: builder.mutation({
      query: (q) => ({
        url: `/${q.id}`,
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'PATCH',
      }),
      invalidatesTags: ['Products']
    }),


    removeProductById: builder.mutation({
      query: (q) => ({
        url: `/${q.id}`,
        headers: {
          Authorization: q.token
        },
        method: 'DELETE',
      }),
      invalidatesTags: ['Products']
    }),

    addReview: builder.mutation({
      query: (q) => ({
        url: `/reviews/${q.id}`,
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'POST',
      }),
      invalidatesTags: ['Products']
    }),

    // searchProducts: builder.query({
    //   query: (query) => ({
    //     url: '/',
    //     method: 'GET',
    //     params: {
    //       search: query?.search,
    //       page: query?.page
    //     }
    //   }),
    //   providesTags: ['products']
    // }),



  })




});

export const { useGetAllProductsQuery, useGetProductByIdQuery, useAddProductMutation, useRemoveProductByIdMutation, useUpdateProductMutation, useAddReviewMutation} = productApi;


// useSearchProductsQuery