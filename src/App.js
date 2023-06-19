import './App.css';
import { MantineProvider, Text } from '@mantine/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FirstBlog from './components/blogs/FirstBlog';
import SecondBlog from './components/blogs/SecondBlog';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/blog-post/enhancing-eu-E-commerce' element={<FirstBlog />} />
          <Route path='/blog-post/boost-your-business' element={<SecondBlog />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
