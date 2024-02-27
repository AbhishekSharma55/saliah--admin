import Sidebar from '@/components/Sidebar/Sidebar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <Button>
        <Link href={"/admin/dashboard/products"}>
          Go to Products
        </Link>
      </Button>
    </div>
  )
}

export default page