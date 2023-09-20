import React from 'react'
import Stats from './Stats'
import Socials from './Socials'
import List from './List'

function RightComponent() {
  return (
    <div className='w-full space-y-4'>
      <Stats />
      <Socials />
      <List />
    </div>
  )
}

export default RightComponent