import React from 'react'
import { Outlet } from 'react-router-dom'
//  Footer from '../Footer';
// import Header from '../Header';


const Layouts = () => {
  return (
    <div>

        <main style={{ minHeight: '60vh' }}>
            <Outlet />
        </main>
       {/*  <Header /> 
        <Footer /> */}
    </div>
  )
}

export default Layouts
