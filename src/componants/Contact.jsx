import React, { useEffect, useState, useRef } from "react";
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
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";
const Contact = () => {
  const [teachersCount, setTeachersCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [value, setValue] = useState();
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
    {
      value: "+7 840",
      label: "+7 840 - Abkhazia",
    },
    {
      value: "+93",
      label: "+93 - Afghanistan",
    },
    {
      value: "+355",
      label: "+355 - Albania",
    },
    {
      value: "+213",
      label: "+213 - Algeria",
    },
    {
      value: "+1 684",
      label: "+1 684 - American Samoa",
    },
    {
      value: "+376",
      label: "+376 - Andorra",
    },
    {
      value: "+244",
      label: "+244 - Angola",
    },
    {
      value: "+1 264",
      label: "+1 264 - Anguilla",
    },
    {
      value: "+1 268",
      label: "+1 268 - Antigua and Barbuda",
    },
    {
      value: "+54",
      label: "+54 - Argentina",
    },
    {
      value: "+374",
      label: "+374 - Armenia",
    },
    {
      value: "+297",
      label: "+297 - Aruba",
    },
    {
      value: "+247",
      label: "+247 - Ascension",
    },
    {
      value: "+61",
      label: "+61 - Australia",
    },
    {
      value: "+672",
      label: "+672 - Australian External Territories",
    },
    {
      value: "+43",
      label: "+43 - Austria",
    },
    {
      value: "+994",
      label: "+994 - Azerbaijan",
    },
    {
      value: "+1 242",
      label: "+1 242 - Bahamas",
    },
    {
      value: "+973",
      label: "+973 - Bahrain",
    },
    {
      value: "+880",
      label: "+880 - Bangladesh",
    },
    {
      value: "+1 246",
      label: "+1 246 - Barbados",
    },
    {
      value: "+1 268",
      label: "+1 268 - Barbuda",
    },
    {
      value: "+375",
      label: "+375 - Belarus",
    },
    {
      value: "+32",
      label: "+32 - Belgium",
    },
    {
      value: "+501",
      label: "+501 - Belize",
    },
    {
      value: "+229",
      label: "+229 - Benin",
    },
    {
      value: "+1 441",
      label: "+1 441 - Bermuda",
    },
    {
      value: "+975",
      label: "+975 - Bhutan",
    },
    {
      value: "+591",
      label: "+591 - Bolivia",
    },
    {
      value: "+387",
      label: "+387 - Bosnia and Herzegovina",
    },
    {
      value: "+267",
      label: "+267 - Botswana",
    },
    {
      value: "+55",
      label: "+55 - Brazil",
    },
    {
      value: "+246",
      label: "+246 - British Indian Ocean Territory",
    },
    {
      value: "+1 284",
      label: "+1 284 - British Virgin Islands",
    },
    {
      value: "+673",
      label: "+673 - Brunei",
    },
    {
      value: "+359",
      label: "+359 - Bulgaria",
    },
    {
      value: "+226",
      label: "+226 - Burkina Faso",
    },
    {
      value: "+257",
      label: "+257 - Burundi",
    },
    {
      value: "+855",
      label: "+855 - Cambodia",
    },
    {
      value: "+237",
      label: "+237 - Cameroon",
    },
    {
      value: "+1",
      label: "+1 - Canada",
    },
    {
      value: "+238",
      label: "+238 - Cape Verde",
    },
    {
      value: "+ 345",
      label: "+ 345 - Cayman Islands",
    },
    {
      value: "+236",
      label: "+236 - Central African Republic",
    },
    {
      value: "+235",
      label: "+235 - Chad",
    },
    {
      value: "+56",
      label: "+56 - Chile",
    },
    {
      value: "+86",
      label: "+86 - China",
    },
    {
      value: "+61",
      label: "+61 - Christmas Island",
    },
    {
      value: "+61",
      label: "+61 - Cocos-Keeling Islands",
    },
    {
      value: "+57",
      label: "+57 - Colombia",
    },
    {
      value: "+269",
      label: "+269 - Comoros",
    },
    {
      value: "+242",
      label: "+242 - Congo",
    },
    {
      value: "+243",
      label: "+243 - Congo, Dem. Rep. of (Zaire)",
    },
    {
      value: "+682",
      label: "+682 - Cook Islands",
    },
    {
      value: "+506",
      label: "+506 - Costa Rica",
    },
    {
      value: "+385",
      label: "+385 - Croatia",
    },
    {
      value: "+53",
      label: "+53 - Cuba",
    },
    {
      value: "+599",
      label: "+599 - Curacao",
    },
    {
      value: "+537",
      label: "+537 - Cyprus",
    },
    {
      value: "+420",
      label: "+420 - Czech Republic",
    },
    {
      value: "+45",
      label: "+45 - Denmark",
    },
    {
      value: "+246",
      label: "+246 - Diego Garcia",
    },
    {
      value: "+253",
      label: "+253 - Djibouti",
    },
    {
      value: "+1 767",
      label: "+1 767 - Dominica",
    },
    {
      value: "+1 809",
      label: "+1 809 - Dominican Republic",
    },
    {
      value: "+670",
      label: "+670 - East Timor",
    },
    {
      value: "+56",
      label: "+56 - Easter Island",
    },
    {
      value: "+593",
      label: "+593 - Ecuador",
    },
    {
      value: "+20",
      label: "+20 - Egypt",
    },
    {
      value: "+503",
      label: "+503 - El Salvador",
    },
    {
      value: "+240",
      label: "+240 - Equatorial Guinea",
    },
    {
      value: "+291",
      label: "+291 - Eritrea",
    },
    {
      value: "+372",
      label: "+372 - Estonia",
    },
    {
      value: "+251",
      label: "+251 - Ethiopia",
    },
    {
      value: "+500",
      label: "+500 - Falkland Islands",
    },
    {
      value: "+298",
      label: "+298 - Faroe Islands",
    },
    {
      value: "+679",
      label: "+679 - Fiji",
    },
    {
      value: "+358",
      label: "+358 - Finland",
    },
    {
      value: "+33",
      label: "+33 - France",
    },
    {
      value: "+596",
      label: "+596 - French Antilles",
    },
    {
      value: "+594",
      label: "+594 - French Guiana",
    },
    {
      value: "+689",
      label: "+689 - French Polynesia",
    },
    {
      value: "+241",
      label: "+241 - Gabon",
    },
    {
      value: "+220",
      label: "+220 - Gambia",
    },
    {
      value: "+995",
      label: "+995 - Georgia",
    },
    {
      value: "+49",
      label: "+49 - Germany",
    },
    {
      value: "+233",
      label: "+233 - Ghana",
    },
    {
      value: "+350",
      label: "+350 - Gibraltar",
    },
    {
      value: "+30",
      label: "+30 - Greece",
    },
    {
      value: "+299",
      label: "+299 - Greenland",
    },
    {
      value: "+1 473",
      label: "+1 473 - Grenada",
    },
    {
      value: "+590",
      label: "+590 - Guadeloupe",
    },
    {
      value: "+1 671",
      label: "+1 671 - Guam",
    },
    {
      value: "+502",
      label: "+502 - Guatemala",
    },
    {
      value: "+224",
      label: "+224 - Guinea",
    },
    {
      value: "+245",
      label: "+245 - Guinea-Bissau",
    },
    {
      value: "+595",
      label: "+595 - Guyana",
    },
    {
      value: "+509",
      label: "+509 - Haiti",
    },
    {
      value: "+504",
      label: "+504 - Honduras",
    },
    {
      value: "+852",
      label: "+852 - Hong Kong SAR China",
    },
    {
      value: "+36",
      label: "+36 - Hungary",
    },
    {
      value: "+354",
      label: "+354 - Iceland",
    },
    {
      value: "+91",
      label: "+91 - India",
    },
    {
      value: "+62",
      label: "+62 - Indonesia",
    },
    {
      value: "+98",
      label: "+98 - Iran",
    },
    {
      value: "+964",
      label: "+964 - Iraq",
    },
    {
      value: "+353",
      label: "+353 - Ireland",
    },
    {
      value: "+972",
      label: "+972 - Israel",
    },
    {
      value: "+39",
      label: "+39 - Italy",
    },
    {
      value: "+225",
      label: "+225 - Ivory Coast",
    },
    {
      value: "+1 876",
      label: "+1 876 - Jamaica",
    },
    {
      value: "+81",
      label: "+81 - Japan",
    },
    {
      value: "+962",
      label: "+962 - Jordan",
    },
    {
      value: "+7 7",
      label: "+7 7 - Kazakhstan",
    },
    {
      value: "+254",
      label: "+254 - Kenya",
    },
    {
      value: "+686",
      label: "+686 - Kiribati",
    },
    {
      value: "+965",
      label: "+965 - Kuwait",
    },
    {
      value: "+996",
      label: "+996 - Kyrgyzstan",
    },
    {
      value: "+856",
      label: "+856 - Laos",
    },
    {
      value: "+371",
      label: "+371 - Latvia",
    },
    {
      value: "+961",
      label: "+961 - Lebanon",
    },
    {
      value: "+266",
      label: "+266 - Lesotho",
    },
    {
      value: "+231",
      label: "+231 - Liberia",
    },
    {
      value: "+218",
      label: "+218 - Libya",
    },
    {
      value: "+423",
      label: "+423 - Liechtenstein",
    },
    {
      value: "+370",
      label: "+370 - Lithuania",
    },
    {
      value: "+352",
      label: "+352 - Luxembourg",
    },
    {
      value: "+853",
      label: "+853 - Macau SAR China",
    },
    {
      value: "+389",
      label: "+389 - Macedonia",
    },
    {
      value: "+261",
      label: "+261 - Madagascar",
    },
    {
      value: "+265",
      label: "+265 - Malawi",
    },
    {
      value: "+60",
      label: "+60 - Malaysia",
    },
    {
      value: "+960",
      label: "+960 - Maldives",
    },
    {
      value: "+223",
      label: "+223 - Mali",
    },
    {
      value: "+356",
      label: "+356 - Malta",
    },
    {
      value: "+692",
      label: "+692 - Marshall Islands",
    },
    {
      value: "+596",
      label: "+596 - Martinique",
    },
    {
      value: "+222",
      label: "+222 - Mauritania",
    },
    {
      value: "+230",
      label: "+230 - Mauritius",
    },
    {
      value: "+262",
      label: "+262 - Mayotte",
    },
    {
      value: "+52",
      label: "+52 - Mexico",
    },
    {
      value: "+691",
      label: "+691 - Micronesia",
    },
    {
      value: "+1 808",
      label: "+1 808 - Midway Island",
    },
    {
      value: "+373",
      label: "+373 - Moldova",
    },
    {
      value: "+377",
      label: "+377 - Monaco",
    },
    {
      value: "+976",
      label: "+976 - Mongolia",
    },
    {
      value: "+382",
      label: "+382 - Montenegro",
    },
    {
      value: "+1664",
      label: "+1664 - Montserrat",
    },
    {
      value: "+212",
      label: "+212 - Morocco",
    },
    {
      value: "+95",
      label: "+95 - Myanmar",
    },
    {
      value: "+264",
      label: "+264 - Namibia",
    },
    {
      value: "+674",
      label: "+674 - Nauru",
    },
    {
      value: "+977",
      label: "+977 - Nepal",
    },
    {
      value: "+31",
      label: "+31 - Netherlands",
    },
    {
      value: "+599",
      label: "+599 - Netherlands Antilles",
    },
    {
      value: "+1 869",
      label: "+1 869 -Nevis ",
    },
    {
      value: "+687",
      label: "+687 -New Caledonia",
    },
    {
      value: "+64",
      label: "+64 -New Zealand",
    },
    {
      value: "+505",
      label: "+505 -Nicaragua",
    },
    {
      value: "+227",
      label: "+227 -Niger",
    },
    {
      value: "+234",
      label: "+234- Nigeria",
    },
    {
      value: "+683",
      label: "+683 -Niue",
    },
    {
      value: "+672",
      label: "+672 -Norfolk Island",
    },
    {
      value: "+850",
      label: "+850 -North Korea",
    },
    {
      value: "+1 670",
      label: "+1 670 -Northern Mariana Islands",
    },
    {
      value: "+47",
      label: "+47 -Norway",
    },
    {
      value: "+968",
      label: "+968 -Oman",
    },
    {
      value: "+92",
      label: "+92-Pakistan",
    },
    {
      value: "+680",
      label: "+680-Palau",
    },
    {
      value: "+970",
      label: "+970 -Palestinian Territory",
    },
    {
      value: "+507",
      label: "+507 -Panama",
    },
    {
      value: "+675",
      label: "+675 -Papua New Guinea",
    },
    {
      value: "+595",
      label: "+595- Paraguay",
    },
    {
      value: "+51",
      label: "+51- Peru",
    },
    {
      value: "+63",
      label: "+63- Philippines",
    },
    {
      value: "+48",
      label: "+48 -Poland",
    },
    {
      value: "+351",
      label: "+351 -Portugal",
    },
    {
      value: "+1 787",
      label: "+1 787- Puerto Rico",
    },
    {
      value: "+974",
      label: "+974 -Qatar",
    },
    {
      value: "+262",
      label: "+262-Reunion",
    },
    {
      value: "+40",
      label: "+40-Romania",
    },
    {
      value: "+7",
      label: "+7-Russia",
    },
    {
      value: "+250",
      label: "+250- Rwanda",
    },
    {
      value: "+685",
      label: "+685- Samoa",
    },
    {
      value: "+378",
      label: "+378 -San Marino",
    },
    {
      value: "+966",
      label: "+966 -Saudi Arabia",
    },
    {
      value: "+221",
      label: "+221- Senegal",
    },
    {
      value: "+381",
      label: "+381 -Serbia",
    },
    {
      value: "+248",
      label: "+248 -Seychelles",
    },
    {
      value: "+232",
      label: "+232 -Sierra Leone",
    },
    {
      value: "+65",
      label: "+65 -Singapore",
    },
    {
      value: "+421",
      label: "+421 -Slovakia",
    },
    {
      value: "+386",
      label: "+386- Slovenia",
    },
    {
      value: "+677",
      label: "+677 -Solomon Islands",
    },
    {
      value: "+27",
      label: "+27 -South Africa",
    },
    {
      value: "+500",
      label: "+500- South Georgia and the South Sandwich Islands",
    },
    {
      value: "+82",
      label: "+82 -South Korea",
    },

    {
      value: "+34",
      label: "+34 -Spain",
    },
    {
      value: "+94",
      label: "+94 -Sri Lanka",
    },
    {
      value: "+249",
      label: "+249 -Sudan",
    },
    {
      value: "+597",
      label: "+597-Surilabel",
    },
    {
      value: "+268",
      label: "+268 -Swaziland",
    },
    {
      value: "+46",
      label: "+46 -Sweden",
    },
    {
      value: "+41",
      label: "+41 -Switzerland",
    },
    {
      value: "+963",
      label: "+963 -Syria)",
    },
    {
      value: "+886",
      label: "  +886 -Taiwan",
    },
    {
      value: "+992",
      label: "+992 -Tajikistan",
    },
    {
      value: "+255",
      label: "+255-Tanzania",
    },
    {
      value: "+66",
      label: " +66-Thailand ",
    },
    {
      value: "+670",
      label: "+670-Timor Leste",
    },
    {
      value: "+228",
      label: "+228-Togo",
    },
    {
      value: "+690",
      label: "+690-Tokelau",
    },
    {
      value: "+676",
      label: "+676-Tonga",
    },
    {
      value: "+1 868",
      label: "+1 868-Trinidad and Tobago ",
    },
    {
      value: "+216",
      label: "+216-Tunisia",
    },
    {
      value: "+90",
      label: "+90-Turkey",
    },
    {
      value: "+993",
      label: "+993-Turkmenistan",
    },
    {
      value: "+1 649",
      label: "+1 649-Turks and Caicos Islands ",
    },
    {
      value: "+688",
      label: "+688-Tuvalu",
    },
    {
      value: "+1 340",
      label: "+1 340-U.S. Virgin Islands",
    },
    {
      value: "+256",
      label: "+256-Uganda",
    },
    {
      value: "+380",
      label: "+380-Ukraine",
    },
    {
      value: "+971",
      label: "+971-United Arab Emirates",
    },
    {
      value: "+44",
      label: "+44-United Kingdom ",
    },
    {
      value: "+1",
      label: "+1-United States",
    },
    {
      value: "+598",
      label: "+598-Uruguay",
    },
    {
      value: "+998",
      label: " +998-Uzbekistan",
    },
    {
      value: "+678",
      label: "+678-Vanuatu",
    },
    {
      value: "+58",
      label: "+58-Venezuela",
    },
    {
      value: "+84",
      label: "+84-Vietnam",
    },
    {
      value: "+1 808",
      label: "+1 808-Wake Island",
    },
    {
      value: "+681",
      label: "+681-Wallis and Futuna",
    },
    {
      value: "+967",
      label: "+967-Yemen ",
    },
    {
      value: "+260",
      label: "+260-Zambia ",
    },
    {
      value: "+255",
      label: "+255-Zanzibar ",
    },
    {
      value: "+263",
      label: "+263-Zimbabwe",
    },
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

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g4737lr",
        "template_7fov8vt",
        form.current,
        "Tti4lP6PJyImEkf-q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
                  ref={form}
                  onSubmit={sendEmail}
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
    </>
  );
};

export default Contact;
