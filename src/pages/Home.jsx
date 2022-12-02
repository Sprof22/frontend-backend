import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex gap-3 bg-slate-300 p-2 align-center justify-center'>
      <Link to="/signup" className='bg-slate-500 rounded p-1 hover:bg-sky-700'>SignUP</Link>
      <Link to="/login" className='bg-slate-500 rounded p-1 hover:bg-sky-700'>LogIn</Link>
    </div>
  )
}

export default Home