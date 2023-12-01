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
import kids from "../componants/assets/kids.png";
import p2 from "../componants/assets/p2.png";
const Testimonial = () => {
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

  const [teachersCount, setTeachersCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  return (
    <div>
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
                  <Link data-toggle="modal" data-target="#education-contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
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
                        learning. Once a source of fear, math has now become her
                        favorite subject. The foundational concepts are
                        developing impressively, evident in my daughter's
                        ability to solve complex problems effortlessly and
                        swiftly. Thanks to Edufusion for facilitating conceptual
                        learning and helping my child
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
                        an enriching experience for my child. The curriculum is
                        well-structured, offering a comprehensive understanding
                        of coding concepts. Edufusion's instructors are
                        knowledgeable and provide effective guidance, making
                        complex coding principles accessible. which has ignited
                        a genuine interest and proficiency in coding for my
                        child."
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
    </div>
  );
};

export default Testimonial;
