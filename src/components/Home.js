import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import users from '../data/users';
import './Home.css';
function Home() {
  let navigate = useNavigate();
  const token = localStorage.getItem('tokenData');

    let userEmail;
    let userName;
    let userRole;
      for (let i of users){
        if (token === i.token){
          userEmail = i.email;
          userName = i.name;
          userRole = i.role;

        }
      }

  const handleClick = () =>{
    localStorage.clear();
    window.location.reload();
  }
  useEffect(() => {
      if(!token ) {
        navigate('/login');
      }
  }, []);
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
              <div className="users_name">Name: {userName}</div>
              <div className="users_email">Email: {userEmail}</div>
              <div className="users_role">Role: {userRole}</div>
            </div>  
          </div>
        </main>
      </div>

    </>
  )
}


export default Home
