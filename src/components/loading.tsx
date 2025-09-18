import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <main className='flex items-center justify-center h-screen p-10'>
      <Image src="/images/loading.webp" alt='logo' width={506} height={120} className='lg:aspect-[506/120] aspect-[250/60] animate-pulse'/>
    </main>
  )
}

export default Loading
