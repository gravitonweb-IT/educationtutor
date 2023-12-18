import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import p2 from "../componants/assets/p2.png";
import Faq from "react-faq-component";
import close from "./assets/images/icons/close-icon.png";
import WhatsAppButton from "../componants/WhatsAppButton";
import WhatsAppButton1 from "../componants/WhatsAppButton1";
import { IoIosArrowUp } from "react-icons/io";
import logo3 from "../componants/assets/images/logo3.jpg";
import { FaInstagram } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
const Competative = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

 // You can return null or any other component here if needed

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
        title: " Proven Track Record:",
        content: ` 

        Join a legacy of success! Our experienced tutors boast a track record of helping students excel in competitive exams, opening doors to top-tier universities and scholarship opportunities.  `,
      },
      {
        title: " Comprehensive Exam Coverage",
        content:
          "PSAT, SAT, ACT, NAPLAN, Olympiads – we cover them all! Our comprehensive exam preparation ensures that students are well-equipped to face the unique challenges of each test. ",
      },
      {
        title: "Expert Tutors with Specialized Knowledge",
        content: `Benefit from the expertise of tutors who specialize in the intricacies of each exam. Our team is dedicated to staying abreast of the latest trends and updates to provide the most relevant guidance.  `,
      },
      {
        title: "Strategic Test-Taking Strategies:",
        content: `It's not just about knowing the content; it's about mastering the art of test-taking. Our tutors impart strategic approaches that help students navigate exams with confidence.  `,
      },
      {
        title: "Tailored Approach",
        content: ` Personalized learning plans that address individual strengths and areas for improvement.  `,
      },
      {
        title: "  Innovative Teaching Methods",
        content: ` Engaging lessons that go beyond textbooks, fostering a deep understanding of exam concepts.   `,
      },
      {
        title: " Adaptive Learning",
        content: `  Evolving with the dynamic nature of exams, ensuring students are well-prepared for any changes in format or content.  `,
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
                    <Link to="/Competative">Competitive Exam</Link>
                  </div>
                </li>

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
                {/* <li>
                  <a data-toggle="modal" data-target="#education-contact">
                    Contact
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* banner part */}
      <div className="container">
        <div className="row" style={{ marginTop: "90px" }}>
          <div
            className="col-md-6 mx-auto"
            style={{ marginTop: "90px", padding: "20px" }}
          >
            <h1>
              Welcome to EduFusion Online Tutoring – Your Passport to Academic
              Excellence!
            </h1>
            <p>
              Are you prepared to conquer the challenges of SAT, PSAT, ACT, AP
              exams, or university-level courses? Dive into the world of
              EduFusion, where academic success is not just a goal; it's a
              journey!{" "}
            </p>
            <p>Elevate Your Learning Experience with EduFusion!</p>
            {/* <button type="button">Enquire Now</button> */}
          </div>
          <div
            className="col-md-6 "
            style={{
              marginTop: "90px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="https://assets.telegraphindia.com/telegraph/2022/Aug/1660043555_untitled.jpg"
              alt="Image"
            />
          </div>
        </div>
      </div>

      {/* banner part */}

      {/* counterstart */}

      <div
        className="section progress-bars section-padding"
        style={{ marginTop: "60px" }}
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

      {/* faq */}
      <div style={containerStyle}>
        <div style={innerDivStyle}>
          <h1 style={headingStyle}>Why Choose Our Coding Tutorials?</h1>
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>

      {/* faq */}

      {/* cards */}
      <div
        className="container d-flex flex-column align-items-center justify-content-center vh-100"
        style={{ marginTop: "100px" }}
      >
        <h1 style={{ textAlign: "center" }}>Competitive Courses</h1>
        <p style={{ textAlign: "center" }}>
          The Mathematics section of the SAT is designed to assess your
          understanding of key math
          <br /> concepts and your ability to apply them in problem-solving.
          Here's a deeper breakdown of the math content on the SAT:
        </p>
        <div className="row" style={{ marginTop: "40px" }}>
          {/* Card 1 */}
          <div className="col-md-4 menu">
            <div
              className="card "
              style={{
                border: "1px solid blue",
                padding: "16px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "30px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Heart of Algebra
                </h5>

                <p className="card-text">
                  Focuses on linear equations and systems of linear equations.
                </p>
                <p className="card-text">
                  Involves solving equations and inequalities, understanding the
                  properties of linear functions, and analyzing and interpreting
                  linear equations and inequalities.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 menu">
            <div
              className="card"
              style={{
                border: "1px solid blue",
                padding: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "30px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Problem Solving and Data Analysis
                </h5>
                <p className="card-text">
                  Tests your ability to use ratios, percentages, and
                  proportional reasoning to solve real-world problems.
                </p>
                <p className="card-text">
                  Requires interpretation and analysis of data presented in
                  various formats, such as charts and graphs.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 menu">
            <div
              className="card"
              style={{
                border: "1px solid blue",
                padding: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "30px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Passport to Advanced Math
                </h5>
                <p className="card-text">
                  Emphasizes more complex mathematical concepts, including
                  quadratic and higher-order equations.
                </p>
                <p className="card-text">
                  Covers topics such as polynomials, functions, and radical and
                  exponential equations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "40px" }}>
          {/* Card 1 */}
          <div className="col-md-4 menu">
            <div
              className="card"
              style={{
                border: "1px solid blue",
                padding: "14px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "30px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Additional Topics in Math
                </h5>
                <p className="card-text">
                  Spans a range of topics from geometry, trigonometry, and the
                  arithmetic of complex numbers.
                </p>
                <p className="card-text">
                  Geometry questions may involve properties of shapes,
                  coordinate geometry, and the Pythagorean theorem.
                </p>
                <p className="card-text">
                  Trigonometry questions may cover ratios, angles, and the
                  properties of trigonometric functions.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 menu">
            <div
              className="card"
              style={{
                border: "1px solid blue",
                padding: "9px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "30px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Calculator and No-Calculator Sections
                </h5>
                <p className="card-text">
                  The SAT Math test is divided into calculator-allowed and
                  no-calculator sections.
                </p>
                <p className="card-text">
                  The calculator section assesses your ability to apply
                  mathematical concepts in a more complex setting, whereas the
                  no-calculator section focuses on problem-solving and
                  mathematical reasoning without the aid of a
                  calculator.calculator use or grid-in questions!
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 menu">
            <div
              className="card"
              style={{
                border: "1px solid blue",
                padding: "14px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "30px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Grid-In Questions
                </h5>
                <p className="card-text">
                  In addition to multiple-choice questions, the SAT includes
                  grid-in questions where you enter the answer directly rather
                  than choosing from provided options.
                </p>
                <p>
                  It seems like your question is a bit unclear. Could you please
                  provide more details or clarify what you're looking for
                  related to SAT grid-in questions and the mention of "3
                  points"? I'll do my best to assist you once I have more
                  information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* enroll */}
      <div className="enroll-wrapper" data-v-0a6dbf09>
        <div
          data-aos="fade-up"
          data-aos-duration={1000}
          className="title-container aos-init aos-animate"
          data-v-0a6dbf09
        >
          <h2 className="title" data-v-0a6dbf09>
            A Simple 3-Step Process To Enroll Your Kid to Any Competitive Course
          </h2>
        </div>{" "}
        <div className="enroll-container" data-v-0a6dbf09>
          <div className="enroll-box" data-v-0a6dbf09>
            <div data-v-0a6dbf09>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1134/1134189.png"
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
                  Competitive Course
                </div>{" "}
                <div className="enroll-description" data-v-0a6dbf09>
                  Are you prepared to conquer the challenges of SAT, PSAT, ACT,
                  AP exams, or university-level courses
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="enroll-box" data-v-0a6dbf09>
            <div data-v-0a6dbf09>
              <img
                src="https://www.shutterstock.com/image-vector/abstract-red-grungy-free-trial-260nw-1988417402.jpg"
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
                  Choose your mentor of choice from 200+ mentors as well as your
                  preferred time slot
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="enroll-box" data-v-0a6dbf09>
            <div data-v-0a6dbf09>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3663/3663712.png"
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
      {/* enroll */}

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
                    <p> Email: edufusiontutor@gmail.com</p>
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

export default Competative;
