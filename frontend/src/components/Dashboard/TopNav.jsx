import React from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
function TopNav() {


  const dispatch = useDispatch() ;
  const navigate = useNavigate() ;

  return (
    <div className='flex items-center justify-between px-6 h-16 bg-white border-b border-gray-200'>
      <h1 className='text-xl font-semibold'>Welcome {localStorage.getItem('name')}</h1>
      <div>
      <button>Logout</button>
      </div>
    </div>
  )
}

export default TopNav
