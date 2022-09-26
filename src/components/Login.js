import React, { useState } from 'react'
import ContainerImage from './../assets/Image/image_container.png'
import "./Login.css"
import { useNavigate } from "react-router-dom";

function HomeButton() {
  let history = useNavigate();

  function Login(props) {
    const [useremail, setUseremail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("");
    const login = () => {
      if(!useremail || !password){
        console.log("Nhập sai, vui lòng nhập lại email hoặc password!");
      }
      else{
        console.log("Đăng nhập thành công");
      }
    }
    history.push("/home");
    
    return (
      <div className='containerLogin'>
        <img className='imgBanner' src={ContainerImage} alt = "image" />
        <div className='loginForm'>
          <div className='signin'>
            <div>
            <h1 className='content_signin'>Sign in</h1>
            </div>
            <form className='form_signin'>
              {/* <div className='main_email'> */}
                <label for="user_email">Email Address:  </label>
                <br />
                <input type="email" id="user_email" placeholder="" name="email" class="input_user" onChange={(e) => setUseremail(e.target.value)}></input>
              {/* </div> */}
              <div>
                <label for="password">Password:  </label>
                <br />
                <input type="password" id="password" placeholder="" name="password" class="input_pw" onChange={(e) => setPassword(e.target.value)}></input>
              </div>            
            </form>
            <button type="button" onClick={login}>Go home</button>
            <br />
          </div>
        </div>
      </div>
    ) 
  }
}


export default Login
