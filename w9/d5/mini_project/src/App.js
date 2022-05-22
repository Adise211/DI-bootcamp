import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import { Routes, BrowserRouter, Route} from "react-router-dom";
import Blog from './blog.png';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
          <Routes>
             <Route exact path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/logo" element={<Blog />} />
             <Route path="/post_id/:id" element={<Post />} />
         </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
