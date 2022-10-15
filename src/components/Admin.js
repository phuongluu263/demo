import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import users from '../data/users';
function Admin(props) {
    let navigate = useNavigate();
  
  const [user, setUser] = useState({})
  
  const handleClick = () =>{
    localStorage.clear();
    window.location.reload();
  }

  useEffect(() => {
    const token = localStorage.getItem('tokenData')
    users.map(handleUser);
    

    function handleUser(user) {
      if (token === user.token){
        setUser({
          name: user.name,
          email: user.email,
          role: user.role
        })
      }
    } 
  },[]);
  
  
  
  return(
    <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div>{user.role}</div>
        <div id = 'main'>
            <div className='sideBar'></div>
            <div className='mainContent'>

            </div>
        </div>
        <button onClick={handleClick} type='submit'> Submit</button>
    </div>
  )
}



export default Admin
