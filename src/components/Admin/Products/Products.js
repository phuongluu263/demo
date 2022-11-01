import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Products.css'
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";
import * as IoIcons from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import AddProducts from './activeProducts/AddProducts';
import UpdateProducts from './activeProducts/updateProducts'
import Paginations from '../Paginations/Paginations';
import {paginate} from '../Utils/paginate';
import {sideBarData} from './../sideBarData'
import axios from 'axios';
function Products(props) {

  const [showAdd, setShowAdd] = useState(false);
  const [selectedData, setSelectedData] = useState(undefined);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const [showUpdate, setShowUpdate] = useState(false);
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = (data) => 
    {
      setShowUpdate(true);
      setSelectedData(data);
    }

    let navigate = useNavigate();
    const [postProducts, setPostProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    // 
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState([])
    const [categoryId, setCategoryId] = useState('')
    // 

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

    const fetchDataProducts = () => {
        fetch('https://dummyjson.com/products')
          .then((response) => response.json())
          .then((actualData) => {
            console.log(actualData);
            actualData?.products?.sort((a,b)=>b.id - a.id)
            setPostProducts(actualData.products);
            // console.log(postProducts);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
    
      useEffect(() => {
        fetchDataProducts();
      }, []);

    const fetchAddProducts = (newAddProduct) => {
      setShowAdd(false);
      let data = postProducts;
      data.unshift(newAddProduct)
      setPostProducts(data);
    }  
    
    const fetchUpdateProducts = (newUpdateProduct) => {
      setShowUpdate(false);
      let data = postProducts;
      const idx = data.findIndex((item)=>+item.id===+newUpdateProduct.id);
      data[idx] = newUpdateProduct;
      setPostProducts(data);
    }

    const fetchDeleteProducts = (id) => {
      let data = postProducts;
      data = data.filter(item => item.id !== id)
      setPostProducts(data);
    }  

    const HandlePageChange = (page) => {
      setCurrentPage(page)
    }
    const paginateProducts = paginate(postProducts, currentPage, pageSize);

    const handleSearch = async (event) => {

      event.preventDefault();
      console.log(search);
      return await axios
      .get(`https://dummyjson.com/products/search?q=${search}`)
      .then((response) => {
        setPostProducts(response.data.products);
        setSearch("");
      })
      .catch((err) => {
        console.log(err.message);
      });
    }

    const getCategory = () => {
      fetch('https://dummyjson.com/products/categories')
        .then((response) => response.json())
        .then((actualData) => {
          setCategory(actualData);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    useEffect(() => {
      getCategory();
    }, []);

    const handleCategory = async (event) => {
      const getCategoryId = event.target.value;
      // console.log(getCategoryId)
      setCategoryId(getCategoryId)
      event.preventDefault();
      return await axios
      .get(`https://dummyjson.com/products/category/${getCategoryId}`)
      .then((response) => {
        setPostProducts(response.data.products);
        setCategoryId("");
      })
      .catch((err) => {
        console.log(err.message);
      });
    }


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
                <li><Link to="/" className="nav-link px-2 text-dark pl">Admin / Products / {categoryId}</Link></li>
              </ul>
              <div className="btn_logout">
                <Link onClick={handleClick} className="btn btn-outline-light me-2 btn_lg"><HiIcons.HiOutlineLogout />Logout</Link>
              </div>
            </div>
          </div>
          
            <div className='add my-2'>
              <Button variant="primary" className='btn_add my-3' onClick={handleShowAdd}>
                <IoIcons.IoIosAddCircleOutline /> Add
              </Button>
              <div className='slt-category'>
                <select class="form-select" aria-label="Default select example" onChange={(e) => handleCategory(e)}>
                  <option selected>All Category</option>
                  {
                    category.map((item, index) => (
                      <option key={index} value={item}>
                        <option>{item}</option>
                      </option>
                    ))
                  }
                </select>
              </div>

              <form className='d-flex input-group w-auto frm-search'>
                <input type='text' className='form-control' placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type='submit' className='btn btn-primary' onClick={handleSearch}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </button>
              </form>
            </div>

            <Modal show={showAdd} onHide={handleCloseAdd}>
              <Modal.Header closeButton>
                <Modal.Title>Add Products</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <AddProducts fetchAddProducts={fetchAddProducts}/>
              </Modal.Body>
            </Modal>
            
            <Modal show={showUpdate} onHide={handleCloseUpdate}>
              <Modal.Header closeButton>
                <Modal.Title>Update Products</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <UpdateProducts fetchUpdateProducts = {fetchUpdateProducts} selectedData={selectedData}/>
              </Modal.Body>
            </Modal>
                        
          <div className="p-3 text-dark list_sidebar">
            <div class="row container">
              <table>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Total</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
                <tbody> 
                  {paginateProducts.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.brand}</td>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                    <td>{item.price*item.stock}$ </td>
                    <td>
                      <img className='picture' src={item.images[0]} alt="" height={100} />
                    </td>
                    <td>
                      <Link onClick={()=>handleShowUpdate(item)}  className='btn btn-primary ed'><FiIcons.FiEdit  />
                      </Link>
                      <Link onClick={() => fetchDeleteProducts(item.id)} className='btn btn-primary ed'><RiIcons.RiDeleteBinLine /></Link>
                    </td>
                  </tr>
                  ))}

                </tbody>
              </table>
              <Paginations items = {postProducts.length} currentPage = {currentPage} pageSize = {pageSize} onPageChange = {HandlePageChange} />
            </div> 
          </div>

        </div>
      </form>
      
    </div>
  )
}


export default Products


