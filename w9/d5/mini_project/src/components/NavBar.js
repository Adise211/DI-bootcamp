import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
// import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from '../blog.png';





class NavBar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }





  render () {
    return (
        <nav>
          <div className="nav-wrapper">
            <Link to="/logo" className="brand-logo">My Blog</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <Routes>
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/logo" element={<Blog />} />
         </Routes>
        </nav>


    )
  }



} // end of class


// <Route exact path="/" element={<Home />} />

export default NavBar;




// <nav>
//   <div class="nav-wrapper">
//     <a href="" class="brand-logo">Logo</a>
//     <ul id="nav-mobile" class="right hide-on-med-and-down">
//       <li><a href="">sass</a></li>
//       <li><a href="">sass <span class="new badge">4</span></a></li>
//       <li><a href="">sass</a></li>
//     </ul>
//   </div>
// </nav>
