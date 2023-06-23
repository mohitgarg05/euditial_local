import './App.css';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import FirstBlog from './components/blogs/FirstBlog';
import SecondBlog from './components/blogs/SecondBlog';
import ThirdBlog from './components/blogs/ThirdBlog';
import AboutUs from './components/aboutUs/AboutUs';
import NotFoundTitle from './components/404/notFound';
import CdonConnector from './components/cdonConnector/CdonConnector';
function App() {
  return (

      <Router>  
        <Routes>
          <Route index element={<Home />} />
          <Route path='/blog-post/enhancing-eu-E-commerce' element={<FirstBlog />} />
          <Route path='/blog-post/boost-your-business' element={<SecondBlog />} />
          <Route path='/blog-post/empowering-a-digital-europe' element={<ThirdBlog />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/cdon' element={<CdonConnector />} />
          <Route path='*' element={< NotFoundTitle />} />
        </Routes>
      </Router>

  );
}

export default App;
