import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import users from '../data/users';

function Home() {
  let navigate = useNavigate();


  const handleClick = () =>{
    localStorage.clear();
    window.location.reload();
  }
  useEffect(() => {
    const token = localStorage.getItem('token');
      if(!token) {
        navigate('/login');
      }
  }, []);
  return(
    <>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Logout</button>
    </>
  )
}


export default Home
