import React, { Children, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import users from '../../data/users';
import './Admin.css'
import Products from './Products/Products';
import Posts from './Posts/Posts'
import Users from './Users/Users'
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import {sideBarData} from './sideBarData'

function Admin(props) {
  let navigate = useNavigate();
  
  const [user, setUser] = useState({})
  const [postProducts, setPostProducts] = useState([])
  const [sidebar, setSidebar] = useState(false)

  
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
    if(!token){
      navigate('/login')
    }
    
  },[]);
  

  
  
  return(
    
    <div>
      <form className='frm_products'>
        <div className='header_products'>
          <nav className='nav_products'>
            <div className='text_products'>
              <p>ADMIN PANEL</p>
              <div className='icons_products'>
                <Link>
                  <BiIcons.BiArrowFromRight />
                </Link>
              </div>
            </div>
            <ul className='nav_list'>
              {sideBarData.map((item, index) => {
                return(
                  <li key={index} className = {item.cName}>
                    <Link to = {item.path}>
                      {item.icon}
                      <span>
                        {item.title}
                      </span>
                    </Link>
                  </li>        
                )
              })}
            </ul>
          </nav>
        </div>

        <div className='frm_header'>
          <div className="listBar">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link to="/" className="nav-link px-2 text-dark">Admin</Link></li>
              </ul>
              <div className="btn_logout">
                <Link onClick={handleClick} className="btn btn-outline-light me-2 btn_lg"><HiIcons.HiOutlineLogout />Logout</Link>
              </div>
            </div>
          </div>
          <div className="p-3 text-dark list_sidebar">
            <div className='listbox_products'>
              
            </div> 
          </div>
        </div>
      </form>

    </div>
  )
}



export default Admin

