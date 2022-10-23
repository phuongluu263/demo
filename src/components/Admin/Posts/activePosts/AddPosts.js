import React, {useState, useEffect } from 'react'
import './addPosts.css'
import { Link, useNavigate } from 'react-router-dom';
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import {sideBarData} from './../../sideBarData'
function AddPosts(props) {
  let navigate = useNavigate();

  const [userId, setUserId] = useState('')
  const [name, setName] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState('')


  const handleClick = () =>{
    localStorage.clear();
    window.location.reload();
  }
  useEffect(() => {
    const token = localStorage.getItem('tokenData')
    if(!token){
      navigate('/login')
    }
    
  },[]);
  
  const addPosts = () => {

    fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      userId: userId,
      title: name,
      body: body,
      tags: tags,
       /* other product data */
     })
   })
   .then(res => res.json())
   .then(console.log);
            
  }
  useEffect(() => {
    addPosts();
  }, []);
  return (
    <div>
      <form className='frm_products'>
        <div className='header_add_products'>
          <nav className='nav_products'>
            <div className='text_products'>
              <p>ADMIN PANEL</p>
              <div className='icons_products'>
                <Link to='/admin/posts'>
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
                <li><Link to="/admin/posts" className="nav-link px-2 text-dark pl">Admin / Posts / Add</Link></li>
              </ul>
              <div className="btn_logout">
                <Link onClick={handleClick} className="btn btn-outline-light me-2 btn_lg"><HiIcons.HiOutlineLogout />Logout</Link>
              </div>
            </div>
          </div>

          <div className="p-3 text-dark list_add_sidebar">
            <div class="row container bg-white">
              <header>
                <div className='col-sm-6 offset-sm-3'>
                  <br />
                  <input type="text" placeholder="Id" className='form-control' onChange={(e) => setUserId(e.target.value)}/>
                  <br />
                  <input type="text" placeholder="Name" className='form-control' onChange={(e) => setName(e.target.value)}/>
                  <br />
                  <input type="text" placeholder="Body" className='form-control' onChange={(e) => setBody(e.target.value)}/>
                  <br />
                  <input type="text" placeholder="Tags" className='form-control' onChange={(e) => setTags(e.target.value)}/>
                  <br />
                  <Link to='/admin/posts' onClick={addPosts} className='btn btn-primary add'>Add Posts</Link>
                </div>
              </header>
            </div> 
          </div>
        </div>
      </form>
              
    </div>
  )
}

export default AddPosts
