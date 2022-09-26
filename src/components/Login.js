import React, { useState } from 'react'
import ContainerImage from './../assets/Image/image_container.png'
import "./Login.css"

function Login(props) {
  const [useremail, setUseremail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState("");
  const login = () => {
    if(!useremail || !password){
      console.log(<alert>"Nhập sai, vui long nhập lại email hoặc password!"</alert>);
    }
    else{
      console.log(<alert>"Đăng nhập thành công"</alert>);
    }
  }
  
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
          <button className="submit" onClick>Submit</button>
          <br />
        </div>
      </div>
    </div>
  )
}



export default Login
