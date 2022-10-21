import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import users from '../../data/users';
import './Home.css';
function Home() {
  let navigate = useNavigate();
  
  const [user, setUser] = useState({})
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmitMessages = (event) => {
    event.preventDefault()
    console.log('input chat', {message})
    setMessages(event => [...event, message])
    setMessage("");
  };
  
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
        if(user.role === "Users"){
          navigate('/')
        }
        if(user.role === "Admin"){
          navigate('/admin')
        }
      }
    } 
    if(!token){
      navigate('/login')
    }
    
  },[]);
  
  
  
  return(
    <>
    <form className='header_item'>
      <div className='content_vd'>
        <div className='banner_vd'>
          <iframe width='100%' height='450px' src="https://www.youtube.com/embed/HnTKmaxggwo"></iframe>
        </div>
          <form>
            <div className='chat_box'>
              <div className="container">
                <ul>
                  {messages.map((message, messages) => (
                    <li key={messages}>{user.name}: {message}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='chat_frm_mss'>
              <span className='frm_bannerChat'>
                <input placeholder="Type your message" className='frm_chat' onChange={(e) => setMessage(e.target.value)}></input>
              </span>  
              
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>
              <button className='btn_chat' onClick={handleSubmitMessages}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 send_icons">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </form>
      </div>
      <div className='lg_container'>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
            </ul>
            <div className="text-end">
              <div className='user'>{user.name}</div>
              <Link onClick={handleClick} className="btn btn-outline-light me-2 btn_lg">Logout</Link>
            </div>
          </div>
        </div>
        <div className="p-3 bg-dark text-white banner_lg">
          <form className='comment_lg'>
            <div className="container_lg">
            <p className='content_p'>Live Streaming Programmer</p>   
            </div>
            <div className="container_lg">
              <span className="time">4.00pm</span>
              <p className='content_p'>Start of PVPA 2022 Awards Ceremony</p>    
            </div>
            <div className="container_lg">
              <span className="time">4.05pm</span>
              <p className='content_p'>Arrival of Mdm President</p>      
            </div>
            <div className="container_lg">
              <span className="time">4.10pm</span>
              <p className='content_p'>Introduction of PVPA 2022</p>
            </div>
            <div className="container_lg">
              <span className="time">4.15pm</span>
              <p className='content_p'>Openning Address by Mpm President</p>
            </div>
            <div className="container_lg">
              <span className="time">4.20pm</span>
              <p className='content_p'>Awards Presentation</p>    
            </div>
            <div className="container_lg">
              <span className="time">4.45pm</span>
              <p className='content_p'>Presentation of Token of Appreciation to Mpm President</p>      
            </div>
            <div className="container_lg">
              <span className="time">4.50pm</span>
              <p className='content_p'>Closing Remarks by Chairman, NVPC</p>
            </div>
            <div className="container_lg">
              <span className="time">4.55pm</span>
              <p className='content_p'>PVPA's 10th Edition Impact Video</p>
            </div>
            <div className="container_lg">
              <span className="time">5.00pm</span>
              <p className='content_p'>End of Event</p>
            </div>
          </form>
        </div>
      </div>
        
        
    </form>
      
    </>
  )
}


export default Home
