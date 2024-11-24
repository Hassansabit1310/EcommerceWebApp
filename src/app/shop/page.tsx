'use client'


import { ProductCard } from '@/components/products/products-crad'
import { useGetProductsQuery } from '@/services/productApi/productApi'
import { useRouter } from 'next/navigation'
import React from 'react'

type Product = {
  id: number
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
      rate: number;
      count: number;
  }
}
function Products() {

  const router=useRouter()

  const {data:allProducts}=useGetProductsQuery({})
  console.log(allProducts);

  
  
  return (
    <div  className='flex flex-row justify-center flex-wrap gap-2 lg:gap-4 '>
      {allProducts?.map((product:Product)=>(
        <div onClick={()=>router.push(`/${product.title.split(' ').join('-')}/${product.id}`)} key={product.id}>
          <ProductCard   product={product}/>
        </div>
      ))}
  
      
    </div>
  )
}

export default Products