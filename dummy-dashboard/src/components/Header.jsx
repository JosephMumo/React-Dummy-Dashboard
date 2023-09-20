import React from 'react'
import { TextInput, Text } from '@tremor/react'
import { SearchIcon } from '@heroicons/react/solid'


function Header() {
  return (
    <div className='p-2 flex flex-col space-y-2 md:flex-row justify-between w-full' id='home'>
        <h2 className='font-bold text-2xl text-start text-gray-300 mt-5 ml-2'>Dashboard</h2>
        <div className='mt-5 md:right-3 ml-2'>
            <TextInput icon={SearchIcon} placeholder='Search...' />
        </div>
    </div>
  )
}

export default Header