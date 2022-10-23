import React, {useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './AddProducts.css'
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import {sideBarData} from './../../sideBarData'
function AddProducts(props) {
  let navigate = useNavigate();

  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [image, setImage] = useState({})

  const addProducts = () => {
    fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      title: name,
      brand: brand,
      price: price,
      stock: stock,
      images: image,
       /* other product data */
     })
   })
   .then(res => res.json())
   .then(console.log);
            
  }
  useEffect(() => {
    addProducts();
  }, []);

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
  
  return (
    <div>
      <form className='frm_products'>
        <div className='header_add_products'>
          <nav className='nav_products'>
            <div className='text_products'>
              <p>ADMIN PANEL</p>
              <div className='icons_products'>
                <Link to='/admin/products'>
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
                <li><Link to="/admin/products" className="nav-link px-2 text-dark pl">Admin / Products / Add</Link></li>
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
                    <input type="text" placeholder="Name" className='form-control' onChange={(e) => setName(e.target.value)}/>
                    <br />
                    <input type="text" placeholder="Brand" className='form-control' onChange={(e) => setBrand(e.target.value)}/>
                    <br />
                    <input type="text" placeholder="Price" className='form-control' onChange={(e) => setPrice(e.target.value)} />
                    <br />
                    <input type="text" placeholder="Stock" className='form-control' onChange={(e) => setStock(e.target.value)}/>
                    <br />
                    <input type="file" placeholder="File" className='form-control' onChange={(e) => setImage(e.target.files[0])}/>
                    <br />
                    <Link to='/admin/products' onClick={addProducts} className='btn btn-primary add'>Add Products</Link>
                  </div>
                </header>
            </div> 
          </div>
        </div>
      </form>
    </div>
  )
}



export default AddProducts
