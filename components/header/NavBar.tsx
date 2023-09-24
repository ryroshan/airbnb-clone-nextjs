import React from 'react'
import BarndLogo from './BarndLogo';
import { Globe, Globe2, Search } from 'lucide-react';
import NavMenu from './NavMenu';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import AirbnbHome from './AirbnbHome';

async function NavBar() {
    const supabase = createServerComponentClient({cookies});
    const {data, error} = await supabase.auth.getUser();

    return (
        <div className='flex justify-between items-center px-10 border-b-[2px] pb-1'>
            <div>
                <BarndLogo />
            </div>
            <div className='flex rounded-md border border-spacing-0 p-2 items-center space-x-2'>
                <span className='text-sm'>Anywhere</span>
                <span>|</span>
                <span className='text-sm'>Any week</span>
                <span>|</span>
                <span className='text-sm text-gray-300'>Add Guest</span>
                <span className='flex items-end justify-end bg-brand text-white rounded-r-lg p-1 cursor-pointer'>
                    <Search className='text-sm' />
                </span>
            </div>
            <div className='flex space-x-3'>
                <AirbnbHome />
                <Globe size={20} className='cursor-pointer mt-[2px]'/>
                <NavMenu session={data?.user}/>
            </div>
        </div>
    )
}

export default NavBar;