
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { get } from 'http';

export const commonApi = createApi({
    reducerPath: 'commonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: (builder) => ({
        getProducts:builder.query({
            query:()=>(
                {
                    url:'/products',
                    method:'GET'
                }
            )
        }),
        getProductById:builder.query({
            query:(id)=>(
                {
                    url:`/products/${id}`,
                    method:'GET'
                }
            )
        })
    }),
})

export const {useGetProductsQuery,useGetProductByIdQuery}=commonApi