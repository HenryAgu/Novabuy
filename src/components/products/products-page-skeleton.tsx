import React from 'react'
import { Skeleton } from '../ui/skeleton'

const ProductsPageSkeleton = () => {
  return (
    <div className="lg:px-24 lg:py-8 px-5 py-8 overflow-x-hidden min-h-screen">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-y-12 my-5 lg:my-10">
        <Skeleton className='w-full h-[410px]'/>
        <Skeleton className='w-full h-[410px]'/>
        <Skeleton className='w-full h-[410px]'/>
        <Skeleton className='w-full h-[410px]'/>
      </div>
    </div>
  )
}

export default ProductsPageSkeleton
