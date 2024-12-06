'use client'
import ProductPage from '@/components/products/product-description'
import { useGetProductByIdQuery } from '@/services/productApi/productApi'
import { useParams } from 'next/navigation'

import React from 'react'



function ProductDescriptionPage() {

    const params=useParams()
const {data:singleProduct, isLoading}=useGetProductByIdQuery(params.productId)

console.log(singleProduct);


  return (
    <>
    <ProductPage product={singleProduct} isLoading={isLoading}/>
    <h1>{singleProduct?.title}</h1>
    </>
  )
}

export default ProductDescriptionPage