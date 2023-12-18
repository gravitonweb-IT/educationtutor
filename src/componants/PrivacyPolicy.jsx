import React from "react";
import logo3 from "../componants/assets/images/logo3.jpg";
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
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
                {/* <li>
                  <a href="#education-price">Price</a>
                </li> */}
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
      <div style={styles.container}>
        <h1 style={styles.heading}>Privacy Policy</h1>

        <p style={styles.paragraph}>
          Edufusion Tutor operates the Education website to teach .
        </p>

        <p style={styles.paragraph}>
          This page informs you of our policies regarding the collection, use,
          and disclosure of personal data when you use our Service and the
          choices you have associated with that data.
        </p>

        <h2 style={styles.subHeading}>Information Collection And Use</h2>

        <p style={styles.paragraph}>
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>

        <h3 style={styles.subHeading}>Types of Data Collected</h3>

        <h4 style={styles.subHeading}>Personal Data</h4>
        <p style={styles.paragraph}>
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you ("Personal Data"). Personally identifiable information
          may include, but is not limited to:
        </p>

        <ul style={styles.list}>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Cookies and Usage Data</li>
        </ul>

        <h4 style={styles.subHeading}>Usage Data</h4>
        <p style={styles.paragraph}>
          We may also collect information on how the Service is accessed and
          used ("Usage Data"). This Usage Data may include information such as
          your computer's Internet Protocol address (e.g., IP address), browser
          type, browser version, the pages of our Service that you visit, the
          time and date of your visit, the time spent on those pages, unique
          device identifiers, and other diagnostic data.
        </p>

        <h2 style={styles.subHeading}>Use of Data</h2>

        <p style={styles.paragraph}>
          Edufusion Tutor uses the collected data for various purposes:
        </p>

        <ul style={styles.list}>
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>
            To allow you to participate in interactive features of our Service
            when you choose to do so
          </li>
          <li>To provide customer care and support</li>
          <li>
            To provide analysis or valuable information so that we can improve
            the Service
          </li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2 style={styles.subHeading}>Transfer Of Data</h2>

        <p style={styles.paragraph}>
          Your information, including Personal Data, may be transferred to — and
          maintained on — computers located outside of your state, province,
          country, or other governmental jurisdiction where the data protection
          laws may differ from those of your jurisdiction.
        </p>

        <p style={styles.paragraph}>
          If you are located outside and choose to provide information
          to us, please note that we transfer the data, including Personal Data,
          to [Country] and process it there.
        </p>

        <p style={styles.paragraph}>
          Your consent to this Privacy Policy followed by your submission of
          such information represents your agreement to that transfer.
        </p>

        <p style={styles.paragraph}>
          Edufusion Tutor will take all steps reasonably necessary to ensure
          that your data is treated securely and in accordance with this Privacy
          Policy and no transfer of your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of your data and other personal information.
        </p>

     
      </div>
    </>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
    backgroundColor: "#f8f8f8",
    padding: "20px",
    marginTop: '60px'
  },
  heading: {
    fontSize: "28px",
    color: "#007bff",
    marginBottom: "20px",
  },
  paragraph: {
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "24px",
    color: "#007bff",
    marginBottom: "15px",
  },
  list: {
    listStyle: "none",
    paddingLeft: "20px",
    marginBottom: "20px",
  },
};

export default PrivacyPolicy;
