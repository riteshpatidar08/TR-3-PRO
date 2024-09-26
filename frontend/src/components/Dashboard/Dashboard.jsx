import React from 'react'
import TopNav from './TopNav'
import SideNav from './SideNav'
import {Routes , Route ,Link, Outlet} from 'react-router-dom'
import Product from './Product'
function Dashboard() {
  return (
    <div className='flex h-screen bg-gray-100'>
        <SideNav/>
        <div className='flex-1'>
      <TopNav/>
      <main className="flex-1">
      <Outlet/>
      </main>
      </div>
    </div>
  )
}

export default Dashboard
