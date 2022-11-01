import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateProducts(props) {
  const [data, setData] = useState(props.selectedData);
  // const [name, setName] = useState("")
  // const [brand, setBrand] = useState("")
  // const [price, setPrice] = useState('')
  // const [stock, setStock] = useState('')
  // const [images, setImages] = useState('')
  useEffect(()=>{
    setData(props.selectedData)},[props.selectedData]
  )

  const updateProduct = async () => {   
    const id = data.id;
    data.id = String(data.id);
    let res = await axios.put(`https://dummyjson.com/products/${id}`, data)
    debugger
    console.log('check res data: ', res)
    if(res && res.data){
      let newUpdateProduct = res.data
      props.fetchUpdateProducts(newUpdateProduct)
      console.log('check update data: ', newUpdateProduct)
    }           
  }
  const updateValue = (value, property) =>{
    data[property]=value;
    setData(data);
  }

  return (
    <div>
      <div className="p-3 text-dark list_add_sidebar">
            <div class="row container bg-white">
              <header>
                  <div className='col-sm-12 offset-sm'>
                    <input type="text" placeholder="Name" className='form-control' defaultValue={data.title} onChange={(e) => {
                      updateValue(e.target.value,"title")}}/>
                    <br />
                    <input type="text" placeholder="Brand" className='form-control' defaultValue={data.brand} onChange={(e) => updateValue(e.target.value,"brand")}/>
                    <br />
                    <input type="text" placeholder="Price" className='form-control' defaultValue={data.price} onChange={(e) => updateValue(e.target.value,"price")} />
                    <br />
                    <input type="text" placeholder="Stock" className='form-control' defaultValue={data.stock} onChange={(e) => updateValue(e.target.value,"stock")}/>
                    <br />
                    <input type="text" placeholder="File" className='form-control' defaultValue={data.images} onChange={(e) => updateValue(e.target.value,"images")}/>
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
