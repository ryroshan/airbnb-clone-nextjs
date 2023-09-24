import Counter from '@/components/common/Counter'
import NavBar from '@/components/header/NavBar'
import Image from 'next/image'
import React from 'react'

const AddHome = () => {
    return (
        <div>
            <NavBar />
            <div className='flex basis-2'>
                <div className='flex flex-col justify-center items-center gap-5 w-1/2 border border-spacing-0 text-center h-full' style={{ height: '100vh' }}>
                    {/* left side */}
                    <h1 className='font-bold text-5xl text-brand'>Airbnb it.</h1>
                    <p className='text-6xl'>You could earn</p>
                    <div className='flex'>
                        <Counter num={5000} />
                        <span className='text-3xl mt-[12px]'>/Per night</span>
                    </div>
                    <div>
                        <Image src='/images/home_img.jpeg' alt='home1' className=' rounded-md' width={400} height={10}/>
                    </div>
                </div>
                <div className='border border-spacing-0 w-1/2 text-center'>
                    {/* right side */}
                    <h1>roshan</h1>
                </div>
            </div>
        </div>
    )
}

export default AddHome
