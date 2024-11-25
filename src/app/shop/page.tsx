'use client'


import { ProductCard } from '@/components/products/products-crad'
import ShopPage from '@/components/Shop/shop'
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

  // const {data:allProducts}=useGetProductsQuery({})
  // console.log(allProducts);

  
  
  return (
   <div className='flex flex-col gap-2'>
    {/* <div className='h-20 flex justify-center items-center'>
      <h1 className='text-3xl font-bold text-center'>SHOP</h1>
    </div> */}
     <div  className='flex flex-row justify-center flex-wrap gap-2 px-10 '>
      
      {/* {allProducts?.map((product:Product)=>(
        <div onClick={()=>router.push(`/${product.title.split(' ').join('-')}/${product.id}`)} key={product.id}>
          <ProductCard   product={product}/>
        </div>
      ))} */}

      

      <ShopPage/>
  
      
    </div>
   </div>
  )
}

export default Products