// TermsAndConditions.js

import React from 'react';
import logo3 from "../componants/assets/images/logo3.jpg";
import { Link } from "react-router-dom";
const TermsAndConditions = () => {
    const styles = {
        container: {
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
          color: "#333",
          backgroundColor: "#f8f8f8",
          padding: "20px",
          marginTop: '60px',
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
      <h1 style={styles.heading}>Terms and Conditions</h1>

      <p style={styles.paragraph}>
        Welcome to Edufusion Tutor! These terms and conditions outline the rules and regulations for the use of our website.
      </p>

      <h2 style={styles.subHeading}>1. Acceptance of Terms</h2>
      <p style={styles.paragraph}>
        By accessing and using Edufusion Tutor, you accept and agree to be bound by the terms and conditions outlined herein.
      </p>

      <h2 style={styles.subHeading}>2. User Accounts</h2>
      <p style={styles.paragraph}>
        To access certain features of the website, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials.
      </p>

      <h2 style={styles.subHeading}>3. Content</h2>
      <p style={styles.paragraph}>
        All content provided on Edufusion Tutor is for informational purposes only. We reserve the right to modify or remove any content without prior notice.
      </p>

      <h2 style={styles.subHeading}>4. User Conduct</h2>
      <p style={styles.paragraph}>
        Users are expected to conduct themselves in a respectful and lawful manner while using Edufusion Tutor. Any abusive, offensive, or illegal behavior will result in the termination of the user's account.
      </p>

      <h2 style={styles.subHeading}>5. Privacy Policy</h2>
      <p style={styles.paragraph}>
        Our Privacy Policy outlines how we collect, use, and disclose information from our users. By using Edufusion Tutor, you agree to the terms of our Privacy Policy.
      </p>

      <h2 style={styles.subHeading}>6. Termination</h2>
      <p style={styles.paragraph}>
        Edufusion Tutor reserves the right to terminate or suspend access to the website at any time for any reason without notice.
      </p>

      <h2 style={styles.subHeading}>7. Changes to Terms</h2>
      <p style={styles.paragraph}>
        We reserve the right to update or change these terms and conditions at any time without prior notice. It is your responsibility to review these terms periodically for changes.
      </p>

      <h2 style={styles.subHeading}>8. Contact Information</h2>
      <p style={styles.paragraph}>
        If you have any questions or concerns about these terms and conditions, please contact us at inquiries@edufusion.co.in.
      </p>
    </div>
    </>
  );
};

export default TermsAndConditions;
