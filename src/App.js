import "./App.css";
// import Home from './componants/Home';
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./componants/Home";
import Maths from "./componants/Maths";
import Coding from "./componants/Coding";
import Competative from "./componants/Competative"
import Science from "./componants/Science";

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
        </Routes>
      </div>
    </>
  );
}

export default App;
