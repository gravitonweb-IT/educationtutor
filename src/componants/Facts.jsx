import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import p2 from "../componants/assets/p2.png";
import WhatsAppButton from "../componants/WhatsAppButton";
import WhatsAppButton1 from "../componants/WhatsAppButton1";
import { IoIosArrowUp } from "react-icons/io";
import logo3 from "../componants/assets/images/logo3.jpg";
import { FaInstagram } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
const Facts = () => {
  const [teachersCount, setTeachersCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);

  useEffect(() => {
    const animateCounter = (setter, to) => {
      let currentCount = 0;
      const increment = to / 1200;

      const interval = setInterval(() => {
        currentCount += increment;
        setter(Math.min(Math.round(currentCount), to));

        if (currentCount >= to) {
          clearInterval(interval);
        }
      }, 16);
    };

    animateCounter(setTeachersCount, 45);
    animateCounter(setCoursesCount, 56);
    animateCounter(setMembersCount, 15);
    animateCounter(setCountriesCount, 15);
  }, []);
  const [activeTab2, setActiveTab2] = useState(2);
  const handleTabClick2 = (tabName) => {
    setActiveTab2(tabName);
  };

  const [studentsCount, setStudentsCount] = useState(0);
  const [classesCount, setclassesCount] = useState(0);
  const [registeredCount, setRegisteredCount] = useState(0);
  const [countryCount, setCountryCount] = useState(0);
  useEffect(() => {
    const animateCounter = (setter, to) => {
      let currentCount = 0;
      const increment = to / 120;

      const interval = setInterval(() => {
        currentCount += increment;
        setter(Math.min(Math.round(currentCount), to));

        if (currentCount >= to) {
          clearInterval(interval);
        }
      }, 16);
    };

    animateCounter(setStudentsCount, 1000);
    animateCounter(setclassesCount, 10000);
    animateCounter(setRegisteredCount, 100);
    animateCounter(setCountryCount, 15);
  }, []);
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  
  const data = {
    title: "",
    rows: [
      {
        title: "Coding: The Language of the Future",
        content: `Join us to be part of the 80% leading the way in the job market of 2030. Coding isn't just a skill; it's a passport to limitless career opportunities! `,
      },
      {
        title: " Personalized Learning for Tomorrow's Innovators",
        content:
          "Our experienced tutors are dedicated to your success, offering personalized lessons that cater to your unique learning style and pace.",
      },
      {
        title: "Explore Endless Possibilities",
        content: `From AI and machine learning to web development and cybersecurity, our coding tutorials cover the spectrum of in-demand skills that employers are seeking.  `,
      },
      {
        title: "Expert Tutors, Real-World Insight",
        content: `Learn from industry experts who bring real-world applications to your coding journey, providing insights that go beyond textbooks. `,
      },
      {
        title: "Flexible Scheduling, Boundless Opportunities",
        content: `Enjoy the flexibility of scheduling sessions that fit your busy lifestyle. Coding education has never been this accessible and convenient.  `,
      },
      {
        title: " Enroll Now and Code Your Way to Success!",
        content: `Ready to be at the forefront of the digital revolution? Contact us today to unlock the power of coding and secure a future where opportunities are limitless.  `,
      },
    ],
  };
  const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red"
    titleTextSize: "20px",
    rowContentTextSize: "16px",
    rowContentPaddingBottom: "10px",
    rowContentPaddingLeft: "50px",
    padding: "30px",
    marginTop: "20px",
  };

  const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
  };
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", 
  };

  const innerDivStyle = {
 
    maxWidth: "800px", 
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
  };
  const headingStyle = {
    marginBottom: "20px",
    marginTop: "30px", 
  };
  return (
    <>
      <header>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container mob-logo">
            <div className="navbar-header col-sm-2 tablet-logo">
              <button
                type="button"
                className="navbar-toggle mob-menu"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <a href="#education-home" className="brand-logo">
                <img
                  src={logo3}
                  alt="karbar logo"
                  className="header-logo-section"
                />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav pull-right">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li class="dropdown">
                  <a href="#education-courses">Courses</a>
                  <div class="dropdown-content">
                    <Link to="/Maths">Maths</Link>
                    <Link to="/Science">Science</Link>
                    <Link to="/Coding">Coding</Link>
                    <Link to="/Competative">Competitive Exam</Link>
                  </div>
                </li>
                {/* <li>
                  <a href="#education-price">Price</a>
                </li> */}
                <li>
                  <Link to="/Testmonial">Testimonial</Link>
                </li>
                <li>
                  <Link to="/Blog">Blog</Link>
                </li>
                <li>
                  <Link to="/Facts">Facts</Link>
                </li>
                
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* banner part */}

      {/* footer */}
      <footer
          id="education-footer"
          className="footer-st-25 text-center theme-bg-gradient pt90 pb80"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
             
                <div className="progress-bars-inner">
                  <h2 className="color-white fsize-40 mb15 mt0">
                  ADDRESS
                  </h2>
                  <h5 className="color-white fsize-20 mb15 mt0">Edufusion Office: </h5>

                  <p className="color-white lheight-30 pb30">
                    Oshiwara Andheri West Mumbai – 53 India 
                  </p>
                  <h5 className="color-white fsize-20 mb15 mt0">Edufusion Branch:</h5>
                  <p className="color-white lheight-30 pb30">Race Course, Ringroad Gujarat – India </p>
                </div>
              </div>
            </div>
            <div className="section-subscribe section-subscribe-st">
              <div className="subscribe-content">
            
                <div className="subscribe-content-inner text-white">
                  <h2 className="color-white fsize-40 mb15">Contacts</h2>
                  <a href="tel:8469092774">
                    <p
                      className="text-white lheight-30 pb40  "
                      style={{ color: "white" }}
                    >
                      Phone1: +91-8401420099
                      <br />
                      Phone2: +91-6006474119
                    </p>
                  </a>

                  <a href="mailto:inquiries@edufusion.co.in" className="mb90">
                    <p>Email: Inquiries@edufusion.co.in</p>
                    <p> Email: edufusiontutor@gmail.com
</p>
                  </a>
                </div>
              </div>
              <div className="subscribe-form mt30">
                <div className="subscribe-form-inner">
         
                  <form className="form-inline dv-form" id="mc-form">
                    <div className="form-group">
                      <input
                        id="mc-email"
                        type="email"
                        name="EMAIL"
                        placeholder="Enter Your Email Address"
                        className="form-control color-white"
                      />
                      <button
                        className="btn color-16 fsize-14 lheight-40 fweight-600"
                        name="Subscribe"
                        id="subscribe-btn"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                    <br />
                    <label htmlFor="mc-email" />
                    <div id="subscribe-result" />
                  </form>
                </div>
              </div>
              {/* Start Social icons */}
              <ul className="social-rounded social-icon mt35 p0">
                <li>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61552672263290">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/edufusion_tutor/">
                  <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaBehance />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGooglePlusG />
                  </a>
                </li>
              </ul>
              {/* End Social icons */}
              <div className="copyright mt20">
                <p className="color-white fsize-16">
                  Copyright@2020 All Rights Reserved By
                  <span className="font-bold" style={{ color: "#2f384a" }}>
                    <a href="#">:Edufusion Tutor</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      <WhatsAppButton1 />
      <WhatsAppButton />
      <a
        href="#"
        id="toTop"
        className="theme-bg-gradient color-white"
        style={{ display: "inline" }}
      >
        <IoIosArrowUp style={{ marginTop: "6px" }} />
      </a>
    </>
  );
};

export default Facts;
