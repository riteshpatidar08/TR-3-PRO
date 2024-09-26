import React from 'react'
import { Link } from 'react-router-dom'
function Navitems({to , text}) {
  return (
    <div>
      <li>
        <Link className='hover:underline transition-all duration-200 ease-in-out' to={to}>{text}</Link>
      </li>
    </div>
  )
}

export default Navitems
