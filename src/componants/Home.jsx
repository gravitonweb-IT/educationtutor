import React, { useEffect, useState } from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/responsive.css";
import "./assets/css/slick.css";
import "./assets/css/slick-theme.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/style.css";
import main from "./assets/images/main.png";
import { FaPlay } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { BiSolidCertification } from "react-icons/bi";
import { FaRegCreditCard } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import choose from "./assets/images/why-choose.png";
import teacher1 from "./assets/images/teachers/teacher-1.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { Link } from "react-router-dom";
import close from "./assets/images/icons/close-icon.png";
import { IoIosArrowUp } from "react-icons/io";
import logo from "../componants/assets/images/logo3.png";
import WhatsAppButton from "../componants/WhatsAppButton";
import test from "../componants/assets/images/testmonialimages/t1.png";
import test1 from "../componants/assets/images/testmonialimages/t2.jpg";
import test2 from "../componants/assets/images/testmonialimages/t3.jpg";
import test3 from "../componants/assets/images/testmonialimages/t4.jpg";
import m1image from "../componants/assets/images/m1.png";
import mathsvideo from "../componants/assets/mathsvideo.mp4";
import learningmath from "../componants/assets/learningmath.mp4";
import grade2 from "../componants/assets/grade2.mp4";
import grade8 from "../componants/assets/grade8.mp4";
import grade6 from "../componants/assets/grade6.mp4";
import mario from "../componants/assets/mario.webm";
import "./home.css";
import "./tabs.css";
// import anime from 'animejs';
const Home = () => {


  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit1= (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // Access the values using the state variables (name, email, message)
    // Once done, you can close the form
    setShowForm(false);
  };

  const [activeTab1, setActiveTab1] = useState(1);

  const handleTabClick1 = (tabNumber) => {
    setActiveTab1(tabNumber);
  };
  const [activeTab2, setActiveTab2] = useState(2);
  const handleTabClick2 = (tabName) => {
    setActiveTab2(tabName);
  };
  const [slidesToShow, setSlidesToShow] = useState(3);
  // const [contact, setContact]=useState(false);

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  const [activeTab, setActiveTab] = useState("course-item-1"); // Initial active tab

  useEffect(() => {
    console.log("this is ");
  }, [activeTab]);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //
  const [teachersCount, setTeachersCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);

  // form
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Add your validation logic here
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    // Add more validation rules for other fields

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // You can access the form data in the 'formData' object
      console.log("Form Data:", formData);
    } else {
      console.log("Form validation failed.");
    }
  };
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

  // counter start

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
  return (
    <div>
      <>
     
      <header>
  {/* Nav Menu Starts */}
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
        {/* 5* Logo */}
        <a href="#education-home" className="brand-logo">
          <img
            src={logo}
            alt="karbar logo"
            className="header-logo-section"
          />
        </a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        {/* Menu items */}
        <ul className="nav navbar-nav pull-right">
          <li className="active">
            <a href="#education-home">Home</a>
          </li>
          <li>
            <a href="#education-courses">Courses</a>
          </li>
          <li>
            <a href="#education-price">Price</a>
          </li>
          <li>
            <a href="#education-testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#education-blog">Blog</a>
          </li>
          <li>
            <a href="#education-footer">Facts</a>
          </li>
          <li>
          <button onClick={toggleForm}> 
            <a
              data-toggle="modal"
              data-target="#education-contact"
              style={{ marginTop: '10px' }}
            >
              Contact
            </a>
          </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>



        
        {/*================================================================================= 
                          END HEADER
    ==================================================================================*/}

        {/*================================================================================= 
                          START 5* APP HOME
    ==================================================================================*/}
        <section id="education-home" className="banner-area theme-bg-gradient">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <div className="banner-device">
                  <img src={main} alt="main" />
                </div>
              </div>
              <div className="col-lg-8 col-sm-8">
                {/* Home content */}
                <div className="banner-txt">
                  <div className="banner-intro">
                    <h1 className="banner-title">
                      Present Education in beautiful way with{" "}
                      <span id="area">Landing Page</span>
                      <span id="cursor" style={{ opacity: "1" }}>
                        |
                      </span>
                      ...
                    </h1>
                    <p className="color-white lheight-30">
                      Unlock the Power of Numbers, Discover the wonders of
                      science, and Dive into the World of Coding with Us!
                    </p>
                  </div>
                  <div className="app-media">
                    <div className="single-media">
                      <a
                        className="popup-vedio"
                        href="https://www.youtube.com/watch?v=0fp60iHV7Rk"
                      >
                        <FaPlay />
                        <div className="circle circle-1" />
                        <div className="circle circle-2" />
                      </a>
                      <p className="color-7">Watch Courses Demo Video</p>
                    </div>
                    <div className="single-media">
                      <a href="#">
                        {" "}
                        <FaGraduationCap />
                      </a>
                      <p className="color-7">Start Learn Courses Now</p>
                    </div>
                    <div className="single-media">
                      <a data-toggle="modal" data-target="#education-contact">
                        <FaRegQuestionCircle />
                      </a>
                      <p className="color-7">Do You have Any qustions?</p>
                    </div>
                  </div>
                </div>
                {/* End Home content */}
              </div>
            </div>
          </div>
        </section>
        {/*================================================================================= 
                          END 5* APP HOME
    ==================================================================================*/}

        {/*================================================================================= 
                          START courses
    ==================================================================================*/}
        <section id="education-courses" className="course pt30 pb100">
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                {/* section title */}
                <div
                  className="text-center wow fadeIn"
                  data-wow-duration="2s"
                  style={{
                    visibility: "visible",
                    WebkitAnimationDuration: "2s", // Fix for the warning
                    animationDuration: "2s",
                    animationName: "fadeIn",
                  }}
                >
                  <div className="subtitle color-7">
                    A modern and unique style
                  </div>
                  <div className="title color-white lheight-40 mb30">
                    <span>
                      Popular Courses<span className="color-15">.</span>
                    </span>
                  </div>
                  <div className="spliter mb30" />
                </div>
                {/*Star course items */}
                <div className="course-items">
                  <div className="tabs text-center">
                    <div className="tabs-nav">
                      <ul className="list-inline nav nav-tabs fsize-0">
                        {/* Start course tab button */}
                        <li className="col-lg-2 col-md-2 active">
                          <a
                            onClick={() => handleTabClick("course-item-1")}
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="true"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <h1
                                style={{
                                  transform: "rotate(-44deg)",
                                  fontSize: "19px",
                                  marginTop: "34px",
                                }}
                              >
                                Maths
                              </h1>
                            </div>
                          </a>
                        </li>
                        <li className="col-lg-2 col-md-2">
                          <a
                            onClick={() => handleTabClick("course-item-2")}
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="false"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <h1
                                style={{
                                  transform: "rotate(-44deg)",
                                  fontSize: "19px",
                                  marginTop: "34px",
                                }}
                              >
                                Science
                              </h1>
                            </div>
                          </a>
                        </li>
                        <li className="col-lg-2 col-md-2">
                          <a
                            onClick={() => handleTabClick("course-item-3")}
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="false"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <h1
                                style={{
                                  transform: "rotate(-44deg)",
                                  fontSize: "19px",
                                  marginTop: "34px",
                                }}
                              >
                                Coding
                              </h1>
                            </div>
                          </a>
                        </li>
                        <li className="col-lg-2 col-md-2">
                          <a
                            onClick={() => handleTabClick("course-item-4")}
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="false"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <h1
                                style={{
                                  transform: "rotate(-44deg)",
                                  fontSize: "19px",
                                  marginTop: "34px",
                                }}
                              >
                                SAT
                              </h1>
                            </div>
                          </a>
                        </li>
                        <li className="col-lg-2 col-md-2">
                          <a
                            onClick={() => handleTabClick("course-item-5")}
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="false"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <h1
                                style={{
                                  transform: "rotate(-44deg)",
                                  fontSize: "19px",
                                  marginTop: "34px",
                                }}
                              >
                                PSAT
                              </h1>
                            </div>
                          </a>
                        </li>
                        <li className="col-lg-2 col-md-2">
                          <a
                            onClick={() => handleTabClick("course-item-6")}
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="false"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <h1
                                style={{
                                  transform: "rotate(-44deg)",
                                  fontSize: "19px",
                                  marginTop: "34px",
                                }}
                              >
                                MORE
                              </h1>
                            </div>
                          </a>
                        </li>
                        {/* End course tab button */}
                      </ul>
                    </div>
                    <div className="tab-content relative background-white mt100 bdrs-10">
                      {/* Start Single tab content */}
                      {activeTab === "course-item-1" && (
                        <div
                          className={`tab-pane fade text-left clearfix ${
                            activeTab === "course-item-1" ? "active in" : ""
                          }`}
                          id="course-item-1"
                        >
                          <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                            <div className="table mb40">
                              <div className="title-bl table-cell valign-middle">
                                <div className="title color-2">
                                  <span>Mathematics Learning Platform</span>
                                </div>
                                <div className="subtitle fweight-600 color-4 mt20">
                                  <h5>
                                    We take care of all your child’s math needs{" "}
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <h1></h1>
                            <p className="lheight-30 mt20">
                              Individualized Learning Paths for Each Child's
                              Unique Math Requirements:
                            </p>
                            <ul className="list1">
                              <li>
                                <span className="table-cell valign-middle">
                                  Personalised Learning
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  live sessions
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Classwork Help
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Advance Learning
                                </span>
                              </li>
                            </ul>
                            {/* button */}
                            <div className="flex-1">
                              {/* <button className="button button-mat border-gradient bdrs-10 lheight-50 color-white fsize-14 fweight-600 btn-1">
                 <span className="color-2 button-text">
                   START LEARN NOW
                 </span>
               </button> */}
                            </div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              {/* <button
                 className="slick-prev slick-arrow slick-disabled"
                 aria-label="Previous"
                 type="button"
                 aria-disabled="true"
                 style={{}}
               >
                 Previous
               </button> */}
                              <div className="slick-list draggable">
                                <div
                                  className="slick-track"
                                  style={{
                                    opacity: "1",
                                    width: "1170px",
                                    WebkitTransform:
                                      "translate3d(0px, 0px, 0px)", // Correct camelCase for -webkit-transform
                                    MsTransform: "translate3d(0px, 0px, 0px)", // Correct camelCase for -ms-transform
                                    transform: "translate3d(0px, 0px, 0px)",
                                  }}
                                >
                                  <div
                                    className="course-slider-img slick-slide slick-current slick-active"
                                    style={{
                                      backgroundImage: `url(${m1image})`,
                                    }}
                                    data-slick-index={0}
                                    aria-hidden="false"
                                    tabIndex={0}
                                  />
                                  {/* <div
                     className="course-slider-img slick-slide"
                     style={{
                       "background-image":
                         'url("https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg")',
                       width: "585px",
                     }}
                     data-slick-index={1}
                     aria-hidden="true"
                     tabIndex={-1}
                   /> */}
                                </div>
                              </div>
                              {/* <button
                 className="slick-next slick-arrow"
                 aria-label="Next"
                 type="button"
                 style={{}}
                 aria-disabled="false"
               >
                 Next
               </button> */}
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab == "course-item-2" && (
                        <div
                          className={`tab-pane fade text-left clearfix ${
                            activeTab === "course-item-2" ? "active in" : ""
                          }`}
                          id="course-item-2"
                        >
                          <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                            <div className="table mb40">
                              <div className="title-bl table-cell valign-middle">
                                <div className="title color-2">
                                  <span>
                                    Unlock the Wonders of Science with Our
                                    Exclusive
                                  </span>
                                </div>
                                <div className="subtitle fweight-600 color-4 mt20">
                                  online science tuition offer an unparalleled
                                  learning experience that goes beyond the
                                  ordinary
                                </div>
                              </div>
                            </div>
                            <p className="lheight-30 mt20">
                              Our curriculum doesn't just teach science; it
                              propels you toward promising careers! Consider the
                              following career pathways awaiting our students:
                            </p>
                            <ul className="list1">
                              <li className="list-theme-color">
                                <span className="table-cell valign-middle">
                                  Top-notch Tutors:
                                </span>
                              </li>
                              <li className="list-theme-color">
                                <span className="table-cell valign-middle">
                                  Flexibility in Scheduling
                                </span>
                              </li>
                              <li className="list-theme-color">
                                <span className="table-cell valign-middle">
                                  Interactive Learning Tools
                                </span>
                              </li>
                              <li className="list-theme-color">
                                <span className="table-cell valign-middle">
                                  Boost Your Confidence
                                </span>
                              </li>
                              <li className="list-theme-color">
                                <span className="table-cell valign-middle">
                                  Space Scientist/Astronomer
                                </span>
                              </li>
                            </ul>
                            {/* button */}
                            <div className="flex-1">
                              {/* <button className="button button-mat border-gradient bdrs-10 lheight-50 color-white fsize-14 fweight-600 btn-1">
                <span className="color-2 button-text">
                  START LEARN NOW
                </span>
              </button> */}
                            </div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              {/* <button
                className="slick-prev slick-arrow slick-disabled"
                aria-label="Previous"
                type="button"
                aria-disabled="true"
                style={{}}
              >
                Previous
              </button> */}
                              <div className="slick-list draggable">
                                <div
                                  className="slick-track"
                                  style={{
                                    opacity: "1",
                                    width: "1170px",
                                    WebkitTransform:
                                      "translate3d(0px, 0px, 0px)", // Correct camelCase for -webkit-transform
                                    MsTransform: "translate3d(0px, 0px, 0px)", // Correct camelCase for -ms-transform
                                    transform: "translate3d(0px, 0px, 0px)",
                                  }}
                                >
                                  <div
                                    className="course-slider-img slick-slide slick-current slick-active"
                                    style={{
                                      "background-image":
                                        'url("https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg")',
                                      width: "585px",
                                    }}
                                    data-slick-index={0}
                                    aria-hidden="false"
                                    tabIndex={0}
                                  />
                                  <div
                                    className="course-slider-img slick-slide"
                                    style={{
                                      "background-image":
                                        'url("https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg")',
                                      width: "585px",
                                    }}
                                    data-slick-index={1}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                  />
                                </div>
                              </div>
                              {/* <button
                className="slick-next slick-arrow"
                aria-label="Next"
                type="button"
                style={{}}
                aria-disabled="false"
              >
                Next
              </button> */}
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === "course-item-3" && (
                        <div
                          className={`tab-pane fade text-left clearfix ${
                            activeTab === "course-item-3" ? "active in" : ""
                          }`}
                          id="course-item-3"
                        >
                          <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                            <div className="table mb40">
                              <div className="title-bl table-cell valign-middle">
                                <div className="title color-2">
                                  <span>Embrace Online Coding </span>
                                </div>
                                <div className="subtitle fweight-600 color-4 mt20">
                                  Explore the world of coding from the comfort
                                  of your home with our Online Coding Tutorials
                                </div>
                              </div>
                            </div>
                            <p className="lheight-30 mt30">
                              Embrace Online Coding Tutorials for a dynamic
                              learning experience. Dive into a world of
                              interactive lessons, expert guidance, and flexible
                              accessibility. Whether you're a beginner or aiming
                              to refine your skills, our tutorials empower you
                              with the knowledge needed for success.
                            </p>
                            <ul className="list1">
                              <li>
                                <span className="table-cell valign-middle">
                                  Coding
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Explore Endless Possibilities
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Expert Tutors, Real-World Insight
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Flexible Scheduling, Boundless Opportunities
                                </span>
                              </li>
                            </ul>
                            {/* button */}
                            <div className="flex-1">
                              {/* <button className="button button-mat border-gradient bdrs-10 lheight-50 color-white fsize-14 fweight-600 btn-1">
                <span className="color-2 button-text">
                  START LEARN NOW
                </span>
              </button> */}
                            </div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              {/* <button
                className="slick-prev slick-arrow slick-disabled"
                aria-label="Previous"
                type="button"
                aria-disabled="true"
                style={{}}
              >
                Previous
              </button> */}
                              <div className="slick-list draggable">
                                <div
                                  className="slick-track"
                                  style={{
                                    opacity: "1",
                                    width: "1170px",
                                    WebkitTransform:
                                      "translate3d(0px, 0px, 0px)", // Correct camelCase for -webkit-transform
                                    MsTransform: "translate3d(0px, 0px, 0px)", // Correct camelCase for -ms-transform
                                    transform: "translate3d(0px, 0px, 0px)",
                                  }}
                                >
                                  <div
                                    className="course-slider-img slick-slide slick-current slick-active"
                                    style={{
                                      "background-image":
                                        'url("https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg")',
                                      width: "585px",
                                    }}
                                    data-slick-index={0}
                                    aria-hidden="false"
                                    tabIndex={0}
                                  />
                                  <div
                                    className="course-slider-img slick-slide"
                                    style={{
                                      "background-image":
                                        'url("https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg")',
                                      width: "585px",
                                    }}
                                    data-slick-index={1}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                  />
                                </div>
                              </div>
                              {/* <button
                className="slick-next slick-arrow"
                aria-label="Next"
                type="button"
                style={{}}
                aria-disabled="false"
              >
                Next
              </button> */}
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === "course-item-4" && (
                        <div
                          className={`tab-pane fade text-left clearfix ${
                            activeTab === "course-item-4" ? "active in" : ""
                          }`}
                          id="course-item-4"
                        >
                          <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                            <div className="table mb40">
                              <div className="title-bl table-cell valign-middle">
                                <div className="title color-2">
                                  <span>SAT for Global Academic Success</span>
                                </div>
                                <div className="subtitle fweight-600 color-4 mt30">
                                  Make your courses standout
                                </div>
                              </div>
                            </div>
                            <p className="lheight-30 mt30">
                              At EDUFUSION TUTOR, our success is rooted in a
                              student-centric philosophy that recognizes the
                              uniqueness of each learner. Our seasoned educators
                              understand the specific requirements of exams like
                              PSAT, SAT, ACT, NAPLAN, and Olympiads, tailoring
                              their guidance to address individual strengths and
                              areas for improvement.
                            </p>
                            <ul className="list1">
                              <li>
                                <span className="table-cell valign-middle">
                                  Proven Track Record
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Comprehensive Exam Coverage
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Expert Tutors with Specialized Knowledge
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Strategic Test-Taking Strategies
                                </span>
                              </li>
                              {/* <li>
                <span className="table-cell valign-middle">
                  Tailored Approach
                </span>
              </li> */}
                              {/* <li>
                <span className="table-cell valign-middle">
                  innovative Teaching Methods
                </span>
              </li>
              <li>
                <span className="table-cell valign-middle">
                  Adaptive Learning
                </span>
              </li> */}
                            </ul>
                            {/* button */}
                            <div className="flex-1">
                              {/* <button className="button button-mat border-gradient bdrs-10 lheight-50 color-white fsize-14 fweight-600 btn-1">
                <span className="color-2 button-text">
                  START LEARN NOW
                </span>
              </button> */}
                            </div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              {/* <button
                className="slick-prev slick-arrow slick-disabled"
                aria-label="Previous"
                type="button"
                aria-disabled="true"
                style={{}}
              >
                Previous
              </button> */}
                              <div className="slick-list draggable">
                                <div
                                  className="slick-track"
                                  style={{
                                    opacity: "1",
                                    width: "1170px",
                                    WebkitTransform:
                                      "translate3d(0px, 0px, 0px)", // Correct camelCase for -webkit-transform
                                    MsTransform: "translate3d(0px, 0px, 0px)", // Correct camelCase for -ms-transform
                                    transform: "translate3d(0px, 0px, 0px)",
                                  }}
                                >
                                  <div
                                    className="course-slider-img slick-slide slick-current slick-active"
                                    style={{
                                      "background-image":
                                        'url("https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg")',
                                      width: "585px",
                                    }}
                                    data-slick-index={0}
                                    aria-hidden="false"
                                    tabIndex={0}
                                  />
                                  <div
                                    className="course-slider-img slick-slide"
                                    style={{
                                      "background-image":
                                        'url("https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg")',
                                      width: "585px",
                                    }}
                                    data-slick-index={1}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                  />
                                </div>
                              </div>
                              {/* <button
                className="slick-next slick-arrow"
                aria-label="Next"
                type="button"
                style={{}}
                aria-disabled="false"
              >
                Next
              </button> */}
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === "course-item-5" && (
                        <div
                          className={`tab-pane fade text-left clearfix ${
                            activeTab === "course-item-5" ? "active in" : ""
                          }`}
                          id="course-item-5"
                        >
                          <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                            <div className="table mb40">
                              <div className="title-bl table-cell valign-middle">
                                <div className="title color-2">
                                  <span>
                                    Master the PSAT with EDUFUSION TUTOR
                                  </span>
                                </div>
                                <div className="subtitle fweight-600 color-4 mt30">
                                  EDUFUSION TUTOR: PSAT success through expert
                                  guidance and personalized strategies.
                                </div>
                              </div>
                            </div>
                            <p className="lheight-30 mt30">
                              Elevate your academic journey with EDUFUSION
                              TUTOR. With over 12 years of expertise, we
                              specialize in guiding students to success in PSAT,
                              SAT, ACT, NAPLAN, and Olympiads. Our tailored
                              programs, led by experienced educators, blend
                              content mastery with strategic test-taking skills.
                            </p>
                            <ul className="list1 mt30">
                              <li>
                                <span className="table-cell valign-middle">
                                  Expert Guidance
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Tailored Programs
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  PSAT Confidence
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Top Scores Assurance
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Academic Opportunities
                                </span>
                              </li>
                            </ul>
                            {/* button */}
                            <div className="flex-1">
                              {/* <button className="button button-mat border-gradient bdrs-10 lheight-50 color-white fsize-14 fweight-600 btn-1">
                  <span className="color-2 button-text">
                    START LEARN NOW
                  </span>
                </button> */}
                            </div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              <button
                                className="slick-prev slick-arrow slick-disabled"
                                aria-label="Previous"
                                type="button"
                                aria-disabled="true"
                                style={{}}
                              >
                                Previous
                              </button>
                              <div className="slick-list draggable">
                                <div
                                  className="slick-track"
                                  style={{
                                    opacity: "1",
                                    width: "1170px",
                                    WebkitTransform:
                                      "translate3d(0px, 0px, 0px)", // Correct camelCase for -webkit-transform
                                    MsTransform: "translate3d(0px, 0px, 0px)", // Correct camelCase for -ms-transform
                                    transform: "translate3d(0px, 0px, 0px)",
                                  }}
                                >
                                  <div
                                    className="course-slider-img slick-slide slick-current slick-active"
                                    style={{
                                      "background-image":
                                        'url("https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg")',
                                      width: "585px",
                                    }}
                                    data-slick-index={0}
                                    aria-hidden="false"
                                    tabIndex={0}
                                  />
                                  <div
                                    className="course-slider-img slick-slide"
                                    style={{
                                      "background-image":
                                        'url("https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg")',
                                      width: "585px",
                                    }}
                                    data-slick-index={1}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                  />
                                </div>
                              </div>
                              {/* <button
                  className="slick-next slick-arrow"
                  aria-label="Next"
                  type="button"
                  style={{}}
                  aria-disabled="false"
                >
                  Next
                </button> */}
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === "course-item-6" && (
                        <div
                          className={`tab-pane fade text-left clearfix ${
                            activeTab === "course-item-6" ? "active in" : ""
                          }`}
                          id="course-item-6"
                        >
                          <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                            <div className="table mb40">
                              <div className="title-bl table-cell valign-middle">
                                <div className="title color-2">
                                  <span>Unlocking the Nexus of Knowledge</span>
                                </div>
                                <div className="subtitle fweight-600 color-4">
                                  Make your courses standout
                                </div>
                              </div>
                            </div>
                            <p className="lheight-30">
                              Embark on a journey where mathematical principles
                              intertwine with scientific wonders, converging
                              seamlessly with the intricate dance of coding
                              languages. Discover the synergy that propels
                              innovation and shapes the future.
                            </p>
                            <ul className="list1">
                              <li>
                                <span className="table-cell valign-middle">
                                  Solving Complex Puzzles with Precision
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Exploring Phenomena Through Inquiry and
                                  Experimentation
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Crafting Algorithms, Transforming Ideas into
                                  Digital Realities
                                </span>
                              </li>
                            </ul>
                            {/* button */}
                            <div className="flex-1">
                              {/* <button className="button button-mat border-gradient bdrs-10 lheight-50 color-white fsize-14 fweight-600 btn-1">
                  <span className="color-2 button-text">
                    START LEARN NOW
                  </span>
                </button> */}
                            </div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              <button
                                className="slick-prev slick-arrow slick-disabled"
                                aria-label="Previous"
                                type="button"
                                aria-disabled="true"
                                style={{}}
                              >
                                Previous
                              </button>
                              <div className="slick-list draggable">
                                <div
                                  className="slick-track"
                                  style={{
                                    opacity: "1",
                                    width: "1170px",
                                    WebkitTransform:
                                      "translate3d(0px, 0px, 0px)", // Correct camelCase for -webkit-transform
                                    MsTransform: "translate3d(0px, 0px, 0px)", // Correct camelCase for -ms-transform
                                    transform: "translate3d(0px, 0px, 0px)",
                                  }}
                                >
                                  <div
                                    className="course-slider-img slick-slide slick-current slick-active"
                                    style={{
                                      "background-image":
                                        'url("https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg")',
                                      width: "585px",
                                    }}
                                    data-slick-index={0}
                                    aria-hidden="false"
                                    tabIndex={0}
                                  />
                                  <div
                                    className="course-slider-img slick-slide"
                                    style={{
                                      "background-image":
                                        'url("https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg")',
                                      width: "585px",
                                    }}
                                    data-slick-index={1}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                  />
                                </div>
                              </div>
                              {/* <button
                  className="slick-next slick-arrow"
                  aria-label="Next"
                  type="button"
                  style={{}}
                  aria-disabled="false"
                >
                  Next
                </button> */}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* End Single tab content */}
                      {/* Start Single tab content */}

                      {/* End Single tab content */}
                      {/* Start Single tab content */}

                      {/* End Single tab content */}
                      {/* Start Single tab content */}

                      {/* End Single tab content */}
                      {/* Start Single tab content */}

                      {/* End Single tab content */}
                      {/* Start Single tab content */}

                      {/* End Single tab content */}
                    </div>
                  </div>
                </div>
                {/* End course items */}
              </div>
            </div>
          </div>
        </section>

        <div className="container" style={{ marginRight: "52px" }}>
          <h1 className="text-center">Video'S Section </h1>
          <div className="row mt40" id="videos">
            {/* Video 1 */}
            <div className="col-lg-4 col-md-4 mx-auto">
              <iframe
                width="100%"
                height={300}
                src={mathsvideo}
                frameBorder={0}
                allow="autoplay; encrypted-media"
                allowFullScreen=""
              />
            </div>

            {/* Video 2 */}
            <div className="col-lg-4 col-md-4  mx-auto">
              <iframe
                width="100%"
                height={300}
                src={learningmath}
                frameBorder={0}
                allow="autoplay; encrypted-media"
                allowFullScreen=""
              />
            </div>

            {/* Video 3 */}
            <div className="col-lg-4 col-md-4  mx-auto">
              <iframe
                width="100%"
                height={300}
                src={grade2}
                frameBorder={0}
                allow="autoplay; encrypted-media"
                allowFullScreen=""
              />
            </div>
          </div>
          <div className="row mt40" id="videos">
            {/* Video 1 */}
            <div className="col-lg-4 col-md-4  mx-auto">
              <iframe
                width="100%"
                height={300}
                src={grade6}
                frameBorder={0}
                allow="autoplay; encrypted-media"
                allowFullScreen=""
              />
            </div>

            {/* Video 2 */}
            <div className="col-lg-4 col-md-4  mx-auto">
              <iframe
                width="100%"
                height={300}
                src={grade8}
                frameBorder={0}
                allow="autoplay; encrypted-media"
                allowFullScreen=""
              />
            </div>

            {/* Video 3 */}
            <div className="col-lg-4 col-md-4 mx-auto">
              <iframe
                width="100%"
                height={300}
                src={mario}
                frameBorder={0}
                allow="autoplay; encrypted-media"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>

        {/* tabs */}
        <div className="enroll-wrapper" data-v-0a6dbf09>
          <div
            data-aos="fade-up"
            data-aos-duration={1000}
            className="title-container aos-init aos-animate"
            data-v-0a6dbf09
          >
            <h2 className="title" data-v-0a6dbf09>
              A Simple 3-Step Process To Enroll Your Kid to Any Coding Course
            </h2>
          </div>{" "}
          <div className="enroll-container" data-v-0a6dbf09>
            <div className="enroll-box" data-v-0a6dbf09>
              <div data-v-0a6dbf09>
                <img
                  src="https://www.codeyoung.com/_ipx/w_1280/choose.svg"
                  alt="choose"
                  sizes="(max-width: 320px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  srcSet="https://www.codeyoung.com/_ipx/w_320/choose.svg  320w,https://www.codeyoung.com/_ipx/w_640/choose.svg  640w,https://www.codeyoung.com/_ipx/w_768/choose.svg  768w,https://www.codeyoung.com/_ipx/w_1024/choose.svg  1024w,https://www.codeyoung.com/_ipx/w_1280/choose.svg  1280w"
                  className="enroll-img"
                  data-v-0a6dbf09
                />
              </div>{" "}
              <div className="enroll-body" data-v-0a6dbf09>
                <div className="enroll-number" data-v-0a6dbf09>
                  1
                </div>{" "}
                <div data-v-0a6dbf09>
                  <div className="enroll-title" data-v-0a6dbf09>
                    Select A Course
                  </div>{" "}
                  <div className="enroll-description" data-v-0a6dbf09>
                    Choose a course of your choice based on the child's
                    age/grade
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="enroll-box" data-v-0a6dbf09>
              <div data-v-0a6dbf09>
                <img
                  src="https://www.codeyoung.com/_ipx/w_1280/subscribe.svg"
                  alt="subscribe"
                  sizes="(max-width: 320px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  srcSet="https://www.codeyoung.com/_ipx/w_320/subscribe.svg  320w,https://www.codeyoung.com/_ipx/w_640/subscribe.svg  640w,https://www.codeyoung.com/_ipx/w_768/subscribe.svg  768w,https://www.codeyoung.com/_ipx/w_1024/subscribe.svg  1024w,https://www.codeyoung.com/_ipx/w_1280/subscribe.svg  1280w"
                  className="enroll-img"
                  data-v-0a6dbf09
                />
              </div>{" "}
              <div className="enroll-body" data-v-0a6dbf09>
                <div className="enroll-number" data-v-0a6dbf09>
                  2
                </div>{" "}
                <div data-v-0a6dbf09>
                  <div className="enroll-title" data-v-0a6dbf09>
                    Book a FREE trial class
                  </div>{" "}
                  <div className="enroll-description" data-v-0a6dbf09>
                    Choose your mentor of choice from 200+ mentors as well as
                    your preferred time slot
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="enroll-box" data-v-0a6dbf09>
              <div data-v-0a6dbf09>
                <img
                  src="https://www.codeyoung.com/_ipx/w_1280/success.svg"
                  alt="success"
                  sizes="(max-width: 320px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  srcSet="https://www.codeyoung.com/_ipx/w_320/success.svg  320w,https://www.codeyoung.com/_ipx/w_640/success.svg  640w,https://www.codeyoung.com/_ipx/w_768/success.svg  768w,https://www.codeyoung.com/_ipx/w_1024/success.svg  1024w,https://www.codeyoung.com/_ipx/w_1280/success.svg  1280w"
                  className="enroll-img"
                  data-v-0a6dbf09
                />
              </div>{" "}
              <div className="enroll-body" data-v-0a6dbf09>
                <div className="enroll-number" data-v-0a6dbf09>
                  3
                </div>{" "}
                <div data-v-0a6dbf09>
                  <div className="enroll-title" data-v-0a6dbf09>
                    Enroll for the course
                  </div>{" "}
                  <div className="enroll-description" data-v-0a6dbf09>
                    If you liked the demo session, enroll for the course &amp;
                    begin your child's exciting journey!
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="book-btn" data-v-0a6dbf09>
            <a
              href="/#education-contact"
              data-toggle="modal"
              aria-current="page"
              className="inline-block items-center font-semibold flex-1 justify-center text-white border-0 hero-btn px-8 focus:outline-none text-lg sweep-hero-orange sweep-to-right nuxt-link-exact-active nuxt-link-active"
              data-v-0a6dbf09
            >
              Book a Free Trial Class
            </a>
          </div>
        </div>

        {/*  */}

        <div
          data-v-0a33574d
          className="container course-section-container my-24"
        >
          <div data-v-0a33574d className="course-heading-section">
            <div
              data-v-0a33574d
              className="w-full flex flex-col-reverse md:flex-row"
            >
              <div data-v-0a33574d className="w-full relative">
                <div data-v-0a33574d className="course-title">
                  <h2 data-v-0a33574d className="heading">
                    Maths Courses for Every Grade
                  </h2>
                </div>{" "}
                <div data-v-0a33574d className="stepper-wrapper">
                  <span data-v-0a33574d className="course-subtitle sub-heading">
                    Our Focused Curriculum ensures Academic Excellence
                  </span>{" "}
                  <div data-v-0a33574d className="course-stepper tabs">
                    <span
                      data-v-0a33574d
                      className={` step tab ${
                        activeTab2 === 1 ? "active" : ""
                      }`}
                      onClick={() => handleTabClick2(1)}
                    >
                      Kindergarten
                    </span>
                    <span
                      data-v-0a33574d
                      className={` step tab ${
                        activeTab2 === 2 ? "active" : ""
                      }`}
                      onClick={() => handleTabClick2(2)}
                    >
                      Grade 1 - 3
                    </span>
                    <span
                      data-v-0a33574d
                      className={` step tab ${
                        activeTab2 === 3 ? "active" : ""
                      }`}
                      onClick={() => handleTabClick2(3)}
                    >
                      Grade 4 - 6
                    </span>
                    <span
                      data-v-0a33574d
                      className={` step tab ${
                        activeTab2 === 4 ? "active" : ""
                      }`}
                      onClick={() => handleTabClick2(4)}
                    >
                      Grade 7 - 9
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            data-v-0a33574d
            className="lg:-mx-4 mt-2 accordionItemContent course-web"
          >
            <div data-v-eb8371ae data-v-0a33574d className="course-card">
              {activeTab2 === 1 && (
                <div data-v-eb8371ae className="maths-topic-container">
                  <div data-v-eb8371ae className="course-step-container">
                    <center data-v-eb8371ae>
                      <div data-v-eb8371ae className="course-header-container">
                        <img
                          data-v-eb8371ae
                          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                          src="https://cdn-icons-png.flaticon.com/512/4720/4720451.png"
                          alt="teacher"
                          className="topic-img"
                        />{" "}
                        <span data-v-eb8371ae className="topic-title">
                          School Math
                        </span>
                      </div>
                    </center>{" "}
                    <div data-v-eb8371ae className="grid-container">
                      <div
                        data-v-eb8371ae
                        className="course-step-inner-container"
                      >
                        <img
                          data-v-eb8371ae
                          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                          src="https://cdn-icons-png.flaticon.com/512/2038/2038806.png"
                          alt="teacher"
                          className="course-img"
                        />{" "}
                        <div data-v-eb8371ae className="course-step-info">
                          Count, Compare and Write Numbers 0 to 10
                        </div>
                      </div>
                      <div
                        data-v-eb8371ae
                        className="course-step-inner-container"
                      >
                        <img
                          data-v-eb8371ae
                          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMgSURBVHgBtVc9TxtBEJ07mw/bFEBhJBDKRUATipiKklDSkSoFSLilQJDUkcBSfoAtGkoiQZGODjpCSZM4EtCAkisACUvILvyBvzPv8Flre++8GPtJhrX3ed7s7PjtnkaKSCaTw319fcsej2ehWq2G+GVomjaMOR6neGzy/zi/zorF4tHIyEhKJa6mIGwMDAxscuCwLagC5u8XCoUIJ2JSJwlgxSy8zcMteh2i+Xw+4lQRzUEcqz7loUHdgclJLMqqoUvEQ10WB6wFpdPpUPOE1iRu9EBcREslNEEce/5bFM9ks5TJ5aSRAj4fBfz+F/GEJObsnvDan9YazqiLc8Bve3s0HgxKA98nEvR1fd0aq/CQSA1GTetzPQGUnpq6HQmMj43RxsqKNPDu4WF91SIv8fhIuacnejMx0cATEgC2WDOGrbCasL+/f5u6hMubG/p7e9uWx6ZmLdiLvWeDCTsRzbs7+tcUcHZ62pF3wQm48Wzour7G2js67JVc4G8snYVsPt8xT4Bl7V5e/YIbKzg6SsH5eWqHZt6iwndwrqAJQ9RFvJ2cJP/goBIXhxoSMGST6Nr7hwfaPTiQfhk/L7uzVXkSGFo2m606zeLnA5ORJsjmYgdW5cmgkxuqVbU5VZ4E3tplouWc76ETikihB0ySNGKnTlgql8nr8bTwHBKwnPAPtQGCwGLxwtgNv66u6OL6mlTAlY9jC37yYM2N+Glpqd7lG6urUo7omGjI0/NzVycEyuXymY4LJPrAlcmNVCyV6mMZOnBCgrYX5zLfVL5zFTadiD9OTuhLOPw8Pj6W9oXthJdcfk3X6d3UFLmB9fahbR3HbIlRroJjAqKgU1PamJ2ZoVKlQgqI4I+VgM/nM7kKMT6h6kn00gkrlUpsaGjIxNj9StYbJzR5wXO8BamGBIBcLmfwVvT0UsrCi6i4/UGDFWOCy/ORns2p6+KILYoD0geTHlSiZeU2pIcRiLg6o1nolUAM7LlMHGj7cIpqcJCddm4ponbAwVuiTsLKCQhBhzOZzDIH/cBv3xMuE8LjOeFg0fU47DUQCBzZXd4O/wHb7dHbWH3QegAAAABJRU5ErkJggg=="
                          alt="teacher"
                          className="course-img"
                        />{" "}
                        <div data-v-eb8371ae className="course-step-info">
                          Sorting
                        </div>
                      </div>
                      <div
                        data-v-eb8371ae
                        className="course-step-inner-container"
                      >
                        <img
                          data-v-eb8371ae
                          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                          src="https://i.pinimg.com/564x/8b/04/12/8b04124be0a29312eccc0798dc232ffe.jpg"
                          alt="teacher"
                          className="course-img"
                        />{" "}
                        <div data-v-eb8371ae className="course-step-info">
                          Two-Dimensional Shapes
                        </div>
                      </div>
                      <div
                        data-v-eb8371ae
                        className="course-step-inner-container"
                      >
                        <img
                          data-v-eb8371ae
                          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKs8EArLUmhS_Fq28x-fM9vsfkzDXlFb62A&usqp=CAU"
                          alt="teacher"
                          className="course-img"
                        />{" "}
                        <div data-v-eb8371ae className="course-step-info">
                          Position and Location
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab2 === 2 && (
                <div data-v-eb8371ae className="maths-topic-container">
                  <div data-v-eb8371ae className="course-step-container">
                    <center data-v-eb8371ae>
                      <div data-v-eb8371ae className="course-header-container">
                        <img
                          data-v-eb8371ae
                          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                          src="https://cdn-icons-png.flaticon.com/512/4720/4720451.png"
                          alt="teacher"
                          className="topic-img"
                        />{" "}
                        <span data-v-eb8371ae className="topic-title">
                          School Math
                        </span>
                      </div>
                    </center>{" "}
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtW6EgLP0gBKRFrbaayWBR81A2kUcXH2jPBQ&usqp=CAU"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Number systems
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMgSURBVHgBtVc9TxtBEJ07mw/bFEBhJBDKRUATipiKklDSkSoFSLilQJDUkcBSfoAtGkoiQZGODjpCSZM4EtCAkisACUvILvyBvzPv8Flre++8GPtJhrX3ed7s7PjtnkaKSCaTw319fcsej2ehWq2G+GVomjaMOR6neGzy/zi/zorF4tHIyEhKJa6mIGwMDAxscuCwLagC5u8XCoUIJ2JSJwlgxSy8zcMteh2i+Xw+4lQRzUEcqz7loUHdgclJLMqqoUvEQ10WB6wFpdPpUPOE1iRu9EBcREslNEEce/5bFM9ks5TJ5aSRAj4fBfz+F/GEJObsnvDan9YazqiLc8Bve3s0HgxKA98nEvR1fd0aq/CQSA1GTetzPQGUnpq6HQmMj43RxsqKNPDu4WF91SIv8fhIuacnejMx0cATEgC2WDOGrbCasL+/f5u6hMubG/p7e9uWx6ZmLdiLvWeDCTsRzbs7+tcUcHZ62pF3wQm48Wzour7G2js67JVc4G8snYVsPt8xT4Bl7V5e/YIbKzg6SsH5eWqHZt6iwndwrqAJQ9RFvJ2cJP/goBIXhxoSMGST6Nr7hwfaPTiQfhk/L7uzVXkSGFo2m606zeLnA5ORJsjmYgdW5cmgkxuqVbU5VZ4E3tplouWc76ETikihB0ySNGKnTlgql8nr8bTwHBKwnPAPtQGCwGLxwtgNv66u6OL6mlTAlY9jC37yYM2N+Glpqd7lG6urUo7omGjI0/NzVycEyuXymY4LJPrAlcmNVCyV6mMZOnBCgrYX5zLfVL5zFTadiD9OTuhLOPw8Pj6W9oXthJdcfk3X6d3UFLmB9fahbR3HbIlRroJjAqKgU1PamJ2ZoVKlQgqI4I+VgM/nM7kKMT6h6kn00gkrlUpsaGjIxNj9StYbJzR5wXO8BamGBIBcLmfwVvT0UsrCi6i4/UGDFWOCy/ORns2p6+KILYoD0geTHlSiZeU2pIcRiLg6o1nolUAM7LlMHGj7cIpqcJCddm4ponbAwVuiTsLKCQhBhzOZzDIH/cBv3xMuE8LjOeFg0fU47DUQCBzZXd4O/wHb7dHbWH3QegAAAABJRU5ErkJggg=="
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Arithmetic operations
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://cdn-icons-png.flaticon.com/512/6555/6555320.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Factors, Multiples &amp; Primes
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://prepinstadotcom.s3.ap-south-1.amazonaws.com/wp-content/uploads/2020/07/Tips-And-Tricks-And-Shortcuts-Of-Decimals-And-Fractions.webp"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Fractions and Decimals
                      </div>
                    </div>
                  </div>

                  <div data-v-eb8371ae className="course-step-container">
                    <center data-v-eb8371ae>
                      <div data-v-eb8371ae className="course-header-container">
                        <img
                          data-v-eb8371ae
                          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                          src="https://b2990823.smushcdn.com/2990823/wp-content/uploads/2022/02/vedic-maths-services-500x500-1-1-294x300.png?lossy=1&strip=1&webp=1"
                          alt="teacher"
                          className="topic-img"
                        />{" "}
                        <span data-v-eb8371ae className="topic-title">
                          Vedic Math
                        </span>
                      </div>
                    </center>{" "}
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://play-lh.googleusercontent.com/Kuvx2co9DbP6e4JPzYbvdg8EtvIj2iwdekqjl7IuLzKIeyxUyEthwYKzxSVk6tpTGQ"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Multiplication Tricks
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgBxVe/T9tAFH52nET5IZQgdWLxAAMSUsMCA0OSqUJqJTp1YICFsZBOnSpI/4A2KFuHQgeGMjG0YiRIXeiQpqgVQkStRRVBWkEikRAlUZK+d8SRE+zknB/wSSff2c/3fffe+b2zAJzIZDIeq9U6Z7FY/LVazYdNFgTBQ8+wn8W+gtcEtv1yubzj9XqzPPMKHMSy3W5fwYkXVUIeoP1mqVQKoxAFuhFAK0biVeyGoDdEisVi2MgjggE5rXoPuzL0BwqKCOp5Q9Qh9/WZnMAWlMvlfK0PhBZyeQDkWtzyhKAhp5h/GyC5VsSkuick9W59w8l6b/y9uIB329tQKpfBLF4uLYHL4dDekutcLxoCyPXQZrf/u7yE+NERPJudBV7kCwX4FIuxa4sAQgg51ykUTIDNZlvVmyR7dQWp83P4lUqx8cToKPDgwfAwBldgAoyASY0WHJIo9phgFvWM3mxswI9ksjF+FY0CD4LT0x29JYriAnKvSZRe2xnSRGZcH93a4jVlqV3E1fvhnkB1hRKRz+yLqXQavh4eQq+gokYCZDCJL/F42w1mArJopsINAB6J1/LP2RkkT09Z/zd+lmnMDXsHB2zsHRoC3/g4dAOpfpjo6IXE8TF8rrs9h8mF8HF3l13lkZFuBWTJAwpwbMQngQBrKvHPkxN4vbwMPUKhTfgd7gno+QSFIIadBTMvejDm+A0bPifvvL++hk6oVCr7Eh0gsRa8NfM1PJqZYc0INWxUgIJTUzd1wQDELVFdxpPKBxSwomdE1YzKMS/IfmJsDJ7Pz7e1Q75N4mafIbozgqG4JcDpdLKEYzbpPPZzZfcwE6KO0AsRrFBNImg1eY5YtsKFwnXOAA1Uq9V1t9sdahJwl0cyh8MxiSFgR7LGqZjigTeDcJMXBkZOHCp5kwACKlPQPU8HJILNTRzam7o/JoVCQcZN2dcfE1p5KzlB1LMmQzo602aBHkFzUMz1yAkdf07JGzjJmplsWS9wlFsiRsTcAjSTevL5/BxOGsDhQ2xNv+dAhUUUE5ReXS7XjnajtcN/o4pYKqInmPUAAAAASUVORK5CYII="
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Series Addition
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://vick8890.files.wordpress.com/2010/04/division1.gif"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Division Tricks
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://icons-for-free.com/iconfiles/png/512/subtract+icon-1320166877654139912.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Mental Subtraction Tricks
                      </div>
                    </div>
                  </div>

                  <div data-v-eb8371ae className="course-step-container">
                    <center data-v-eb8371ae>
                      <div data-v-eb8371ae className="course-header-container">
                        <img
                          data-v-eb8371ae
                          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYqKmXTPTlQdXFmzJPQ5wTats4Lotg-CbLax6s2PLK7qOVqk-HSj1CWeJc6fH2gsQOb4&usqp=CAU"
                          alt="teacher"
                          className="topic-img"
                        />{" "}
                        <span data-v-eb8371ae className="topic-title">
                          Logical Reasoning
                        </span>
                      </div>
                    </center>{" "}
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://i.pinimg.com/736x/2a/c0/05/2ac005d6dcb04dbfa6591bffd68b227b.jpg"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Geometrical Shapes &amp; Solids
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://cdn-icons-png.flaticon.com/512/3521/3521095.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Coding Decoding
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALZSURBVHgBxVe9T1pRFD/v8hUKA5i0JnV5DqaDjcWYtBOxbozWoYuDpnuj/4E6udL4D2ijSycX49SILoZ0KDV0aUx8Di4mCo08CBCg5/fkkff4vMCj/pIX7rv3cH7nK+eep5AkMplMyOPxLLpcrvlarRbhR1UUJYQzXmd5rfFvip/Tcrl8GA6HszJ6FQli1efzrbHiVZNQBiy/WyqVttgQjQYxAB4z8QYv12k4xIvF4laniCgdyOH1CS9VcgYaG7HQLhqiDXnEYXLAcCiXy0WaD5QmcnUE5Fa0REKxkCPnP2XIkxcXlC8UbHvPx8bo9dQUSQBGzJo10UhBveBUGQ0nySS9YMJnfr/xiwd7klDrXNQwAKGnPqo9wMTT7K12c2O8T8t5bsV6nfPRAK/Xu0EDAJ4PCm5qhsNu5J4bzGonwR/pNOV03ban1/PvdrtpUAghVph7U6C9dhP8fn5ueMpGNnKOFADRublBwm/CaO2CFc93kzLzfXt/T0eJxDCELcC9ghhGZIS5t3clv+KC3Dk4sO3B+E9LS910RlCEKkng6Oys6/nkxAR9Xl4mtxBGmrDW83nqAdUte8N93d6WEaNYNErfjo9JEiFBDuPvw0Nf8gLDBDmIP9fX/RRqFkWokWQhyuBjLNaPuIYU/KInAtdfCilI0BOhUqmcCgyQTteBLMAtcC+zAXv0n8Hh3wW3MZAUCgWVjbiyCuB+R/vF8PFuZsb253730KTeNp2xAZN+v19rTEQ8r8X5hloz33f292UnnJ5IX14andFEtVr9EgwGjeu440j2m/90e3dHTuDl+Di9UlXzVWPPZzkCWZsBQD0VIx1KmXgBoTc3bK0YBxyeD/TYnBwnh24rOdD2w2QEkWjx3ETbywiCGJ1RLDQkoAM5b0cO9Pw4RTRYySZ7sEKSqH8t7/ET70QsbYBFaUjX9UVW+p5f3/Bj+zwnXCxCpNBeA4HAoVnlvfAPILxG7MQdMgAAAAAASUVORK5CYII="
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Ranking Test
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://i.pinimg.com/474x/65/4f/81/654f81cdff9000eed53c9e1877eee55f.jpg"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Direction Sense Test
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab2 === 3 && (
                <div data-v-eb8371ae className="maths-topic-container">
                  <div data-v-eb8371ae className="course-step-container">
                    <center data-v-eb8371ae>
                      <div data-v-eb8371ae className="course-header-container">
                        <img
                          data-v-eb8371ae
                          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                          src="https://cdn-icons-png.flaticon.com/512/4720/4720451.png"
                          alt="teacher"
                          className="topic-img"
                        />{" "}
                        <span data-v-eb8371ae className="topic-title">
                          School Math
                        </span>
                      </div>
                    </center>{" "}
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtW6EgLP0gBKRFrbaayWBR81A2kUcXH2jPBQ&usqp=CAU"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Number systems
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMgSURBVHgBtVc9TxtBEJ07mw/bFEBhJBDKRUATipiKklDSkSoFSLilQJDUkcBSfoAtGkoiQZGODjpCSZM4EtCAkisACUvILvyBvzPv8Flre++8GPtJhrX3ed7s7PjtnkaKSCaTw319fcsej2ehWq2G+GVomjaMOR6neGzy/zi/zorF4tHIyEhKJa6mIGwMDAxscuCwLagC5u8XCoUIJ2JSJwlgxSy8zcMteh2i+Xw+4lQRzUEcqz7loUHdgclJLMqqoUvEQ10WB6wFpdPpUPOE1iRu9EBcREslNEEce/5bFM9ks5TJ5aSRAj4fBfz+F/GEJObsnvDan9YazqiLc8Bve3s0HgxKA98nEvR1fd0aq/CQSA1GTetzPQGUnpq6HQmMj43RxsqKNPDu4WF91SIv8fhIuacnejMx0cATEgC2WDOGrbCasL+/f5u6hMubG/p7e9uWx6ZmLdiLvWeDCTsRzbs7+tcUcHZ62pF3wQm48Wzour7G2js67JVc4G8snYVsPt8xT4Bl7V5e/YIbKzg6SsH5eWqHZt6iwndwrqAJQ9RFvJ2cJP/goBIXhxoSMGST6Nr7hwfaPTiQfhk/L7uzVXkSGFo2m606zeLnA5ORJsjmYgdW5cmgkxuqVbU5VZ4E3tplouWc76ETikihB0ySNGKnTlgql8nr8bTwHBKwnPAPtQGCwGLxwtgNv66u6OL6mlTAlY9jC37yYM2N+Glpqd7lG6urUo7omGjI0/NzVycEyuXymY4LJPrAlcmNVCyV6mMZOnBCgrYX5zLfVL5zFTadiD9OTuhLOPw8Pj6W9oXthJdcfk3X6d3UFLmB9fahbR3HbIlRroJjAqKgU1PamJ2ZoVKlQgqI4I+VgM/nM7kKMT6h6kn00gkrlUpsaGjIxNj9StYbJzR5wXO8BamGBIBcLmfwVvT0UsrCi6i4/UGDFWOCy/ORns2p6+KILYoD0geTHlSiZeU2pIcRiLg6o1nolUAM7LlMHGj7cIpqcJCddm4ponbAwVuiTsLKCQhBhzOZzDIH/cBv3xMuE8LjOeFg0fU47DUQCBzZXd4O/wHb7dHbWH3QegAAAABJRU5ErkJggg=="
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Arithmetic operations
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://cdn-icons-png.flaticon.com/512/6555/6555320.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Factors, Multiples &amp; Primes
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://prepinstadotcom.s3.ap-south-1.amazonaws.com/wp-content/uploads/2020/07/Tips-And-Tricks-And-Shortcuts-Of-Decimals-And-Fractions.webp"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Fractions and Decimals
                      </div>
                    </div>
                  </div>

                  <div data-v-eb8371ae className="course-step-container">
                    <center data-v-eb8371ae>
                      <div data-v-eb8371ae className="course-header-container">
                        <img
                          data-v-eb8371ae
                          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                          src="https://b2990823.smushcdn.com/2990823/wp-content/uploads/2022/02/vedic-maths-services-500x500-1-1-294x300.png?lossy=1&strip=1&webp=1"
                          alt="teacher"
                          className="topic-img"
                        />{" "}
                        <span data-v-eb8371ae className="topic-title">
                          Vedic Math
                        </span>
                      </div>
                    </center>{" "}
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://play-lh.googleusercontent.com/Kuvx2co9DbP6e4JPzYbvdg8EtvIj2iwdekqjl7IuLzKIeyxUyEthwYKzxSVk6tpTGQ"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Multiplication Tricks
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgBxVe/T9tAFH52nET5IZQgdWLxAAMSUsMCA0OSqUJqJTp1YICFsZBOnSpI/4A2KFuHQgeGMjG0YiRIXeiQpqgVQkStRRVBWkEikRAlUZK+d8SRE+zknB/wSSff2c/3fffe+b2zAJzIZDIeq9U6Z7FY/LVazYdNFgTBQ8+wn8W+gtcEtv1yubzj9XqzPPMKHMSy3W5fwYkXVUIeoP1mqVQKoxAFuhFAK0biVeyGoDdEisVi2MgjggE5rXoPuzL0BwqKCOp5Q9Qh9/WZnMAWlMvlfK0PhBZyeQDkWtzyhKAhp5h/GyC5VsSkuick9W59w8l6b/y9uIB329tQKpfBLF4uLYHL4dDekutcLxoCyPXQZrf/u7yE+NERPJudBV7kCwX4FIuxa4sAQgg51ykUTIDNZlvVmyR7dQWp83P4lUqx8cToKPDgwfAwBldgAoyASY0WHJIo9phgFvWM3mxswI9ksjF+FY0CD4LT0x29JYriAnKvSZRe2xnSRGZcH93a4jVlqV3E1fvhnkB1hRKRz+yLqXQavh4eQq+gokYCZDCJL/F42w1mArJopsINAB6J1/LP2RkkT09Z/zd+lmnMDXsHB2zsHRoC3/g4dAOpfpjo6IXE8TF8rrs9h8mF8HF3l13lkZFuBWTJAwpwbMQngQBrKvHPkxN4vbwMPUKhTfgd7gno+QSFIIadBTMvejDm+A0bPifvvL++hk6oVCr7Eh0gsRa8NfM1PJqZYc0INWxUgIJTUzd1wQDELVFdxpPKBxSwomdE1YzKMS/IfmJsDJ7Pz7e1Q75N4mafIbozgqG4JcDpdLKEYzbpPPZzZfcwE6KO0AsRrFBNImg1eY5YtsKFwnXOAA1Uq9V1t9sdahJwl0cyh8MxiSFgR7LGqZjigTeDcJMXBkZOHCp5kwACKlPQPU8HJILNTRzam7o/JoVCQcZN2dcfE1p5KzlB1LMmQzo602aBHkFzUMz1yAkdf07JGzjJmplsWS9wlFsiRsTcAjSTevL5/BxOGsDhQ2xNv+dAhUUUE5ReXS7XjnajtcN/o4pYKqInmPUAAAAASUVORK5CYII="
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Series Addition
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://vick8890.files.wordpress.com/2010/04/division1.gif"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Division Tricks
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://icons-for-free.com/iconfiles/png/512/subtract+icon-1320166877654139912.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Mental Subtraction Tricks
                      </div>
                    </div>
                  </div>

                  <div data-v-eb8371ae className="course-step-container">
                    <center data-v-eb8371ae>
                      <div data-v-eb8371ae className="course-header-container">
                        <img
                          data-v-eb8371ae
                          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYqKmXTPTlQdXFmzJPQ5wTats4Lotg-CbLax6s2PLK7qOVqk-HSj1CWeJc6fH2gsQOb4&usqp=CAU"
                          alt="teacher"
                          className="topic-img"
                        />{" "}
                        <span data-v-eb8371ae className="topic-title">
                          Logical Reasoning
                        </span>
                      </div>
                    </center>{" "}
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://i.pinimg.com/736x/2a/c0/05/2ac005d6dcb04dbfa6591bffd68b227b.jpg"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Geometrical Shapes &amp; Solids
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://cdn-icons-png.flaticon.com/512/3521/3521095.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Coding Decoding
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALZSURBVHgBxVe9T1pRFD/v8hUKA5i0JnV5DqaDjcWYtBOxbozWoYuDpnuj/4E6udL4D2ijSycX49SILoZ0KDV0aUx8Di4mCo08CBCg5/fkkff4vMCj/pIX7rv3cH7nK+eep5AkMplMyOPxLLpcrvlarRbhR1UUJYQzXmd5rfFvip/Tcrl8GA6HszJ6FQli1efzrbHiVZNQBiy/WyqVttgQjQYxAB4z8QYv12k4xIvF4laniCgdyOH1CS9VcgYaG7HQLhqiDXnEYXLAcCiXy0WaD5QmcnUE5Fa0REKxkCPnP2XIkxcXlC8UbHvPx8bo9dQUSQBGzJo10UhBveBUGQ0nySS9YMJnfr/xiwd7klDrXNQwAKGnPqo9wMTT7K12c2O8T8t5bsV6nfPRAK/Xu0EDAJ4PCm5qhsNu5J4bzGonwR/pNOV03ban1/PvdrtpUAghVph7U6C9dhP8fn5ueMpGNnKOFADRublBwm/CaO2CFc93kzLzfXt/T0eJxDCELcC9ghhGZIS5t3clv+KC3Dk4sO3B+E9LS910RlCEKkng6Oys6/nkxAR9Xl4mtxBGmrDW83nqAdUte8N93d6WEaNYNErfjo9JEiFBDuPvw0Nf8gLDBDmIP9fX/RRqFkWokWQhyuBjLNaPuIYU/KInAtdfCilI0BOhUqmcCgyQTteBLMAtcC+zAXv0n8Hh3wW3MZAUCgWVjbiyCuB+R/vF8PFuZsb253730KTeNp2xAZN+v19rTEQ8r8X5hloz33f292UnnJ5IX14andFEtVr9EgwGjeu440j2m/90e3dHTuDl+Di9UlXzVWPPZzkCWZsBQD0VIx1KmXgBoTc3bK0YBxyeD/TYnBwnh24rOdD2w2QEkWjx3ETbywiCGJ1RLDQkoAM5b0cO9Pw4RTRYySZ7sEKSqH8t7/ET70QsbYBFaUjX9UVW+p5f3/Bj+zwnXCxCpNBeA4HAoVnlvfAPILxG7MQdMgAAAAAASUVORK5CYII="
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Ranking Test
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://i.pinimg.com/474x/65/4f/81/654f81cdff9000eed53c9e1877eee55f.jpg"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Direction Sense Test
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab2 === 4 && (
                <div data-v-eb8371ae className="maths-topic-container">
                  <div data-v-eb8371ae className="course-step-container">
                    <center data-v-eb8371ae>
                      <div data-v-eb8371ae className="course-header-container">
                        <img
                          data-v-eb8371ae
                          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                          src="https://cdn-icons-png.flaticon.com/512/4720/4720451.png"
                          alt="teacher"
                          className="topic-img"
                        />{" "}
                        <span data-v-eb8371ae className="topic-title">
                          School Math
                        </span>
                      </div>
                    </center>{" "}
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://thumbs.dreamstime.com/b/linear-function-equation-mathematics-icon-vector-image-can-also-be-used-math-symbols-suitable-use-web-apps-mobile-apps-97721965.jpg"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Two Variable Linear Equations
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMgSURBVHgBtVc9TxtBEJ07mw/bFEBhJBDKRUATipiKklDSkSoFSLilQJDUkcBSfoAtGkoiQZGODjpCSZM4EtCAkisACUvILvyBvzPv8Flre++8GPtJhrX3ed7s7PjtnkaKSCaTw319fcsej2ehWq2G+GVomjaMOR6neGzy/zi/zorF4tHIyEhKJa6mIGwMDAxscuCwLagC5u8XCoUIJ2JSJwlgxSy8zcMteh2i+Xw+4lQRzUEcqz7loUHdgclJLMqqoUvEQ10WB6wFpdPpUPOE1iRu9EBcREslNEEce/5bFM9ks5TJ5aSRAj4fBfz+F/GEJObsnvDan9YazqiLc8Bve3s0HgxKA98nEvR1fd0aq/CQSA1GTetzPQGUnpq6HQmMj43RxsqKNPDu4WF91SIv8fhIuacnejMx0cATEgC2WDOGrbCasL+/f5u6hMubG/p7e9uWx6ZmLdiLvWeDCTsRzbs7+tcUcHZ62pF3wQm48Wzour7G2js67JVc4G8snYVsPt8xT4Bl7V5e/YIbKzg6SsH5eWqHZt6iwndwrqAJQ9RFvJ2cJP/goBIXhxoSMGST6Nr7hwfaPTiQfhk/L7uzVXkSGFo2m606zeLnA5ORJsjmYgdW5cmgkxuqVbU5VZ4E3tplouWc76ETikihB0ySNGKnTlgql8nr8bTwHBKwnPAPtQGCwGLxwtgNv66u6OL6mlTAlY9jC37yYM2N+Glpqd7lG6urUo7omGjI0/NzVycEyuXymY4LJPrAlcmNVCyV6mMZOnBCgrYX5zLfVL5zFTadiD9OTuhLOPw8Pj6W9oXthJdcfk3X6d3UFLmB9fahbR3HbIlRroJjAqKgU1PamJ2ZoVKlQgqI4I+VgM/nM7kKMT6h6kn00gkrlUpsaGjIxNj9StYbJzR5wXO8BamGBIBcLmfwVvT0UsrCi6i4/UGDFWOCy/ORns2p6+KILYoD0geTHlSiZeU2pIcRiLg6o1nolUAM7LlMHGj7cIpqcJCddm4ponbAwVuiTsLKCQhBhzOZzDIH/cBv3xMuE8LjOeFg0fU47DUQCBzZXd4O/wHb7dHbWH3QegAAAABJRU5ErkJggg=="
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Exponents
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://w7.pngwing.com/pngs/41/897/png-transparent-mathematics-rational-number-mathematics-text-numerical-digit-cartoon-thumbnail.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Rational Numbers
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://cdn-icons-png.flaticon.com/512/4133/4133386.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Coordinate Geometry
                      </div>
                    </div>
                  </div>

                  <div data-v-eb8371ae className="course-step-container">
                    <center data-v-eb8371ae>
                      <div data-v-eb8371ae className="course-header-container">
                        <img
                          data-v-eb8371ae
                          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                          src="https://b2990823.smushcdn.com/2990823/wp-content/uploads/2022/02/vedic-maths-services-500x500-1-1-294x300.png?lossy=1&strip=1&webp=1"
                          alt="teacher"
                          className="topic-img"
                        />{" "}
                        <span data-v-eb8371ae className="topic-title">
                          Vedic Math
                        </span>
                      </div>
                    </center>{" "}
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://images.twinkl.co.uk/tr/image/upload/t_illustration/illustation/18-maths.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Quick Algebraic Multiplication
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgBxVe/T9tAFH52nET5IZQgdWLxAAMSUsMCA0OSqUJqJTp1YICFsZBOnSpI/4A2KFuHQgeGMjG0YiRIXeiQpqgVQkStRRVBWkEikRAlUZK+d8SRE+zknB/wSSff2c/3fffe+b2zAJzIZDIeq9U6Z7FY/LVazYdNFgTBQ8+wn8W+gtcEtv1yubzj9XqzPPMKHMSy3W5fwYkXVUIeoP1mqVQKoxAFuhFAK0biVeyGoDdEisVi2MgjggE5rXoPuzL0BwqKCOp5Q9Qh9/WZnMAWlMvlfK0PhBZyeQDkWtzyhKAhp5h/GyC5VsSkuick9W59w8l6b/y9uIB329tQKpfBLF4uLYHL4dDekutcLxoCyPXQZrf/u7yE+NERPJudBV7kCwX4FIuxa4sAQgg51ykUTIDNZlvVmyR7dQWp83P4lUqx8cToKPDgwfAwBldgAoyASY0WHJIo9phgFvWM3mxswI9ksjF+FY0CD4LT0x29JYriAnKvSZRe2xnSRGZcH93a4jVlqV3E1fvhnkB1hRKRz+yLqXQavh4eQq+gokYCZDCJL/F42w1mArJopsINAB6J1/LP2RkkT09Z/zd+lmnMDXsHB2zsHRoC3/g4dAOpfpjo6IXE8TF8rrs9h8mF8HF3l13lkZFuBWTJAwpwbMQngQBrKvHPkxN4vbwMPUKhTfgd7gno+QSFIIadBTMvejDm+A0bPifvvL++hk6oVCr7Eh0gsRa8NfM1PJqZYc0INWxUgIJTUzd1wQDELVFdxpPKBxSwomdE1YzKMS/IfmJsDJ7Pz7e1Q75N4mafIbozgqG4JcDpdLKEYzbpPPZzZfcwE6KO0AsRrFBNImg1eY5YtsKFwnXOAA1Uq9V1t9sdahJwl0cyh8MxiSFgR7LGqZjigTeDcJMXBkZOHCp5kwACKlPQPU8HJILNTRzam7o/JoVCQcZN2dcfE1p5KzlB1LMmQzo602aBHkFzUMz1yAkdf07JGzjJmplsWS9wlFsiRsTcAjSTevL5/BxOGsDhQ2xNv+dAhUUUE5ReXS7XjnajtcN/o4pYKqInmPUAAAAASUVORK5CYII="
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Fast LCM Tricks
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://play-lh.googleusercontent.com/Kuvx2co9DbP6e4JPzYbvdg8EtvIj2iwdekqjl7IuLzKIeyxUyEthwYKzxSVk6tpTGQ"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Multiplication Tricks
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://prepinstadotcom.s3.ap-south-1.amazonaws.com/wp-content/uploads/2020/07/How-to-solve-Calendar-Problems.webp"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Calendar Tricks
                      </div>
                    </div>
                  </div>

                  <div data-v-eb8371ae className="course-step-container">
                    <center data-v-eb8371ae>
                      <div data-v-eb8371ae className="course-header-container">
                        <img
                          data-v-eb8371ae
                          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYqKmXTPTlQdXFmzJPQ5wTats4Lotg-CbLax6s2PLK7qOVqk-HSj1CWeJc6fH2gsQOb4&usqp=CAU"
                          alt="teacher"
                          className="topic-img"
                        />{" "}
                        <span data-v-eb8371ae className="topic-title">
                          Logical Reasoning
                        </span>
                      </div>
                    </center>{" "}
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="/_nuxt/img/Frame 5456.b851463.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Coding and Decoding
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="/_nuxt/img/Frame 5460.4b01e0d.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Verbal & Non-Verbal Series
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALZSURBVHgBxVe9T1pRFD/v8hUKA5i0JnV5DqaDjcWYtBOxbozWoYuDpnuj/4E6udL4D2ijSycX49SILoZ0KDV0aUx8Di4mCo08CBCg5/fkkff4vMCj/pIX7rv3cH7nK+eep5AkMplMyOPxLLpcrvlarRbhR1UUJYQzXmd5rfFvip/Tcrl8GA6HszJ6FQli1efzrbHiVZNQBiy/WyqVttgQjQYxAB4z8QYv12k4xIvF4laniCgdyOH1CS9VcgYaG7HQLhqiDXnEYXLAcCiXy0WaD5QmcnUE5Fa0REKxkCPnP2XIkxcXlC8UbHvPx8bo9dQUSQBGzJo10UhBveBUGQ0nySS9YMJnfr/xiwd7klDrXNQwAKGnPqo9wMTT7K12c2O8T8t5bsV6nfPRAK/Xu0EDAJ4PCm5qhsNu5J4bzGonwR/pNOV03ban1/PvdrtpUAghVph7U6C9dhP8fn5ueMpGNnKOFADRublBwm/CaO2CFc93kzLzfXt/T0eJxDCELcC9ghhGZIS5t3clv+KC3Dk4sO3B+E9LS910RlCEKkng6Oys6/nkxAR9Xl4mtxBGmrDW83nqAdUte8N93d6WEaNYNErfjo9JEiFBDuPvw0Nf8gLDBDmIP9fX/RRqFkWokWQhyuBjLNaPuIYU/KInAtdfCilI0BOhUqmcCgyQTteBLMAtcC+zAXv0n8Hh3wW3MZAUCgWVjbiyCuB+R/vF8PFuZsb253730KTeNp2xAZN+v19rTEQ8r8X5hloz33f292UnnJ5IX14andFEtVr9EgwGjeu440j2m/90e3dHTuDl+Di9UlXzVWPPZzkCWZsBQD0VIx1KmXgBoTc3bK0YBxyeD/TYnBwnh24rOdD2w2QEkWjx3ETbywiCGJ1RLDQkoAM5b0cO9Pw4RTRYySZ7sEKSqH8t7/ET70QsbYBFaUjX9UVW+p5f3/Bj+zwnXCxCpNBeA4HAoVnlvfAPILxG7MQdMgAAAAAASUVORK5CYII="
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Mathematical Operations
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://i.pinimg.com/474x/65/4f/81/654f81cdff9000eed53c9e1877eee55f.jpg"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Direction Sense Test
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div data-v-eb8371ae className="mentor-mobile-section">
                <div
                  data-v-3d1a4f76
                  data-v-eb8371ae
                  dir="ltr"
                  // className="slick-slider slick-initialized"
                >
                  {/* <button
                    data-v-21137603
                    data-v-3d1a4f76
                    type="button"
                    data-role="none"
                    className="slick-arrow slick-prev"
                    style={{ display: "block" }}
                  >
                    Previous
                  </button> */}
                  <div data-v-3d1a4f76 className="slick-list">
                    <div
                      data-v-e4caeaf8
                      data-v-3d1a4f76
                      // className="slick-track"
                      style={{
                        opacity: "1",
                        WebkitTransform: "translate3d(0px, 0px, 0px)",
                        msTransform: "translate3d(0px, 0px, 0px)",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <div
                        data-v-e4caeaf8
                        className="slick-slide slick-cloned"
                        style={{ width: "0px" }}
                      >
                        <div data-v-e4caeaf8>
                          <div
                            data-v-eb8371ae
                            data-v-e4caeaf8
                            className="course-step-container"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <center data-v-eb8371ae data-v-e4caeaf8>
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-header-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYqKmXTPTlQdXFmzJPQ5wTats4Lotg-CbLax6s2PLK7qOVqk-HSj1CWeJc6fH2gsQOb4&usqp=CAU"
                                  alt="teacher"
                                  className="topic-img"
                                />{" "}
                                <span
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="topic-title"
                                >
                                  Logical Reasoning
                                </span>
                              </div>
                            </center>{" "}
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="https://i.pinimg.com/736x/2a/c0/05/2ac005d6dcb04dbfa6591bffd68b227b.jpg"
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Geometrical Shapes &amp; Solids
                              </div>
                            </div>
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="https://cdn-icons-png.flaticon.com/512/3521/3521095.png"
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Coding Decoding
                              </div>
                            </div>
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALZSURBVHgBxVe9T1pRFD/v8hUKA5i0JnV5DqaDjcWYtBOxbozWoYuDpnuj/4E6udL4D2ijSycX49SILoZ0KDV0aUx8Di4mCo08CBCg5/fkkff4vMCj/pIX7rv3cH7nK+eep5AkMplMyOPxLLpcrvlarRbhR1UUJYQzXmd5rfFvip/Tcrl8GA6HszJ6FQli1efzrbHiVZNQBiy/WyqVttgQjQYxAB4z8QYv12k4xIvF4laniCgdyOH1CS9VcgYaG7HQLhqiDXnEYXLAcCiXy0WaD5QmcnUE5Fa0REKxkCPnP2XIkxcXlC8UbHvPx8bo9dQUSQBGzJo10UhBveBUGQ0nySS9YMJnfr/xiwd7klDrXNQwAKGnPqo9wMTT7K12c2O8T8t5bsV6nfPRAK/Xu0EDAJ4PCm5qhsNu5J4bzGonwR/pNOV03ban1/PvdrtpUAghVph7U6C9dhP8fn5ueMpGNnKOFADRublBwm/CaO2CFc93kzLzfXt/T0eJxDCELcC9ghhGZIS5t3clv+KC3Dk4sO3B+E9LS910RlCEKkng6Oys6/nkxAR9Xl4mtxBGmrDW83nqAdUte8N93d6WEaNYNErfjo9JEiFBDuPvw0Nf8gLDBDmIP9fX/RRqFkWokWQhyuBjLNaPuIYU/KInAtdfCilI0BOhUqmcCgyQTteBLMAtcC+zAXv0n8Hh3wW3MZAUCgWVjbiyCuB+R/vF8PFuZsb253730KTeNp2xAZN+v19rTEQ8r8X5hloz33f292UnnJ5IX14andFEtVr9EgwGjeu440j2m/90e3dHTuDl+Di9UlXzVWPPZzkCWZsBQD0VIx1KmXgBoTc3bK0YBxyeD/TYnBwnh24rOdD2w2QEkWjx3ETbywiCGJ1RLDQkoAM5b0cO9Pw4RTRYySZ7sEKSqH8t7/ET70QsbYBFaUjX9UVW+p5f3/Bj+zwnXCxCpNBeA4HAoVnlvfAPILxG7MQdMgAAAAAASUVORK5CYII="
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Ranking Test
                              </div>
                            </div>
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="https://i.pinimg.com/474x/65/4f/81/654f81cdff9000eed53c9e1877eee55f.jpg"
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Direction Sense Test
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-e4caeaf8
                        // className="slick-slide slick-active slick-current"
                        style={{ outline: "none", width: "0px" }}
                      >
                        <div data-v-e4caeaf8>
                          <div
                            data-v-eb8371ae
                            data-v-e4caeaf8
                            tabIndex={-1}
                            className="course-step-container"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <center data-v-eb8371ae data-v-e4caeaf8>
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-header-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="https://cdn-icons-png.flaticon.com/512/4720/4720451.png"
                                  alt="teacher"
                                  className="topic-img"
                                />{" "}
                                <span
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="topic-title"
                                >
                                  School Math
                                </span>
                              </div>
                            </center>{" "}
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtW6EgLP0gBKRFrbaayWBR81A2kUcXH2jPBQ&usqp=CAU"
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Number systems
                              </div>
                            </div>
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMgSURBVHgBtVc9TxtBEJ07mw/bFEBhJBDKRUATipiKklDSkSoFSLilQJDUkcBSfoAtGkoiQZGODjpCSZM4EtCAkisACUvILvyBvzPv8Flre++8GPtJhrX3ed7s7PjtnkaKSCaTw319fcsej2ehWq2G+GVomjaMOR6neGzy/zi/zorF4tHIyEhKJa6mIGwMDAxscuCwLagC5u8XCoUIJ2JSJwlgxSy8zcMteh2i+Xw+4lQRzUEcqz7loUHdgclJLMqqoUvEQ10WB6wFpdPpUPOE1iRu9EBcREslNEEce/5bFM9ks5TJ5aSRAj4fBfz+F/GEJObsnvDan9YazqiLc8Bve3s0HgxKA98nEvR1fd0aq/CQSA1GTetzPQGUnpq6HQmMj43RxsqKNPDu4WF91SIv8fhIuacnejMx0cATEgC2WDOGrbCasL+/f5u6hMubG/p7e9uWx6ZmLdiLvWeDCTsRzbs7+tcUcHZ62pF3wQm48Wzour7G2js67JVc4G8snYVsPt8xT4Bl7V5e/YIbKzg6SsH5eWqHZt6iwndwrqAJQ9RFvJ2cJP/goBIXhxoSMGST6Nr7hwfaPTiQfhk/L7uzVXkSGFo2m606zeLnA5ORJsjmYgdW5cmgkxuqVbU5VZ4E3tplouWc76ETikihB0ySNGKnTlgql8nr8bTwHBKwnPAPtQGCwGLxwtgNv66u6OL6mlTAlY9jC37yYM2N+Glpqd7lG6urUo7omGjI0/NzVycEyuXymY4LJPrAlcmNVCyV6mMZOnBCgrYX5zLfVL5zFTadiD9OTuhLOPw8Pj6W9oXthJdcfk3X6d3UFLmB9fahbR3HbIlRroJjAqKgU1PamJ2ZoVKlQgqI4I+VgM/nM7kKMT6h6kn00gkrlUpsaGjIxNj9StYbJzR5wXO8BamGBIBcLmfwVvT0UsrCi6i4/UGDFWOCy/ORns2p6+KILYoD0geTHlSiZeU2pIcRiLg6o1nolUAM7LlMHGj7cIpqcJCddm4ponbAwVuiTsLKCQhBhzOZzDIH/cBv3xMuE8LjOeFg0fU47DUQCBzZXd4O/wHb7dHbWH3QegAAAABJRU5ErkJggg=="
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Arithmetic operations
                              </div>
                            </div>
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="https://cdn-icons-png.flaticon.com/512/6555/6555320.png"
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Factors, Multiples &amp; Primes
                              </div>
                            </div>
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="https://prepinstadotcom.s3.ap-south-1.amazonaws.com/wp-content/uploads/2020/07/Tips-And-Tricks-And-Shortcuts-Of-Decimals-And-Fractions.webp"
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Fractions and Decimals
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-e4caeaf8
                        aria-hidden="true"
                        className="slick-slide"
                        style={{ outline: "none", width: "0px" }}
                      >
                        <div data-v-e4caeaf8>
                          <div
                            data-v-eb8371ae
                            data-v-e4caeaf8
                            className="course-step-container"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <center data-v-eb8371ae data-v-e4caeaf8>
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-header-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="https://b2990823.smushcdn.com/2990823/wp-content/uploads/2022/02/vedic-maths-services-500x500-1-1-294x300.png?lossy=1&strip=1&webp=1"
                                  alt="teacher"
                                  className="topic-img"
                                />{" "}
                                <span
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="topic-title"
                                >
                                  Vedic Math
                                </span>
                              </div>
                            </center>{" "}
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="https://play-lh.googleusercontent.com/Kuvx2co9DbP6e4JPzYbvdg8EtvIj2iwdekqjl7IuLzKIeyxUyEthwYKzxSVk6tpTGQ"
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Multiplication Tricks
                              </div>
                            </div>
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgBxVe/T9tAFH52nET5IZQgdWLxAAMSUsMCA0OSqUJqJTp1YICFsZBOnSpI/4A2KFuHQgeGMjG0YiRIXeiQpqgVQkStRRVBWkEikRAlUZK+d8SRE+zknB/wSSff2c/3fffe+b2zAJzIZDIeq9U6Z7FY/LVazYdNFgTBQ8+wn8W+gtcEtv1yubzj9XqzPPMKHMSy3W5fwYkXVUIeoP1mqVQKoxAFuhFAK0biVeyGoDdEisVi2MgjggE5rXoPuzL0BwqKCOp5Q9Qh9/WZnMAWlMvlfK0PhBZyeQDkWtzyhKAhp5h/GyC5VsSkuick9W59w8l6b/y9uIB329tQKpfBLF4uLYHL4dDekutcLxoCyPXQZrf/u7yE+NERPJudBV7kCwX4FIuxa4sAQgg51ykUTIDNZlvVmyR7dQWp83P4lUqx8cToKPDgwfAwBldgAoyASY0WHJIo9phgFvWM3mxswI9ksjF+FY0CD4LT0x29JYriAnKvSZRe2xnSRGZcH93a4jVlqV3E1fvhnkB1hRKRz+yLqXQavh4eQq+gokYCZDCJL/F42w1mArJopsINAB6J1/LP2RkkT09Z/zd+lmnMDXsHB2zsHRoC3/g4dAOpfpjo6IXE8TF8rrs9h8mF8HF3l13lkZFuBWTJAwpwbMQngQBrKvHPkxN4vbwMPUKhTfgd7gno+QSFIIadBTMvejDm+A0bPifvvL++hk6oVCr7Eh0gsRa8NfM1PJqZYc0INWxUgIJTUzd1wQDELVFdxpPKBxSwomdE1YzKMS/IfmJsDJ7Pz7e1Q75N4mafIbozgqG4JcDpdLKEYzbpPPZzZfcwE6KO0AsRrFBNImg1eY5YtsKFwnXOAA1Uq9V1t9sdahJwl0cyh8MxiSFgR7LGqZjigTeDcJMXBkZOHCp5kwACKlPQPU8HJILNTRzam7o/JoVCQcZN2dcfE1p5KzlB1LMmQzo602aBHkFzUMz1yAkdf07JGzjJmplsWS9wlFsiRsTcAjSTevL5/BxOGsDhQ2xNv+dAhUUUE5ReXS7XjnajtcN/o4pYKqInmPUAAAAASUVORK5CYII="
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Series Addition
                              </div>
                            </div>
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="https://vick8890.files.wordpress.com/2010/04/division1.gif"
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Division Tricks
                              </div>
                            </div>
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="https://icons-for-free.com/iconfiles/png/512/subtract+icon-1320166877654139912.png"
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Mental Subtraction Tricks
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-e4caeaf8
                        // className="slick-slide"
                        style={{ outline: "none", width: "0px" }}
                      >
                        <div data-v-e4caeaf8>
                          <div
                            data-v-eb8371ae
                            data-v-e4caeaf8
                            tabIndex={-1}
                            className="course-step-container"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <center data-v-eb8371ae data-v-e4caeaf8>
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-header-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYqKmXTPTlQdXFmzJPQ5wTats4Lotg-CbLax6s2PLK7qOVqk-HSj1CWeJc6fH2gsQOb4&usqp=CAU"
                                  alt="teacher"
                                  className="topic-img"
                                />{" "}
                                <span
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="topic-title"
                                >
                                  Logical Reasoning
                                </span>
                              </div>
                            </center>{" "}
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="https://i.pinimg.com/736x/2a/c0/05/2ac005d6dcb04dbfa6591bffd68b227b.jpg"
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Geometrical Shapes &amp; Solids
                              </div>
                            </div>
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="https://cdn-icons-png.flaticon.com/512/3521/3521095.png"
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Coding Decoding
                              </div>
                            </div>
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALZSURBVHgBxVe9T1pRFD/v8hUKA5i0JnV5DqaDjcWYtBOxbozWoYuDpnuj/4E6udL4D2ijSycX49SILoZ0KDV0aUx8Di4mCo08CBCg5/fkkff4vMCj/pIX7rv3cH7nK+eep5AkMplMyOPxLLpcrvlarRbhR1UUJYQzXmd5rfFvip/Tcrl8GA6HszJ6FQli1efzrbHiVZNQBiy/WyqVttgQjQYxAB4z8QYv12k4xIvF4laniCgdyOH1CS9VcgYaG7HQLhqiDXnEYXLAcCiXy0WaD5QmcnUE5Fa0REKxkCPnP2XIkxcXlC8UbHvPx8bo9dQUSQBGzJo10UhBveBUGQ0nySS9YMJnfr/xiwd7klDrXNQwAKGnPqo9wMTT7K12c2O8T8t5bsV6nfPRAK/Xu0EDAJ4PCm5qhsNu5J4bzGonwR/pNOV03ban1/PvdrtpUAghVph7U6C9dhP8fn5ueMpGNnKOFADRublBwm/CaO2CFc93kzLzfXt/T0eJxDCELcC9ghhGZIS5t3clv+KC3Dk4sO3B+E9LS910RlCEKkng6Oys6/nkxAR9Xl4mtxBGmrDW83nqAdUte8N93d6WEaNYNErfjo9JEiFBDuPvw0Nf8gLDBDmIP9fX/RRqFkWokWQhyuBjLNaPuIYU/KInAtdfCilI0BOhUqmcCgyQTteBLMAtcC+zAXv0n8Hh3wW3MZAUCgWVjbiyCuB+R/vF8PFuZsb253730KTeNp2xAZN+v19rTEQ8r8X5hloz33f292UnnJ5IX14andFEtVr9EgwGjeu440j2m/90e3dHTuDl+Di9UlXzVWPPZzkCWZsBQD0VIx1KmXgBoTc3bK0YBxyeD/TYnBwnh24rOdD2w2QEkWjx3ETbywiCGJ1RLDQkoAM5b0cO9Pw4RTRYySZ7sEKSqH8t7/ET70QsbYBFaUjX9UVW+p5f3/Bj+zwnXCxCpNBeA4HAoVnlvfAPILxG7MQdMgAAAAAASUVORK5CYII="
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Ranking Test
                              </div>
                            </div>
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-inner-container"
                            >
                              <img
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                src="https://i.pinimg.com/474x/65/4f/81/654f81cdff9000eed53c9e1877eee55f.jpg"
                                alt="teacher"
                                className="course-img"
                              />{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-info"
                              >
                                Direction Sense Test
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {activeTab2 === 1 && (
                        <div
                          data-v-e4caeaf8
                          // className="slick-slide slick-cloned"
                          style={{ width: "0px" }}
                        >
                          <div data-v-e4caeaf8>
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              tabIndex={-1}
                              className="course-step-container"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <center data-v-eb8371ae data-v-e4caeaf8>
                                <div
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="course-header-container"
                                >
                                  <img
                                    data-v-eb8371ae
                                    data-v-e4caeaf8
                                    sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                    src="https://cdn-icons-png.flaticon.com/512/4720/4720451.png"
                                    alt="teacher"
                                    className="topic-img"
                                  />{" "}
                                  <span
                                    data-v-eb8371ae
                                    data-v-e4caeaf8
                                    className="topic-title"
                                  >
                                    School Math
                                  </span>
                                </div>
                              </center>{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-inner-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtW6EgLP0gBKRFrbaayWBR81A2kUcXH2jPBQ&usqp=CAU"
                                  alt="teacher"
                                  className="course-img"
                                />{" "}
                                <div
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="course-step-info"
                                >
                                  Number systems
                                </div>
                              </div>
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-inner-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMgSURBVHgBtVc9TxtBEJ07mw/bFEBhJBDKRUATipiKklDSkSoFSLilQJDUkcBSfoAtGkoiQZGODjpCSZM4EtCAkisACUvILvyBvzPv8Flre++8GPtJhrX3ed7s7PjtnkaKSCaTw319fcsej2ehWq2G+GVomjaMOR6neGzy/zi/zorF4tHIyEhKJa6mIGwMDAxscuCwLagC5u8XCoUIJ2JSJwlgxSy8zcMteh2i+Xw+4lQRzUEcqz7loUHdgclJLMqqoUvEQ10WB6wFpdPpUPOE1iRu9EBcREslNEEce/5bFM9ks5TJ5aSRAj4fBfz+F/GEJObsnvDan9YazqiLc8Bve3s0HgxKA98nEvR1fd0aq/CQSA1GTetzPQGUnpq6HQmMj43RxsqKNPDu4WF91SIv8fhIuacnejMx0cATEgC2WDOGrbCasL+/f5u6hMubG/p7e9uWx6ZmLdiLvWeDCTsRzbs7+tcUcHZ62pF3wQm48Wzour7G2js67JVc4G8snYVsPt8xT4Bl7V5e/YIbKzg6SsH5eWqHZt6iwndwrqAJQ9RFvJ2cJP/goBIXhxoSMGST6Nr7hwfaPTiQfhk/L7uzVXkSGFo2m606zeLnA5ORJsjmYgdW5cmgkxuqVbU5VZ4E3tplouWc76ETikihB0ySNGKnTlgql8nr8bTwHBKwnPAPtQGCwGLxwtgNv66u6OL6mlTAlY9jC37yYM2N+Glpqd7lG6urUo7omGjI0/NzVycEyuXymY4LJPrAlcmNVCyV6mMZOnBCgrYX5zLfVL5zFTadiD9OTuhLOPw8Pj6W9oXthJdcfk3X6d3UFLmB9fahbR3HbIlRroJjAqKgU1PamJ2ZoVKlQgqI4I+VgM/nM7kKMT6h6kn00gkrlUpsaGjIxNj9StYbJzR5wXO8BamGBIBcLmfwVvT0UsrCi6i4/UGDFWOCy/ORns2p6+KILYoD0geTHlSiZeU2pIcRiLg6o1nolUAM7LlMHGj7cIpqcJCddm4ponbAwVuiTsLKCQhBhzOZzDIH/cBv3xMuE8LjOeFg0fU47DUQCBzZXd4O/wHb7dHbWH3QegAAAABJRU5ErkJggg=="
                                  alt="teacher"
                                  className="course-img"
                                />{" "}
                                <div
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="course-step-info"
                                >
                                  Arithmetic operations
                                </div>
                              </div>
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-inner-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="https://cdn-icons-png.flaticon.com/512/6555/6555320.png"
                                  alt="teacher"
                                  className="course-img"
                                />{" "}
                                <div
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="course-step-info"
                                >
                                  Factors, Multiples &amp; Primes
                                </div>
                              </div>
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-inner-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="https://prepinstadotcom.s3.ap-south-1.amazonaws.com/wp-content/uploads/2020/07/Tips-And-Tricks-And-Shortcuts-Of-Decimals-And-Fractions.webp"
                                  alt="teacher"
                                  className="course-img"
                                />{" "}
                                <div
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="course-step-info"
                                >
                                  Fractions and Decimals
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab2 === 2 && (
                        <div data-v-e4caeaf8 style={{ width: "0px" }}>
                          <div data-v-e4caeaf8>
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              tabIndex={-1}
                              className="course-step-container"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <center data-v-eb8371ae data-v-e4caeaf8>
                                <div
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="course-header-container"
                                >
                                  <img
                                    data-v-eb8371ae
                                    data-v-e4caeaf8
                                    sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                    src="https://b2990823.smushcdn.com/2990823/wp-content/uploads/2022/02/vedic-maths-services-500x500-1-1-294x300.png?lossy=1&strip=1&webp=1"
                                    alt="teacher"
                                    className="topic-img"
                                  />{" "}
                                  <span
                                    data-v-eb8371ae
                                    data-v-e4caeaf8
                                    className="topic-title"
                                  >
                                    Vedic Math
                                  </span>
                                </div>
                              </center>{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-inner-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="https://play-lh.googleusercontent.com/Kuvx2co9DbP6e4JPzYbvdg8EtvIj2iwdekqjl7IuLzKIeyxUyEthwYKzxSVk6tpTGQ"
                                  alt="teacher"
                                  className="course-img"
                                />{" "}
                                <div
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="course-step-info"
                                >
                                  Multiplication Tricks
                                </div>
                              </div>
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-inner-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgBxVe/T9tAFH52nET5IZQgdWLxAAMSUsMCA0OSqUJqJTp1YICFsZBOnSpI/4A2KFuHQgeGMjG0YiRIXeiQpqgVQkStRRVBWkEikRAlUZK+d8SRE+zknB/wSSff2c/3fffe+b2zAJzIZDIeq9U6Z7FY/LVazYdNFgTBQ8+wn8W+gtcEtv1yubzj9XqzPPMKHMSy3W5fwYkXVUIeoP1mqVQKoxAFuhFAK0biVeyGoDdEisVi2MgjggE5rXoPuzL0BwqKCOp5Q9Qh9/WZnMAWlMvlfK0PhBZyeQDkWtzyhKAhp5h/GyC5VsSkuick9W59w8l6b/y9uIB329tQKpfBLF4uLYHL4dDekutcLxoCyPXQZrf/u7yE+NERPJudBV7kCwX4FIuxa4sAQgg51ykUTIDNZlvVmyR7dQWp83P4lUqx8cToKPDgwfAwBldgAoyASY0WHJIo9phgFvWM3mxswI9ksjF+FY0CD4LT0x29JYriAnKvSZRe2xnSRGZcH93a4jVlqV3E1fvhnkB1hRKRz+yLqXQavh4eQq+gokYCZDCJL/F42w1mArJopsINAB6J1/LP2RkkT09Z/zd+lmnMDXsHB2zsHRoC3/g4dAOpfpjo6IXE8TF8rrs9h8mF8HF3l13lkZFuBWTJAwpwbMQngQBrKvHPkxN4vbwMPUKhTfgd7gno+QSFIIadBTMvejDm+A0bPifvvL++hk6oVCr7Eh0gsRa8NfM1PJqZYc0INWxUgIJTUzd1wQDELVFdxpPKBxSwomdE1YzKMS/IfmJsDJ7Pz7e1Q75N4mafIbozgqG4JcDpdLKEYzbpPPZzZfcwE6KO0AsRrFBNImg1eY5YtsKFwnXOAA1Uq9V1t9sdahJwl0cyh8MxiSFgR7LGqZjigTeDcJMXBkZOHCp5kwACKlPQPU8HJILNTRzam7o/JoVCQcZN2dcfE1p5KzlB1LMmQzo602aBHkFzUMz1yAkdf07JGzjJmplsWS9wlFsiRsTcAjSTevL5/BxOGsDhQ2xNv+dAhUUUE5ReXS7XjnajtcN/o4pYKqInmPUAAAAASUVORK5CYII="
                                  alt="teacher"
                                  className="course-img"
                                />{" "}
                                <div
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="course-step-info"
                                >
                                  Series Addition
                                </div>
                              </div>
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-inner-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="https://vick8890.files.wordpress.com/2010/04/division1.gif"
                                  alt="teacher"
                                  className="course-img"
                                />{" "}
                                <div
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="course-step-info"
                                >
                                  Division Tricks
                                </div>
                              </div>
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-inner-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="https://icons-for-free.com/iconfiles/png/512/subtract+icon-1320166877654139912.png"
                                  alt="teacher"
                                  className="course-img"
                                />{" "}
                                <div
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="course-step-info"
                                >
                                  Mental Subtraction Tricks
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab2 === 3 && (
                        <div
                          data-v-e4caeaf8
                          // className="slick-slide slick-cloned"
                          style={{ width: "0px" }}
                        >
                          <div data-v-e4caeaf8>
                            <div
                              data-v-eb8371ae
                              data-v-e4caeaf8
                              className="course-step-container"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <center data-v-eb8371ae data-v-e4caeaf8>
                                <div
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="course-header-container"
                                >
                                  <img
                                    data-v-eb8371ae
                                    data-v-e4caeaf8
                                    sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYqKmXTPTlQdXFmzJPQ5wTats4Lotg-CbLax6s2PLK7qOVqk-HSj1CWeJc6fH2gsQOb4&usqp=CAU"
                                    alt="teacher"
                                    className="topic-img"
                                  />{" "}
                                  <span
                                    data-v-eb8371ae
                                    data-v-e4caeaf8
                                    className="topic-title"
                                  >
                                    Logical Reasoning
                                  </span>
                                </div>
                              </center>{" "}
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-inner-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="https://i.pinimg.com/736x/2a/c0/05/2ac005d6dcb04dbfa6591bffd68b227b.jpg"
                                  alt="teacher"
                                  className="course-img"
                                />{" "}
                                <div
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="course-step-info"
                                >
                                  Geometrical Shapes &amp; Solids
                                </div>
                              </div>
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-inner-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="https://cdn-icons-png.flaticon.com/512/3521/3521095.png"
                                  alt="teacher"
                                  className="course-img"
                                />{" "}
                                <div
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="course-step-info"
                                >
                                  Coding Decoding
                                </div>
                              </div>
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-inner-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALZSURBVHgBxVe9T1pRFD/v8hUKA5i0JnV5DqaDjcWYtBOxbozWoYuDpnuj/4E6udL4D2ijSycX49SILoZ0KDV0aUx8Di4mCo08CBCg5/fkkff4vMCj/pIX7rv3cH7nK+eep5AkMplMyOPxLLpcrvlarRbhR1UUJYQzXmd5rfFvip/Tcrl8GA6HszJ6FQli1efzrbHiVZNQBiy/WyqVttgQjQYxAB4z8QYv12k4xIvF4laniCgdyOH1CS9VcgYaG7HQLhqiDXnEYXLAcCiXy0WaD5QmcnUE5Fa0REKxkCPnP2XIkxcXlC8UbHvPx8bo9dQUSQBGzJo10UhBveBUGQ0nySS9YMJnfr/xiwd7klDrXNQwAKGnPqo9wMTT7K12c2O8T8t5bsV6nfPRAK/Xu0EDAJ4PCm5qhsNu5J4bzGonwR/pNOV03ban1/PvdrtpUAghVph7U6C9dhP8fn5ueMpGNnKOFADRublBwm/CaO2CFc93kzLzfXt/T0eJxDCELcC9ghhGZIS5t3clv+KC3Dk4sO3B+E9LS910RlCEKkng6Oys6/nkxAR9Xl4mtxBGmrDW83nqAdUte8N93d6WEaNYNErfjo9JEiFBDuPvw0Nf8gLDBDmIP9fX/RRqFkWokWQhyuBjLNaPuIYU/KInAtdfCilI0BOhUqmcCgyQTteBLMAtcC+zAXv0n8Hh3wW3MZAUCgWVjbiyCuB+R/vF8PFuZsb253730KTeNp2xAZN+v19rTEQ8r8X5hloz33f292UnnJ5IX14andFEtVr9EgwGjeu440j2m/90e3dHTuDl+Di9UlXzVWPPZzkCWZsBQD0VIx1KmXgBoTc3bK0YBxyeD/TYnBwnh24rOdD2w2QEkWjx3ETbywiCGJ1RLDQkoAM5b0cO9Pw4RTRYySZ7sEKSqH8t7/ET70QsbYBFaUjX9UVW+p5f3/Bj+zwnXCxCpNBeA4HAoVnlvfAPILxG7MQdMgAAAAAASUVORK5CYII="
                                  alt="teacher"
                                  className="course-img"
                                />{" "}
                                <div
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="course-step-info"
                                >
                                  Ranking Test
                                </div>
                              </div>
                              <div
                                data-v-eb8371ae
                                data-v-e4caeaf8
                                className="course-step-inner-container"
                              >
                                <img
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                                  src="https://thumbs.dreamstime.com/b/linear-function-equation-mathematics-icon-vector-image-can-also-be-used-math-symbols-suitable-use-web-apps-mobile-apps-97721965.jpg"
                                  alt="teacher"
                                  className="course-img"
                                />{" "}
                                <div
                                  data-v-eb8371ae
                                  data-v-e4caeaf8
                                  className="course-step-info"
                                >
                                  Direction Sense Test
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* <button
                    data-v-21137603
                    data-v-3d1a4f76
                    type="button"
                    data-role="none"
                    className="slick-arrow slick-next"
                    style={{ display: "block" }}
                  >
                    Next
                  </button> */}
                </div>
              </div>{" "}
              <center data-v-eb8371ae>
                <div data-v-eb8371ae className="pricing sub-heading">
                  <p data-v-eb8371ae className="pricing-text">
                    Classes start at just
                    <span
                      data-v-eb8371ae
                      style={{
                        color: "rgb(253, 141, 13)",
                        fontWeight: "bold",
                      }}
                    >
                      $30
                    </span>{" "}
                    per class
                  </p>
                </div>
              </center>{" "}
              <div data-v-eb8371ae>
                <h3
                  data-v-eb8371ae
                  className="title small-text"
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                    marginTop: "30px",
                    WebkitTransform: "your-transform-value", // Replace with your actual transform value
                  }}
                >
                  Explore curriculums for different grades
                </h3>
              </div>
              <div data-v-eb8371ae className="md:flex  gradeBtnBox">
                <div className="md:flex  grade-btn">
                  <a
                    href="https://cy-assets.s3.ap-south-1.amazonaws.com/Codeyoung/Maths+Curriculum+GRADE+4.pdf"
                    className="curriculum-explore-btn-grade small-text"
                    style={{ width: "180px", color: "#ff712d" }}
                    data-v-eb8371ae
                  >
                    Grade 4 &gt;
                  </a>
                </div>

                <div className="md:flex  grade-btn">
                  <a
                    href="https://cy-assets.s3.ap-south-1.amazonaws.com/Codeyoung/Maths+Curriculum+GRADE+5.pdf"
                    className="curriculum-explore-btn-grade small-text"
                    data-v-eb8371ae
                    style={{ width: "180px", color: "#ff712d" }}
                  >
                    Grade 5 &gt;
                  </a>
                </div>
                <div data-v-eb8371ae className="md:flex  grade-btn">
                  <a
                    data-v-eb8371ae
                    href="https://cy-assets.s3.ap-south-1.amazonaws.com/Codeyoung/Maths+Curriculum+GRADE+6.pdf"
                    className="curriculum-explore-btn-grade small-text"
                    style={{
                      width: "180px",
                      marginRight: "68px",
                      color: "#ff712d",
                    }}
                  >
                    Grade 6 &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*================================================================================= 
                          END courses
    ==================================================================================*/}

        {/*================================================================================= 
                          START why-choose 
    ==================================================================================*/}
        <section id="education-why-choose" className="why-choose pt100 pb80">
          <div className="container">
            <div className="row">
              <div className="why-choose-items">
                <div className="tabs text-center">
                  <div className="tabs-nav">
                    <ul className="list-inline nav nav-tabs fsize-0">
                      <li className={activeTab1 === 1 ? "active" : ""}>
                        <a
                          href="#img-why-choose"
                          data-toggle="tab"
                          className="fsize-12 uppercase tab"
                          onClick={() => handleTabClick1(1)}
                        >
                          Image
                        </a>
                      </li>
                      <li className={activeTab1 === 2 ? "active" : ""}>
                        <a
                          href="#video-why-choose"
                          data-toggle="tab"
                          className="fsize-12 uppercase tab"
                          onClick={() => handleTabClick1(2)}
                        >
                          Video
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content relative background-white plr80 bdrs-10">
                    {/* Start tab content - Image */}
                    <div
                      className={`tab-pane fade text-left clearfix ${
                        activeTab1 === 1 ? "active in" : ""
                      }`}
                      id="img-why-choose"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 lheight-30">
                            <div
                              className="valign-middle partition_left pl30 mb40 relative wow fadeIn"
                              data-wow-duration="2s"
                              style={{
                                visibility: "visible",
                                WebkitAnimationDuration: "2s", // Fix for the warning
                                animationDuration: "2s",
                                animationName: "fadeIn",
                              }}
                            >
                              <div className="ptb5">
                                <div className="subtitle">
                                  Make your courses standout
                                </div>
                                <div className="title color-2">
                                  <span>
                                    Why choose us
                                    <span className="color-15">.</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <h5>Proven Track Record</h5>
                            <p>
                              Join a legacy of success! Our experienced tutors
                              boast a track record of helping students excel in
                              competitive exams, opening doors to top-tier
                              universities and scholarship opportunities.
                            </p>
                            <h5>Comprehensive Exam Coverage</h5>
                            <p>
                              PSAT, SAT, ACT, NAPLAN, Olympiads – we cover them
                              all! Our comprehensive exam preparation ensures
                              that students are well-equipped to face the unique
                              challenges of each test.{" "}
                            </p>
                            <h5> Expert Tutors with Specialized Knowledge:</h5>
                            <p>
                              Benefit from the expertise of tutors who
                              specialize in the intricacies of each exam. Our
                              team is dedicated to staying abreast of the latest
                              trends and updates to provide the most relevant
                              guidance.{" "}
                            </p>
                            <ul className="list1">
                              <li>
                                <span className="table-cell valign-middle">
                                  Inclusive Learning Environment
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Innovative Teaching Methods
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Dedicated Educators
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Accessible Learning
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Transformative Learning Experience
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="img-exp">
                              <img
                                src={choose}
                                alt="choose"
                                className="img-fluid"
                                style={{ width: "433px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End tab content - Image */}

                    {/* Start tab content - Video */}
                    <div
                      className={`tab-pane fade text-left clearfix ${
                        activeTab1 === 2 ? "active in" : ""
                      }`}
                      id="video-why-choose"
                    >
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 lheight-30">
                        <div
                          className="valign-middle partition_left pl30 mb40 relative wow fadeIn"
                          data-wow-duration="2s"
                          style={{
                            visibility: "visible",
                            animationDuration: "2s",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="ptb5">
                            <div className="subtitle">
                              Make your courses standout
                            </div>
                            <div className="title color-2">
                              <span>
                                Why choose us<span className="color-15">.</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <h5>Strategic Test-Taking Strategies:</h5>
                        <p>
                          It's not just about knowing the content; it's about
                          mastering the art of test-taking. Our tutors impart
                          strategic approaches that help students navigate exams
                          with confidence.
                        </p>
                        <h5>Tailored Approach:</h5>
                        <p>
                          Personalized learning plans that address individual
                          strengths and areas for improvement.{" "}
                        </p>
                        <h5>Innovative Teaching Methods:</h5>
                        <p>
                          Engaging lessons that go beyond textbooks, fostering a
                          deep understanding of exam concepts.{" "}
                        </p>
                        <h5>Adaptive Learning:</h5>
                        <p>
                          Evolving with the dynamic nature of exams, ensuring
                          students are well-prepared for any changes in format
                          or content.
                        </p>
                        <ul className="list1">
                          <li>
                            <span className="table-cell valign-middle">
                              Proven Track Record
                            </span>
                          </li>
                          <li>
                            <span className="table-cell valign-middle">
                              Holistic Learning
                            </span>
                          </li>
                          <li>
                            <span className="table-cell valign-middle">
                              Flexible Learning Options
                            </span>
                          </li>
                          <li>
                            <span className="table-cell valign-middle">
                              Constant Improvement
                            </span>
                          </li>
                          <li>
                            <span className="table-cell valign-middle">
                              {" "}
                              Parental Involvement
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="video-exp">
                          <iframe
                            width="100%"
                            height={400}
                            src={mathsvideo}
                            frameBorder={0}
                            allow="autoplay; encrypted-media"
                            allowFullScreen=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* End tab content - Video */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*================================================================================= 
                          END why-choose 
    ==================================================================================*/}

        {/*================================================================================= 
                      START Our Teachers
    ==================================================================================*/}

        {/* <div className="main-teacher-section" id="education-teachers ">
          <h1 className="text-center">Our Teachers</h1>
          <hr className="teacher-horizontal-section" />
          <div className="teacher-section ">
            <div className="teacher-section-content">
              <img
                src="https://codestar.xyz/demo/education/assets/images/teachers/teacher-1.jpg"
                alt=""
                className="teacher-section-image"
              />
              <div className="david">
                <h3>David Nihero</h3>
                <p>Consultant Architect</p>
              </div>
            </div>

            <div className="teacher-section-content">
              <img
                src="https://codestar.xyz/demo/education/assets/images/teachers/teacher-1.jpg"
                alt=""
                className="teacher-section-image"
              />
              <div className="david">
                <h3>Sara Nihero</h3>
                <p>Consultant Architect</p>
              </div>
            </div>

            <div className="teacher-section-content">
              <img
                src="https://codestar.xyz/demo/education/assets/images/teachers/teacher-1.jpg"
                alt=""
                className="teacher-section-image"
              />
              <div className="david">
                <h3>Sara Nihero</h3>
                <p>Consultant Architect</p>
              </div>
            </div>
          </div>
        </div> */}

        {/*================================================================================= 
       END TEACHERS
   ==================================================================================*/}
        {/* our vission start */}
        <div className="VISION">
          <h1 className="text-center" style={{ marginTop: "90px" }}>
            OUR VISION
          </h1>
          <div className="container mx-auto">
            <div className="row  mt30">
              <div
                className="col-lg-6 col-md-6 col-sm-1  mt50"
                style={{ lineHeight: "2.5" }}
              >
                At EDUFUSION TUTOR, we envision a world where every learner,
                regardless of background or circumstance, has the opportunity to
                unlock their full potential through personalized education. We
                aspire to be a guiding light on the educational journey,
                fostering a love for learning that transcends boundaries.
              </div>
              <div className="col-lg-6 col-md-6 col-sm-1">
                <img
                  src="https://www.codeyoung.com/_nuxt/img/our_vision.0088ebd.png"
                  alt="image"
                  style={{ height: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* our vision end */}

        {/* our mission  start*/}
        <div className="mission">
          <h1 className="text-center">OUR MISSION</h1>
          <div className="container mx-auto">
            <div className="row mt30">
              <div className="mission-content">
                <div className="col-lg-5 col-md-6 col-sm-1 gap0">
                  <img
                    src="https://www.codeyoung.com/_nuxt/img/our_mission.017c97b.png"
                    alt="image"
                    style={{ height: "327px", maxWidth: "100%" }}
                  />
                </div>
                <div
                  className="col-lg-7 col-md-6 col-sm-1 mt50"
                  style={{ lineHeight: "2.5" }}
                >
                  At Edufusion Tutor, we're on a mission to make learning
                  accessible to everyone. We're creating a welcoming and
                  inclusive space where every student is supported and valued.
                  Through easy-to-access learning opportunities, we want to help
                  individuals grow, celebrate diversity, and ensure that
                  education is a positive experience for everyone. Our goal is
                  to break down barriers and make knowledge accessible to all.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* our mission end */}

        {/*================================================================================= 
                          START PRICE  
    ==================================================================================*/}
        <section id="education-price" className="prices pt100 pb80">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <div className="subtitle">A modern and unique style</div>
                <div className="title color-2 lheight-40 mb30">
                  <span>
                    Affordable Packages<span className="color-15">.</span>
                  </span>
                </div>
                <div className="spliter mb70" />
              </div>
              <div className="price-wrapper">
                {/* Start Single price */}
                <div
                  className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center wow fadeInLeft"
                  data-wow-duration="2s"
                >
                  <div className="price-holder theme-bg-gradient color-white price-same-st bdrs-10 plr60 pt60 pb90 relative">
                    <div className="fweight-500">
                      <div className="price-title fsize-40 mb-40">Startup</div>
                      <div className="price-current color-white lheight-normal nowrap">
                        <span className="fsize-30">$</span>
                        <span className="fsize-60">29.</span>
                        <span className="fsize-30">00</span>
                      </div>
                      <div className="recomend fsize-12 uppercase mb50">
                        Start Business
                      </div>
                    </div>
                    <ul className="pl0">
                      <li className="price-list">One Year Standard Access</li>
                      <li className="price-list">Limited Courses</li>
                      <li className="price-list">30+ Lessons</li>
                      <li className="price-list">Standard Tutorials</li>
                    </ul>
                    <div className="price-btn light btn border-gradient absolute width-100p lheight-60 color-16 fsize-14 fweight-600">
                      Sign Up
                    </div>
                  </div>
                </div>
                {/* End Singel price */}
                {/* Start Single price */}
                <div
                  className="price-center col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center wow fadeInDown"
                  data-wow-duration="1s"
                >
                  <div className="price-holder background-white border-gradient bdrs-10 relative">
                    <div className="plr60 pt60 pb80">
                      <div className="fweight-500">
                        <div className="price-title fsize-40 mb-40">
                          Premium
                        </div>
                        <div className="price-current color-2 lheight-normal nowrap">
                          <span className="fsize-30">$</span>
                          <span className="fsize-60">99.</span>
                          <span className="fsize-30">00</span>
                        </div>
                        <div className="recomend fsize-12 uppercase mb50">
                          High Business
                        </div>
                      </div>
                      <ul className="pl0">
                        <li className="price-list">One Year Standard Access</li>
                        <li className="price-list">Limited Courses</li>
                        <li className="price-list">300+ Lessons</li>
                        <li className="price-list">Standard Tutorials</li>
                        <li className="price-list">
                          Unlimited Registered User
                        </li>
                      </ul>
                      <div className="price-btn btn theme-bg-gradient absolute width-100p lheight-50 color-white fsize-14 fweight-600">
                        Sign Up
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Singel price */}
                {/* Start Single price */}
                <div
                  className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center wow fadeInRight"
                  data-wow-duration="2s"
                >
                  <div className="price-holder theme-bg-gradient price-same-st color-white bdrs-10 plr60 pt60 pb90 relative">
                    <div className="fweight-500">
                      <div className="price-title fsize-40 mb-40">Optimal</div>
                      <div className="price-current color-white lheight-normal nowrap">
                        <span className="fsize-30">$</span>
                        <span className="fsize-60">69.</span>
                        <span className="fsize-30">00</span>
                      </div>
                      <div className="recomend fsize-12 uppercase mb50">
                        Any Business
                      </div>
                    </div>
                    <ul className="pl0">
                      <li className="price-list">One Year Standard Access</li>
                      <li className="price-list">Limited Courses</li>
                      <li className="price-list">200+ Lessons</li>
                      <li className="price-list">Standard Tutorials</li>
                    </ul>
                    <div className="price-btn light btn border-gradient absolute width-100p lheight-60 color-16 fsize-14 fweight-600">
                      Sign Up
                    </div>
                  </div>
                </div>
                {/* End Singel price */}
              </div>
            </div>
          </div>
        </section>
        {/*================================================================================= 
                          END PRICE  
    ==================================================================================*/}
        {/* counterstart */}

        <div
          className="section progress-bars section-padding"
          style={{ background: "#2f384a" }}
        >
          <div className="progress-bars-content">
            <div className="progress-bar-wrapper">
              <div className="row">
                <div className="content mb40">
                  <div className="col-sm-3 col-xs-6">
                    <div
                      className="progress-bar-number"
                      style={{ marginTop: "20px" }}
                    >
                      <div className="fsize-40 num" style={{ color: "white" }}>
                        {studentsCount}
                      </div>
                      <p className="name-inner" style={{ color: "white" }}>
                        students taught{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-3 col-xs-6">
                    <div
                      className="progress-bar-number"
                      style={{ marginTop: "20px" }}
                    >
                      <div className="fsize-40 num" style={{ color: "white" }}>
                        {classesCount}
                      </div>
                      <p className="name-inner" style={{ color: "white" }}>
                        classes taken{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-xs-6">
                    <div
                      className="progress-bar-number"
                      style={{ marginTop: "20px" }}
                    >
                      <div className="fsize-40 num" style={{ color: "white" }}>
                        {registeredCount}
                      </div>
                      <p className="name-inner" style={{ color: "white" }}>
                        registered mentors{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-xs-6">
                    <div className="progress-bar-number">
                      <div className="fsize-40 num" style={{ color: "white" }}>
                        {countryCount}
                      </div>
                      <p className="name-inner" style={{ color: "white" }}>
                        country presence
                      </p>
                    </div>
                  </div>
                  {/* New Progress Bars */}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>

        {/* counter end */}

        {/*================================================================================= 
                          START TESTIMONIALS  
    ==================================================================================*/}
        <section
          className=" testimonials__area-2 fix p-relative pt-120 pb-120  "
          id="education-testimonial"
          style={{ marginTop: "86px" }}
        >
          <div className="testimonials__shape"></div>
          <div className="container mt-80">
            <div className="row mb-65">
              <div className="col-xl-12">
                <div className="testimonials__title text-center">
                  <h4
                    className="section__sub-title wow fadeInUp"
                    data-wow-delay=".2s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDelay: "0.2s",
                      animationDelay: "0.2s",
                      WebkitAnimationName: "_fadeInUp",
                      animationName: "_fadeInUp",
                    }}
                  >
                    Testimonials{" "}
                  </h4>
                  <h2
                    className="section__title wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDelay: "0.3s",
                      animationDelay: "0.3s",
                      WebkitAnimationName: "_fadeInUp",
                      animationName: "_fadeInUp",
                    }}
                  >
                    <span> Empowering Every Child for Success</span>
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDelay: "0.5s",
                      animationDelay: "0.5s",
                      WebkitAnimationName: "_fadeInUp",
                      animationName: "_fadeInUp",
                    }}
                  >
                    Instilling inclusive ownership empowers every child to
                    confidently shape their narrative
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="testimonials__container mt50 ">
              <Slider {...settings1}>
                <div className="testimonials__item ">
                  <div
                    className="testimonials__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                    data-swiper-slide-index={0}
                    style={{ width: "350px", marginRight: "30px" }}
                    role="group"
                    aria-label="1 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                        <img
                          decoding="async"
                          src={test}
                          alt="image"
                          className="student-images"
                        />
                      </div>
                      <div className="testimonials__text  mt20 ">
                        <p>
                          Edufusion has innovatively incorporated technology,
                          leading to significant advancements in my child's math
                          learning. Once a source of fear, math has now become
                          her favorite subject. The foundational concepts are
                          developing impressively, evident in my daughter's
                          ability to solve complex problems effortlessly and
                          swiftly. Thanks to Edufusion for facilitating
                          conceptual learning and helping my child
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text">
                          {/* <h4>Alima Alisha</h4>
                          <span>CEO</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* 1st */}
                  <div
                    className="testimonials__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                    data-swiper-slide-index={1}
                    style={{ width: "350px", marginRight: "30px" }}
                    role="group"
                    aria-label="2 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                        <img
                          decoding="async"
                          src={test1}
                          alt="image"
                          className="student-images"
                        />
                      </div>
                      <div className="testimonials__text  mt20">
                        <p>
                          "The SAT online class with Edufusion Tutor was a
                          game-changer, boosting my confidence and refining my
                          test-taking skills. The convenience of online learning
                          and insightful feedback from Edufusion's instructors
                          significantly contributed to my success. The
                          personalized support and targeted practice provided by
                          Edufusion were key factors in my score improvement. I
                          highly recommend Edufusion ."
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text">
                          {/* <h4>David Clark</h4>
                          <span>Marketing Manager</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2nd */}
                <div>
                  <div
                    className="testimonials__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                    data-swiper-slide-index={2}
                    style={{ width: "350px", marginRight: "30px" }}
                    role="group"
                    aria-label="3 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                        <img
                          decoding="async"
                          src={test2}
                          alt="image"
                          className="student-images"
                        />
                      </div>
                      <div className="testimonials__text  mt20">
                        <p>
                          "The coding online class with Edufusion Tutor has been
                          an enriching experience for my child. The curriculum
                          is well-structured, offering a comprehensive
                          understanding of coding concepts. Edufusion's
                          instructors are knowledgeable and provide effective
                          guidance, making complex coding principles accessible.
                          which has ignited a genuine interest and proficiency
                          in coding for my child."
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text">
                          {/* <h4>Moran Sham</h4>
                          <span>Team Leader</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 3rd */}
                <div>
                  <div
                    className="testimonials__item swiper-slide swiper-slide-prev"
                    data-swiper-slide-index={0}
                    style={{ width: "350px", marginRight: "30px" }}
                    role="group"
                    aria-label="1 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                        <img
                          decoding="async"
                          src={test3}
                          alt="image"
                          className="student-images"
                        />
                      </div>
                      <div className="testimonials__text mt20">
                        <p>
                          The science online class with Edufusion Tutor has
                          exceeded my expectations. The curriculum is engaging,
                          covering diverse topics with depth and clarity.
                          Edufusion's instructors demonstrate a passion for
                          science and facilitate interactive discussions that
                          enhance understanding. The use of multimedia resources
                          adds a dynamic element to the learning experience.
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>

                        <div className="testimonials__client-text"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 4th */}
                {/* <div>
                  <div
                    className="testimonials__item swiper-slide swiper-slide-active"
                    data-swiper-slide-index={1}
                    style={{ width: "350px", "margin-right": "30px" }}
                    role="group"
                    aria-label="2 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                        <img
                          decoding="async"
                          src={test3}
                          alt="image"
                          className="student-images"
                        />
                      </div>
                      <div className="testimonials__text">
                        <p>
                          Edufusion has innovatively incorporated technology,
                          leading to significant advancements in my child's math
                          learning. Once a source of fear, math has now become
                          her favorite subject. The foundational concepts are
                          developing impressively, evident in my daughter's
                          ability to solve complex problems effortlessly and
                          swiftly. Thanks to Edufusion for facilitating
                          conceptual learning and helping my child thrive in
                          math.
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text">
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* 5th */}
                {/* <div>
                  <div
                    className="testimonials__item swiper-slide swiper-slide-next"
                    data-swiper-slide-index={2}
                    style={{ width: "350px", "margin-right": "30px" }}
                    role="group"
                    aria-label="3 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                        <img
                          decoding="async"
                          src={test}
                          alt="image"
                          className="student-images"
                        />
                      </div>
                      <div className="testimonials__text">
                        <p>
                          "The SAT online class with Edufusion Tutor was a
                          game-changer, boosting my confidence and refining my
                          test-taking skills. The convenience of online learning
                          and insightful feedback from Edufusion's instructors
                          significantly contributed to my success. The
                          personalized support and targeted practice provided by
                          Edufusion were key factors in my score improvement. I
                          highly recommend Edufusion Tutor's ."
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text">
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </Slider>
            </div>
            {/*  */}
          </div>
        </section>
        {/*================================================================================= 
                          END TESTIMONIALS   
    ==================================================================================*/}

        {/*================================================================================= 
                          START BLOG  
    ==================================================================================*/}
        <section id="education-blog" className="pt100 pb80">
          <div className="education-blog">
            <div className="container">
              <div className="row">
                <div
                  className="text-center wow fadeIn"
                  data-wow-duration="2s"
                  style={{
                    visibility: "visible",
                    animationDuration: "2s",
                    animationName: "fadeIn",
                  }}
                >
                  <div className="subtitle">A modern and unique style</div>
                  <div className="title color-2 lheight-40 mb30">
                    <span>
                      Latest from blog<span className="color-15">.</span>
                    </span>
                  </div>
                  <div className="spliter mb40" />
                </div>
                {/*====| All Blog Start |====*/}
                <div className="all-blogs">
                  {/* Single Blog Item Start */}
                  <div className="col-md-4 col-sm-6">
                    <div className="single-blog-item">
                      <div className="blog-photo">
                        <img
                          src="https://codestar.xyz/demo/education/assets/images/blog/blog-01.jpg"
                          alt="blog"
                        />
                        <div className="blog-post-date theme-bg-gradient">
                          <h3 className="color-white fsize-16 plr30">
                            23-9-2018
                          </h3>
                        </div>
                        <div className="blog-dtls-link color-4">
                          <a href="#">
                            Check Details{" "}
                            <i className="fa fa-share" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Blog Item End */}
                  {/* Single gallery Item Start */}
                  <div className="col-md-4 col-sm-6">
                    <div className="single-blog-item">
                      <div className="blog-photo">
                        <img
                          src="https://codestar.xyz/demo/education/assets/images/blog/blog-01.jpg"
                          alt="blog"
                        />
                        <div className="blog-post-date theme-bg-gradient">
                          <h3 className="color-white fsize-16 plr30">
                            25-9-2018
                          </h3>
                        </div>
                        <div className="blog-dtls-link color-4">
                          <a href="#">
                            Check Details{" "}
                            <i className="fa fa-share" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Blog Item End */}
                  {/* Single Blog Item Start */}
                  <div className="col-md-4 col-sm-6 col-md-offset-0 col-sm-offset-3">
                    <div className="single-blog-item">
                      <div className="blog-photo">
                        <img
                          src="https://codestar.xyz/demo/education/assets/images/blog/blog-01.jpg"
                          alt="blog"
                        />
                        <div className="blog-post-date theme-bg-gradient">
                          <h3 className="color-white fsize-16 plr30">
                            26-9-2018
                          </h3>
                        </div>
                        <div className="blog-dtls-link color-4">
                          <a href="#">
                            Check Details{" "}
                            <i className="fa fa-share" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Blog Item End */}
                </div>
                {/*====| All Blog End |====*/}
              </div>
            </div>
          </div>
        </section>
        {/*================================================================================= 
                          END BLOG
    ==================================================================================*/}

        {/*================================================================================= 
                          START FOOTER  
    ==================================================================================*/}
        <footer
          id="education-footer"
          className="footer-st-25 text-center theme-bg-gradient pt90 pb80"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* Progress title */}
                <div className="progress-bars-inner">
                  <h2 className="color-white fsize-40 mb15 mt0">
                    Some important facts
                  </h2>
                  <p className="color-white lheight-30 pb30">
                    Step into a world of possibilities with us! Explore the
                    magic of numbers, unravel scientific wonders, and dive deep
                    into coding. Join us on this incredible journey.
                  </p>
                  {/* PROGRESS BARS*/}
                  <div className="section progress-bars section-padding">
                    <div className="progress-bars-content">
                      <div className="progress-bar-wrapper">
                        <div className="row">
                          <div className="content mb40">
                            <div className="col-sm-3 col-xs-6">
                              <div className="progress-bar-number">
                                <div className="fsize-60 num">
                                  {teachersCount}
                                </div>
                                <p className="name-inner">teachers</p>
                              </div>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                              <div className="progress-bar-number">
                                <div className="fsize-60 num">
                                  {coursesCount}
                                </div>
                                <p className="name-inner">courses</p>
                              </div>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                              <div className="progress-bar-number">
                                <div className="fsize-60 num">
                                  {membersCount}
                                </div>
                                <p className="name-inner">members</p>
                              </div>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                              <div className="progress-bar-number">
                                <div className="fsize-60 num">
                                  {countriesCount}
                                </div>
                                <p className="name-inner">Countries</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-subscribe section-subscribe-st">
              <div className="subscribe-content">
                {/* Newsletter title */}
                <div className="subscribe-content-inner text-white">
                  <h2 className="color-white fsize-40 mb15">Contacts</h2>
                  <a href="tel:8469092774">
                    <p className="text-white lheight-30 pb40  ">
                      Phone: +918469092774
                      <br />
                      Phone:+91-6006474119
                    </p>
                  </a>

                  <a href="mailto:inquiries@edufusion.co.in" className="mb90">
                    <p>Email: Inquiries@edufusion.co.in</p>
                  </a>
                </div>
              </div>
              <div className="subscribe-form mt30">
                <div className="subscribe-form-inner">
                  {/* Newsletter form */}
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
                  <a href="#">
                    <FaFacebookF />
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
        {/*================================================================================= 
                          END FOOTER  
    ==================================================================================*/}

        {/* Scroll to top */}
        <a
          href="#"
          id="toTop"
          className="theme-bg-gradient color-white"
          style={{ display: "inline" }}
        >
          <IoIosArrowUp style={{ marginTop: "6px" }} />
        </a>
        {/* End Scroll to top */}

        {/* whats app */}

        <WhatsAppButton />
      
        {/*================================================================================= 
                          START CONTACT POP-UP  
    ==================================================================================*/}
        {/* Modal */}

        <div id="education-contact" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={closePopup}>
                <img className="close" data-dismiss="modal" src={close} alt="close" />
              </button>
              <h4 className="modal-title">Get In Touch</h4>
            </div>
            <div className="modal-body">
              <div className="contact-section">
                <form onSubmit={handleSubmit} className="contact-form signup-form" id="ajax-contact">
                  <div className="row section-signup semitrans">
                    <div className="col-md-12">
                      <div className="form-group has-icon-left form-control-name">
                        <label className="sr-only" htmlFor="name">
                          Your name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="name"
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                      </div>
                    </div>
                    {/* Add other form fields */}
                    <div className="col-md-12">
                      <div className="form-group has-icon-left form-control-email">
                        <label className="sr-only" htmlFor="email">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          name="email"
                          id="email"
                          placeholder="Email address"
                          autoComplete="off"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group has-icon-left form-control-phone">
                        <label className="sr-only" htmlFor="phone">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                          autoComplete="off"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && <p className="error-message">{errors.phone}</p>}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group has-icon-left form-control-address">
                        <label className="sr-only" htmlFor="address">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="address"
                          id="address"
                          placeholder="Your Address"
                          autoComplete="off"
                          value={formData.address}
                          onChange={handleChange}
                        />
                        {errors.address && <p className="error-message">{errors.address}</p>}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group has-icon-left form-control-message">
                        <label className="sr-only" htmlFor="message">
                          Enter your message
                        </label>
                        <textarea
                          className="form-control form-control-lg home-textarea"
                          name="message"
                          id="message"
                          placeholder="Enter your message"
                          autoComplete="off"
                          value={formData.message}
                          onChange={handleChange}
                        />
                        {errors.message && <p className="error-message">{errors.message}</p>}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <button className="contact-btn btn theme-bg-gradient lheight-60i color-white fsize-14 fweight-600">
                          Send Message
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p className="submit-btn-bottom-text">
                        Your email is safe with us and we hate spam as much as you do.
                      </p>
                    </div>
                  </div>
                  <div id="error-message" className="text-center" />
                  <div id="form-messages" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/*  */}
      </>
    </div>
  );
};

export default Home;
