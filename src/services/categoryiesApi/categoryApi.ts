import { createApi } from "@reduxjs/toolkit/query";
import { commonApi } from "../productApi/productApi";
import build from "next/dist/build";


const categoryApi=commonApi.injectEndpoints({
    endpoints:build=>({
        getCategories:build.query({
            query:()=>(
                {
                    url:'/products/categories'
                }
            )
        })
    })
})

export const {useGetCategoriesQuery}=categoryApi