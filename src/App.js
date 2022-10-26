import './App.css';
import Home from './components/Home/Home'
import About from './components/About'
import NotFound from './components/notFound'
import Login from './components/Login/Login'
import Admin from './components/Admin/Admin';
import Products from './components/Admin/Products/Products'
import Posts from './components/Admin/Posts/Posts'
import Users from './components/Admin/Users/Users'
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
        <Route path="/admin/posts" element={<Posts />} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>

    </Router>
  );
    
}

export default App;
