import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import users from '../data/users';
import './Home.css';
function Home() {
  let navigate = useNavigate();
  
  const [user, setUser] = useState([])

  
  const handleClick = () =>{
    localStorage.clear();
    window.location.reload();
    navigate('/login');
  }


  useEffect(() => {
    const token = localStorage.getItem('tokenData')
    var newUser = users.map(handleUser)

    function handleUser(user) {
      if (token === user.token)
        setUser({
          name: user.name,
          email: user.email,
          role: user.role
        })
    }
      if(!token ) {
        navigate('/login');
      }
  },[]);
  return(
    <>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
              </ul>
              <div className="text-end">
                <Link onClick={handleClick} className="btn btn-outline-light me-2">Logout</Link>
              </div>
          </div>
        </div>
      </header>
      <div className='App'>
        <main className='home-container'>
          <div className="home-title">List User</div>
          <div className="home-userlist">
            <div className="user-container">
              <div className="users_name">Name: {user.name}</div>
              <div className="users_email">Email: {user.email}</div>
              <div className="users_role">Role: {user.role}</div>
            </div>  
          </div>
        </main>
      </div>

    </>
  )
}


export default Home
