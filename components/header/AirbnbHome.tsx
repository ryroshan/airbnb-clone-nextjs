'use client'
import React from 'react'
import {useRouter} from 'next/navigation';
const AirbnbHome = () => {
    const router = useRouter();
    const handleRoute = ()=>{
        router.push('/add-home')
    }
  return (
    <div className='cursor-pointer hover:bg-gray-200 p-1 rounded-md'>
        <span onClick={handleRoute}>Airbnb your home</span>
    </div>
  )
}

export default AirbnbHome
