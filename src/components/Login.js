import React, { useState, useEffect} from 'react'
import ContainerImage from './../assets/Image/image_container.png'
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import Home from './Home';



  function Login(props) {
    let navigate = useNavigate();


    const a = ("phuong@gmail.com");
    const b = ("123456");

    const [useremail, setUseremail] = useState("");
    const [password, setPassword] = useState("");

    


    const [error, setError] = useState({
      useremail: "",
      password: ""
    });

    const handleSubmit = () => {

        if(useremail === a && password === b){
          localStorage.setItem("emailData", "phuong@gmail.com")
          localStorage.setItem("passwordData", "123456")
          console.log("Logged in successfully");
          alert("Logged in successfully!");
          navigate("/home");
        }

        else if(useremail !== a && password !==b){
          console.log("Entered wrong, please re-enter email or password!");
          alert("Entered wrong, please re-enter email or password");
          navigate("/login");
          setError({
            useremail: "Email is not valid",
            password: "Password is not valid"
          })
        }

        else if(useremail !== a){
          setError({
            useremail: "Email is not valid",
            password: ""
          })

          console.log("Entered wrong, please re-enter email!");
          alert("Entered wrong, please re-enter email!");
          navigate("/login");
        }
        else if(password !== b){
          setError({
            useremail: "",
            password: "Password is not valid"
          })
          console.log("Entered wrong, please re-enter password!");
          alert("Entered wrong, please re-enter password!");
          navigate("/login");
        }
    
    }

    useEffect(() => {
      const getEmail = localStorage.getItem("emailData")
      const getPassword = localStorage.getItem("passwordData")
  
      if(getEmail || getPassword){
        navigate("/home");
      }
    }, []);
    
    
    return (
      <div className='containerLogin'>
        <img className='imgBanner' src={ContainerImage} alt = "image" />

        
        <div className='loginForm'>
          {
            // getEmail && getPassword? 
            // <Home />:

            <form onSubmit={handleSubmit} className='form_signin'>
            <h1 className='content_signin'>Sign in</h1>
              <div className='main_email'>
                <label for="user_email">Email Address  </label>
                <br />
                <span className='text_useremail'>
                    <span className='logo_useremail'>
                        <span role="img" aria-label="mail" className='anticon anticon-mail'>
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="mail" width="1em" height="1em"
                                fill="currentColor" aria-hidden="true">
                                <path
                                    d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z">
                                </path>
                            </svg>
                        </span>
                    </span>
                    <input type="email" id="user_email" placeholder="" name="email" className='input_user' onChange={(e) => setUseremail(e.target.value)}></input>
                  </span>  
                  
                  <div className='error'>{error.useremail}</div>
              </div>

              <div className='main_password'>
                <label for="password">Password  </label>
                <br />
                <span className='sidebar_password'>
                  <span className='logo1_password'>
                      <span role="img" aria-label="lock" className='anticon anticon-lock'>
                          <svg viewBox="64 64 896 896" focusable="false" data-icon="lock" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path
                                  d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z">
                              </path>
                          </svg>
                      </span>
                  </span>
                  <input type="password" id="password" placeholder="" name="password" className='input_pw' onChange={(e) => setPassword(e.target.value)}></input>
                  <span className='logo2_password'>
                    <span role="img" aria-label="eye-invisible" tabindex="-1" className='anticon anticon-eye-invisible logo2_hover'>
                      <svg viewBox="64 64 896 896" focusable="false" data-icon="eye-invisible" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z">
                          </path>
                        <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
                      </svg>
                    </span>
                  </span>
                </span>
                <div className='error'>{error.password}</div>
              </div>  

              <div className='forget_password'><a href="/forget-password">Forget Password</a></div>
              <div>
                  <button className='btn_submit' type="button" onClick={handleSubmit}>Submit</button>
              </div>
              <div className='scan_or'>
                  <div className='or'></div> OR <div className='or'></div>
              </div>
              <div className='tech'>
                  <a className='register' href="/register">REGISTER A NEW ACCOUNT</a>
              </div> 
            </form>      
          }

        </div>
      </div>
    ) 
  }



export default Login
