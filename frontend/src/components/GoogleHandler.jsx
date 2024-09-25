import React, { useEffect } from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
function GoogleHandler() {
    const navigate = useNavigate() ;
    const location = useLocation();
    console.log(location.search)
    useEffect(()=>{
        const params = new URLSearchParams(location.search)

        const token = params.get('token')
        const role = params.get('role')
        const name = params.get('name')

       if(token && role){
        localStorage.setItem('token', token)
        localStorage.setItem('role',role)
       }
       navigate('/')
    },[navigate,location.search])
  return (
    <div>
    Loading ...
    </div>
  )
}

export default GoogleHandler
