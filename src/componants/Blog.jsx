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
import logo from "../componants/assets/images/logo3.jpg";
import WhatsAppButton from "../componants/WhatsAppButton";
import WhatsAppButton1 from "../componants/WhatsAppButton1";
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
import coding from "../componants/assets/coding.jpg";
import science from "../componants/assets/science.jpg";
import math from "../componants/assets/maths.jpg";
const Blog = () => {
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
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const toggleText = (index) => {
    setExpandedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const cardContents = [
    {
      title: "Coding is valuable for kids as it",
      intro: "Kid-friendly platforms  ",
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
      title: "Beyond the Stars: Dark Matter Unveiled",
      intro: "Gazing into the cosmos, ",
      readMore: (
        <>
          <p>
            we confront the enigma—dark matter. Elusive, it interacts solely
            through gravity, challenging scientists who infer its presence
            through gravitational effects on visible matter.{" "}
          </p>
          <p>
            {" "}
            Picture the universe as a cosmic ballet, with dark matter as the
            unseen choreographer, maintaining cosmic harmony. Scientists engage
            in cosmic cartography, mapping visible matters distribution.
            Discrepancies reveal dark matters ethereal silhouette, weaving an
            unseen tapestry—the cosmic web—concentrating galaxies along
            invisible threads.
          </p>
          <p>
            As our journey concludes, an invitation extends to all curious
            minds. The cosmos beckons, revealing hidden wonders. Let curiosity
            propel us further into the cosmic unknown, where discovery knows no
            bounds.
          </p>
        </>
      ),
      imageSrc: science,
    },
    {
      title: "Unveiling the Beauty of Mathematics",
      intro: "Dive into the world of math: ",
      readMore: (
        <>
          <h2>Patterns Revealed</h2>
          <p>
            Uncover the beauty of numerical patterns, connecting diverse
            concepts seamlessly.{" "}
          </p>
          <h2>Geometry's Charm</h2>
          <p>
            Explore the elegance of shapes and angles, witnessing the visual
            allure of geometry.{" "}
          </p>
          <h2>Algebra's Power</h2>
          <p>
            Balancing equations and solving mysteries—algebra's artistry in
            real-world precision.{" "}
          </p>
          <h2>Calculus Insight</h2>
          <p>
            Experience the symphony of rates and changes, where calculus unlocks
            profound insights.
          </p>
          <h2>Nature's Equation</h2>
          <p>
            In the natural world, math is the silent language describing the
            universe's beauty.{" "}
          </p>
          <h2>Conclusion</h2>
          <p>
            Celebrate the wonders of mathematics—a language expressing the
            beauty of the world. Unlock secrets within its realm and embrace the
            elegance math offers. Learn Math Online At Home - X Math Education |
            Teaching Methods{" "}
          </p>
        </>
      ),
      imageSrc: math,
    },
  ];
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
      <div
        className="text-center wow fadeIn"
        data-wow-duration="2s"
        style={{
          visibility: "visible",
          animationDuration: "2s",
          animationName: "fadeIn",
          marginTop: "140px",
        }}
      >
        <div className="subtitle">A modern and unique style</div>
        <div className="title color-2 lheight-40 mb30">
          <span style={{ fontSize: "30px", fontWeight: "700" }}>
            Latest from blog<span className="color-15">.</span>
          </span>
        </div>
        <div className="spliter mb40" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Three cards */}
        {cardContents.map((card, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              border: `1px solid ${
                expandedCardIndex === index ? "blue" : "black"
              }`, // Change border color if the card is expanded
              padding: "10px",
              margin: "10px",
              transition: "border 0.3s ease", // Add a smooth transition effect
            }}
          >
            <img
              src={card.imageSrc}
              alt={`Image for ${card.title}`}
              style={{ width: "100%", maxHeight: "270px", objectFit: "cover" }}
            />
            <h1 style={{ fontSize: "20px", fontWeight: "600" }}>
              {card.title}
            </h1>

            <p>
              {card.intro}
              <span id={`points${index}`}>...</span>

              {expandedCardIndex === index && (
                <div id={`moreText${index}`}>{card.readMore}</div>
              )}
            </p>

            <button
              onClick={() => toggleText(index)}
              id={`textButton${index}`}
              style={{ color: "black", fontSize: "20px", fontWeight: "600" }}
            >
              {expandedCardIndex === index ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>

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
    </div>
  );
};

export default Blog;
