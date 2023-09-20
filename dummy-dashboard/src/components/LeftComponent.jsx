import React from 'react'
import Card1 from './Card'
import RevenueComponent from './RevenueComponent'
import TableComponent from './TableComponent'

function LeftComponent() {
  return (
    <div className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-full'>
            <Card1 sales='2890' month='Jan' />
            <Card1 sales='2756' month='Feb' />
            <Card1 sales='3322' month='Mar' />
        </div>
        <div className='mt-3'>
            <RevenueComponent />
        </div>
        <div className='mt-3'>
            <TableComponent />
        </div>
    </div>
  )
}

export default LeftComponent