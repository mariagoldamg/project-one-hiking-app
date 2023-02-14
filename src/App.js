import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hikes from './Hikes';
import About from './About';
import Contact from './Contact';
import './App.css';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
    const handleClick = event => {
     //👇️ toggle shown state
    setShow(current => !current);
  }
  return (
    <div >
      <Router>
<nav>
  <Link to = '/' className='link'>About Us</Link>
  <Link to = '/hikes'className='link'>Hikes</Link>
  <Link to = '/contact'className='link'>Contact Us</Link>

  <div>
        <div className="hamburgerIcon">
        <h1>EPIC HIKES</h1>
        <br></br>
        <img className="bars" src={'https://img.icons8.com/external-linear-outline-icons-papa-vector/512/external-Menu-interface-linear-outline-icons-papa-vector-6.png'} alt="bars"
        onClick={handleClick}/>
        </div>
  {show && (    
<ul className="mobileMenu">
    <li> <Link to = '/' className='linkMobile'>About</Link></li>
  
    <li><Link to = '/hikes'className='linkMobile'>Hikes</Link></li>
    <li><Link to = '/contact'className='linkMobile'>Contact</Link></li>
</ul>)}
</div>

</nav>

<Routes>
  <Route path = '/' element = {<About/>}/>
  <Route path = '/hikes' element = {<Hikes/>}/>
  <Route path = '/contact' element = {<Contact/>}/>
</Routes>

      </Router>
    </div>
  );
}

export default App;
