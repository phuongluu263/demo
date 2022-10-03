import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  const handleClick = () =>{
    localStorage.clear();
    window.location.reload();
  }
  useEffect(() => {
    const getEmail = localStorage.getItem("emailData")
    const getPassword = localStorage.getItem("passwordData")

    if(!getEmail || !getPassword){
      navigate("/login");
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
