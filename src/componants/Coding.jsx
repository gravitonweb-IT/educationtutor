import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import WhatsAppButton from "../componants/WhatsAppButton";
import { IoIosArrowUp } from "react-icons/io";
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
                  src={p2}
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
                  {/* <span
                    data-v-0a33574d
                    className={` step tab ${activeTab2 === 4 ? "active" : ""}`}
                    onClick={() => handleTabClick2(4)}
                  >
                    Grade 7 - 9
                  </span>
                  <span
                    data-v-0a33574d
                    className={` step tab ${activeTab2 === 5 ? "active" : ""}`}
                    onClick={() => handleTabClick2(5)}
                  >
                    Grade 9 - 10
                  </span>
                  <span
                    data-v-0a33574d
                    className={` step tab ${activeTab2 === 6 ? "active" : ""}`}
                    onClick={() => handleTabClick2(6)}
                  >
                    Grade 11 - 12
                  </span> */}
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
                        src="https://d11cte.org/wp-content/uploads/2022/09/Block-Coding-Icon.png"
                        alt="teacher"
                        className="topic-img"
                      />{" "}
                      <span data-v-eb8371ae className="topic-title">
                        Block-based coding
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
                        Loops, variables, operators
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
                        Game development on Play Lab
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
                        Animation using Sprite Lab and many more
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
                      Basic and advanced loops
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
                      Scratch game development
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
                      Advanced game development
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
                      Android application development and many more
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
              <div data-v-eb8371ae className="maths-topic-container">
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
                        Scratch programming
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
                      Artificial intelligence
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
                      ARITHMETIC OPERATIONS
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
                      Machine learning
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
                      Advance web development
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
                      Advance App development and many more
                    </div>
                  </div>
                  {/* <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSt8Mz5nRrXGBueZ2yQTFmiAzCdMb1NRWqr1hqmzrMt3diKg5MUtGtZcxrqv3KUk9dCuQ&usqp=CAU"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      QUADILATERALS , POLYGONS & MANY MORE.
                    </div>
                  </div> */}
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
                      src="https://cdn-icons-png.flaticon.com/512/6947/6947556.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Multiplication tricks
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-beautiful-division-vector-line-icon-png-image_1747675.jpg"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Division Tricks
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn-icons-png.flaticon.com/512/2490/2490315.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Factors tricks
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://i.pinimg.com/originals/d9/a8/cb/d9a8cb1c91195ad7fdbbea276ef24e66.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Fraction tricks and many more
                    </div>
                  </div>
                </div> */}
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
                        src="https://user-images.githubusercontent.com/30186107/29488525-f55a69d0-84da-11e7-8a39-5476f663b5eb.png"
                        alt="teacher"
                        className="topic-img"
                      />{" "}
                      <span data-v-eb8371ae className="topic-title">
                        Html, css
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
                      Website development
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
                      Python concepts
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
                      Machine learning
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
                      Artifiicial intelligence and many more
                    </div>
                  </div>
                  {/* <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn-icons-png.flaticon.com/512/4133/4133386.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Construction and Many More
                    </div>
                  </div> */}
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
                        Ap Computer science
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
                      Introduction to java
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
                      Oops concept
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
                      Sorting and searching
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

                {/* <div data-v-eb8371ae className="course-step-container">
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
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://www.shutterstock.com/image-vector/analyzing-decoding-qr-code-linear-260nw-2373720407.jpg"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Coding and Decoding
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
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
                  <div data-v-eb8371ae className="course-step-inner-container">
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
                  <div data-v-eb8371ae className="course-step-inner-container">
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
                </div> */}
              </div>
            )}
            {/* {activeTab2 === 5 && (
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
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://c8.alamy.com/comp/2FN47CE/math-book-icon-set-in-flat-and-line-style-mathematics-learning-symbol-vector-illustration-2FN47CE.jpg"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      INDICES & POWERS
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://hotcubator.com.au/wp-content/uploads/2019/09/Untitled-design-1.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      SINGLE VARIABLE & BIVARIATE DATA ANALYSIS
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn.corporatefinanceinstitute.com/assets/venn-diagram.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      VENN DIAGRAMS & TWO WAY TABLES
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://w7.pngwing.com/pngs/1001/20/png-transparent-euclid-s-elements-pythagorean-theorem-mathematics-pythagorean-triple-geometry-mathematics.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      EUCLID'S THEOREM
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn-icons-png.flaticon.com/512/4133/4133386.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      SURFACE AREA / VOLUME OF 3D SHAPES
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
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://w7.pngwing.com/pngs/504/833/png-transparent-mathematics-cartoon-geometry-algebra-s-cartoon-multiplication-area-thumbnail.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Quick Algebraic Multiplication
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://prepinsta.com/wp-content/uploads/2023/02/hcf-lcf-solve-quickly.webp"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Fast LCM Tricks
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB64yhOxJ-N-ZNNQOMaelKLcaP9ejVatpn_KMpcdMekiHvo8m1c5xkBAwfce_2xH4arSM&usqp=CAU"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Multiplication Tricks
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://png.pngtree.com/png-vector/20221013/ourmid/pngtree-calendar-icon-logo-2023-date-time-png-image_6310337.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Calendar Tricks
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://e7.pngegg.com/pngimages/63/492/png-clipart-computer-icons-remind-desktop-others-miscellaneous-blue-thumbnail.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Reminder technique by 9 and many more
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab2 === 6 && (
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
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="data:image/jpeg;base64,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"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      COMPLEX NUMBERS
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://w7.pngwing.com/pngs/505/664/png-transparent-mathematics-mathematical-finance-derivative-actuarial-science-function-mathematics-logo-monochrome-number.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      DIFFERENTIAL CALCULUS
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlNshR0fMvBFKBW3XmLwOpyN9mnmb5_xKRw&usqp=CAU"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      APPLICATION OF DERIVATIVES
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src=" https://static.thenounproject.com/png/1924446-200.png "
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      INTEGRAL CALCULUS
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlNshR0fMvBFKBW3XmLwOpyN9mnmb5_xKRw&usqp=CAU"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      LIMTS & DERIVATIVES
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
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://d1e4pidl3fu268.cloudfront.net/3e9b16b6-0962-405a-aa0e-3f21edb5cce2/6fRecurringdecimalstofractions.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Recurring decimals
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://static.thenounproject.com/png/2423473-200.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Auxillary fractions
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://w7.pngwing.com/pngs/278/213/png-transparent-multiplication-sign-mathematics-multiplication-s-blue-angle-text-thumbnail.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Multiplication
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://static.thenounproject.com/png/420754-200.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Addition
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://png.pngtree.com/png-vector/20220131/ourmid/pngtree-math-concept-design-algebra-calculus-formula-vector-png-image_23588134.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Calculus and many more
                    </div>
                  </div>
                </div>
              </div>
            )} */}
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
                  Coding Course
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
