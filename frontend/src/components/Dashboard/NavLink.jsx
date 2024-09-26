import React from 'react'
import { Link } from 'react-router-dom'

function NavLink({to , text , icon}) {
  return (
    <Link to={to} className=' flex gap-4 items-center px-4 py-3 rounded hover:bg-gray-700 transition duration-150'> <span>{icon}</span>{text}</Link>
  )
}

export default NavLink ;
