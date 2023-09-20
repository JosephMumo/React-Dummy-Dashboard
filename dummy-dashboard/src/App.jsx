import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Master from './components/Master'


function App() {
  return (
    <div className='text-center flex flex-row bg-slate-950 min-w-full'>
        <Sidebar />
        <div className='w-full'>
            <Header />
            <Master />
        </div>
    </div>
  )
}

export default App