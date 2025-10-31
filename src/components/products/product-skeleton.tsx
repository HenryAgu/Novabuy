import React from 'react'
import { Skeleton } from '../ui/skeleton'

const ProductSkeleton = () => {
  return (
    <main className="min-h-screen flex lg:flex-row flex-col gap-15 pr-5 pl-5 lg:pl-0 lg:pr-24 pb-14 lg:pb-28" >
      <Skeleton className='h-[870px] w-full basis-[50%]'/>
      <Skeleton className='h-[870px] w-full basis-[50%]'/>
    </main>
  )
}

export default ProductSkeleton
