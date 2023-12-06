import React, { useEffect, useState,useRef } from "react";
import Faq from "react-faq-component";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import p2 from "../componants/assets/p2.png";
import close from "./assets/images/icons/close-icon.png";
import logo3 from "../componants/assets/images/logo3.jpg";
import { FaInstagram } from "react-icons/fa";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [teachersCount, setTeachersCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [value, setValue] = useState();
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

  const [selectedCode, setSelectedCode] = useState("");

  const countryCodes = [
    { value: "+1", label: "+1 (United States)" },

    { value: "+44", label: "+44 (United Kingdom)" },

    { value: "+91", label: "+91 (India)" },

    { value: "+33", label: "+33 (France)" },

    { value: "+81", label: "+81 (Japan)" },
    {
      "value": "+7 840",
      "label": "Abkhazia"
    },
    {
      "value": "+93",
      "label": "Afghanistan"
    },
    {
      "value": "+355",
      "label": "Albania"
    },
    {
      "value": "+213",
      "label": "Algeria"
    },
    {
      "value": "+1 684",
      "label": "American Samoa"
    },
    {
      "value": "+376",
      "label": "Andorra"
    },
    {
      "value": "+244",
      "label": "Angola"
    },
    {
      "value": "+1 264",
      "label": "Anguilla"
    },
    {
      "value": "+1 268",
      "label": "Antigua and Barbuda"
    },
    {
      "value": "+54",
      "label": "Argentina"
    },
    {
      "value": "+374",
      "label": "Armenia"
    },
    {
      "value": "+297",
      "label": "Aruba"
    },
    {
      "value": "+247",
      "label": "Ascension"
    },
    {
      "value": "+61",
      "label": "Australia"
    },
    {
      "value": "+672",
      "label": "Australian External Territories"
    },
    {
      "value": "+43",
      "label": "Austria"
    },
    {
      "value": "+994",
      "label": "Azerbaijan"
    },
    {
      "value": "+1 242",
      "label": "Bahamas"
    },
    {
      "value": "+973",
      "label": "Bahrain"
    },
    {
      "value": "+880",
      "label": "Bangladesh"
    },
    {
      "value": "+1 246",
      "label": "Barbados"
    },
    {
      "value": "+1 268",
      "label": "Barbuda"
    },
    {
      "value": "+375",
      "label": "Belarus"
    },
    {
      "value": "+32",
      "label": "Belgium"
    },
    {
      "value": "+501",
      "label": "Belize"
    },
    {
      "value": "+229",
      "label": "Benin"
    },
    {
      "value": "+1 441",
      "label": "Bermuda"
    },
    {
      "value": "+975",
      "label": "Bhutan"
    },
    {
      "value": "+591",
      "label": "Bolivia"
    },
    {
      "value": "+387",
      "label": "Bosnia and Herzegovina"
    },
    {
      "value": "+267",
      "label": "Botswana"
    },
    {
      "value": "+55",
      "label": "Brazil"
    },
    {
      "value": "+246",
      "label": "British Indian Ocean Territory"
    },
    {
      "value": "+1 284",
      "label": "British Virgin Islands"
    },
    {
      "value": "+673",
      "label": "Brunei"
    },
    {
      "value": "+359",
      "label": "Bulgaria"
    },
    {
      "value": "+226",
      "label": "Burkina Faso"
    },
    {
      "value": "+257",
      "label": "Burundi"
    },
    {
      "value": "+855",
      "label": "Cambodia"
    },
    {
      "value": "+237",
      "label": "Cameroon"
    },
    {
      "value": "+1",
      "label": "Canada"
    },
    {
      "value": "+238",
      "label": "Cape Verde"
    },
    {
      "value": "+ 345",
      "label": "Cayman Islands"
    },
    {
      "value": "+236",
      "label": "Central African Republic"
    },
    {
      "value": "+235",
      "label": "Chad"
    },
    {
      "value": "+56",
      "label": "Chile"
    },
    {
      "value": "+86",
      "label": "China"
    },
    {
      "value": "+61",
      "label": "Christmas Island"
    },
    {
      "value": "+61",
      "label": "Cocos-Keeling Islands"
    },
    {
      "value": "+57",
      "label": "Colombia"
    },
    {
      "value": "+269",
      "label": "Comoros"
    },
    {
      "value": "+242",
      "label": "Congo"
    },
    {
      "value": "+243",
      "label": "Congo, Dem. Rep. of (Zaire)"
    },
    {
      "value": "+682",
      "label": "Cook Islands"
    },
    {
      "value": "+506",
      "label": "Costa Rica"
    },
    {
      "value": "+385",
      "label": "Croatia"
    },
    {
      "value": "+53",
      "label": "Cuba"
    },
    {
      "value": "+599",
      "label": "Curacao"
    },
    {
      "value": "+537",
      "label": "Cyprus"
    },
    {
      "value": "+420",
      "label": "Czech Republic"
    },
    {
      "value": "+45",
      "label": "Denmark"
    },
    {
      "value": "+246",
      "label": "Diego Garcia"
    },
    {
      "value": "+253",
      "label": "Djibouti"
    },
    {
      "value": "+1 767",
      "label": "Dominica"
    },
    {
      "value": "+1 809",
      "label": "Dominican Republic"
    },
    {
      "value": "+670",
      "label": "East Timor"
    },
    {
      "value": "+56",
      "label": "Easter Island"
    },
    {
      "value": "+593",
      "label": "Ecuador"
    },
    {
      "value": "+20",
      "label": "Egypt"
    },
    {
      "value": "+503",
      "label": "El Salvador"
    },
    {
      "value": "+240",
      "label": "Equatorial Guinea"
    },
    {
      "value": "+291",
      "label": "Eritrea"
    },
    {
      "value": "+372",
      "label": "Estonia"
    },
    {
      "value": "+251",
      "label": "Ethiopia"
    },
    {
      "value": "+500",
      "label": "Falkland Islands"
    },
    {
      "value": "+298",
      "label": "Faroe Islands"
    },
    {
      "value": "+679",
      "label": "Fiji"
    },
    {
      "value": "+358",
      "label": "Finland"
    },
    {
      "value": "+33",
      "label": "France"
    },
    {
      "value": "+596",
      "label": "French Antilles"
    },
    {
      "value": "+594",
      "label": "French Guiana"
    },
    {
      "value": "+689",
      "label": "French Polynesia"
    },
    {
      "value": "+241",
      "label": "Gabon"
    },
    {
      "value": "+220",
      "label": "Gambia"
    },
    {
      "value": "+995",
      "label": "Georgia"
    },
    {
      "value": "+49",
      "label": "Germany"
    },
    {
      "value": "+233",
      "label": "Ghana"
    },
    {
      "value": "+350",
      "label": "Gibraltar"
    },
    {
      "value": "+30",
      "label": "Greece"
    },
    {
      "value": "+299",
      "label": "Greenland"
    },
    {
      "value": "+1 473",
      "label": "Grenada"
    },
    {
      "value": "+590",
      "label": "Guadeloupe"
    },
    {
      "value": "+1 671",
      "label": "Guam"
    },
    {
      "value": "+502",
      "label": "Guatemala"
    },
    {
      "value": "+224",
      "label": "Guinea"
    },
    {
      "value": "+245",
      "label": "Guinea-Bissau"
    },
    {
      "value": "+595",
      "label": "Guyana"
    },
    {
      "value": "+509",
      "label": "Haiti"
    },
    {
      "value": "+504",
      "label": "Honduras"
    },
    {
      "value": "+852",
      "label": "Hong Kong SAR China"
    },
    {
      "value": "+36",
      "label": "Hungary"
    },
    {
      "value": "+354",
      "label": "Iceland"
    },
    {
      "value": "+91",
      "label": "India"
    },
    {
      "value": "+62",
      "label": "Indonesia"
    },
    {
      "value": "+98",
      "label": "Iran"
    },
    {
      "value": "+964",
      "label": "Iraq"
    },
    {
      "value": "+353",
      "label": "Ireland"
    },
    {
      "value": "+972",
      "label": "Israel"
    },
    {
      "value": "+39",
      "label": "Italy"
    },
    {
      "value": "+225",
      "label": "Ivory Coast"
    },
    {
      "value": "+1 876",
      "label": "Jamaica"
    },
    {
      "value": "+81",
      "label": "Japan"
    },
    {
      "value": "+962",
      "label": "Jordan"
    },
    {
      "value": "+7 7",
      "label": "Kazakhstan"
    },
    {
      "value": "+254",
      "label": "Kenya"
    },
    {
      "value": "+686",
      "label": "Kiribati"
    },
    {
      "value": "+965",
      "label": "Kuwait"
    },
    {
      "value": "+996",
      "label": "Kyrgyzstan"
    },
    {
      "value": "+856",
      "label": "Laos"
    },
    {
      "value": "+371",
      "label": "Latvia"
    },
    {
      "value": "+961",
      "label": "Lebanon"
    },
    {
      "value": "+266",
      "label": "Lesotho"
    },
    {
      "value": "+231",
      "label": "Liberia"
    },
    {
      "value": "+218",
      "label": "Libya"
    },
    {
      "value": "+423",
      "label": "Liechtenstein"
    },
    {
      "value": "+370",
      "label": "Lithuania"
    },
    {
      "value": "+352",
      "label": "Luxembourg"
    },
    {
      "value": "+853",
      "label": "Macau SAR China"
    },
    {
      "value": "+389",
      "label": "Macedonia"
    },
    {
      "value": "+261",
      "label": "Madagascar"
    },
    {
      "value": "+265",
      "label": "Malawi"
    },
    {
      "value": "+60",
      "label": "Malaysia"
    },
    {
      "value": "+960",
      "label": "Maldives"
    },
    {
      "value": "+223",
      "label": "Mali"
    },
    {
      "value": "+356",
      "label": "Malta"
    },
    {
      "value": "+692",
      "label": "Marshall Islands"
    },
    {
      "value": "+596",
      "label": "Martinique"
    },
    {
      "value": "+222",
      "label": "Mauritania"
    },
    {
      "value": "+230",
      "label": "Mauritius"
    },
    {
      "value": "+262",
      "label": "Mayotte"
    },
    {
      "value": "+52",
      "label": "Mexico"
    },
    {
      "value": "+691",
      "label": "Micronesia"
    },
    {
      "value": "+1 808",
      "label": "Midway Island"
    },
    {
      "value": "+373",
      "label": "Moldova"
    },
    {
      "value": "+377",
      "label": "Monaco"
    },
    {
      "value": "+976",
      "label": "Mongolia"
    },
    {
      "value": "+382",
      "label": "Montenegro"
    },
    {
      "value": "+1664",
      "label": "Montserrat"
    },
    {
      "value": "+212",
      "label": "Morocco"
    },
    {
      "value": "+95",
      "label": "Myanmar"
    },
    {
      "value": "+264",
      "label": "Namibia"
    },
    {
      "value": "+674",
      "label": "Nauru"
    },
    {
      "value": "+977",
      "label": "Nepal"
    },
    {
      "value": "+31",
      "label": "Netherlands"
    },
    {
      "value": "+599",
      "label": "Netherlands Antilles"
    },
    {
      "value": "+1 869",
      "label": "Nevis"
    },
    {
      "value": "+687",
      "label": "New Caledonia"
    },
    {
      "value": "+64",
      "label": "New Zealand"
    },
    {
      "value": "+505",
      "label": "Nicaragua"
    },
    {
      "value": "+227",
      "label": "Niger"
    },
    {
      "value": "+234",
      "label": "Nigeria"
    },
    {
      "value": "+683",
      "label": "Niue"
    },
    {
      "value": "+672",
      "label": "Norfolk Island"
    },
    {
      "value": "+850",
      "label": "North Korea"
    },
    {
      "value": "+1 670",
      "label": "Northern Mariana Islands"
    },
    {
      "value": "+47",
      "label": "Norway"
    },
    {
      "value": "+968",
      "label": "Oman"
    },
    {
      "value": "+92",
      "label": "Pakistan"
    },
    {
      "value": "+680",
      "label": "Palau"
    },
    {
      "value": "+970",
      "label": "Palestinian Territory"
    },
    {
      "value": "+507",
      "label": "Panama"
    },
    {
      "value": "+675",
      "label": "Papua New Guinea"
    },
    {
      "value": "+595",
      "label": "Paraguay"
    },
    {
      "value": "+51",
      "label": "Peru"
    },
    {
      "value": "+63",
      "label": "Philippines"
    },
    {
      "value": "+48",
      "label": "Poland"
    },
    {
      "value": "+351",
      "label": "Portugal"
    },
    {
      "value": "+1 787",
      "label": "Puerto Rico"
    },
    {
      "value": "+974",
      "label": "Qatar"
    },
    {
      "value": "+262",
      "label": "Reunion"
    },
    {
      "value": "+40",
      "label": "Romania"
    },
    {
      "value": "+7",
      "label": "Russia"
    },
    {
      "value": "+250",
      "label": "Rwanda"
    },
    {
      "value": "+685",
      "label": "Samoa"
    },
    {
      "value": "+378",
      "label": "San Marino"
    },
    {
      "value": "+966",
      "label": "Saudi Arabia"
    },
    {
      "value": "+221",
      "label": "Senegal"
    },
    {
      "value": "+381",
      "label": "Serbia"
    },
    {
      "value": "+248",
      "label": "Seychelles"
    },
    {
      "value": "+232",
      "label": "Sierra Leone"
    },
    {
      "value": "+65",
      "label": "Singapore"
    },
    {
      "value": "+421",
      "label": "Slovakia"
    },
    {
      "value": "+386",
      "label": "Slovenia"
    },
    {
      "value": "+677",
      "label": "Solomon Islands"
    },
    {
      "value": "+27",
      "label": "South Africa"
    },
    {
      "value": "+500",
      "label": "South Georgia and the South Sandwich Islands"
    },
    {
      "value": "+82",
      "label": "South Korea"
    },
    {
      "value": "+34",
      "label": "Spain"
    },
    {
      "value": "+94",
      "label": "Sri Lanka"
    },
    {
      "value": "+249",
      "label": "Sudan"
    },
    {
      "value": "+597",
      "label": "Surilabel"
    },
    {
      "value": "+268",
      "label": "Swaziland"
    },
    {
      "value": "+46",
      "label": "Sweden"
    },
    {
      "value": "+41",
      "label": "Switzerland"
    },
    {
      "value": "+963",
      "label": "Syria"
    },
    {
      "value": "+886",
      "label": "Taiwan"
    },
    {
      "value": "+992",
      "label": "Tajikistan"
    },
    {
      "value": "+255",
      "label": "Tanzania"
    },
    {
      "value": "+66",
      "label": "Thailand"
    },
    {
      "value": "+670",
      "label": "Timor Leste"
    },
    {
      "value": "+228",
      "label": "Togo"
    },
    {
      "value": "+690",
      "label": "Tokelau"
    },
    {
      "value": "+676",
      "label": "Tonga"
    },
    {
      "value": "+1 868",
      "label": "Trinidad and Tobago"
    },
    {
      "value": "+216",
      "label": "Tunisia"
    },
    {
      "value": "+90",
      "label": "Turkey"
    },
    {
      "value": "+993",
      "label": "Turkmenistan"
    },
    {
      "value": "+1 649",
      "label": "Turks and Caicos Islands"
    },
    {
      "value": "+688",
      "label": "Tuvalu"
    },
    {
      "value": "+1 340",
      "label": "U.S. Virgin Islands"
    },
    {
      "value": "+256",
      "label": "Uganda"
    },
    {
      "value": "+380",
      "label": "Ukraine"
    },
    {
      "value": "+971",
      "label": "United Arab Emirates"
    },
    {
      "value": "+44",
      "label": "United Kingdom"
    },
    {
      "value": "+1",
      "label": "United States"
    },
    {
      "value": "+598",
      "label": "Uruguay"
    },
    {
      "value": "+998",
      "label": "Uzbekistan"
    },
    {
      "value": "+678",
      "label": "Vanuatu"
    },
    {
      "value": "+58",
      "label": "Venezuela"
    },
    {
      "value": "+84",
      "label": "Vietnam"
    },
    {
      "value": "+1 808",
      "label": "Wake Island"
    },
    {
      "value": "+681",
      "label": "Wallis and Futuna"
    },
    {
      "value": "+967",
      "label": "Yemen"
    },
    {
      "value": "+260",
      "label": "Zambia"
    },
    {
      "value": "+255",
      "label": "Zanzibar"
    },
    {
      "value": "+263",
      "label": "Zimbabwe"
    }

    // Add more country codes as needed
  ];

  const handleChangebutton = (e) => {
    setSelectedCode(e.target.value);
  };
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
    titleTextColor: "blue",
    rowTitleColor: "blue",

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
    height: "100vh",
  };

  const innerDivStyle = {
    maxWidth: "800px",
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
  };
  const headingStyle = {
    marginBottom: "20px",
    marginTop: "30px",
  };
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();

    setShowForm(false);
  };

  const [slidesToShow, setSlidesToShow] = useState(3);

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  const [activeTab, setActiveTab] = useState("course-item-1");

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

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
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

  // counter start

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

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs.sendForm('service_g4737lr', 'template_7fov8vt', form.current, 'Tti4lP6PJyImEkf-q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div>
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
                  ref={form} onSubmit={sendEmail}
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
                        <select
                          id="countryCode"
                          name="code"
                          className="form-control form-control-lg"
                          value={selectedCode}
                          onChange={handleChangebutton}
                        >
                          <option value="" disabled>
                            Select Country Code
                          </option>
                          {countryCodes.map((code) => (
                            <option key={code.value} value={code.value}>
                              {code.label}
                            </option>
                          ))}
                        </select>
                        {/* {selectedCode && <p>Selected Country Code: {selectedCode}</p>} */}
                      </div>
                    </div>
                              <div className="col-md-12">
                                  <div className="form-group has-icon-left form-control-phone">
                        <label className="sr-only" htmlFor="phone">
                          Phone Number
                        </label>
                        <input
                        className="form-control form-control-lg"
                        name="phone"
                        id="phone"
      placeholder="Enter phone number"
      value={formData.phone}
      onChange={handleChange}/>
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
      {/* footer */}
      <footer
        id="education-footer"
        className="footer-st-25 text-center theme-bg-gradient pt90 pb80"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="progress-bars-inner">
                <h2 className="color-white fsize-40 mb15 mt0">ADDRESS</h2>
                <h5 className="color-white fsize-20 mb15 mt0">
                  Edufusion Office:{" "}
                </h5>

                <p className="color-white lheight-30 pb30">
                  Oshiwara Andheri West Mumbai – 53 India
                </p>
                <h5 className="color-white fsize-20 mb15 mt0">
                  Edufusion Branch:
                </h5>
                <p className="color-white lheight-30 pb30">
                  Race Course, Ringroad Gujarat – India{" "}
                </p>
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
                    Phone1: +91-8735820099
                    <br />
                    Phone2: +91-6006474119
                  </p>
                </a>

                <a href="mailto:inquiries@edufusion.co.in" className="mb90">
                  <p>Email: Inquiries@edufusion.co.in</p>
                  <p> Email: Edufusiontutor@gmail.com</p>
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
    </>
  );
};

export default Contact;
