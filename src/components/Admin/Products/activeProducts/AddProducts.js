import React, {useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './AddProducts.css'
import axios from 'axios';
function AddProducts(props) {

  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [image, setImage] = useState({})
  
  const addProducts = async () => {
    let data = {
      title: name,
      brand: brand,
      price: price,
      stock: stock,
      images: image,
    }
    let res = await axios.post('https://dummyjson.com/products/add', data)

    console.log('check res data: ', res)
    if(res && res.data){
      let newAddProduct = res.data
      props.fetchAddProducts(newAddProduct)
      // console.log('check newAdd', newAddProduct)
    }           
  }
  
  return (
    <div>

          <div className="p-3 text-dark list_add_sidebar">
            <div class="row container bg-white">
              <header>
                  <div className='col-sm-12 offset-sm'>
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
  )
}



export default AddProducts
