import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateProducts(props) {
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [images, setImages] = useState([])

  const updateProduct = async () => {
    let data = {
      title: name,
      brand: brand,
      price: price,
      stock: stock,
      images: images,
    }
    let res = await axios.put('https://dummyjson.com/products/1', data)
    
    console.log('check res data: ', res)
    if(res && res.data){
      let newUpdateProduct = res.data
      props.fetchUpdateProducts(newUpdateProduct)
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
                    <input type="file" placeholder="File" className='form-control' onChange={(e) => setImages(e.target.files[0])}/>
                    <br />
                    <Link onClick={updateProduct} className='btn btn-primary add'>Update Products</Link>
                  </div>
                </header>
            </div> 
          </div>
    </div>
  )
}



export default UpdateProducts
