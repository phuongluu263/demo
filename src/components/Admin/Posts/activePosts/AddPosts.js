import React, {useState, useEffect } from 'react'
import './addPosts.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function AddPosts(props) {

  const [name, setName] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState('')
  
  const addPosts = async () => {
    let data = {
      userId: 1,
      title: name,
      body: body,
      tags: tags,
    }
    let res = await axios.post('https://dummyjson.com/posts/add', data)
      console.log('check res data: ', res)
      if(res && res.data){
        let newAddPost = res.data
        props.fetchAddPost(newAddPost)
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
  )

}

export default AddPosts
