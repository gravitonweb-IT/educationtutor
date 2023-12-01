import "./App.css";
// import Home from './componants/Home';
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./componants/Home";
import Maths from "./componants/Maths";
import Coding from "./componants/Coding";
import Competative from "./componants/Competative";
import Science from "./componants/Science";
import Testimonial from "./componants/Testimonial";
import Blog from "./componants/Blog";
import Facts from "./componants/Facts"
import Contact from "./componants/Contact";

function App() {
  return (
    <>
    
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/Maths" element={<Maths />} />
          <Route path="/Science" element={<Science/>} />
          <Route path="/Coding" element={<Coding />} />
          <Route path="/Competative" element={<Competative/>} />
          <Route path="/Testimonial" element={<Testimonial/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Facts" element={<Facts/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
