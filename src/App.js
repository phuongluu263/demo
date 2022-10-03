import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import notFound from './components/notFound'
import Login from './components/Login'
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
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/notfound" element={<notFound />} />
      </Routes>
    </Router>
  );
    
}

export default App;
