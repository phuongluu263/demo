import './App.css';
import Home from './components/Home/Home'
import About from './components/About'
import NotFound from './components/notFound'
import Login from './components/Login/Login'
import Admin from './components/Admin/Admin';
import Products from './components/Admin/Products/Products'
import AddProducts from './components/Admin/Products/activeProducts/AddProducts'
import Posts from './components/Admin/Posts/Posts'
import AddPosts from './components/Admin/Posts/activePosts/AddPosts'
import Users from './components/Admin/Users/Users'
import AddUsers from './components/Admin/Users/activeUsers/AddUsers'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom"
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/products/addProducts" element={<AddProducts />} />
        <Route path="/admin/posts" element={<Posts />} />
          <Route path="/admin/posts/addPosts" element={<AddPosts />} />
        <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/users/addUsers" element={<AddUsers />} />
      </Routes>

    </Router>
  );
    
}

export default App;
