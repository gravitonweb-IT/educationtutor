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
import logo from "../componants/assets/images/logo.jpg";
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
import kids from "../componants/assets/kids.png";
// import p2 from "../componants/assets/p2.png";
import logo2 from "../componants/assets/images/logo3.jpg";
import game from "../componants/assets/game.mp4";
import coding from "../componants/assets/coding.jpg";
import science from "../componants/assets/science.jpg";
import math from "../componants/assets/maths.jpg";
import "./home.css";
import "./tabs.css";
import WhatsAppButton1 from "../componants/WhatsAppButton1"
import sat from "../componants/assets/sat.mp4";
// import anime from 'animejs';
const Home = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const toggleText = (index) => {
    setExpandedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const cardContents = [
    {
      title: 'Coding is valuable for kids as it',
      intro: 'Kid-friendly platforms  ',
      readMore: (
        <>
        <p>and resources make learning to code engaging and enjoyable.</p>
          <h2>Develops Problem-Solving Skills:</h2>
          <p>Breaks down complex issues for critical thinking. </p>
          <h2>Fosters Logic and Creativity:</h2>
          <p>Requires both logical thinking and creativity. </p>
          <h2>Enhances Computational Thinking:</h2>
          <p>Teaches problem-solving for computers. </p>
          <h2>Prepares for the Future</h2>
          <p> Equips for technology-driven job markets.</p>
          <h2>Provides Understanding of Technology</h2>
          <p>Demystifies daily digital interactions. </p>
          <h2>Improves Math Skills</h2>
          <p>Involves mathematical concepts naturally. </p>
          <h2>Allows Creativity and Expression</h2>
          <p>Enables creation of games, apps, and websites. </p>
          <h2>Promotes Collaboration</h2>
          <p>Encourages teamwork and effective collaboration. </p>
          <h2>Offers Career Opportunities</h2>
          <p> Opens doors to various tech-related careers. </p>
          <h2>Builds Confidence</h2>
          <p>Boosts confidence by mastering complex skills. </p>
        </>
      ),
      imageSrc: coding,
    },
    {
      title: 'Beyond the Stars: Dark Matter Unveiled',
      intro: 'Gazing into the cosmos, ',
      readMore: (
        <>
        <p>we confront the enigma—dark matter. Elusive, it interacts solely through gravity, challenging scientists who infer its presence through gravitational effects on visible matter.  </p>
          <p> Picture the universe as a cosmic ballet, with dark matter as the unseen choreographer, maintaining cosmic harmony. Scientists engage in cosmic cartography, mapping visible matters distribution. Discrepancies reveal dark matters ethereal silhouette, weaving an unseen tapestry—the cosmic web—concentrating galaxies along invisible threads.</p>
          <p>As our journey concludes, an invitation extends to all curious minds. The cosmos beckons, revealing hidden wonders. Let curiosity propel us further into the cosmic unknown, where discovery knows no bounds.</p>
        </>
      ),
      imageSrc: science,
    },
    {
      title: 'Unveiling the Beauty of Mathematics',
      intro: 'Dive into the world of math: ',
      readMore: (
        <>
          <h2>Patterns Revealed</h2>
          <p>Uncover the beauty of numerical patterns, connecting diverse concepts seamlessly. </p>
          <h2>Geometry's Charm</h2>
          <p>Explore the elegance of shapes and angles, witnessing the visual allure of geometry. </p>
          <h2>Algebra's Power</h2>
          <p>Balancing equations and solving mysteries—algebra's artistry in real-world precision. </p>
          <h2>Calculus Insight</h2>
          <p>Experience the symphony of rates and changes, where calculus unlocks profound insights.</p>
          <h2>Nature's Equation</h2>
          <p>In the natural world, math is the silent language describing the universe's beauty. </p>
          <h2>Conclusion</h2>
          <p>Celebrate the wonders of mathematics—a language expressing the beauty of the world. Unlock secrets within its realm and embrace the elegance math offers. 

 

Learn Math Online At Home - X Math Education | Teaching Methods </p>
       
        </>
      ),
      imageSrc: math,
    },
  ];

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  const handleSubmit1 = (e) => {
    e.preventDefault();
   
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


  const settings1 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  const [activeTab, setActiveTab] = useState("course-item-1"); 

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
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
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
  const [position, setPosition] = useState('100%');

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition === '-100   ' ? '0' : '-100'));
    }, 5000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
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
                    src={logo2}
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
                      <Link to="/Competative">Competative Exams</Link>
                    </div>
                  </li>
                  {/* <li>
                  <a href="#education-price">Price</a>
                </li> */}
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
                    <a data-toggle="modal" data-target="#education-contact">
                      Contact
                    </a>
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
          
                  <img src={kids} alt="main" />
                </div>
              </div>
              <div className="col-lg-8 col-sm-8">
                {/* Home content */}
                <div className="banner-txt">
              
                  <div className="banner-intro">
                    <h1 className="banner-title">
                      Welcome to Edufusion Tutors - Breaking
                      <span id="area"> Learning Boundaries! </span>
                    </h1>
                    <p className="color-white lheight-30">
                      At Edufusion, we're passionate about transforming
                      education. With a dedicated team of experienced educators
                      more than 15 years and tech enthusiasts, we're redefining
                      online learning to make it accessible, engaging, and
                      empowering for every student. Experience personalized
                      excellence with our exclusive<br/>  
                       <div id="sessions" style={{ color: '#ff3366', fontSize: '23px', fontWeight: '600', 
                      // transform: `translateX(${position})`, whiteSpace: 'nowrap'
                       }}>
      1:1 Sessions In Math, Science, and Coding. Join Edufusion,
    </div> where education
                      transcends boundaries!
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
                    WebkitAnimationDuration: "2s", 
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
              
                <div className="course-items">
                  <div className="tabs text-center">
                    <div className="tabs-nav">
                      <ul className="list-inline nav nav-tabs fsize-0">
                        
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
                                  <span style={{fontSize:"25px", fontWeight:"700"}}>Mathematics Learning Platform</span>
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
                              Are you grappling with Math Anxiety, facing
                              Learning Gaps, and desiring mastery in Conceptual
                              Learning, Mental Math’s, and Advanced Math? Look
                              no further – our online math tutoring service is
                              designed just for you!
                            </p>
                            <ul className="list1">
                              <li>
                                <span className="table-cell valign-middle"  >
                                  <h5 style={{fontSize:"18px", fontWeight:"600"}}>Math Anxiety Support:</h5>Conquer math anxiety
                                  with our supportive environment, ensuring a
                                  positive and enjoyable learning experience.
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                <h5 style={{fontSize:"18px", fontWeight:"600"}}>Bridge Learning Gaps:</h5> Personalized lessons
                                  fill gaps, providing a solid foundation for
                                  mathematical success.
                                </span>
                              </li>
                              
                            </ul>
                            {/* button */}
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              <div className="slick-list draggable">
                                <iframe
                                  width="100%"
                                  height={300}
                                  src={learningmath}
                                  frameBorder={0}
                                  allow="autoplay; encrypted-media"
                                  allowFullScreen=""
                                />
                              </div>
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
                                  <span style={{fontSize:"25px", fontWeight:"700"}}>
                                    Unlock the Wonders of Science with Our
                                    Exclusive
                                  </span>
                                </div>
                                <div className="subtitle fweight-600 color-4 mt20">
                                  {/* Embark on a dynamic learning experience with our science online tutoring! Dive into virtual labs, explore real-life examples, and engage with interactive videos, making complex concepts come alive. */}
                                  {/* Our comprehensive approach ensures a deeper understanding of science. Ready to evaluate your learning journey? Join us today! */}
                                </div>
                              </div>
                            </div>
                            <p className="lheight-30 mt20">
                              Embark on a dynamic learning experience with our
                              science online tutoring! Dive into virtual labs,
                              explore real-life examples, and engage with
                              interactive videos, making complex concepts come
                              alive. Our comprehensive approach ensures a deeper
                              understanding of science. Ready to evaluate your
                              learning journey? Join us today!
                            </p>
                            <ul className="list1">
                              <li className="list-theme-color">
                                <span className="table-cell valign-middle">
                                  Top-notch Tutors
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
                             
                            </ul>
                            {/* button */}
                            <div className="flex-1"></div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              <iframe
                                width="100%"
                                height={300}
                                src={grade6}
                                frameBorder={0}
                                allow="autoplay; encrypted-media"
                                allowFullScreen=""
                              />
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
                                  <span style={{fontSize:"25px", fontWeight:"700"}}>
                                    Supercharge Your Child's Future with Coding!{" "}
                                  </span>
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
                                  <h5 style={{fontSize:"18px", fontWeight:"700"}}>Boosts Critical Thinking:</h5> Develops logical and
                                  analytical skills for academic excellence.
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                 <h5 style={{fontSize:"18px", fontWeight:"700"}}>Math Made Fun:</h5>  Coding enhances math
                                  proficiency in an engaging way.
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  <h5 style={{fontSize:"18px", fontWeight:"700"}}>Creative Exploration:</h5> Unleash creativity
                                  through coding adventures.
                                </span>
                              </li>
                             
                            </ul>
                            {/* button */}
                            <div className="flex-1"></div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              <iframe
                                width="100%"
                                height={300}
                                src={game}
                                frameBorder={0}
                                allow="autoplay; encrypted-media"
                                allowFullScreen=""
                              />
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
                                  <span style={{fontSize:"25px", fontWeight:"700"}}>
                                    Excel in Competitive Exams with Our Proven
                                    Expertise
                                  </span>
                                </div>
                                <div className="subtitle fweight-600 color-4 mt30">
                                  Your success in PSAT, SAT, ACT, NAPLAN, and
                                  Olympiads begins with EDUFUSION TUTOR - Your
                                  Trusted Guide to Academic Excellence!
                                </div>
                              </div>
                            </div>
                            <p className="lheight-30 mt30">
                              Unlock the door to success in competitive exams
                              such as PSAT, SAT, ACT, NAPLAN, and Olympiads with 
                               <span style={{fontSize:"15px", fontWeight:"600",marginLeft:"10px"}}>EDUFUSION TUTOR</span>. With over 12 years of
                              unparalleled experience, we have been guiding
                              students towards academic excellence and achieving
                              top scores in these prestigious examinations.
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
                            </ul>
                            {/* button */}
                            <div className="flex-1"></div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              <iframe
                                width="100%"
                                height={300}
                                src={sat}
                                frameBorder={0}
                                allow="autoplay; encrypted-media"
                                allowFullScreen=""
                              />
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
                                  <span style={{fontSize:"25px", fontWeight:"700"}}>
                                    Master the PSAT with EDUFUSION TUTOR
                                  </span>
                                </div>
                                <div className="subtitle fweight-600 color-4 mt30">
                                  Your success in PSAT, SAT, ACT, NAPLAN, and
                                  Olympiads begins with EDUFUSION TUTOR - Your
                                  Trusted Guide to Academic Excellence!
                                </div>
                              </div>
                            </div>
                            <p className="lheight-30 mt30">
                              Unlock Your Potential with PSAT Online Tutoring!
                              🌟 Are you ready to ace the PSAT and set the stage
                              for your academic success? Look no further! Our
                              PSAT Online Tutoring program is designed to
                              empower students like you to confidently tackle
                              the exam and achieve outstanding results. can you
                              add more features or information about psat
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
                            
                            </div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              <iframe
                                width="100%"
                                height={300}
                                src={sat}
                                frameBorder={0}
                                allow="autoplay; encrypted-media"
                                allowFullScreen=""
                              />
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
                                  <span style={{fontSize:"25px", fontWeight:"700"}}> Competitive Exam </span>
                                </div>
                                <div
                                  className="subtitle fweight-600 color-4"
                                  style={{ marginTop: "20px" }}
                                >
                                  Embark on a Journey to Academic Excellence
                                  with edufusion ACADEMY!
                                </div>
                              </div>
                            </div>
                            <p className="lheight-30">
                              Are you ready to conquer a myriad of competitive
                              exams, from PSAT, SAT, ACT, NAPLAN, Olympiads, to
                              AP courses and beyond? Look no further! Edufusion
                              Tutors is your one-stop destination for
                              comprehensive exam preparation, guiding you
                              towards success in every academic endeavor .
                            </p>
                            <p
                              className="lheight-30 "
                              style={{ marginTop: "2px" }}
                            >
                              Master a spectrum of exams including PSAT, SAT,
                              ACT, NAPLAN, Olympiads, AP courses, and various
                              university-level exams. Our expert tutors are
                              well-versed in diverse curricula, ensuring you're
                              prepared for any challenge.{" "}
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
                            <div className="flex-1"></div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              <iframe
                                width="100%"
                                height={300}
                                src={sat}
                                frameBorder={0}
                                allow="autoplay; encrypted-media"
                                allowFullScreen=""
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* End Single tab content */}
                    </div>
                  </div>
                </div>
                {/* End course items */}
              </div>
            </div>
          </div>
        </section>

       

        {/* tabs */}
        <div className="enroll-wrapper" data-v-0a6dbf09>
          <div
            data-aos="fade-up"
            data-aos-duration={1000}
            className="title-container aos-init aos-animate"
            data-v-0a6dbf09
          >
            <h2 className="title" data-v-0a6dbf09>
              A Simple 3-Step Process To Enroll Your Kid to Any  Course
            </h2>
          </div>{" "}
          <div className="enroll-container" data-v-0a6dbf09>
            <div className="enroll-box" data-v-0a6dbf09>
              <div data-v-0a6dbf09>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4762/4762311.png"
                  alt="choose"
                  sizes="(max-width: 320px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                 
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
                    <ul>
                      <li>Maths Course</li>
                      {/* <li>Coding Course</li> */}
                      <li>Science Course</li>
                      <li>Competitive Exam</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="enroll-box" data-v-0a6dbf09>
              <div data-v-0a6dbf09>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/trial-7-404313.png"
                  alt="subscribe"
                  sizes="(max-width: 320px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  
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
                  src="https://cdn-icons-png.flaticon.com/512/4413/4413569.png"
                  alt="success"
                  sizes="(max-width: 320px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                 
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

        {/*================================================================================= 
                          START why-choose 
    ==================================================================================*/}
        <section id="education-why-choose" className="why-choose  pb80">
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
                                  <span  style={{fontSize:"25px", fontWeight:"700" }}>
                                    Why choose us
                                    <span className="color-15">.</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <h2 style={{fontSize:"24px", fontWeight:"700" }}>
                              Transforming Lives Through Personalized Education
                            </h2>
                            <p>
                              At EDUFUSION TUTOR, we envision a world where
                              every learner, regardless of background or
                              circumstance, has the opportunity to unlock their
                              full potential through personalized education. We
                              aspire to be a guiding light on the educational
                              journey, fostering a love for learning that
                              transcends boundaries.
                            </p>
                            <h5 style={{fontSize:"20px", fontWeight:"700" }}>Our Commitment</h5>
                            <p>
                             <h5  style={{fontSize:"18px", fontWeight:"600" }}>Empowerment:</h5> 
                             We envision empowering students with
                              the tools and knowledge to confidently navigate
                              the ever-evolving landscape of education and
                              beyond.
                            </p>
                            <h5  style={{fontSize:"20px", fontWeight:"700" }}>Inclusivity: </h5>
                            <p>
                              Our vision includes breaking down barriers to
                              learning. We strive to create an inclusive space
                              where every student feels valued and supported.
                            </p>
                            {/* <h5>Innovation: </h5>
                            <p>
                            We aim to be at the forefront of educational innovation, leveraging cutting-edge technology and methodologies to redefine the online learning experience.
                            </p> */}
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="img-exp">
                              <img
                                src="https://www.internationaltalentacademy.org/wp-content/uploads/2020/09/Happy-kids-with-books-thumbs-up-1-1.jpg"
                                alt="choose"
                                className="img-fluid"
                                style={{
                                  width: "433px",
                                  marginTOp: "85px",
                                  width: "489px",
                                }}
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
                      style={{ margin: "40px 0" }}
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
                              <span style={{fontSize:"25px", fontWeight:"700" }}>
                                Why choose us<span className="color-15">.</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <h5 style={{fontSize:"25px", fontWeight:"700" }}>Global Impact: </h5>
                        <p>
                          Our vision extends globally, reaching learners around
                          the world. We aspire to contribute to the development
                          of a knowledgeable and empowered global community.
                        </p>
                        <p>
                         <span style={{fontSize:"20px", fontWeight:"600" }}> Lifelong Learning</span>: Beyond academic success, our vision
                          encompasses instilling a love for lifelong learning.
                          We aspire to cultivate curious, adaptable individuals
                          prepared for the challenges and opportunities of the
                          future.
                        </p>
                        <h5 style={{fontSize:"20px", fontWeight:"700" }}>Time Rescheduling</h5>
                        <p>
                          Recognizing the busy nature of life, we offer
                          hassle-free time rescheduling options. Your education
                          should fit your schedule, not the other way around.
                        </p>
                      
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

        {/* our vission start */}
        <div className="VISION">
          <h1 className="text-center" style={{ marginTop: "20px" }}>
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
      
        {/*================================================================================= 
                          END PRICE  
    ==================================================================================*/}
        {/* counterstart */}

        <div
          className="section progress-bars section-padding"
          style={{ background: "#2f384a", marginTop: "66px" }}
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
                      fontSize:"35px",
                       fontWeight:"700"
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
                    <span style={{fontSize:"23px", fontWeight:"600"}}> Empowering Every Child for Success</span>
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
    
      
      <div
                className="text-center wow fadeIn"
                data-wow-duration="2s"
                style={{
                  visibility: "visible",
                  animationDuration: "2s",
                  animationName: "fadeIn",
                  marginTop:"140px"
                }}
              >
                <div className="subtitle">A modern and unique style</div>
                <div className="title color-2 lheight-40 mb30">
                  <span style={{fontSize:"30px", fontWeight:"700"}}>
                    Latest from blog<span className="color-15">.</span>
                  </span>
                </div>
                <div className="spliter mb40" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* Three cards */}
      {cardContents.map((card, index) => (
        <div key={index} style={{
          flex: 1,
          border: `1px solid ${expandedCardIndex === index ? 'blue' : 'black'}`, // Change border color if the card is expanded
          padding: '10px',
          margin: '10px',
          transition: 'border 0.3s ease', // Add a smooth transition effect
        }}>
            <img src={card.imageSrc} alt={`Image for ${card.title}`} style={{ width: '100%', maxHeight: '270px', objectFit: 'cover' }} />
          <h1 style={{ fontSize: "20px", fontWeight: "600" }}>{card.title}</h1>

        

          <p>
            {card.intro}
            <span id={`points${index}`}>...</span>

            {expandedCardIndex === index && (
              <div id={`moreText${index}`}>
                {card.readMore}
              </div>
            )}
          </p>

          <button onClick={() => toggleText(index)} id={`textButton${index}`} style={{color:"black",fontSize:"20px",fontWeight:"600" }}>
            {expandedCardIndex === index ? 'Show Less' : 'Read More'}
          </button>
        </div>
      ))}
    </div>
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
                  {/* <div className="section progress-bars section-padding">
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
                  </div> */}
                </div>
              </div>
            </div>
            <div className="section-subscribe section-subscribe-st">
              <div className="subscribe-content">
                {/* Newsletter title */}
                <div className="subscribe-content-inner text-white">
                  <h2 className="color-white fsize-40 mb15">Contacts</h2>
                  <a href="tel:8469092774">
                    <p
                      className="text-white lheight-30 pb40  "
                      style={{ color: "white" }}
                    >
                      Phone1: +91-8735820099
                      <br />
                      Phone2: +91-6006474119
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
        <WhatsAppButton1/>
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
                  <img
                    className="close"
                    data-dismiss="modal"
                    src={close}
                    alt="close"
                  />
                </button>
                <h4 className="modal-title">Get In Touch</h4>
              </div>
              <div className="modal-body">
                <div className="contact-section">
                  <form
                    onSubmit={handleSubmit}
                    className="contact-form signup-form"
                    id="ajax-contact"
                  >
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
                          {errors.name && (
                            <p className="error-message">{errors.name}</p>
                          )}
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
                          {errors.email && (
                            <p className="error-message">{errors.email}</p>
                          )}
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
                          {errors.phone && (
                            <p className="error-message">{errors.phone}</p>
                          )}
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
                          {errors.address && (
                            <p className="error-message">{errors.address}</p>
                          )}
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
                          {errors.message && (
                            <p className="error-message">{errors.message}</p>
                          )}
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
                          Your email is safe with us and we hate spam as much as
                          you do.
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
