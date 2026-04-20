import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div>
      My Images Page!
      <Image src="/cat1.avif" alt="Description" width={500} height={300} />
    </div>
  )
}

export default page
