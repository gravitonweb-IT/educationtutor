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
// import anime from 'animejs';
const Home = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
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
  useEffect(() => {
    const animateCounter = (setter, to) => {
      let currentCount = 0;
      const increment = to / 40;

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
  return (
    <div>
      <>
        <header>
          {/* Nav Menu Starts */}
          <nav className="navbar default nav-mob">
            <div className="container mob-logo">
              <div className="navbar-header col-sm-2 tablet-logo">
                <button
                  type="button"
                  className="navbar-toggle mob-menu"
                  data-toggle="collapse"
                  data-target="#myNavbar"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                {/* 5* Logo */}
                <a href="#education-home" className="brand-logo">
                  <img src="./assets/images/logo.png" alt="karbar logo" />
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
                    <a href="#education-teachers">Teachers</a>
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
                  <img src={main} alt />
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
                      A modern and unique style to make your Educational
                      platform standout. natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus mus.
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
                    "-webkit-animation-duration": "2s",
                    "animation-duration": "2s",
                    "-webkit-animation-name": "_fadeIn",
                    "animation-name": "_fadeIn",
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
                            href="#course-item-1"
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="true"
                          >
                            <div
                              className="ia-icon theme-bg-gradient mt25"
                              style={{ transform: "rotate(-44deg)" }}
                            >
                              <FaRegSnowflake />
                            </div>
                          </a>
                        </li>
                        <li className="col-lg-2 col-md-2">
                          <a
                            href="#course-item-2"
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="false"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <FaFileCode
                                style={{ transform: "rotate(-44deg)" }}
                              />
                            </div>
                          </a>
                        </li>
                        <li className="col-lg-2 col-md-2">
                          <a
                            href="#course-item-3"
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="false"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <FaCode style={{ transform: "rotate(-44deg)" }} />
                            </div>
                          </a>
                        </li>
                        <li className="col-lg-2 col-md-2">
                          <a
                            href="#course-item-4"
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="false"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <BiSolidCertification
                                style={{ transform: "rotate(-44deg)" }}
                              />
                            </div>
                          </a>
                        </li>
                        <li className="col-lg-2 col-md-2">
                          <a
                            href="#course-item-5"
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="false"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <FaRegCreditCard
                                style={{ transform: "rotate(-44deg)" }}
                              />
                            </div>
                          </a>
                        </li>
                        <li className="col-lg-2 col-md-2">
                          <a
                            href="#course-item-6"
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="false"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <FaCamera
                                style={{ transform: "rotate(-44deg)" }}
                              />
                            </div>
                          </a>
                        </li>
                        {/* End course tab button */}
                      </ul>
                    </div>
                    <div className="tab-content relative background-white mt100 bdrs-10">
                      {/* Start Single tab content */}
                      <div
                        className="tab-pane fade text-left clearfix active in"
                        id="course-item-1"
                      >
                        <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                          <div className="table mb40">
                            <div className="title-bl table-cell valign-middle">
                              <div className="title color-2">
                                <span>Nural Networking</span>
                              </div>
                              <div className="subtitle fweight-600 color-4">
                                Make your courses standout
                              </div>
                            </div>
                          </div>
                          <p className="lheight-30">
                            Hamburger pork beef shank turducken drumstick pork
                            loin. Pork short ribs rump fatback capicola ham
                            strip steak jowl filet mignon buffalo alcatra swine
                            t-bone. Alcatra capicola tenderloin, jerky filet
                            mignon pancetta.
                          </p>
                          <ul className="list1">
                            <li>
                              <span className="table-cell valign-middle">
                                Pig swine prosciutto rump pork chop
                              </span>
                            </li>
                            <li>
                              <span className="table-cell valign-middle">
                                Tail spare ribs capicola flank shank
                              </span>
                            </li>
                            <li>
                              <span className="table-cell valign-middle">
                                Beef ribs sirloin cupim frankfurter
                              </span>
                            </li>
                          </ul>
                          {/* button */}
                          <div className="flex-1">
                            <button className="button button-mat border-gradient bdrs-10 lheight-50 color-white fsize-14 fweight-600 btn-1">
                              <span className="color-2 button-text">
                                START LEARN NOW
                              </span>
                            </button>
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
                                  "-webkit-transform":
                                    "translate3d(0px, 0px, 0px)",
                                  "-ms-transform": "translate3d(0px, 0px, 0px)",
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
                      {/* End Single tab content */}
                      {/* Start Single tab content */}
                      <div
                        className="tab-pane fade text-left clearfix"
                        id="course-item-2"
                      >
                        <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                          <div className="table mb40">
                            <div className="title-bl table-cell valign-middle">
                              <div className="title color-2">
                                <span>Learning PHP</span>
                              </div>
                              <div className="subtitle fweight-600 color-4">
                                Make your courses standout
                              </div>
                            </div>
                          </div>
                          <p className="lheight-30">
                            Hamburger pork beef shank turducken drumstick pork
                            loin. Pork short ribs rump fatback capicola ham
                            strip steak jowl filet mignon buffalo alcatra swine
                            t-bone. Alcatra capicola tenderloin, jerky filet
                            mignon pancetta.
                          </p>
                          <ul className="list1">
                            <li className="list-theme-color">
                              <span className="table-cell valign-middle">
                                Pig swine prosciutto rump pork chop
                              </span>
                            </li>
                            <li className="list-theme-color">
                              <span className="table-cell valign-middle">
                                Tail spare ribs capicola flank shank
                              </span>
                            </li>
                            <li className="list-theme-color">
                              <span className="table-cell valign-middle">
                                Beef ribs sirloin cupim frankfurter
                              </span>
                            </li>
                          </ul>
                          {/* button */}
                          <div className="flex-1">
                            <button className="button button-mat border-gradient bdrs-10 lheight-50 color-white fsize-14 fweight-600 btn-1">
                              <span className="color-2 button-text">
                                START LEARN NOW
                              </span>
                            </button>
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
                                  "-webkit-transform":
                                    "translate3d(0px, 0px, 0px)",
                                  "-ms-transform": "translate3d(0px, 0px, 0px)",
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
                      {/* End Single tab content */}
                      {/* Start Single tab content */}
                      <div
                        className="tab-pane fade text-left clearfix"
                        id="course-item-3"
                      >
                        <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                          <div className="table mb40">
                            <div className="title-bl table-cell valign-middle">
                              <div className="title color-2">
                                <span>Learning Python</span>
                              </div>
                              <div className="subtitle fweight-600 color-4">
                                Make your courses standout
                              </div>
                            </div>
                          </div>
                          <p className="lheight-30">
                            Hamburger pork beef shank turducken drumstick pork
                            loin. Pork short ribs rump fatback capicola ham
                            strip steak jowl filet mignon buffalo alcatra swine
                            t-bone. Alcatra capicola tenderloin, jerky filet
                            mignon pancetta.
                          </p>
                          <ul className="list1">
                            <li>
                              <span className="table-cell valign-middle">
                                Pig swine prosciutto rump pork chop
                              </span>
                            </li>
                            <li>
                              <span className="table-cell valign-middle">
                                Tail spare ribs capicola flank shank
                              </span>
                            </li>
                            <li>
                              <span className="table-cell valign-middle">
                                Beef ribs sirloin cupim frankfurter
                              </span>
                            </li>
                          </ul>
                          {/* button */}
                          <div className="flex-1">
                            <button className="button button-mat border-gradient bdrs-10 lheight-50 color-white fsize-14 fweight-600 btn-1">
                              <span className="color-2 button-text">
                                START LEARN NOW
                              </span>
                            </button>
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
                                  "-webkit-transform":
                                    "translate3d(0px, 0px, 0px)",
                                  "-ms-transform": "translate3d(0px, 0px, 0px)",
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
                      {/* End Single tab content */}
                      {/* Start Single tab content */}
                      <div
                        className="tab-pane fade text-left clearfix"
                        id="course-item-4"
                      >
                        <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                          <div className="table mb40">
                            <div className="title-bl table-cell valign-middle">
                              <div className="title color-2">
                                <span>Creative Design</span>
                              </div>
                              <div className="subtitle fweight-600 color-4">
                                Make your courses standout
                              </div>
                            </div>
                          </div>
                          <p className="lheight-30">
                            Hamburger pork beef shank turducken drumstick pork
                            loin. Pork short ribs rump fatback capicola ham
                            strip steak jowl filet mignon buffalo alcatra swine
                            t-bone. Alcatra capicola tenderloin, jerky filet
                            mignon pancetta.
                          </p>
                          <ul className="list1">
                            <li>
                              <span className="table-cell valign-middle">
                                Pig swine prosciutto rump pork chop
                              </span>
                            </li>
                            <li>
                              <span className="table-cell valign-middle">
                                Tail spare ribs capicola flank shank
                              </span>
                            </li>
                            <li>
                              <span className="table-cell valign-middle">
                                Beef ribs sirloin cupim frankfurter
                              </span>
                            </li>
                          </ul>
                          {/* button */}
                          <div className="flex-1">
                            <button className="button button-mat border-gradient bdrs-10 lheight-50 color-white fsize-14 fweight-600 btn-1">
                              <span className="color-2 button-text">
                                START LEARN NOW
                              </span>
                            </button>
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
                                  "-webkit-transform":
                                    "translate3d(0px, 0px, 0px)",
                                  "-ms-transform": "translate3d(0px, 0px, 0px)",
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
                      {/* End Single tab content */}
                      {/* Start Single tab content */}
                      <div
                        className="tab-pane fade text-left clearfix"
                        id="course-item-5"
                      >
                        <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                          <div className="table mb40">
                            <div className="title-bl table-cell valign-middle">
                              <div className="title color-2">
                                <span>HTML5/CSS3 Essentials</span>
                              </div>
                              <div className="subtitle fweight-600 color-4">
                                Make your courses standout
                              </div>
                            </div>
                          </div>
                          <p className="lheight-30">
                            Hamburger pork beef shank turducken drumstick pork
                            loin. Pork short ribs rump fatback capicola ham
                            strip steak jowl filet mignon buffalo alcatra swine
                            t-bone. Alcatra capicola tenderloin, jerky filet
                            mignon pancetta.
                          </p>
                          <ul className="list1">
                            <li>
                              <span className="table-cell valign-middle">
                                Pig swine prosciutto rump pork chop
                              </span>
                            </li>
                            <li>
                              <span className="table-cell valign-middle">
                                Tail spare ribs capicola flank shank
                              </span>
                            </li>
                            <li>
                              <span className="table-cell valign-middle">
                                Beef ribs sirloin cupim frankfurter
                              </span>
                            </li>
                          </ul>
                          {/* button */}
                          <div className="flex-1">
                            <button className="button button-mat border-gradient bdrs-10 lheight-50 color-white fsize-14 fweight-600 btn-1">
                              <span className="color-2 button-text">
                                START LEARN NOW
                              </span>
                            </button>
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
                                  "-webkit-transform":
                                    "translate3d(0px, 0px, 0px)",
                                  "-ms-transform": "translate3d(0px, 0px, 0px)",
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
                      {/* End Single tab content */}
                      {/* Start Single tab content */}
                      <div
                        className="tab-pane fade text-left clearfix"
                        id="course-item-6"
                      >
                        <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                          <div className="table mb40">
                            <div className="title-bl table-cell valign-middle">
                              <div className="title color-2">
                                <span>Art of Photography</span>
                              </div>
                              <div className="subtitle fweight-600 color-4">
                                Make your courses standout
                              </div>
                            </div>
                          </div>
                          <p className="lheight-30">
                            Hamburger pork beef shank turducken drumstick pork
                            loin. Pork short ribs rump fatback capicola ham
                            strip steak jowl filet mignon buffalo alcatra swine
                            t-bone. Alcatra capicola tenderloin, jerky filet
                            mignon pancetta.
                          </p>
                          <ul className="list1">
                            <li>
                              <span className="table-cell valign-middle">
                                Pig swine prosciutto rump pork chop
                              </span>
                            </li>
                            <li>
                              <span className="table-cell valign-middle">
                                Tail spare ribs capicola flank shank
                              </span>
                            </li>
                            <li>
                              <span className="table-cell valign-middle">
                                Beef ribs sirloin cupim frankfurter
                              </span>
                            </li>
                          </ul>
                          {/* button */}
                          <div className="flex-1">
                            <button className="button button-mat border-gradient bdrs-10 lheight-50 color-white fsize-14 fweight-600 btn-1">
                              <span className="color-2 button-text">
                                START LEARN NOW
                              </span>
                            </button>
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
                                  "-webkit-transform":
                                    "translate3d(0px, 0px, 0px)",
                                  "-ms-transform": "translate3d(0px, 0px, 0px)",
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
                      {/* End Single tab content */}
                    </div>
                  </div>
                </div>
                {/* End course items */}
              </div>
            </div>
          </div>
        </section>
        {/*================================================================================= 
                          END courses
    ==================================================================================*/}

        {/*================================================================================= 
                          START why-choose 
    ==================================================================================*/}
        <section id="education-why-choose" className="why-choose pt100 pb80 ">
          <div className="container">
            <div className="row">
              <div className="why-choose-items">
                <div className="tabs text-center">
                  <div className="tabs-nav">
                    <ul className="list-inline nav nav-tabs fsize-0">
                      {/* why-choose tab buttons */}
                      <li className="active">
                        <a
                          href="#img-why-choose"
                          data-toggle="tab"
                          className="fsize-12 uppercase"
                        >
                          Image
                        </a>
                      </li>
                      <li>
                        <a
                          href="#video-why-choose"
                          data-toggle="tab"
                          className="fsize-12 uppercase"
                        >
                          Video
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content relative background-white plr80 bdrs-10">
                    {/* Start tab content */}
                    <div
                      className="tab-pane fade active in text-left clearfix"
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
                            <p className="d-sm-none">
                              {/* Visible on devices smaller than or equal to small (sm) */}
                              Doner t-bone meatball buffalo bresaola, cow
                              kielbasa short ribs beef
                              <a href="#" className="color-17 td-underline">
                                andouille ground
                              </a>{" "}
                              round cupim prosciutto swine.
                            </p>
                            <p className="d-sm-none">
                              {/* Visible on devices smaller than or equal to small (sm) */}
                              Leberkas drumstick venison kielbasa, shoulder
                              salami picanha frankfurter cupim andouille
                              tenderloin kevin jowl meatloaf. Shoulder
                              landjaeger beef chicken
                              <a href="#" className="color-17 td-underline">
                                ball tip andouille
                              </a>
                              , cow hamburger bresaola swine pork belly chuck
                              short ribs.
                            </p>
                            <p className="d-none d-sm-block">
                              {/* Hidden on devices smaller than small (sm) */}
                              Doner t-bone meatball buffalo bresaola, cow
                              kielbasa short ribs beef
                              <a href="#" className="color-17 td-underline">
                                andouille ground
                              </a>{" "}
                              round cupim prosciutto swine.
                              <br />
                              Leberkas drumstick venison kielbasa, shoulder
                              salami picanha frankfurter cupim andouille
                              tenderloin kevin jowl meatloaf. Shoulder
                              landjaeger beef chicken
                              <a href="#" className="color-17 td-underline">
                                ball tip andouille
                              </a>
                              , cow hamburger bresaola swine pork belly chuck
                              short ribs.
                            </p>
                            <ul className="list1">
                              <li>
                                <span className="table-cell valign-middle">
                                  Reliable and Secure Platform
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Everything is perfectly organized for the
                                  future
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Attach large file easily
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Tons of courses and easy to use and customize
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Reliable and easy setup
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="img-exp">
                              <img src={choose} alt="" className="img-fluid" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End tab content */}
                    {/* Start tab content */}
                    <div
                      className="tab-pane fade text-left clearfix"
                      id="video-why-choose"
                    >
                      <div className="tab-text col-lg-6 col-md-6 col-sm-12 col-xs-12 lheight-30">
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
                        <p>
                          Doner t-bone meatball buffalo bresaola, cow kielbasa
                          short ribs beef
                          <a href="#" className="color-17 td-underline">
                            andouille ground
                          </a>{" "}
                          round cupim prosciutto swine.
                        </p>
                        <p>
                          Leberkas drumstick venison kielbasa, shoulder salami
                          picanha frankfurter cupim andouille tenderloin kevin
                          jowl meatloaf. Shoulder landjaeger beef chicken
                          <a href="#" className="color-17 td-underline">
                            ball tip andouille
                          </a>
                          , cow hamburger bresaola swine pork belly chuck short
                          ribs.
                        </p>
                        <ul className="list1">
                          <li>
                            <span className="table-cell valign-middle">
                              Reliable and Secure Platform
                            </span>
                          </li>
                          <li>
                            <span className="table-cell valign-middle">
                              Everything is perfectly orgainized for future
                            </span>
                          </li>
                          <li>
                            <span className="table-cell valign-middle">
                              Attach large file easily
                            </span>
                          </li>
                          <li>
                            <span className="table-cell valign-middle">
                              Tons of courses and easy to use and customize
                            </span>
                          </li>
                          <li>
                            <span className="table-cell valign-middle">
                              {" "}
                              Reliable and easy setup
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="video-exp">
                          <iframe
                            width="100%"
                            height={400}
                            src="https://www.youtube.com/embed/0fp60iHV7Rk"
                            frameBorder={0}
                            allow="autoplay; encrypted-media"
                            allowFullScreen=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* End tab content */}
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

        <div className="main-teacher-section">
          <h1 className="text-center">Our Teachers</h1>
          <hr className="teacher-horizontal-section" />
          <div className="teacher-section ">
            <div className="teacher-section-content">
              <img
                src="https://codestar.xyz/demo/education/assets/images/teachers/teacher-1.jpg"
                alt=""
                className="teacher-section-image"
              />
              <div>
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
              <div className="contcts-teachers1">
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
              <div className="contcts-teachers2">
                <h3>Sara Nihero</h3>
                <p>Consultant Architect</p>
              </div>
            </div>
          </div>
        </div>

        {/*================================================================================= 
       END TEACHERS
   ==================================================================================*/}

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

        {/*================================================================================= 
                          START TESTIMONIALS  
    ==================================================================================*/}
        <section className=" testimonials__area-2 fix p-relative pt-120 pb-120 ">
          <div className="testimonials__shape"></div>
          <div className="container mt-60">
            <div className="row mb-65">
              <div className="col-xl-12">
                <div className="testimonials__title text-center">
                  <h4
                    className="section__sub-title wow fadeInUp"
                    data-wow-delay=".2s"
                    style={{
                      visibility: "visible",
                      "-webkit-animation-delay": "0.2s",
                      "animation-delay": "0.2s",
                      "-webkit-animation-name": "_fadeInUp",
                      "animation-name": "_fadeInUp",
                    }}
                  >
                    Testimonials{" "}
                  </h4>
                  <h2
                    className="section__title wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      visibility: "visible",
                      "-webkit-animation-delay": "0.3s",
                      "animation-delay": "0.3s",
                      "-webkit-animation-name": "_fadeInUp",
                      "animation-name": "_fadeInUp",
                    }}
                  >
                    <span>What people say</span>
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{
                      visibility: "visible",
                      "-webkit-animation-delay": "0.5s",
                      "animation-delay": "0.5s",
                      "-webkit-animation-name": "_fadeInUp",
                      "animation-name": "_fadeInUp",
                    }}
                  >
                    Draw a line in the sand quick win. My capacity is full. Keep
                    it lean gain alignment we need to future-proof this plan.
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
            <div class="testimonials__container">
              <Slider {...settings1}>
                <div className="testimonials__item ">
                  <div
                    className="testimonials__item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                    data-swiper-slide-index={0}
                    style={{ width: "350px", "margin-right": "30px" }}
                    role="group"
                    aria-label="1 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                        <img decoding="async" src="orchestra.png" alt="image" />
                      </div>
                      <div className="testimonials__text">
                        <p>
                          Synophic system company I'm worked him big experience
                          in company so nice company in word fully maintenance
                          work already done so I'm happy to experience in
                          synophic system company and thanks for synophic.
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text">
                          <h4>Alima Alisha</h4>
                          <span>CEO</span>
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
                    style={{ width: "350px", "margin-right": "30px" }}
                    role="group"
                    aria-label="2 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                        <img
                          decoding="async"
                          src="orchestra.png"
                          alt="image"
                          style={{ width: "300px" }}
                        />
                      </div>
                      <div className="testimonials__text">
                        <p>
                          A professional notary, a pleasant and punctual person,
                          always in a good mood, he will always tell and explain
                          everything intelligently. Pretty good prices. It's
                          always a pleasure to work. It doesn’t require any
                          extra documents.
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text">
                          <h4>David Clark</h4>
                          <span>Marketing Manager</span>
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
                    style={{ width: "350px", "margin-right": "30px" }}
                    role="group"
                    aria-label="3 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                        <img decoding="async" src="orchestra.png" alt="image" />
                      </div>
                      <div className="testimonials__text">
                        <p>
                          Very friendly attitude towards the client and his
                          problems - you can always ask for advice and help even
                          on related issues, and on top of that, high-quality
                          advice on inheritance issues. Never expected to get
                          such a powerful theme
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text">
                          <h4>Moran Sham</h4>
                          <span>Team Leader</span>
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
                    style={{ width: "350px", "margin-right": "30px" }}
                    role="group"
                    aria-label="1 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                        <img decoding="async" src="orchestra.png" alt="image" />
                      </div>
                      <div className="testimonials__text">
                        <p>
                          Synophic system company I'm worked him big experience
                          in company so nice company in word fully maintenance
                          work already done so I'm happy to experience in
                          synophic system company and thanks for synophic.
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>

                        <div className="testimonials__client-text">
                          <h4>Alima Alisha</h4>
                          <span>CEO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 4th */}
                <div>
                  <div
                    className="testimonials__item swiper-slide swiper-slide-active"
                    data-swiper-slide-index={1}
                    style={{ width: "350px", "margin-right": "30px" }}
                    role="group"
                    aria-label="2 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                        <img decoding="async" src="orchestra.png" alt="image" />
                      </div>
                      <div className="testimonials__text">
                        <p>
                          A professional notary, a pleasant and punctual person,
                          always in a good mood, he will always tell and explain
                          everything intelligently. Pretty good prices. It's
                          always a pleasure to work. It doesn’t require any
                          extra documents.
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text">
                          <h4>David Clark</h4>
                          <span>Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 5th */}
                <div>
                  <div
                    className="testimonials__item swiper-slide swiper-slide-next"
                    data-swiper-slide-index={2}
                    style={{ width: "350px", "margin-right": "30px" }}
                    role="group"
                    aria-label="3 / 3"
                  >
                    <div className="testimonials__item-content">
                      <div className="testimonials__logo">
                        <img decoding="async" src="orchestra.png" alt="image" />
                      </div>
                      <div className="testimonials__text">
                        <p>
                          Very friendly attitude towards the client and his
                          problems - you can always ask for advice and help even
                          on related issues, and on top of that, high-quality
                          advice on inheritance issues. Never expected to get
                          such a powerful theme
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text">
                          <h4>Moran Sham</h4>
                          <span>Team Leader</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                          alt=""
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
                          alt=""
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
                          alt=""
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
                    <p className="text-white lheight-30 pb40 ">
                      Phone: 8469092774
                    </p>
                  </a>

                  <a href="mailto:inquiries@edufusion.co.in">
                    <p>Email: inquiries@edufusion.co.in</p>
                  </a>
                </div>
              </div>
              <div className="subscribe-form">
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
                  <span className="font-bold">
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
        {/*================================================================================= 
                          START CONTACT POP-UP  
    ==================================================================================*/}
        {/* Modal */}
        <div id="education-contact" className="modal fade" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <img
                  className="close"
                  data-dismiss="modal"
                  src={close}
                  alt="close"
                />
                <h4 className="modal-title">Get In Touch</h4>
              </div>
              <div className="modal-body">
                {/* contact form */}
                <div className="contact-section">
                  <form
                    method="post"
                    action="assets/bin/mailer.php"
                    className="contact-form signup-form"
                    id="ajax-contact"
                  >
                    <div className="row section-signup semitrans">
                      <div className="col-md-12">
                        {/* name */}
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
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        {/* email */}
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
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        {/* phone number */}
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
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        {/* address */}
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
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        {/* text message */}
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
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        {/* submit button */}
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
                    {/*Result notification */}
                    <div id="error-message" className="text-center" />
                    <div id="form-messages" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
