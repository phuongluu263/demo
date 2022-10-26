import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Users.css'
import users from './../../../data/users';
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";
import * as IoIcons from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import AddUsers from './activeUsers/AddUsers'
import Paginations from '../Paginations/Paginations';
import {paginate} from '../Utils/paginate';
import {sideBarData} from './../sideBarData'

function Users(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    let navigate = useNavigate();
    const [postUsers, setPostUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

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

      const fetchAddUser = (newAddUser) => {
        setShow(false);
        let data = postUsers;
        data.unshift(newAddUser)
        setPostUsers(data);
      }  

      const fetchDeleteUsers = (id) => {
        let data = postUsers;
        data = data.filter(item => item.id !== id)
        setPostUsers(data);
      } 

      const HandlePageChange = (page) => {
        setCurrentPage(page)
      }
  
      const paginateUsers = paginate(postUsers, currentPage, pageSize);
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
                <Link onClick={handleClick} className="btn btn-outline-light me-2 btn_lg"><HiIcons.HiOutlineLogout />Logout</Link>
              </div>
            </div>
          </div>

          <Button variant="primary" className='action-text my-3' onClick={handleShow}>
              <IoIcons.IoIosAddCircleOutline /> Add
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Users</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <AddUsers fetchAddUser={fetchAddUser}/>
              </Modal.Body>
            </Modal>  

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
                      <th>Actions</th>
                  </tr>
                  {paginateUsers.map((item, index) => (
                  <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                          <img src={item.image} alt="" height={100} />
                      </td>
                      <td>
                        <Link to='/admin/users' className='btn btn-primary ed'><FiIcons.FiEdit /></Link>
                        <Link onClick={() => fetchDeleteUsers(item.id)} className='btn btn-primary ed'><RiIcons.RiDeleteBinLine /></Link>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
              <Paginations items = {postUsers.length} currentPage = {currentPage} pageSize = {pageSize} onPageChange = {HandlePageChange} />  
            </div> 
          </div>
        </div>
      </form>  
        

    </div>
  )
}


export default Users
