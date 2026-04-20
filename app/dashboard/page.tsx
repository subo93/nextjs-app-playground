import Link from 'next/link';
import React from 'react'

const page = () => {

  console.log('Dashboard page rendered:::::::::::::::')
  return (
    
    <div>
       {(() => {
      console.log("Dashboard rendered22222222");
      return null;
    })()}
      Dashboard Page!
      <Link href="/employee" className="text-blue-600 underline">
        View Employees Contacts!
      </Link>
    </div>
  )
}

export default page
