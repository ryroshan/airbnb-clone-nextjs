import { categories } from '@/config/categories'
import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
    <div className='flex pt-3'>
      {categories.map((item,index)=>(
       <div key={index} className='flex items-center flex-col hover:border-b-4 cursor-pointer hover:bg-gray-100 rounded-sm'>
        <Image className='' src={item.icon} alt='categories' width={30} height={30}/>
         <span className='text-xs mt-3 mx-5 text-center'>{item.name}</span>
       </div>
      ))}
    </div>
  )
}

export default Categories
