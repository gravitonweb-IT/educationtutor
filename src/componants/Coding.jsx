import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import WhatsAppButton from "../componants/WhatsAppButton";
import WhatsAppButton1 from "../componants/WhatsAppButton1";
import { IoIosArrowUp } from "react-icons/io";
import logo3 from "../componants/assets/images/logo3.jpg";
// import { Link } from "react-router-dom";

import p2 from "../componants/assets/p2.png";
import close from "./assets/images/icons/close-icon.png";

const Coding = () => {
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
  const [activeTab2, setActiveTab2] = useState(1);
  const [isCardVisible, setCardVisibility] = useState(false);

  // useEffect to trigger the card visibility on screen refresh
  useEffect(() => {
    setCardVisibility(true);
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  const handleTabClick2 = (tabName) => {
    setActiveTab2(tabName);
    setCardVisibility(!isCardVisible);
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
    height: "100vh", // Adjust as needed
  };

  const innerDivStyle = {
    // Optional: Add styles for the inner div if needed
    maxWidth: "800px", // Adjust the max-width as needed
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
  };
  const headingStyle = {
    marginBottom: "20px",
    marginTop: "30px", // Adjust the margin as needed
  };

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
                    <Link to="/Competative">Competative</Link>
                  </div>
                </li>
                {/* <li>
                  <a href="#education-price">Price</a>
                </li> */}
                <li>
                  <Link to="/Testimonial">Testimonial</Link>
                </li>
                <li>
                  <Link to="/Blog">Blog</Link>
                </li>
                <li>
                  <Link to="/Facts">Facts</Link>
                </li>
                <li>
                  <a  data-toggle="modal" data-target="#education-contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* banner part */}
      <div className="container">
        <div className="row" style={{ marginTop: "100px" }}>
          <div
            className="col-md-6 mx-auto"
            style={{ padding: "20px", marginTop: "60px" }}
          >
            <h1>
              Future-Proof Your Career with Edufusion 1:1 Online Coding
              Tutorials
            </h1>
            <p>
              Did you know? According to industry experts, 80% of jobs in 2030
              will rely on coding skills. Don't just prepare for the future –
              shape it with our 1:1 online coding tutorials at Edufusion.
            </p>
          </div>
          <div
            className="col-md-6 "
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="https://img.freepik.com/premium-vector/kids-learn-coding-with-male-teacher-vector-illustration_42417-103.jpg"
              alt="Image"
            />
          </div>
        </div>
      </div>

      {/* banner part */}

      {/* counterstart */}

      <div
        className="section progress-bars section-padding"
        style={{ marginTop: "50px" }}
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
                    <div className="fsize-40 num" style={{ color: "black" }}>
                      {studentsCount}
                    </div>
                    <p className="name-inner" style={{ color: "black" }}>
                      students taught{" "}
                    </p>
                  </div>
                </div>

                <div className="col-sm-3 col-xs-6">
                  <div
                    className="progress-bar-number"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="fsize-40 num" style={{ color: "black" }}>
                      {classesCount}
                    </div>
                    <p className="name-inner" style={{ color: "black" }}>
                      classes taken{" "}
                    </p>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div
                    className="progress-bar-number"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="fsize-40 num" style={{ color: "black" }}>
                      {registeredCount}
                    </div>
                    <p className="name-inner" style={{ color: "black" }}>
                      registered mentors{" "}
                    </p>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="progress-bar-number">
                    <div className="fsize-40 num" style={{ color: "black" }}>
                      {countryCount}
                    </div>
                    <p className="name-inner" style={{ color: "black" }}>
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

      

      {/* maths tabs */}

      <div data-v-0a33574d className="container course-section-container my-60">
        <div data-v-0a33574d className="course-heading-section">
          <div
            data-v-0a33574d
            className="w-full flex flex-col-reverse md:flex-row"
          >
            <div data-v-0a33574d className="w-full relative">
              <div data-v-0a33574d className="course-title">
                <h2 data-v-0a33574d className="heading">
                  Coding Courses for Every Grade
                </h2>
              </div>{" "}
              <div data-v-0a33574d className="stepper-wrapper">
                <span data-v-0a33574d className="course-subtitle sub-heading">
                  Our Focused Curriculum ensures Academic Excellence
                </span>{" "}
                <div data-v-0a33574d className="course-stepper tabs">
                  <span
                    data-v-0a33574d
                    className={` step tab ${activeTab2 === 1 ? "active" : ""}`}
                    onClick={() => handleTabClick2(1)}
                  >
                    Grade 1-3
                  </span>
                  <span
                    data-v-0a33574d
                    className={` step tab ${activeTab2 === 2 ? "active" : ""}`}
                    onClick={() => handleTabClick2(2)}
                  >
                    Grade 4-5
                  </span>
                  <span
                    data-v-0a33574d
                    className={` step tab ${activeTab2 === 3 ? "active" : ""}`}
                    onClick={() => handleTabClick2(3)}
                  >
                    Grade 6-8
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
              <div data-v-eb8371ae className="maths-topic-container"style={{ 
                display: isCardVisible ? 'flex' : 'none',
                flexDirection: 'column',
                }}>
                <div data-v-eb8371ae className="course-step-container">
                  <center data-v-eb8371ae>
                    <div data-v-eb8371ae className="course-header-container">
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://d11cte.org/wp-content/uploads/2022/09/Block-Coding-Icon.png"
                        alt="teacher"
                        className="topic-img"
                      />{" "}
                      <span data-v-eb8371ae className="topic-title">
                        Block-Based Coding
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB-RHyG4pKaMVF4VS3-PkNg8bjm8vALbhx1U-EwB9zU3WCN7zBynKG8XTPrE1545yhQA&usqp=CAU"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Sequencing and Algorithm
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://cdn-icons-png.flaticon.com/128/5376/5376727.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Loops, Variables, Operators
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://cdn-icons-png.flaticon.com/512/5847/5847519.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Game Development on Play Lab
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://blog.qtlearn.in/content/images/2021/01/sprite-lab.PNG"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Animation Using Sprite Lab and Many More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab2 === 2 && (
              <div data-v-eb8371ae className="maths-topic-container" style={{ 
                display: isCardVisible ? 'flex' : 'none',
                flexDirection: 'column',
                }}>
                <div data-v-eb8371ae className="course-step-container">
                  <center data-v-eb8371ae>
                    <div data-v-eb8371ae className="course-header-container">
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://blog.qtlearn.in/content/images/2021/01/sprite-lab.PNG"
                        alt="teacher"
                        className="topic-img"
                      />{" "}
                      <span data-v-eb8371ae className="topic-title">
                        Sprite Lab, App Lab, Minecraft
                      </span>
                    </div>
                  </center>{" "}
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn-icons-png.flaticon.com/512/6756/6756806.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Basic and Advanced Loops
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src=" https://cdn.iconscout.com/icon/premium/png-256-thumb/scratch-game-3418603-2849959.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Scratch Game Development
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn-icons-png.flaticon.com/512/4293/4293623.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Advanced Game Development
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://static.thenounproject.com/png/2017447-200.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Data Handling
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://w7.pngwing.com/pngs/163/279/png-transparent-android-software-development-computer-icons-bionic-android-text-logo-grass.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Android Application Development and Many More
                    </div>
                  </div>
                </div>

                {/* <div data-v-eb8371ae className="course-step-container">
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
                    <div data-v-eb8371ae className="course-step-inner-container">
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://play-lh.googleusercontent.com/Kuvx2co9DbP6e4JPzYbvdg8EtvIj2iwdekqjl7IuLzKIeyxUyEthwYKzxSVk6tpTGQ"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Addition Tricks
                      </div>
                    </div>
                    <div data-v-eb8371ae className="course-step-inner-container">
                      <img
                        data-v-eb8371ae
                        sizes="https://i.pinimg.com/736x/f2/c2/63/f2c2631d469db9d9f08ac76a17c3f910.jpg"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Series Addition
                      </div>
                    </div>
                    <div data-v-eb8371ae className="course-step-inner-container">
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://vick8890.files.wordpress.com/2010/04/division1.gif"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Subtraction Tricks
                      </div>
                    </div>
                    <div data-v-eb8371ae className="course-step-inner-container">
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://static.thenounproject.com/png/953211-200.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Mental Addition
                      </div>
                    </div>
                    <div data-v-eb8371ae className="course-step-inner-container">
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://icons-for-free.com/iconfiles/png/512/subtract+icon-1320166877654139912.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Mental Subtraction and many more
                      </div>
                    </div>
                  </div> */}
              </div>
            )}
            {activeTab2 === 3 && (
              <div data-v-eb8371ae className="maths-topic-container" style={{ 
                display: isCardVisible ? 'flex' : 'none',
                flexDirection: 'column',
                }}>
                <div data-v-eb8371ae className="course-step-container">
                  <center data-v-eb8371ae>
                    <div data-v-eb8371ae className="course-header-container">
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://static.vecteezy.com/system/resources/thumbnails/021/319/865/small/programming-icon-design-free-vector.jpg"
                        alt="teacher"
                        className="topic-img"
                      />{" "}
                      <span data-v-eb8371ae className="topic-title">
                        Scratch Programming
                      </span>
                    </div>
                  </center>{" "}
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://static.vecteezy.com/system/resources/thumbnails/006/662/139/small/artificial-intelligence-ai-processor-chip-icon-symbol-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-free-vector.jpg"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Artificial Intelligence
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMuRMP0D22hxO1ahgUfItT9MfIrGR1VrT954itEn_aDSbAX1WG5hA1NKVINNuMlQkNRw&usqp=CAU"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                    
                      Arithmetic Operations
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn-icons-png.flaticon.com/512/8618/8618881.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Machine Learning
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://static.vecteezy.com/system/resources/thumbnails/006/445/912/small/web-and-app-development-blue-gradient-concept-icon-create-website-advanced-digital-skills-abstract-idea-thin-line-illustration-isolated-outline-drawing-myriad-pro-bold-fonts-used-vector.jpg "
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Advance Web Development
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://static.thenounproject.com/png/2407525-200.png "
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Advance App Development and Many More
                    </div>
                  </div>
                
                </div>

               
              </div>
            )}
            {activeTab2 === 4 && (
              <div data-v-eb8371ae className="maths-topic-container" style={{ 
                display: isCardVisible ? 'flex' : 'none',
                flexDirection: 'column',
                }}>
                <div data-v-eb8371ae className="course-step-container">
                  <center data-v-eb8371ae>
                    <div data-v-eb8371ae className="course-header-container">
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png"
                        alt="teacher"
                        className="topic-img"
                      />{" "}
                      <span data-v-eb8371ae className="topic-title">
                        HTML, CSS
                      </span>
                    </div>
                  </center>{" "}
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn-icons-png.flaticon.com/512/9414/9414296.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Website Development
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn-icons-png.flaticon.com/512/2721/2721287.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Python Concepts
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn-icons-png.flaticon.com/512/2083/2083213.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Machine Learning
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn-icons-png.flaticon.com/512/2083/2083213.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Artifiicial Intelligence and Many More
                    </div>
                  </div>
                 
                </div>

                <div data-v-eb8371ae className="course-step-container">
                  <center data-v-eb8371ae>
                    <div data-v-eb8371ae className="course-header-container">
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://e7.pngegg.com/pngimages/588/224/png-clipart-ap-computer-science-principles-advanced-placement-science-angle-text-thumbnail.png"
                        alt="teacher"
                        className="topic-img"
                      />{" "}
                      <span data-v-eb8371ae className="topic-title">
                        Ap Computer Science
                      </span>
                    </div>
                  </center>{" "}
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Introduction to Java
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="   Oops concept "
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Oops Concept
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://www.svgrepo.com/show/310633/channel-follow.svg"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Sorting and Searching
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://static.thenounproject.com/png/2732962-200.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Array
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn.icon-icons.com/icons2/3404/PNG/512/recursive_connect_icon_215870.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Recursions
                    </div>
                  </div>
                </div>

                
              </div>
            )}
         
          </div>
        </div>
      </div>
      {/* maths tabs */}

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
                  Coding 
                </div>{" "}
                <div className="enroll-description" data-v-0a6dbf09>
                  According to industry experts, 80% of jobs in 2030 will rely
                  on coding skills. Don't just prepare for the future – shape
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
                  Choose your mentor of choice from 200+ mentors as well as your
                  preferred time slot
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
            href="#education-contact"
            data-toggle="modal"
            aria-current="page"
            className="inline-block items-center font-semibold flex-1 justify-center text-white border-0 hero-btn px-8 focus:outline-none text-lg sweep-hero-orange sweep-to-right nuxt-link-exact-active nuxt-link-active"
            data-v-0a6dbf09
          >
            Book a Free Trial Class
            </a>
        </div>
      </div>
      <div style={containerStyle}>
        <div style={innerDivStyle}>
          <h1 style={headingStyle}>Why Choose Our Coding Tutorials?</h1>
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>


      {/* footer */}
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
                  Step into a world of possibilities with us! Explore the magic
                  of numbers, unravel scientific wonders, and dive deep into
                  coding. Join us on this incredible journey.
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
                              <div className="fsize-60 num">{coursesCount}</div>
                              <p className="name-inner">courses</p>
                            </div>
                          </div>
                          <div className="col-sm-3 col-xs-6">
                            <div className="progress-bar-number">
                              <div className="fsize-60 num">{membersCount}</div>
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
                    Phone1: +918469092774
                    <br />
                    Phone2:+91-6006474119
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
<WhatsAppButton />
<WhatsAppButton1 />
<a
          href="#"
          id="toTop"
          className="theme-bg-gradient color-white"
          style={{ display: "inline" }}
        >
          <IoIosArrowUp style={{ marginTop: "6px" }} />
        </a>
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
    </>
  );
};

export default Coding;
