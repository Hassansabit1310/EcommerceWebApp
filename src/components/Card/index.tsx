import React from 'react'

import productImage from '@/images/impressed-startled-excited-cute-redhead-female-receive-big-gift-shaping-large-object-product.jpg'
import Image from 'next/image'

export default function CustomCard() {
  return (
    <div className='w-64 h-80 border rounded-md lg:mx-0 shadow-sm overflow-hidden'>
        <Image src={productImage} className='w-full h-40 object-cover rounded-t-md' alt='product'/>
        <div className='flex flex-col  mt-6 gap-2 p-4'>
        <h1 className='font-bold '>Denim Jeans</h1>
        <h1 className='text-gray-400'>$99</h1>
        <button className='border rounded-md bg-blue-400 hover:bg-blue-200 p-2 font-bold'>Buy Now</button>
        </div>
    </div>
  )
}
