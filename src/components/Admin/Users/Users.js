import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Users.css'
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import {sideBarData} from './../sideBarData'

function Users(props) {
    const [postUsers, setPostUsers] = useState([])
    const fetchDataUsers = () => {
        fetch('https://dummyjson.com/users')
          .then((response) => response.json())
          .then((actualData) => {
            console.log(actualData);
            setPostUsers(actualData.users);
            console.log(postUsers);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
    
      useEffect(() => {
        fetchDataUsers();
      }, []);
  return (
    <div>
      <form className='frm_products'>
        <div className='header_products'>
          <nav className='nav_products'>
            <div className='text_products'>
              <p>ADMIN PANEL</p>
              <div className='icons_products'>
                <Link to='/'>
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
                <li><Link to="/" className="nav-link px-2 text-dark pl">Admin / Users</Link></li>
              </ul>
              <div className="btn_logout">
                <Link className="btn btn-outline-light me-2 btn_lg"><HiIcons.HiOutlineLogout />Logout</Link>
              </div>
            </div>
          </div>
          <div className="p-3 text-dark list_sidebar">
            <div className='row container bg-white'>
              <table>
                <tbody>
                  <tr>
                      <th>ID</th>
                      <th>firstName</th>
                      <th>lastName</th>
                      <th>email</th>
                      <th>Phone</th>
                      <th>Image</th>
                  </tr>
                  {postUsers.map((item, index) => (
                  <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                          <img src={item.image} alt="" height={100} />
                      </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div> 
          </div>
        </div>
      </form>  
        

    </div>
  )
}


export default Users
