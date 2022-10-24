import React, {useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function AddUsers(props) {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [age, setAge] = useState('')
  const [image, setImage] = useState({})


  
  const addUsers = async () => {

    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      age: age,
      image: image,
    }
    let res = await axios.post('https://dummyjson.com/users/add', data)
      console.log('check res data: ', res)
      if(res && res.data){
        let newAddUsers = res.data
        props.fetchAddUser(newAddUsers)
        // console.log('check newAdd', newAddProduct)
      }  
            
  }


  return (
    <div>
      

          <div className="p-3 text-dark list_add_sidebar">
            <div class="row container bg-white">
              <header>
                <div className='col-sm-12 offset-sm'>
                  <br />
                  <input type="text" placeholder="FirstName" className='form-control' onChange={(e) => setFirstName(e.target.value)}/>
                  <br />
                  <input type="text" placeholder="LastName" className='form-control' onChange={(e) => setLastName(e.target.value)}/>
                  <br />
                  <input type="text" placeholder="Email" className='form-control' onChange={(e) => setEmail(e.target.value)}/>
                  <br />
                  <input type="text" placeholder="Phone" className='form-control' onChange={(e) => setPhone(e.target.value)}/>
                  <br />
                  <input type="text" placeholder="Age" className='form-control' onChange={(e) => setAge(e.target.value)}/>
                  <br />
                  <input type="file" placeholder="File" className='form-control' onChange={(e) => setImage(e.target.files[0])} />
                  <br />
                  <Link to='/admin/users' onClick={addUsers} className='btn btn-primary add'>Add Users</Link>
                </div>
              </header>
            </div> 
          </div>
        
      
    </div>
  )
}


export default AddUsers
