'use client'
import ProductPage from '@/components/products/product-description'
import { useGetProductByIdQuery } from '@/services/productApi/productApi'
import { useParams } from 'next/navigation'

import React from 'react'

type Props = {
    params:{productId:string,productName:string}
}

function ProductDescriptionPage() {

    const params=useParams()
const {data:singleProduct}=useGetProductByIdQuery(params.productId)

console.log(singleProduct);


  return (
    <>
    <ProductPage product={singleProduct}/>
    <h1>{singleProduct?.title}</h1>
    </>
  )
}

export default ProductDescriptionPage