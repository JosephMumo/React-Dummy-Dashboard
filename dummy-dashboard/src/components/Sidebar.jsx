import React from 'react'
import { ArrowUpIcon, BellIcon, ChartBarIcon, CreditCardIcon, DocumentSearchIcon, ExternalLinkIcon, HomeIcon, MailIcon } from '@heroicons/react/solid'

function Sidebar() {
  return (
    <div className='w-14 min-h-screen md:w-16 bg-slate-950 flex flex-col items-center justify-between'>
        <div className='flex flex-col items-center'>
            <div className='items-center flex my-2 hover:bg-slate-800 p-2 rounded'>
                <HomeIcon color='white' width={34} />  
            </div>
            <div className='items-center flex my-2 hover:bg-slate-800 p-2 rounded'>
                <ChartBarIcon color='white' width={34} />  
            </div>
            <div className='items-center flex my-2 hover:bg-slate-800 p-2 rounded'>
                <DocumentSearchIcon color='white' width={34} />  
            </div>
            <div className='items-center flex my-2 hover:bg-slate-800 p-2 rounded'>
                <MailIcon color='white' width={34} />  
            </div>
            <div className='items-center flex my-2 hover:bg-slate-800 p-2 rounded'>
                <BellIcon color='white' width={34} />  
            </div>
        </div>
        <div className='fixed-bottom-3 flex flex-col'>
            <div className='items-center flex my-2 hover:bg-slate-800 p-2 rounded'>
                <a href='#home'><ArrowUpIcon color='white' width={36} /></a>  
            </div>
            <div className='items-center flex my-2 hover:bg-slate-800 p-2 rounded'>
                <ExternalLinkIcon color='white' width={36} />  
            </div>
        </div>
    </div>
  )
}

export default Sidebar