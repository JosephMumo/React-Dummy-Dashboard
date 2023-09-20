import React from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'

function Main() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 mt-14 md:mt-5 gap-3 p-5 w-full'>
        <div className='md:col-span-3'>
            <LeftComponent />
        </div>
        <div className='md:col-span-1'>
            <RightComponent />
        </div>
    </div>
  )
}

export default Main