import "./App.css";
// import Home from './componants/Home';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Route, Routes } from "react-router-dom";
import Home from "./componants/Home";
import Maths from "./componants/Maths";
import Coding from "./componants/Coding";
import Competative from "./componants/Competative";
import Science from "./componants/Science";
import Blog from "./componants/Blog";
import Facts from "./componants/Facts"
import Contact from "./componants/Contact";
import Testmonial from "./componants/Testmonial";
import PrivacyPolicy from "./componants/PrivacyPolicy";
import TermsAndConditions from "./componants/TermAndConditon";
import CookieBanner from "./componants/CookieBanner";


function App() {
  useEffect(() => {
    ReactGA.initialize('UA-296651907-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
    
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/Maths" element={<Maths />} />
          <Route path="/Science" element={<Science/>} />
          <Route path="/Coding" element={<Coding />} />
          <Route path="/Competative" element={<Competative/>} />
          <Route path="/Testmonial" element={<Testmonial/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Facts" element={<Facts/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/privacy" element={<PrivacyPolicy/>}/>
          <Route path="/term" element={<TermsAndConditions/>}/>
          <Route path="/cookes" element={<CookieBanner/>}/>

        </Routes>
      
      </div>
    </>
  );
}

export default App;
