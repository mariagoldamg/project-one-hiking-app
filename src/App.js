import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hikes from './Hikes';
import About from './About';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div >
      <Router>
<nav>
  <Link to = '/' className='link'>About Us</Link>
  <Link to = '/hikes'className='link'>Hikes</Link>
  <Link to = '/contact'className='link'>Contact Us</Link>
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
