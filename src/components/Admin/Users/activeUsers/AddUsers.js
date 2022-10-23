import React, {useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import {sideBarData} from './../../sideBarData'
function AddUsers(props) {
  let navigate = useNavigate();

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [image, setImage] = useState({})

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

  
  const addUsers = () => {

    fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      image: image,
       /* other product data */
     })
   })
   .then(res => res.json())
   .then(console.log);
            
  }
  useEffect(() => {
    addUsers();
  }, []);

  return (
    <div>
      <form className='frm_products'>
        <div className='header_add_products'>
          <nav className='nav_products'>
            <div className='text_products'>
              <p>ADMIN PANEL</p>
              <div className='icons_products'>
                <Link to='/admin/users'>
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
                <li><Link to="/admin/users" className="nav-link px-2 text-dark pl">Admin / Users / Add</Link></li>
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
                  <input type="text" placeholder="FirstName" className='form-control' onChange={(e) => setFirstName(e.target.value)}/>
                  <br />
                  <input type="text" placeholder="LastName" className='form-control' onChange={(e) => setLastName(e.target.value)}/>
                  <br />
                  <input type="text" placeholder="Email" className='form-control' onChange={(e) => setEmail(e.target.value)}/>
                  <br />
                  <input type="text" placeholder="Phone" className='form-control' onChange={(e) => setPhone(e.target.value)}/>
                  <br />
                  <input type="file" placeholder="File" className='form-control' onChange={(e) => setImage(e.target.files[0])} />
                  <br />
                  <Link to='/admin/users' onClick={addUsers} className='btn btn-primary add'>Add Users</Link>
                </div>
              </header>
            </div> 
          </div>
        </div>
      </form>
      
    </div>
  )
}


export default AddUsers
