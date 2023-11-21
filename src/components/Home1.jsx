import React from "react";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/responsive.css";
// import "./assets/css/style.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/slick-theme.css";
import "./assets/css/slick.css";
import "./assets/css/style.css";
import choose from "./assets/images/why-choose.png";
import main from "./assets/images/main.png";
import logo from "./assets/images/logo.png";
import teacher1 from "./assets/images/teachers/teacher-1.jpg";
const Home1 = () => {
  return (
    <>
      <header>
        {/*Nav Menu Starts*/}
        <nav className="navbar nav-mob default top-nav-collapse ">
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
                <img src={logo} alt="karbar logo" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              {/* Menu itmes */}
              <ul className="nav navbar-nav pull-right">
                <li className="active">
                  <a href="#education-home">Home</a>
                </li>
                <li className>
                  <a href="#education-courses">courses</a>
                </li>
                <li className>
                  <a href="#education-teachers">Teachers </a>
                </li>
                <li className>
                  <a href="#education-price">Price </a>
                </li>
                <li className>
                  <a href="#education-testimonial">Testimonial</a>
                </li>
                <li className>
                  <a href="#education-blog">Blog</a>
                </li>
                <li className>
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

      {/* banner part */}
      <section id="education-home" className="banner-area theme-bg-gradient">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="banner-device">
                <img src={main} alt="" />
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              {/* Home content */}
              <div className="banner-txt">
                <div className="banner-intro">
                  <h1 className="banner-title">
                    Present Education in a beautiful way with{" "}
                    <span id="area">Attitude</span>
                    <span id="cursor" style={{ opacity: "1" }}>
                      |
                    </span>
                    ...
                  </h1>
                  <p className="color-white lheight-30">
                    A modern and unique style to make your Educational platform
                    standout. A contemporary and distinctive design that
                    elevates your educational platform, making it stand out with
                    a unique and modern aesthetic appeal.
                  </p>
                </div>
                <div className="app-media">
                  <div className="single-media">
                    <a
                      className="popup-vedio"
                      href="https://www.youtube.com/watch?v=0fp60iHV7Rk"
                    >
                      <i className="fa fa-play" />
                      <div className="circle circle-1" />
                      <div className="circle circle-2" />
                    </a>
                    <p className="color-7">Watch Courses Demo Video</p>
                  </div>
                  <div className="single-media">
                    <a href="#">
                      <i className="fa fa-graduation-cap" aria-hidden="true" />
                    </a>
                    <p className="color-7">Start Learning Courses Now</p>
                  </div>
                  <div className="single-media">
                    <a data-toggle="modal" data-target="#education-contact">
                      <i
                        className="fa fa-question-circle-o"
                        aria-hidden="true"
                      />
                    </a>
                    <p className="color-7">Do You Have Any Questions?</p>
                  </div>
                </div>
              </div>
              {/* End Home content */}
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}

      {/* hero section */}
      <section id="education-courses" className="course pt30 pb100">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="text-center wow fadeIn" data-wow-duration="2s">
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
                      <li className="active col-lg-2 col-md-2">
                        <a
                          href="#course-item-1"
                          data-toggle="tab"
                          className="fsize-12 uppercase"
                        >
                          <div className="ia-icon theme-bg-gradient mt25">
                            <i className="fa fa-snowflake-o" />
                          </div>
                        </a>
                      </li>
                      <li className="col-lg-2 col-md-2">
                        <a
                          href="#course-item-2"
                          data-toggle="tab"
                          className="fsize-12 uppercase"
                        >
                          <div className="ia-icon theme-bg-gradient mt25">
                            <i
                              className="fa fa-file-code-o"
                              aria-hidden="true"
                            />
                          </div>
                        </a>
                      </li>
                      <li className="col-lg-2 col-md-2">
                        <a
                          href="#course-item-3"
                          data-toggle="tab"
                          className="fsize-12 uppercase"
                        >
                          <div className="ia-icon theme-bg-gradient mt25">
                            <i className="fa fa-code" aria-hidden="true" />
                          </div>
                        </a>
                      </li>
                      <li className="col-lg-2 col-md-2">
                        <a
                          href="#course-item-4"
                          data-toggle="tab"
                          className="fsize-12 uppercase"
                        >
                          <div className="ia-icon theme-bg-gradient mt25">
                            <i className="fa fa-certificate" />
                          </div>
                        </a>
                      </li>
                      <li className="col-lg-2 col-md-2">
                        <a
                          href="#course-item-5"
                          data-toggle="tab"
                          className="fsize-12 uppercase"
                        >
                          <div className="ia-icon theme-bg-gradient mt25">
                            <i className="fa fa-credit-card" />
                          </div>
                        </a>
                      </li>
                      <li className="col-lg-2 col-md-2">
                        <a
                          href="#course-item-6"
                          data-toggle="tab"
                          className="fsize-12 uppercase"
                        >
                          <div className="ia-icon theme-bg-gradient mt25">
                            <i className="fa fa-camera" aria-hidden="true" />
                          </div>
                        </a>
                      </li>
                      {/* End course tab button */}
                    </ul>
                  </div>
                  <div className="tab-content relative background-white mt100 bdrs-10">
                    {/* Start Single tab content */}
                    <div
                      className="tab-pane fade active in text-left clearfix"
                      id="course-item-1"
                    >
                      <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                        <div className="table mb40">
                          <div className="title-bl table-cell valign-middle">
                            <div className="title color-2">
                              <span>
                                Empowering Minds with Comprehensive Online
                                Education
                              </span>
                            </div>
                            <div className="subtitle fweight-600 color-4">
                              Make your courses standout
                            </div>
                          </div>
                        </div>
                        <p className="lheight-30">
                          Discover an unparalleled online learning experience at
                          our platform, where students delve into interactive
                          mathematics, science, and coding classes. Our courses
                          are designed to ignite curiosity, foster critical
                          thinking, and equip learners with essential skills for
                          the future.
                        </p>
                        <ul className="list1 ">
                          <li>
                            <span className="table-cell valign-middle">
                              Expert-Led Instruction
                            </span>
                          </li>
                          <li>
                            <span className="table-cell valign-middle">
                              Customized Learning Paths
                            </span>
                          </li>
                          <li>
                            <span className="table-cell valign-middle">
                              Interactive and Practical Approach
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
                          <button
                            className="slick-next slick-arrow"
                            aria-label="Next"
                            type="button"
                            style={{}}
                            aria-disabled="false"
                          >
                            Next
                          </button>
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
                          loin. Pork short ribs rump fatback capicola ham strip
                          steak jowl filet mignon buffalo alcatra swine t-bone.
                          Alcatra capicola tenderloin, jerky filet mignon
                          pancetta.
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

                        <div className="flex-1">
                          <button className="button button-mat border-gradient bdrs-10 lheight-50 color-white fsize-14 fweight-600 btn-1">
                            <span className="color-2 button-text">
                              START LEARN NOW
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="course-slider arrow-btn">
                          <div
                            className="course-slider-img"
                            style={{
                              "background-image":
                                "url(https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg)",
                            }}
                          />
                          <div
                            className="course-slider-img"
                            style={{
                              "background-image":
                                "url(https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg)",
                            }}
                          />
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
                          loin. Pork short ribs rump fatback capicola ham strip
                          steak jowl filet mignon buffalo alcatra swine t-bone.
                          Alcatra capicola tenderloin, jerky filet mignon
                          pancetta.
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
                        <div className="course-slider arrow-btn">
                          <div
                            className="course-slider-img"
                            style={{
                              "background-image":
                                "url(https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg)",
                            }}
                          />
                          <div
                            className="course-slider-img"
                            style={{
                              "background-image":
                                "url(https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg)",
                            }}
                          />
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
                          loin. Pork short ribs rump fatback capicola ham strip
                          steak jowl filet mignon buffalo alcatra swine t-bone.
                          Alcatra capicola tenderloin, jerky filet mignon
                          pancetta.
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
                        <div className="course-slider arrow-btn">
                          <div
                            className="course-slider-img"
                            style={{
                              "background-image":
                                "url(https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg)",
                            }}
                          />
                          <div
                            className="course-slider-img"
                            style={{
                              "background-image":
                                "url(https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg)",
                            }}
                          />
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
                          loin. Pork short ribs rump fatback capicola ham strip
                          steak jowl filet mignon buffalo alcatra swine t-bone.
                          Alcatra capicola tenderloin, jerky filet mignon
                          pancetta.
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
                        <div className="course-slider arrow-btn">
                          <div
                            className="course-slider-img"
                            style={{
                              "background-image":
                                "url(https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg)",
                            }}
                          />
                          <div
                            className="course-slider-img"
                            style={{
                              "background-image":
                                "url(https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg)",
                            }}
                          />
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
                          loin. Pork short ribs rump fatback capicola ham strip
                          steak jowl filet mignon buffalo alcatra swine t-bone.
                          Alcatra capicola tenderloin, jerky filet mignon
                          pancetta.
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
                        <div className="course-slider arrow-btn">
                          <div
                            className="course-slider-img"
                            style={{
                              "background-image":
                                "url(https://codestar.xyz/demo/education/assets/images/course/course-img-1.jpg)",
                            }}
                          />
                          <div
                            className="course-slider-img"
                            style={{
                              "background-image": "url(course-img-1.jpg)",
                            }}
                          />
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
      {/* hero section end */}

      {/* section1 start */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-justify" style={{ marginTop: "90px" }}>
            <h1>Why choose us.</h1>
            <p>
              Our school stands out for its commitment to excellence. With
              experienced educators, a holistic learning environment, and
              cutting-edge facilities, we ensure your child receives the best
              education, fostering both academic and personal development. Join
              us for a transformative educational journey..
            </p>
            <p>
              At our school, we go beyond education; we cultivate curiosity,
              ignite creativity, and nurture resilience. With a dynamic
              curriculum and dedicated mentors, we prepare students for a future
              where they lead with knowledge and compassion. Join us on the path
              to success.
            </p>
            <ul class="list1">
              <li>
                <span class="table-cell valign-middle">
                  Reliable and Secure Platform
                </span>
              </li>
              <li>
                <span class="table-cell valign-middle">
                  Everything is perfectly orgainized for future
                </span>
              </li>
              <li>
                <span class="table-cell valign-middle">
                  Attach large file easily
                </span>
              </li>
              <li>
                <span class="table-cell valign-middle">
                  Tons of courses and easy to use and customize
                </span>
              </li>
              <li>
                <span class="table-cell valign-middle">
                  {" "}
                  Reliable and easy setup
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6" style={{ marginTop: "90px" }}>
            <img
              src="https://codestar.xyz/demo/education/assets/images/why-choose.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* section end */}

      {/* section2 start */}
      <section id="education-teachers" className="our_teacher ptb100">
        <div className="container">
          <div className="row">
            {/* Section title */}
            <div
              className="main-title text-center wow fadeIn"
              data-wow-duration="2s"
              style={{
                visibility: "visible",
                "-webkit-animation-duration": "2s",
                "animation-duration": "2s",
                "-webkit-animation-name": "_fadeIn",
                "animation-name": "_fadeIn",
              }}
            >
              <div className="subtitle color-7">A modern and unique style</div>
              <div className="title color-white lheight-40 mb30">
                <span>
                  Our Teachers<span className="color-15">.</span>
                </span>
              </div>
              <div className="spliter mb30" />
            </div>
          </div>
          <div className="row our_teacher_row">
            <div className="row teacher_inner_row tp_inner_row meet-teachers-carousel owl-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    "-webkit-transform": "translate3d(-1560px, 0px, 0px)",
                    "-ms-transform": "translate3d(-1560px, 0px, 0px)",
                    transform: "translate3d(-1560px, 0px, 0px)",
                    "-webkit-transition": "all 2s ease 0s",
                    transition: "all 2s ease 0s",
                    width: "3900px",
                  }}
                >
                  <div className="owl-item cloned" style={{ width: "390px" }}>
                    <div className="col-md-12 col-sm-1 teacher_col">
                      <div className="wrap_teacher uk-transition-toggle">
                        <div
                          className="uk-inline-clip  uk-light teacher_img"
                          tabIndex={0}
                        >
                          <img src={teacher1} alt="teacher name" />
                          <div className="uk-position-bottom tp_teacher_caption theme-bg-gradient">
                            <div className=" tp_desc_overlay">
                              <ul className="teacher_contact p_color">
                                <li>
                                  <a
                                    href="mailto:info@gmail.com"
                                    title="Mail To David"
                                  >
                                    <i
                                      className="fa fa-envelope"
                                      aria-hidden="true"
                                    />
                                  </a>{" "}
                                </li>
                                <li>
                                  {" "}
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-twitter" />{" "}
                                  </a>{" "}
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    <i className="fa fa-facebook" />{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-linkedin" />{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="teacher_text color-white">
                          <h3 className="tp_medium_title teacher_name ">
                            {" "}
                            Sara Nihero{" "}
                          </h3>
                          <p className="teacher_position">
                            Consultant Architect
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "390px" }}>
                    <div className="col-md-12 col-sm-1 teacher_col">
                      <div className="wrap_teacher uk-transition-toggle ">
                        <div
                          className="uk-inline-clip uk-light teacher_img"
                          tabIndex={0}
                        >
                          <img
                            src="assets/images/teachers/teacher-1.jpg"
                            alt="teacher name"
                          />
                          <div className="uk-position-bottom tp_teacher_caption theme-bg-gradient">
                            <div className=" tp_desc_overlay">
                              <ul className="teacher_contact p_color">
                                <li>
                                  <a
                                    href="mailto:info@gmail.com"
                                    title="Mail To David"
                                  >
                                    <i
                                      className="fa fa-envelope"
                                      aria-hidden="true"
                                    />
                                  </a>{" "}
                                </li>
                                <li>
                                  {" "}
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-twitter" />{" "}
                                  </a>{" "}
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    <i className="fa fa-facebook" />{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-linkedin" />{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="teacher_text color-white">
                          <h3 className="tp_medium_title teacher_name ">
                            {" "}
                            David Nihero{" "}
                          </h3>
                          <p className="teacher_position">
                            Consultant Architect
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "390px" }}>
                    <div className="col-md-12 col-sm-1 teacher_col">
                      <div className="wrap_teacher uk-transition-toggle">
                        <div
                          className="uk-inline-clip  uk-light teacher_img"
                          tabIndex={0}
                        >
                          <img src={teacher1} alt="teacher name" />
                          <div className="uk-position-bottom tp_teacher_caption theme-bg-gradient">
                            <div className=" tp_desc_overlay">
                              <ul className="teacher_contact p_color">
                                <li>
                                  <a
                                    href="mailto:info@gmail.com"
                                    title="Mail To David"
                                  >
                                    <i
                                      className="fa fa-envelope"
                                      aria-hidden="true"
                                    />
                                  </a>{" "}
                                </li>
                                <li>
                                  {" "}
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-twitter" />{" "}
                                  </a>{" "}
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    <i className="fa fa-facebook" />{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-linkedin" />{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="teacher_text color-white">
                          <h3 className="tp_medium_title teacher_name ">
                            {" "}
                            Sara Nihero{" "}
                          </h3>
                          <p className="teacher_position">
                            Consultant Architect
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "390px" }}>
                    <div className="col-md-12 col-sm-1 teacher_col">
                      <div className="wrap_teacher uk-transition-toggle ">
                        <div
                          className="uk-inline-clip uk-light teacher_img"
                          tabIndex={0}
                        >
                          <img
                            src="assets/images/teachers/teacher-1.jpg"
                            alt="teacher name"
                          />
                          <div className="uk-position-bottom tp_teacher_caption theme-bg-gradient">
                            <div className=" tp_desc_overlay">
                              <ul className="teacher_contact p_color">
                                <li>
                                  <a
                                    href="mailto:info@gmail.com"
                                    title="Mail To David"
                                  >
                                    <i
                                      className="fa fa-envelope"
                                      aria-hidden="true"
                                    />
                                  </a>{" "}
                                </li>
                                <li>
                                  {" "}
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-twitter" />{" "}
                                  </a>{" "}
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    <i className="fa fa-facebook" />{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-linkedin" />{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="teacher_text color-white">
                          <h3 className="tp_medium_title teacher_name ">
                            {" "}
                            David Nihero{" "}
                          </h3>
                          <p className="teacher_position">
                            Consultant Architect
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "390px" }}>
                    <div className="col-md-12 col-sm-1 teacher_col">
                      <div className="wrap_teacher uk-transition-toggle">
                        <div
                          className="uk-inline-clip  uk-light teacher_img"
                          tabIndex={0}
                        >
                          <img src={teacher1} alt="teacher name" />
                          <div className="uk-position-bottom tp_teacher_caption theme-bg-gradient">
                            <div className=" tp_desc_overlay">
                              <ul className="teacher_contact p_color">
                                <li>
                                  <a
                                    href="mailto:info@gmail.com"
                                    title="Mail To David"
                                  >
                                    <i
                                      className="fa fa-envelope"
                                      aria-hidden="true"
                                    />
                                  </a>{" "}
                                </li>
                                <li>
                                  {" "}
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-twitter" />{" "}
                                  </a>{" "}
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    <i className="fa fa-facebook" />{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-linkedin" />{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="teacher_text color-white">
                          <h3 className="tp_medium_title teacher_name ">
                            {" "}
                            Sara Nihero{" "}
                          </h3>
                          <p className="teacher_position">
                            Consultant Architect
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "390px" }}>
                    <div className="col-md-12 col-sm-1 teacher_col">
                      <div className="wrap_teacher uk-transition-toggle ">
                        <div
                          className="uk-inline-clip uk-light teacher_img"
                          tabIndex={0}
                        >
                          <img src={teacher1} alt="teacher name" />
                          <div className="uk-position-bottom tp_teacher_caption theme-bg-gradient">
                            <div className=" tp_desc_overlay">
                              <ul className="teacher_contact p_color">
                                <li>
                                  <a
                                    href="mailto:info@gmail.com"
                                    title="Mail To David"
                                  >
                                    <i
                                      className="fa fa-envelope"
                                      aria-hidden="true"
                                    />
                                  </a>{" "}
                                </li>
                                <li>
                                  {" "}
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-twitter" />{" "}
                                  </a>{" "}
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    <i className="fa fa-facebook" />{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-linkedin" />{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="teacher_text color-white">
                          <h3 className="tp_medium_title teacher_name ">
                            {" "}
                            David Nihero{" "}
                          </h3>
                          <p className="teacher_position">
                            Consultant Architect
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "390px" }}>
                    <div className="col-md-12 col-sm-1 teacher_col">
                      <div className="wrap_teacher uk-transition-toggle">
                        <div
                          className="uk-inline-clip  uk-light teacher_img"
                          tabIndex={0}
                        >
                          <img src={teacher1} alt="teacher name" />
                          <div className="uk-position-bottom tp_teacher_caption theme-bg-gradient">
                            <div className=" tp_desc_overlay">
                              <ul className="teacher_contact p_color">
                                <li>
                                  <a
                                    href="mailto:info@gmail.com"
                                    title="Mail To David"
                                  >
                                    <i
                                      className="fa fa-envelope"
                                      aria-hidden="true"
                                    />
                                  </a>{" "}
                                </li>
                                <li>
                                  {" "}
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-twitter" />{" "}
                                  </a>{" "}
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    <i className="fa fa-facebook" />{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-linkedin" />{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="teacher_text color-white">
                          <h3 className="tp_medium_title teacher_name ">
                            {" "}
                            Sara Nihero{" "}
                          </h3>
                          <p className="teacher_position">
                            Consultant Architect
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "390px" }}>
                    <div className="col-md-12 col-sm-1 teacher_col">
                      <div className="wrap_teacher uk-transition-toggle ">
                        <div
                          className="uk-inline-clip uk-light teacher_img"
                          tabIndex={0}
                        >
                          <img src={teacher1} alt="teacher name" />
                          <div className="uk-position-bottom tp_teacher_caption theme-bg-gradient">
                            <div className=" tp_desc_overlay">
                              <ul className="teacher_contact p_color">
                                <li>
                                  <a
                                    href="mailto:info@gmail.com"
                                    title="Mail To David"
                                  >
                                    <i
                                      className="fa fa-envelope"
                                      aria-hidden="true"
                                    />
                                  </a>{" "}
                                </li>
                                <li>
                                  {" "}
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-twitter" />{" "}
                                  </a>{" "}
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    <i className="fa fa-facebook" />{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-linkedin" />{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="teacher_text color-white">
                          <h3 className="tp_medium_title teacher_name ">
                            {" "}
                            David Nihero{" "}
                          </h3>
                          <p className="teacher_position">
                            Consultant Architect
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "390px" }}>
                    <div className="col-md-12 col-sm-1 teacher_col">
                      <div className="wrap_teacher uk-transition-toggle">
                        <div
                          className="uk-inline-clip  uk-light teacher_img"
                          tabIndex={0}
                        >
                          <img src={teacher1} alt="teacher name" />
                          <div className="uk-position-bottom tp_teacher_caption theme-bg-gradient">
                            <div className=" tp_desc_overlay">
                              <ul className="teacher_contact p_color">
                                <li>
                                  <a
                                    href="mailto:info@gmail.com"
                                    title="Mail To David"
                                  >
                                    <i
                                      className="fa fa-envelope"
                                      aria-hidden="true"
                                    />
                                  </a>{" "}
                                </li>
                                <li>
                                  {" "}
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-twitter" />{" "}
                                  </a>{" "}
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    <i className="fa fa-facebook" />{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-linkedin" />{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="teacher_text color-white">
                          <h3 className="tp_medium_title teacher_name ">
                            {" "}
                            Sara Nihero{" "}
                          </h3>
                          <p className="teacher_position">
                            Consultant Architect
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "390px" }}>
                    <div className="col-md-12 col-sm-1 teacher_col">
                      <div className="wrap_teacher uk-transition-toggle ">
                        <div
                          className="uk-inline-clip uk-light teacher_img"
                          tabIndex={0}
                        >
                          <img src={teacher1} alt="teacher name" />
                          <div className="uk-position-bottom tp_teacher_caption theme-bg-gradient">
                            <div className=" tp_desc_overlay">
                              <ul className="teacher_contact p_color">
                                <li>
                                  <a
                                    href="mailto:info@gmail.com"
                                    title="Mail To David"
                                  >
                                    <i
                                      className="fa fa-envelope"
                                      aria-hidden="true"
                                    />
                                  </a>{" "}
                                </li>
                                <li>
                                  {" "}
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-twitter" />{" "}
                                  </a>{" "}
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    <i className="fa fa-facebook" />{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="David">
                                    {" "}
                                    <i className="fa fa-linkedin" />{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="teacher_text color-white">
                          <h3 className="tp_medium_title teacher_name ">
                            {" "}
                            David Nihero{" "}
                          </h3>
                          <p className="teacher_position">
                            Consultant Architect
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <div className="owl-prev">prev</div>
                <div className="owl-next">next</div>
              </div>
              <div className="owl-dots">
                <div className="owl-dot active">
                  <span />
                </div>
                <div className="owl-dot">
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section2 end */}

      {/* section3 start */}
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
                      <div className="price-title fsize-40 mb-40">Premium</div>
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
                      <li className="price-list">Unlimited Registered User</li>
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
      {/* section3 end */}

{/*  */}
<section id="education-testimonial" className="testimonials">
  <div className="container-fluid">
    <div className="row">
      <div className="testimonials-slider background-2 slick-initialized slick-slider slick-dotted">
        {/* Start single item */}
        <div className="slick-list draggable"><div className="slick-track" style={{"opacity":"1","width":"9443px","-webkit-transform":"translate3d(-1349px, 0px, 0px)","-ms-transform":"translate3d(-1349px, 0px, 0px)","transform":"translate3d(-1349px, 0px, 0px)"}}><div className="tes-singel-content slick-slide slick-cloned" data-slick-index={-1} aria-hidden="true" tabIndex={-1} style={{"width":"1349px"}}>
              <div className="testimonial-img col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{"background-image":"url(assets/images/testimonials_1.jpg)"}} />
              <div className="testimonial-content-bl col-lg-6 col-md-6 col-sm-12 col-xs-12 ptb100">
                {/* title */}
                <div className="partition_left inline-block pl30 relative mb40">
                  <div className="ptb5">
                    <div className="subtitle">
                      Our Students help us to strive for more
                    </div>
                    <div className="title">
                      <span>What Our Students Say<span className="color-15">.</span></span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-bg inline-block ptb30 italic fsize-20">
                  <p className="mb10">
                    «Alcatra burgdoggen jerky landjaeger brisket ham hock
                    <br /> ground round. Tongue ham hock boudin meatloaf.
                    <br /> Tri-tip shoulder meatball pig.»
                  </p>
                  <div className="testimonial-author table">
                    <div className="table-row">
                      <div className="author-col table-cell valign-middle">
                        <div className="fsize-32 fweight-500 color-2">
                          Christian Conner
                        </div>
                        <div className="fsize-12 fweight-600 color-17 uppercase">
                          BusinessMan «Indesit»
                        </div>
                      </div>
                      <div className="author-col table-cell valign-middle text-right">
                        <img src="assets/images/author-signature_3.png" alt className="author-signature" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><div className="tes-singel-content slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" tabIndex={0} role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00" style={{"width":"1349px"}}>
              <div className="testimonial-img col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{"background-image":"url(https://codestar.xyz/demo/education/assets/images/testimonials_1.jpg)"}} />
              <div className="testimonial-content-bl col-lg-6 col-md-6 col-sm-12 col-xs-12 pt100 pb150">
                <div className="testimonial-wrapper">
                  {/*  Title */}
                  <div className="partition_left inline-block pl30 relative mb40">
                    <div className="ptb5">
                      <div className="subtitle">
                        Our Students help us to strive for more
                      </div>
                      <div className="title">
                        <span>What Our Students Say<span className="color-15">.</span></span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-bg inline-block ptb30 italic fsize-20">
                    <p className="mb10">
                      "Turkey hamburger tongue, meatball chuck spare ribs
                      <br /> burgdoggen picanha short ribs. Flank prosciutto boudin
                      <br /> alcatra pork loin tongue kielbasa."
                    </p>
                    <div className="testimonial-author table">
                      <div className="table-row">
                        <div className="author-col table-cell valign-middle">
                          <div className="fsize-32 fweight-500 color-2">
                            Emilie Jewell
                          </div>
                          <div className="fsize-12 fweight-600 color-17 uppercase">
                            Product Manager et Inc.
                          </div>
                        </div>
                        <div className="author-col table-cell valign-middle text-right">
                          <img src="assets/images/author-signature_1.png" alt className="author-signature" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><div className="tes-singel-content slick-slide" data-slick-index={1} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" style={{"width":"1349px"}}>
              <div className="testimonial-img col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{"background-image":"url(https://codestar.xyz/demo/education/assets/images/testimonials_1.jpg)"}} />
              <div className="testimonial-content-bl col-lg-6 col-md-6 col-sm-12 col-xs-12 ptb100">
                {/* title */}
                <div className="partition_left inline-block pl30 relative mb40">
                  <div className="ptb5">
                    <div className="subtitle">
                      Our Students help us to strive for more
                    </div>
                    <div className="title">
                      <span>What Our Students Say<span className="color-15">.</span></span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-bg inline-block ptb30 italic fsize-20">
                  <p className="mb10">
                    «Alcatra burgdoggen jerky landjaeger brisket ham hock
                    <br /> ground round. Tongue ham hock boudin meatloaf.
                    <br /> Tri-tip shoulder meatball pig.»
                  </p>
                  <div className="testimonial-author table">
                    <div className="table-row">
                      <div className="author-col table-cell valign-middle">
                        <div className="fsize-32 fweight-500 color-2">
                          Michael Romero
                        </div>
                        <div className="fsize-12 fweight-600 color-17 uppercase">
                          BusinessMan «Owners»
                        </div>
                      </div>
                      <div className="author-col table-cell valign-middle text-right">
                        <img src="assets/images/author-signature_2.png" alt className="author-signature" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><div className="tes-singel-content slick-slide" data-slick-index={2} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02" style={{"width":"1349px"}}>
              <div className="testimonial-img col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{"background-image":"url(https://codestar.xyz/demo/education/assets/images/testimonials_1.jpg)"}} />
              <div className="testimonial-content-bl col-lg-6 col-md-6 col-sm-12 col-xs-12 ptb100">
                {/* title */}
                <div className="partition_left inline-block pl30 relative mb40">
                  <div className="ptb5">
                    <div className="subtitle">
                      Our Students help us to strive for more
                    </div>
                    <div className="title">
                      <span>What Our Students Say<span className="color-15">.</span></span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-bg inline-block ptb30 italic fsize-20">
                  <p className="mb10">
                    «Alcatra burgdoggen jerky landjaeger brisket ham hock
                    <br /> ground round. Tongue ham hock boudin meatloaf.
                    <br /> Tri-tip shoulder meatball pig.»
                  </p>
                  <div className="testimonial-author table">
                    <div className="table-row">
                      <div className="author-col table-cell valign-middle">
                        <div className="fsize-32 fweight-500 color-2">
                          Christian Conner
                        </div>
                        <div className="fsize-12 fweight-600 color-17 uppercase">
                          BusinessMan «Indesit»
                        </div>
                      </div>
                      <div className="author-col table-cell valign-middle text-right">
                        <img src="assets/images/author-signature_3.png" alt className="author-signature" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><div className="tes-singel-content slick-slide slick-cloned" data-slick-index={3} aria-hidden="true" tabIndex={-1} style={{"width":"1349px"}}>
              <div className="testimonial-img col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{"background-image":"url(https://codestar.xyz/demo/education/assets/images/testimonials_1.jpg)"}} />
              <div className="testimonial-content-bl col-lg-6 col-md-6 col-sm-12 col-xs-12 pt100 pb150">
                <div className="testimonial-wrapper">
                  {/*  Title */}
                  <div className="partition_left inline-block pl30 relative mb40">
                    <div className="ptb5">
                      <div className="subtitle">
                        Our Students help us to strive for more
                      </div>
                      <div className="title">
                        <span>What Our Students Say<span className="color-15">.</span></span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-bg inline-block ptb30 italic fsize-20">
                    <p className="mb10">
                      "Turkey hamburger tongue, meatball chuck spare ribs
                      <br /> burgdoggen picanha short ribs. Flank prosciutto boudin
                      <br /> alcatra pork loin tongue kielbasa."
                    </p>
                    <div className="testimonial-author table">
                      <div className="table-row">
                        <div className="author-col table-cell valign-middle">
                          <div className="fsize-32 fweight-500 color-2">
                            Emilie Jewell
                          </div>
                          <div className="fsize-12 fweight-600 color-17 uppercase">
                            Product Manager et Inc.
                          </div>
                        </div>
                        <div className="author-col table-cell valign-middle text-right">
                          <img src="https://codestar.xyz/demo/education/assets/images/testimonials_1.jpg" alt className="author-signature" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><div className="tes-singel-content slick-slide slick-cloned" data-slick-index={4} aria-hidden="true" tabIndex={-1} style={{"width":"1349px"}}>
              <div className="testimonial-img col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{"background-image":"url(https://codestar.xyz/demo/education/assets/images/testimonials_1.jpg)"}} />
              <div className="testimonial-content-bl col-lg-6 col-md-6 col-sm-12 col-xs-12 ptb100">
                {/* title */}
                <div className="partition_left inline-block pl30 relative mb40">
                  <div className="ptb5">
                    <div className="subtitle">
                      Our Students help us to strive for more
                    </div>
                    <div className="title">
                      <span>What Our Students Say<span className="color-15">.</span></span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-bg inline-block ptb30 italic fsize-20">
                  <p className="mb10">
                    «Alcatra burgdoggen jerky landjaeger brisket ham hock
                    <br /> ground round. Tongue ham hock boudin meatloaf.
                    <br /> Tri-tip shoulder meatball pig.»
                  </p>
                  <div className="testimonial-author table">
                    <div className="table-row">
                      <div className="author-col table-cell valign-middle">
                        <div className="fsize-32 fweight-500 color-2">
                          Michael Romero
                        </div>
                        <div className="fsize-12 fweight-600 color-17 uppercase">
                          BusinessMan «Owners»
                        </div>
                      </div>
                      <div className="author-col table-cell valign-middle text-right">
                        <img src="assets/images/author-signature_2.png" alt className="author-signature" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><div className="tes-singel-content slick-slide slick-cloned" data-slick-index={5} aria-hidden="true" tabIndex={-1} style={{"width":"1349px"}}>
              <div className="testimonial-img col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{"background-image":"url(https://codestar.xyz/demo/education/assets/images/testimonials_1.jpg)"}} />
              <div className="testimonial-content-bl col-lg-6 col-md-6 col-sm-12 col-xs-12 ptb100">
                {/* title */}
                <div className="partition_left inline-block pl30 relative mb40">
                  <div className="ptb5">
                    <div className="subtitle">
                      Our Students help us to strive for more
                    </div>
                    <div className="title">
                      <span>What Our Students Say<span className="color-15">.</span></span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-bg inline-block ptb30 italic fsize-20">
                  <p className="mb10">
                    «Alcatra burgdoggen jerky landjaeger brisket ham hock
                    <br /> ground round. Tongue ham hock boudin meatloaf.
                    <br /> Tri-tip shoulder meatball pig.»
                  </p>
                  <div className="testimonial-author table">
                    <div className="table-row">
                      <div className="author-col table-cell valign-middle">
                        <div className="fsize-32 fweight-500 color-2">
                          Christian Conner
                        </div>
                        <div className="fsize-12 fweight-600 color-17 uppercase">
                          BusinessMan «Indesit»
                        </div>
                      </div>
                      <div className="author-col table-cell valign-middle text-right">
                        <img src="assets/images/author-signature_3.png" alt className="author-signature" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></div></div>
        {/* End single item */}
        {/* Start single item */}
        {/* End single item */}
        {/* Start single item */}
        {/* End single item */}
        <ul className="slick-dots" style={{}} role="tablist"><li className="slick-active" role="presentation"><button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 3" tabIndex={0} aria-selected="true">1</button></li><li role="presentation" className><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 3" tabIndex={-1}>2</button></li><li role="presentation" className><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 3" tabIndex={-1}>3</button></li></ul></div>
    </div>
  </div>
</section>
{/*  */}

      {/* section4 start */}
      <section id="education-blog" className="pt100 pb80">
        <div className="education-blog">
          <div className="container">
            <div className="row">
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
                <div className="col-md-4 col-sm-1">
                  <div className="single-blog-item">
                    <div className="blog-photo">
                      <img
                        src="https://codestar.xyz/demo/education/assets/images/blog/blog-01.jpg"
                        alt
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
                <div className="col-md-4 col-sm-1">
                  <div className="single-blog-item">
                    <div className="blog-photo">
                      <img
                        src="https://codestar.xyz/demo/education/assets/images/blog/blog-01.jpg"
                        alt
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
                <div className="col-md-4 col-sm-1 col-md-offset-0 col-sm-offset-3">
                  <div className="single-blog-item">
                    <div className="blog-photo">
                      <img
                        src="https://codestar.xyz/demo/education/assets/images/blog/blog-01.jpg"
                        alt
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
      {/* section4 end */}

      {/* section5 start */}
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                {/* PROGRESS BARS*/}
                <div className="section progress-bars section-padding">
                  <div className="progress-bars-content">
                    <div className="progress-bar-wrapper">
                      <div className="row">
                        <div className="content mb40">
                          <div className="col-md-3 col-sm-6">
                            <div className="progress-bar-number">
                              <div
                                data-from={0}
                                data-to={45}
                                data-speed={1000}
                                className="fsize-60 num"
                              >
                                45
                              </div>
                              <p className="name-inner">teachers</p>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-6">
                            <div className="progress-bar-number">
                              <div
                                data-from={0}
                                data-to={56}
                                data-speed={1000}
                                className="fsize-60 num"
                              >
                                56
                              </div>
                              <p className="name-inner">courses</p>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-6">
                            <div className="progress-bar-number">
                              <div
                                data-from={0}
                                data-to={165}
                                data-speed={1000}
                                className="fsize-60 num"
                              >
                                165
                              </div>
                              <p className="name-inner">members</p>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-6">
                            <div className="progress-bar-number">
                              <div
                                data-from={0}
                                data-to={15}
                                data-speed={1000}
                                className="fsize-60 num"
                              >
                                15
                              </div>
                              <p className="name-inner">Countries</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-subscribe section-subscribe-st">
            <div className="subscribe-content">
              {/* Newsletter title */}
              <div className="subscribe-content-inner">
                <h2 className="color-white fsize-40 mb15">
                  Subscribe to our Newsletter
                </h2>
                <p className="color-white lheight-30 pb40">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="subscribe-form">
              <div className="subscribe-form-inner">
                {/* Newsletter form */}
                <form
                  className="form-inline dv-form"
                  id="mc-form"
                  noValidate="true"
                >
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
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-behance" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
            </ul>
            {/* End Social icons */}
            <div className="copyright mt20">
              <p className="color-white fsize-16">
                Copyright © 2016 <a href="#"> Codestar </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* section6 end */}

      <div>
  {/* Scroll to top */}
  <a href="#" id="toTop" className="theme-bg-gradient color-white" style={{"display":"inline"}}>
    <i className="fa fa-angle-up fsize-14" aria-hidden="true" />
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
          <img className="close" data-dismiss="modal" src="assets/images/icons/close-icon.png" alt="close" />
          <h4 className="modal-title">Feel free shoot a message</h4>
        </div>
        <div className="modal-body">
          {/* contact form */}
          <div className="contact-section">
            <form method="post" action="http://codestar.xyz/demo/education/assets/bin/mailer.php" className="contact-form signup-form" id="ajax-contact">
              <div className="row section-signup semitrans">
                <div className="col-md-12">
                  {/* name */}
                  <div className="form-group has-icon-left form-control-name">
                    <label className="sr-only" htmlFor="name">Your name</label>
                    <input type="text" className="form-control form-control-lg" name="name" id="name" placeholder="Your name" />
                  </div>
                </div>
                <div className="col-md-12">
                  {/* email */}
                  <div className="form-group has-icon-left form-control-email">
                    <label className="sr-only" htmlFor="email">Email address</label>
                    <input type="email" className="form-control form-control-lg" name="email" id="email" placeholder="Email address" autoComplete="off" />
                  </div>
                </div>
                <div className="col-md-12">
                  {/* phone number */}
                  <div className="form-group has-icon-left form-control-phone">
                    <label className="sr-only" htmlFor="phone">Phone Number</label>
                    <input type="text" className="form-control form-control-lg" name="phone" id="phone" placeholder="Phone Number" autoComplete="off" />
                  </div>
                </div>
                <div className="col-md-12">
                  {/* address */}
                  <div className="form-group has-icon-left form-control-address">
                    <label className="sr-only" htmlFor="address">Address</label>
                    <input type="text" className="form-control form-control-lg" name="address" id="address" placeholder="Your Address" autoComplete="off" />
                  </div>
                </div>
                <div className="col-md-12">
                  {/* text message */}
                  <div className="form-group has-icon-left form-control-message">
                    <label className="sr-only" htmlFor="message">Enter your message</label>
                    <textarea className="form-control form-control-lg home-textarea" name="message" id="message" placeholder="Enter your message" autoComplete="off" defaultValue={""} />
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
                  <p className="submit-btn-bottom-text">Your email is safe with us and we hate spam as much as you do.</p>
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
</div>
    </>
  );
};

export default Home1;
