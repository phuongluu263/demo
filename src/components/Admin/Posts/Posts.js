import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Posts.css'
import users from './../../../data/users';
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import {sideBarData} from './../sideBarData'
function Posts(props) {
    let navigate = useNavigate();
    const [postPosts, setPostPosts] = useState([])
    const [user, setUser] = useState({})
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

    const fetchDataPosts = () => {
        fetch('https://dummyjson.com/posts')
          .then((response) => response.json())
          .then((actualData) => {
            console.log(actualData);
            setPostPosts(actualData.posts);
            console.log(postPosts);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
    
      useEffect(() => {
        fetchDataPosts();
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
                <li><Link to="/" className="nav-link px-2 text-dark pl">Admin / Posts</Link></li>
              </ul>
              <div className="btn_logout">
                <Link onClick={handleClick} className="btn btn-outline-light me-2 btn_lg"><HiIcons.HiOutlineLogout />Logout</Link>
              </div>
            </div>
          </div>
          <div className="p-3 text-dark list_sidebar">
            <div className='listbox_products'>
              <tbody>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Tags</th>
                </tr>
                {postPosts.map((item, index) => (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>{item.tags}</td>
                </tr>
                ))}
              </tbody>
            </div> 
          </div>
        </div>
      </form>
        

    </div>
  )
}


export default Posts
