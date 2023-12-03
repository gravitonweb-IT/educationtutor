import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
// import p2 from "../componants/assets/p2.png";
import logo3 from "../componants/assets/images/logo3.jpg";
import Faq from "react-faq-component";
import WhatsAppButton from "../componants/WhatsAppButton";
import WhatsAppButton1 from "../componants/WhatsAppButton1";
import { IoIosArrowUp } from "react-icons/io";
import close from "./assets/images/icons/close-icon.png";
const Science = () => {
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
  // const [activeTab2, setActiveTab2] = useState(2);
  // const handleTabClick2 = (tabName) => {
  //   setActiveTab2(tabName);
  // };

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
        title: "Personalized Learning for Future Leaders",
        content: `Embark on a journey of personalized learning, guided by experienced tutors passionate about shaping the future leaders of science. `,
      },
      {
        title: " Top-notch Tutors:",
        content:
          "Learn from the best! Our team of qualified and passionate science tutors are dedicated to your success. They bring real-world expertise to make science come alive.  ",
      },
      {
        title: "Flexibility in Scheduling:",
        content: `Busy schedule? No problem! Enjoy the convenience of scheduling sessions at times that suit you. Learning science has never been this flexible.   `,
      },
      {
        title: "Interactive Learning Tools",
        content: ` Immerse yourself in a world of interactive simulations and virtual labs. Explore science concepts in a hands-on, engaging way from the comfort of your home. `,
      },
      {
        title: "Boost Your Confidence",
        content: `Overcome challenges with personalized feedback and guatidance. Build confidence in your scientific abilities and ace your exams with flying colors. .  `,
      },
      //   {
      //     title: " Enroll Now and Code Your Way to Success!",
      //     content: `Ready to be at the forefront of the digital revolution? Contact us today to unlock the power of coding and secure a future where opportunities are limitless.  `
      // },
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
  const [activeTab2, setActiveTab2] = useState(2);
  const [isCardVisible, setCardVisibility] = useState(false);

  // useEffect to trigger the card visibility on screen refresh
  useEffect(() => {
    setCardVisibility(true);
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  const handleTabClick2 = (tabName) => {
    setActiveTab2(tabName);
    setCardVisibility(!isCardVisible);
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
                  <a data-toggle="modal" data-target="#education-contact">
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
        <div className="row">
          <div
            className="col-md-6 mx-auto"
            style={{ marginTop: "130px", padding: "20px" }}
          >
            <h1>
              Unlock the Wonders of Science With Our Exclusive
              <br />
              1:1 Online Tuitions!
            </h1>
            <p>
              Are you ready to embark on a journey of discovery and excellence
              in science education? Look no further! Our tailored 1:1 online
              science tuition offer an unparalleled learning experience that
              goes beyond the ordinary.{" "}
            </p>
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
              src="https://media.istockphoto.com/id/1179433703/vector/little-students-doing-chemical-experiment.jpg?s=612x612&w=0&k=20&c=pKRWUGuEBrhT4SV5qBHC3dZwq6USU6bEwCV9UoyYCko="
              alt="Image"
            />
          </div>
        </div>
      </div>

      {/* banner part */}

      {/* counterstart */}

      <div
        className="section progress-bars section-padding"
        style={{ marginTop: "90px" }}
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
                      Students Taught{" "}
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
                      Classes Taken{" "}
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
                      Registered Mentors{" "}
                    </p>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="progress-bar-number">
                    <div className="fsize-40 num" style={{ color: "black" }}>
                      {countryCount}
                    </div>
                    <p className="name-inner" style={{ color: "black" }}>
                      Country Presence
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

      <div data-v-0a33574d className="container course-section-container my-10">
        <div data-v-0a33574d className="course-heading-section">
          <div
            data-v-0a33574d
            className="w-full flex flex-col-reverse md:flex-row"
          >
            <div data-v-0a33574d className="w-full relative">
              <div data-v-0a33574d className="course-title">
                <h2 data-v-0a33574d className="heading">
                  Science Courses for Every Grade
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
                    Grade 3-5
                  </span>
                  <span
                    data-v-0a33574d
                    className={` step tab ${activeTab2 === 2 ? "active" : ""}`}
                    onClick={() => handleTabClick2(2)}
                  >
                    Grade 6-7
                  </span>
                  <span
                    data-v-0a33574d
                    className={` step tab ${activeTab2 === 3 ? "active" : ""}`}
                    onClick={() => handleTabClick2(3)}
                  >
                    Grade 8-9
                  </span>
                  <span
                    data-v-0a33574d
                    className={` step tab ${activeTab2 === 4 ? "active" : ""}`}
                    onClick={() => handleTabClick2(4)}
                  >
                    Grade 10-12
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
              <div data-v-eb8371ae className="maths-topic-container" style={{ 
                display: isCardVisible ? 'flex' : 'none',
                flexDirection: 'column',
                }} >
                <div data-v-eb8371ae className="course-step-container">
                  <center data-v-eb8371ae>
                    <div data-v-eb8371ae className="course-header-container">
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://cdn-icons-png.flaticon.com/512/2573/2573871.png"
                        alt="teacher"
                        className="topic-img"
                      />{" "}
                      <span data-v-eb8371ae className="topic-title">
                        Environment Changes
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
                        src="https://cdn-icons-png.flaticon.com/512/8191/8191390.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Matter
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://cdn-icons-png.flaticon.com/512/3208/3208119.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Energy
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://www.shutterstock.com/image-vector/cell-icons-600nw-670596565.jpg"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Structure In Living Being
                      </div>
                    </div>
                    <div
                      data-v-eb8371ae
                      className="course-step-inner-container"
                    >
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://cdn-icons-png.flaticon.com/512/2106/2106448.png"
                        alt="teacher"
                        className="course-img"
                      />{" "}
                      <div data-v-eb8371ae className="course-step-info">
                        Chemical Reaction and Many More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab2 === 2 && (
              <div data-v-eb8371ae className="maths-topic-container"style={{ 
                display: isCardVisible ? 'flex' : 'none',
                flexDirection: 'column',}}>
                <div data-v-eb8371ae className="course-step-container">
                  <center data-v-eb8371ae>
                    <div data-v-eb8371ae className="course-header-container">
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://cdn-icons-png.flaticon.com/512/947/947683.png"
                        alt="teacher"
                        className="topic-img"
                      />{" "}
                      <span data-v-eb8371ae className="topic-title">
                        Solar System
                      </span>
                    </div>
                  </center>{" "}
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://w7.pngwing.com/pngs/731/427/png-transparent-metal-scrap-computer-icons-steel-metal-s-angle-rectangle-steel.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Metals and Non-Metals
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://w7.pngwing.com/pngs/731/427/png-transparent-metal-scrap-computer-icons-steel-metal-s-angle-rectangle-steel.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Plant Tissue
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn-icons-png.flaticon.com/512/4176/4176652.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Friction and Its Resistance
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn-icons-png.flaticon.com/512/2286/2286215.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Magnetism and Many More
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab2 === 3 && (
              <div data-v-eb8371ae className="maths-topic-container" style={{ 
                display: isCardVisible ? 'flex' : 'none',
                flexDirection: 'column',}}>
                <div data-v-eb8371ae className="course-step-container">
                  <center data-v-eb8371ae>
                    <div data-v-eb8371ae className="course-header-container">
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://cdn1.byjus.com/wp-content/uploads/2020/02/Electric-Circuit-and-Electrical-Symbols-2.png"
                        alt="teacher"
                        className="topic-img"
                      />{" "}
                      <span data-v-eb8371ae className="topic-title">
                        Electric Currents and It’s Types
                      </span>
                    </div>
                  </center>{" "}
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn-icons-png.flaticon.com/512/5449/5449557.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      The Cell
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://static.thenounproject.com/png/4133942-200.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Reflection of Light
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://static.thenounproject.com/png/3202284-200.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Force and Gravitation
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnWY7mt_EQpe4Mn5ikdLjTNHRQpqnMS58S4tIi8q5iXrx0OBTRd-FVOt6GV5ipkpGvbDM&usqp=CAU"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Human Impact and Many More
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
              <div data-v-eb8371ae className="maths-topic-container" style={{ 
                display: isCardVisible ? 'flex' : 'none',
                flexDirection: 'column',}}>
                <div data-v-eb8371ae className="course-step-container">
                  <center data-v-eb8371ae>
                    <div data-v-eb8371ae className="course-header-container">
                      <img
                        data-v-eb8371ae
                        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                        src="https://static.thenounproject.com/png/1607110-200.png"
                        alt="teacher"
                        className="topic-img"
                      />{" "}
                      <span data-v-eb8371ae className="topic-title">
                        Elements and Compound
                      </span>
                    </div>
                  </center>{" "}
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20230129113820/Base.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Acid, Bases and Salt
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://static.thenounproject.com/png/1849509-200.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Oscillation and Waves
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://cdn-icons-png.flaticon.com/512/11098/11098327.png"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Thermodynamics
                    </div>
                  </div>
                  <div data-v-eb8371ae className="course-step-inner-container">
                    <img
                      data-v-eb8371ae
                      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvufbcRgzGQrg21Uwhch-vifp3G9dv-EfTkaYEwTS6e1KHEd47bhi6DtOsRnzXrFWTjg&usqp=CAU"
                      alt="teacher"
                      className="course-img"
                    />{" "}
                    <div data-v-eb8371ae className="course-step-info">
                      Projectile and Circular Motion and Many More
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
            A Simple 3-Step Process To Enroll Your Kid to Science Course
          </h2>
        </div>{" "}
        <div className="enroll-container" data-v-0a6dbf09>
          <div className="enroll-box" data-v-0a6dbf09>
            <div data-v-0a6dbf09>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5205/5205074.png"
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
                  Science Courses
                </div>{" "}
                <div className="enroll-description" data-v-0a6dbf09>
                  Are you ready to embark on a journey of discovery and
                  excellence in science education? Look no further!
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

      <div style={containerStyle}>
        <div style={innerDivStyle}>
          <h1 style={headingStyle}>Why Choose Edufusion Science Tuitions?</h1>
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

export default Science;
