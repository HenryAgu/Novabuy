import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <main className='flex items-center justify-center h-screen'>
      <Image src="/images/loading.webp" alt='logo' width={506} height={120} className='aspect-[506/120] animate-pulse'/>
    </main>
  )
}

export default Loading
