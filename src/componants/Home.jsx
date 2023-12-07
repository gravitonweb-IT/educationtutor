import React, { useEffect, useState, useRef } from "react";
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
import logo from "../componants/assets/images/logo.jpg";
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
import logo2 from "../componants/assets/images/logo3.jpg";
import game from "../componants/assets/game.mp4";
import coding from "../componants/assets/coding.jpg";
import science from "../componants/assets/science.jpg";
import math from "../componants/assets/maths.jpg";
import "./home.css";
import { useLocation } from 'react-router-dom';
import "./tabs.css";
import WhatsAppButton1 from "../componants/WhatsAppButton1";
import sat from "../componants/assets/sat.mp4";
import { FaInstagram } from "react-icons/fa";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import emailjs from "@emailjs/browser";
import Marquee from "react-fast-marquee";
const Home = () => {
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

  const [activeTab1, setActiveTab1] = useState(1);

  const handleTabClick1 = (tabNumber) => {
    setActiveTab1(tabNumber);
  };
  const [activeTab2, setActiveTab2] = useState(2);
  const handleTabClick2 = (tabName) => {
    setActiveTab2(tabName);
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
  const [selectedCode, setSelectedCode] = useState("");

  const countryCodes = [
    {
      "value": "+7 840",
      "label": "+7 840 - Abkhazia"
    },
    {
      "value": "+93",
      "label": "+93 - Afghanistan"
    },
    {
      "value": "+355",
      "label": "+355 - Albania"
    },
    {
      "value": "+213",
      "label": "+213 - Algeria"
    },
    {
      "value": "+1 684",
      "label": "+1 684 - American Samoa"
    },
    {
      "value": "+376",
      "label": "+376 - Andorra"
    },
    {
      "value": "+244",
      "label": "+244 - Angola"
    },
    {
      "value": "+1 264",
      "label": "+1 264 - Anguilla"
    },
    {
      "value": "+1 268",
      "label": "+1 268 - Antigua and Barbuda"
    },
    {
      "value": "+54",
      "label": "+54 - Argentina"
    },
    {
      "value": "+374",
      "label": "+374 - Armenia"
    },
    {
      "value": "+297",
      "label": "+297 - Aruba"
    },
    {
      "value": "+247",
      "label": "+247 - Ascension"
    },
    {
      "value": "+61",
      "label": "+61 - Australia"
    },
    {
      "value": "+672",
      "label": "+672 - Australian External Territories"
    },
    {
      "value": "+43",
      "label": "+43 - Austria"
    },
    {
      "value": "+994",
      "label": "+994 - Azerbaijan"
    },
    {
      "value": "+1 242",
      "label": "+1 242 - Bahamas"
    },
    {
      "value": "+973",
      "label": "+973 - Bahrain"
    },
    {
      "value": "+880",
      "label": "+880 - Bangladesh"
    },
    {
      "value": "+1 246",
      "label": "+1 246 - Barbados"
    },
    {
      "value": "+1 268",
      "label": "+1 268 - Barbuda"
    },
    {
      "value": "+375",
      "label": "+375 - Belarus"
    },
    {
      "value": "+32",
      "label": "+32 - Belgium"
    },
    {
      "value": "+501",
      "label": "+501 - Belize"
    },
    {
      "value": "+229",
      "label": "+229 - Benin"
    },
    {
      "value": "+1 441",
      "label": "+1 441 - Bermuda"
    },
    {
      "value": "+975",
      "label": "+975 - Bhutan"
    },
    {
      "value": "+591",
      "label": "+591 - Bolivia"
    },
    {
      "value": "+387",
      "label": "+387 - Bosnia and Herzegovina"
    },
    {
      "value": "+267",
      "label": "+267 - Botswana"
    },
    {
      "value": "+55",
      "label": "+55 - Brazil"
    },
    {
      "value": "+246",
      "label": "+246 - British Indian Ocean Territory"
    },
    {
      "value": "+1 284",
      "label": "+1 284 - British Virgin Islands"
    },
    {
      "value": "+673",
      "label": "+673 - Brunei"
    },
    {
      "value": "+359",
      "label": "+359 - Bulgaria"
    },
    {
      "value": "+226",
      "label": "+226 - Burkina Faso"
    },
    {
      "value": "+257",
      "label": "+257 - Burundi"
    },
    {
      "value": "+855",
      "label": "+855 - Cambodia"
    },
    {
      "value": "+237",
      "label": "+237 - Cameroon"
    },
    {
      "value": "+1",
      "label": "+1 - Canada"
    },
    {
      "value": "+238",
      "label": "+238 - Cape Verde"
    },
    {
      "value": "+ 345",
      "label": "+ 345 - Cayman Islands"
    },
    {
      "value": "+236",
      "label": "+236 - Central African Republic"
    },
    {
      "value": "+235",
      "label": "+235 - Chad"
    },
    {
      "value": "+56",
      "label": "+56 - Chile"
    },
    {
      "value": "+86",
      "label": "+86 - China"
    },
    {
      "value": "+61",
      "label": "+61 - Christmas Island"
    },
    {
      "value": "+61",
      "label": "+61 - Cocos-Keeling Islands"
    },
    {
      "value": "+57",
      "label": "+57 - Colombia"
    },
    {
      "value": "+269",
      "label": "+269 - Comoros"
    },
    {
      "value": "+242",
      "label": "+242 - Congo"
    },
    {
      "value": "+243",
      "label": "+243 - Congo, Dem. Rep. of (Zaire)"
    },
    {
      "value": "+682",
      "label": "+682 - Cook Islands"
    },
    {
      "value": "+506",
      "label": "+506 - Costa Rica"
    },
    {
      "value": "+385",
      "label": "+385 - Croatia"
    },
    {
      "value": "+53",
      "label": "+53 - Cuba"
    },
    {
      "value": "+599",
      "label": "+599 - Curacao"
    },
    {
      "value": "+537",
      "label": "+537 - Cyprus"
    },
    {
      "value": "+420",
      "label": "+420 - Czech Republic"
    },
    {
      "value": "+45",
      "label": "+45 - Denmark"
    },
    {
      "value": "+246",
      "label": "+246 - Diego Garcia"
    },
    {
      "value": "+253",
      "label": "+253 - Djibouti"
    },
    {
      "value": "+1 767",
      "label": "+1 767 - Dominica"
    },
    {
      "value": "+1 809",
      "label": "+1 809 - Dominican Republic"
    },
    {
      "value": "+670",
      "label": "+670 - East Timor"
    },
    {
      "value": "+56",
      "label": "+56 - Easter Island"
    },
    {
      "value": "+593",
      "label": "+593 - Ecuador"
    },
    {
      "value": "+20",
      "label": "+20 - Egypt"
    },
    {
      "value": "+503",
      "label": "+503 - El Salvador"
    },
    {
      "value": "+240",
      "label": "+240 - Equatorial Guinea"
    },
    {
      "value": "+291",
      "label": "+291 - Eritrea"
    },
    {
      "value": "+372",
      "label": "+372 - Estonia"
    },
    {
      "value": "+251",
      "label": "+251 - Ethiopia"
    },
    {
      "value": "+500",
      "label": "+500 - Falkland Islands"
    },
    {
      "value": "+298",
      "label": "+298 - Faroe Islands"
    },
    {
      "value": "+679",
      "label": "+679 - Fiji"
    },
    {
      "value": "+358",
      "label": "+358 - Finland"
    },
    {
      "value": "+33",
      "label": "+33 - France"
    },
    {
      "value": "+596",
      "label": "+596 - French Antilles"
    },
    {
      "value": "+594",
      "label": "+594 - French Guiana"
    },
    {
      "value": "+689",
      "label": "+689 - French Polynesia"
    },
    {
      "value": "+241",
      "label": "+241 - Gabon"
    },
    {
      "value": "+220",
      "label": "+220 - Gambia"
    },
    {
      "value": "+995",
      "label": "+995 - Georgia"
    },
    {
      "value": "+49",
      "label": "+49 - Germany"
    },
    {
      "value": "+233",
      "label": "+233 - Ghana"
    },
    {
      "value": "+350",
      "label": "+350 - Gibraltar"
    },
    {
      "value": "+30",
      "label": "+30 - Greece"
    },
    {
      "value": "+299",
      "label": "+299 - Greenland"
    },
    {
      "value": "+1 473",
      "label": "+1 473 - Grenada"
    },
    {
      "value": "+590",
      "label": "+590 - Guadeloupe"
    },
    {
      "value": "+1 671",
      "label": "+1 671 - Guam"
    },
    {
      "value": "+502",
      "label": "+502 - Guatemala"
    },
    {
      "value": "+224",
      "label": "+224 - Guinea"
    },
    {
      "value": "+245",
      "label": "+245 - Guinea-Bissau"
    },
    {
      "value": "+595",
      "label": "+595 - Guyana"
    },
    {
      "value": "+509",
      "label": "+509 - Haiti"
    },
    {
      "value": "+504",
      "label": "+504 - Honduras"
    },
    {
      "value": "+852",
      "label": "+852 - Hong Kong SAR China"
    },
    {
      "value": "+36",
      "label": "+36 - Hungary"
    },
    {
      "value": "+354",
      "label": "+354 - Iceland"
    },
    {
      "value": "+91",
      "label": "+91 - India"
    },
    {
      "value": "+62",
      "label": "+62 - Indonesia"
    },
    {
      "value": "+98",
      "label": "+98 - Iran"
    },
    {
      "value": "+964",
      "label": "+964 - Iraq"
    },
    {
      "value": "+353",
      "label": "+353 - Ireland"
    },
    {
      "value": "+972",
      "label": "+972 - Israel"
    },
    {
      "value": "+39",
      "label": "+39 - Italy"
    },
    {
      "value": "+225",
      "label": "+225 - Ivory Coast"
    },
    {
      "value": "+1 876",
      "label": "+1 876 - Jamaica"
    },
    {
      "value": "+81",
      "label": "+81 - Japan"
    },
    {
      "value": "+962",
      "label": "+962 - Jordan"
    },
    {
      "value": "+7 7",
      "label": "+7 7 - Kazakhstan"
    },
    {
      "value": "+254",
      "label": "+254 - Kenya"
    },
    {
      "value": "+686",
      "label": "+686 - Kiribati"
    },
    {
      "value": "+965",
      "label": "+965 - Kuwait"
    },
    {
      "value": "+996",
      "label": "+996 - Kyrgyzstan"
    },
    {
      "value": "+856",
      "label": "+856 - Laos"
    },
    {
      "value": "+371",
      "label": "+371 - Latvia"
    },
    {
      "value": "+961",
      "label": "+961 - Lebanon"
    },
    {
      "value": "+266",
      "label": "+266 - Lesotho"
    },
    {
      "value": "+231",
      "label": "+231 - Liberia"
    },
    {
      "value": "+218",
      "label": "+218 - Libya"
    },
    {
      "value": "+423",
      "label": "+423 - Liechtenstein"
    },
    {
      "value": "+370",
      "label": "+370 - Lithuania"
    },
    {
      "value": "+352",
      "label": "+352 - Luxembourg"
    },
    {
      "value": "+853",
      "label": "+853 - Macau SAR China"
    },
    {
      "value": "+389",
      "label": "+389 - Macedonia"
    },
    {
      "value": "+261",
      "label": "+261 - Madagascar"
    },
    {
      "value": "+265",
      "label": "+265 - Malawi"
    },
    {
      "value": "+60",
      "label": "+60 - Malaysia"
    },
    {
      "value": "+960",
      "label": "+960 - Maldives"
    },
    {
      "value": "+223",
      "label": "+223 - Mali"
    },
    {
      "value": "+356",
      "label": "+356 - Malta"
    },
    {
      "value": "+692",
      "label": "+692 - Marshall Islands"
    },
    {
      "value": "+596",
      "label": "+596 - Martinique"
    },
    {
      "value": "+222",
      "label": "+222 - Mauritania"
    },
    {
      "value": "+230",
      "label": "+230 - Mauritius"
    },
    {
      "value": "+262",
      "label": "+262 - Mayotte"
    },
    {
      "value": "+52",
      "label": "+52 - Mexico"
    },
    {
      "value": "+691",
      "label": "+691 - Micronesia"
    },
    {
      "value": "+1 808",
      "label": "+1 808 - Midway Island"
    },
    {
      "value": "+373",
      "label": "+373 - Moldova"
    },
    {
      "value": "+377",
      "label": "+377 - Monaco"
    },
    {
      "value": "+976",
      "label": "+976 - Mongolia"
    },
    {
      "value": "+382",
      "label": "+382 - Montenegro"
    },
    {
      "value": "+1664",
      "label": "+1664 - Montserrat"
    },
    {
      "value": "+212",
      "label": "+212 - Morocco"
    },
    {
      "value": "+95",
      "label": "+95 - Myanmar"
    },
    {
      "value": "+264",
      "label": "+264 - Namibia"
    },
    {
      "value": "+674",
      "label": "+674 - Nauru"
    },
    {
      "value": "+977",
      "label": "+977 - Nepal"
    },
    {
      "value": "+31",
      "label": "+31 - Netherlands"
    },
    {
      "value": "+599",
      "label": "+599 - Netherlands Antilles"
    },
    {
      "value": "+1 869",
      "label": "Nevis (+1 869)"
    },
    {
      "value": "+687",
      "label": "New Caledonia (+687)"
    },
    {
      "value": "+64",
      "label": "New Zealand (+64)"
    },
    {
      "value": "+505",
      "label": "Nicaragua (+505)"
    },
    {
      "value": "+227",
      "label": "Niger (+227)"
    },
    {
      "value": "+234",
      "label": "Nigeria (+234)"
    },
    {
      "value": "+683",
      "label": "Niue (+683)"
    },
    {
      "value": "+672",
      "label": "Norfolk Island (+672)"
    },
    {
      "value": "+850",
      "label": "North Korea (+850)"
    },
    {
      "value": "+1 670",
      "label": "Northern Mariana Islands (+1 670)"
    },
    {
      "value": "+47",
      "label": "Norway (+47)"
    },
    {
      "value": "+968",
      "label": "Oman (+968)"
    },
    {
      "value": "+92",
      "label": "Pakistan (+92)"
    },
    {
      "value": "+680",
      "label": "Palau (+680)"
    },
    {
      "value": "+970",
      "label": "Palestinian Territory (+970)"
    },
    {
      "value": "+507",
      "label": "Panama (+507)"
    },
    {
      "value": "+675",
      "label": "Papua New Guinea (+675)"
    },
    {
      "value": "+595",
      "label": "Paraguay (+595)"
    },
    {
      "value": "+51",
      "label": "Peru (+51)"
    },
    {
      "value": "+63",
      "label": "Philippines (+63)"
    },
    {
      "value": "+48",
      "label": "Poland (+48)"
    },
    {
      "value": "+351",
      "label": "Portugal (+351)"
    },
    {
      "value": "+1 787",
      "label": "Puerto Rico (+1 787)"
    },
    {
      "value": "+974",
      "label": "Qatar (+974)"
    },
    {
      "value": "+262",
      "label": "Reunion (+262)"
    },
    {
      "value": "+40",
      "label": "Romania (+40)"
    },
    {
      "value": "+7",
      "label": "Russia (+7)"
    },
    {
      "value": "+250",
      "label": "Rwanda (+250)"
    },
    {
      "value": "+685",
      "label": "Samoa (+685)"
    },
    {
      "value": "+378",
      "label": "San Marino (+378)"
    },
    {
      "value": "+966",
      "label": "Saudi Arabia (+966)"
    },
    {
      "value": "+221",
      "label": "Senegal (+221)"
    },
    {
      "value": "+381",
      "label": "Serbia (+381)"
    },
    {
      "value": "+248",
      "label": "Seychelles (+248)"
    },
    {
      "value": "+232",
      "label": "Sierra Leone (+232)"
    },
    {
      "value": "+65",
      "label": "Singapore (+65)"
    },
    {
      "value": "+421",
      "label": "Slovakia (+421)"
    },
    {
      "value": "+386",
      "label": "Slovenia (+386)"
    },
    {
      "value": "+677",
      "label": "Solomon Islands (+677)"
    },
    {
      "value": "+27",
      "label": "South Africa (+27)"
    },
    {
      "value": "+500",
      "label": "South Georgia and the South Sandwich Islands (+500)"
    },
    {
      "value": "+82",
      "label": "South Korea (+82)"
    },
    {
      "value": "+34",
      "label": "+34 (Spain)"
    },
    {
      "value": "+94",
      "label": "+94 (Sri Lanka)"
    },
    {
      "value": "+249",
      "label": "+249 (Sudan)"
    },
    {
      "value": "+597",
      "label": "+597 (Surilabel)"
    },
    {
      "value": "+268",
      "label": "+268 (Swaziland)"
    },
    {
      "value": "+46",
      "label": "+46 (Sweden)"
    },
    {
      "value": "+41",
      "label": "+41 (Switzerland)"
    },
    {
      "value": "+963",
      "label": "+963 (Syria)"
    },
    {
      "value": "+886",
      "label": "(Taiwan)"
    },
    {
      "value": "+992",
      "label": "(Tajikistan)"
    },
    {
      "value": "+255",
      "label": "(Tanzania)"
    },
    {
      "value": "+66",
      "label": "(Thailand)"
    },
    {
      "value": "+670",
      "label": "(Timor Leste)"
    },
    {
      "value": "+228",
      "label": "(Togo)"
    },
    {
      "value": "+690",
      "label": "(Tokelau)"
    },
    {
      "value": "+676",
      "label": "(Tonga)"
    },
    {
      "value": "+1 868",
      "label": "(Trinidad and Tobago)"
    },
    {
      "value": "+216",
      "label": "(Tunisia)"
    },
    {
      "value": "+90",
      "label": "(Turkey)"
    },
    {
      "value": "+993",
      "label": "(Turkmenistan)"
    },
    {
      "value": "+1 649",
      "label": "(Turks and Caicos Islands)"
    },
    {
      "value": "+688",
      "label": "(Tuvalu)"
    },
    {
      "value": "+1 340",
      "label": "(U.S. Virgin Islands)"
    },
    {
      "value": "+256",
      "label": "(Uganda)"
    },
    {
      "value": "+380",
      "label": "(Ukraine)"
    },
    {
      "value": "+971",
      "label": "(United Arab Emirates)"
    },
    {
      "value": "+44",
      "label": "(United Kingdom)"
    },
    {
      "value": "+1",
      "label": "(United States)"
    },
    {
      "value": "+598",
      "label": "(Uruguay)"
    },
    {
      "value": "+998",
      "label": "(Uzbekistan)"
    },
    {
      "value": "+678",
      "label": "(Vanuatu)"
    },
    {
      "value": "+58",
      "label": "(Venezuela)"
    },
    {
      "value": "+84",
      "label": "(Vietnam)"
    },
    {
      "value": "+1 808",
      "label": "(Wake Island)"
    },
    {
      "value": "+681",
      "label": "(Wallis and Futuna)"
    },
    {
      "value": "+967",
      "label": "(Yemen)"
    },
    {
      "value": "+260",
      "label": "(Zambia)"
    },
    {
      "value": "+255",
      "label": "(Zanzibar)"
    },
    {
      "value": "+263",
      "label": "+263 (Zimbabwe)"
    }
    // Add more country codes as needed
  ];

  const handleChangebutton = (e) => {
    setSelectedCode(e.target.value);
  };
  //
  const [teachersCount, setTeachersCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);

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

    // Add your validation logic here
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
  const [position, setPosition] = useState("100%");

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) =>
        prevPosition === "-100   " ? "0" : "-100"
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    // Assuming your APK file is in the public folder
    const apkFilePath = "../componants/app-debug.apk";

    // Fetch the file and create a Blob
    fetch(process.env.PUBLIC_URL + apkFilePath)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a link element
        const link = document.createElement("a");

        // Create a Blob URL for the file
        const blobUrl = URL.createObjectURL(blob);

        // Set the href attribute of the link to the Blob URL
        link.href = blobUrl;

        // Set the download attribute to prompt the user to download the file
        link.download = "app-debug.apk";

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click on the link to start the download
        link.click();

        // Remove the link and revoke the Blob URL
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };
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
  const location = useLocation();

  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [location.pathname]);

 
  return (
    <div>
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
                    src={logo2}
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
                    <a href="#education-testmonial">Testimonial</a>
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

 <div className="marquee" style={{ marginTop: "94px", marginBottom: "19px" }}>
  <marquee>
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <span
        style={{
          fontSize: '14px',
          color: 'blue',
          fontWeight: '700', // Bold font
        }}
      >
      Experience innovation on the go. Grab your app download today!
      </span>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={handleDownload}
        style={{
          backgroundColor: 'yellow',
          color: 'black',
          padding: '10px',
          borderRadius: '10px',
          fontSize: '16px',
          fontWeight: '700',
          textAlign: 'center',
          marginRight: '20px', // Adjust the margin as needed
        }}
      >
        Download APK
      </button>
      <span
        style={{
          fontSize: '14px',
          color: 'blue',
          fontWeight: '700', // Bold font
        }}
      >
        Unlock endless possibilities with our cutting-edge mobile app. Download now!
      </span>
    </div>
  </marquee>
</div>

        {/*================================================================================= 
                          START 5* APP HOME
    ==================================================================================*/}
    
        <section id="education-home" className="banner-area theme-bg-gradient">
       

          <div className="container">
      
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <div className="banner-device">
                  <img src={kids} alt="main" />
                </div>
              </div>
              <div className="col-lg-8 col-sm-8">
                {/* Home content */}
                <div className="banner-txt">
                  <div className="banner-intro">
                    <h1 className="banner-title">
                      Welcome to Edufusion Tutors - Breaking
                      <span id="area"> Learning Boundaries! </span>
                    </h1>
                    <p className="color-white lheight-30">
                      At Edufusion, we're passionate about transforming
                      education. With a dedicated team of experienced educators
                      more than 15 years and tech enthusiasts, we're redefining
                      online learning to make it accessible, engaging, and
                      empowering for every student. Experience personalized
                      excellence with our exclusive
                      <br />
                      <div
                        id="sessions"
                        style={{
                          color: "#ff3366",
                          fontSize: "23px",
                          fontWeight: "600",
                        }}
                      >
                        1:1 Sessions In Math, Science, and Coding. Join
                        Edufusion,
                      </div>{" "}
                      where education transcends boundaries!
                    </p>
                  </div>
                  <div className="app-media">
                    <div className="single-media">
                      <a
                        className="popup-vedio"
                        // href="https://www.youtube.com/watch?v=0fp60iHV7Rk"
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
                      <p className="color-7">Start Learning Courses Now</p>
                    </div>
                    <div className="single-media">
                      <a data-toggle="modal" data-target="#education-contact">
                        <FaRegQuestionCircle />
                      </a>
                      <p className="color-7">Do You have Any questions?</p>
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
                    WebkitAnimationDuration: "2s",
                    animationDuration: "2s",
                    animationName: "fadeIn",
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

                <div className="course-items">
                  <div className="tabs text-center">
                    <div className="tabs-nav">
                      <ul className="list-inline nav nav-tabs fsize-0">
                        <li className="col-lg-2 col-md-2 active">
                          <a
                            onClick={() => handleTabClick("course-item-1")}
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="true"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <h1
                                style={{
                                  transform: "rotate(-44deg)",
                                  fontSize: "19px",
                                  marginTop: "34px",
                                }}
                              >
                                Maths
                              </h1>
                            </div>
                          </a>
                        </li>
                        <li className="col-lg-2 col-md-2">
                          <a
                            onClick={() => handleTabClick("course-item-2")}
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="false"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <h1
                                style={{
                                  transform: "rotate(-44deg)",
                                  fontSize: "19px",
                                  marginTop: "34px",
                                }}
                              >
                                Science
                              </h1>
                            </div>
                          </a>
                        </li>
                        <li className="col-lg-2 col-md-2">
                          <a
                            onClick={() => handleTabClick("course-item-3")}
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="false"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <h1
                                style={{
                                  transform: "rotate(-44deg)",
                                  fontSize: "19px",
                                  marginTop: "34px",
                                }}
                              >
                                Coding
                              </h1>
                            </div>
                          </a>
                        </li>
                        <li className="col-lg-2 col-md-2">
                          <a
                            onClick={() => handleTabClick("course-item-4")}
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="false"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <h1
                                style={{
                                  transform: "rotate(-44deg)",
                                  fontSize: "19px",
                                  marginTop: "34px",
                                }}
                              >
                                SAT
                              </h1>
                            </div>
                          </a>
                        </li>
                        <li className="col-lg-2 col-md-2">
                          <a
                            onClick={() => handleTabClick("course-item-5")}
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="false"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <h1
                                style={{
                                  transform: "rotate(-44deg)",
                                  fontSize: "19px",
                                  marginTop: "34px",
                                }}
                              >
                                PSAT
                              </h1>
                            </div>
                          </a>
                        </li>
                        <li className="col-lg-2 col-md-2">
                          <a
                            onClick={() => handleTabClick("course-item-6")}
                            data-toggle="tab"
                            className="fsize-12 uppercase"
                            aria-expanded="false"
                          >
                            <div className="ia-icon theme-bg-gradient mt25">
                              <h1
                                style={{
                                  transform: "rotate(-44deg)",
                                  fontSize: "19px",
                                  marginTop: "34px",
                                }}
                              >
                                MORE
                              </h1>
                            </div>
                          </a>
                        </li>
                        {/* End course tab button */}
                      </ul>
                    </div>
                    <div className="tab-content relative background-white mt100 bdrs-10">
                      {/* Start Single tab content */}
                      {activeTab === "course-item-1" && (
                        <div
                          className={`tab-pane fade text-left clearfix ${
                            activeTab === "course-item-1" ? "active in" : ""
                          }`}
                          id="course-item-1"
                        >
                          <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                            <div className="table mb40">
                              <div className="title-bl table-cell valign-middle">
                                <div className="title color-2">
                                  <span
                                    style={{
                                      fontSize: "25px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    Mathematics Learning Platform
                                  </span>
                                </div>
                                <div className="subtitle fweight-600 color-4 mt20">
                                  <h5>
                                    We take care of all your child’s math needs{" "}
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <h1></h1>
                            <p className="lheight-30 mt20">
                              Are you grappling with Math Anxiety, facing
                              Learning Gaps, and desiring mastery in Conceptual
                              Learning, Mental Math’s, and Advanced Math? Look
                              no further – our online math tutoring service is
                              designed just for you!
                            </p>
                            <ul className="list1">
                              <li>
                                <span className="table-cell valign-middle">
                                  <h5
                                    style={{
                                      fontSize: "18px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    Math Anxiety Support:
                                  </h5>
                                  Conquer math anxiety with our supportive
                                  environment, ensuring a positive and enjoyable
                                  learning experience.
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  <h5
                                    style={{
                                      fontSize: "18px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    Bridge Learning Gaps:
                                  </h5>{" "}
                                  Personalized lessons fill gaps, providing a
                                  solid foundation for mathematical success.
                                </span>
                              </li>
                            </ul>
                            {/* button */}
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              <div className="slick-list draggable">
                                <iframe
                                  width="100%"
                                  height={300}
                                  src={learningmath}
                                  frameBorder={0}
                                  allow="autoplay; encrypted-media"
                                  allowFullScreen=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab == "course-item-2" && (
                        <div
                          className={`tab-pane fade text-left clearfix ${
                            activeTab === "course-item-2" ? "active in" : ""
                          }`}
                          id="course-item-2"
                        >
                          <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                            <div className="table mb40">
                              <div className="title-bl table-cell valign-middle">
                                <div className="title color-2">
                                  <span
                                    style={{
                                      fontSize: "25px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    Unlock the Wonders of Science with Our
                                    Exclusive
                                  </span>
                                </div>
                                <div className="subtitle fweight-600 color-4 mt20">
                                  {/* Embark on a dynamic learning experience with our science online tutoring! Dive into virtual labs, explore real-life examples, and engage with interactive videos, making complex concepts come alive. */}
                                  {/* Our comprehensive approach ensures a deeper understanding of science. Ready to evaluate your learning journey? Join us today! */}
                                </div>
                              </div>
                            </div>
                            <p className="lheight-30 mt20">
                              Embark on a dynamic learning experience with our
                              science online tutoring! Dive into virtual labs,
                              explore real-life examples, and engage with
                              interactive videos, making complex concepts come
                              alive. Our comprehensive approach ensures a deeper
                              understanding of science. Ready to evaluate your
                              learning journey? Join us today!
                            </p>
                            {/* <ul className="list1">
                              <li className="list-theme-color">
                                <span className="table-cell valign-middle">
                                  Top-notch Tutors
                                </span>
                              </li>
                              <li className="list-theme-color">
                                <span className="table-cell valign-middle">
                                  Flexibility in Scheduling
                                </span>
                              </li>
                              <li className="list-theme-color">
                                <span className="table-cell valign-middle">
                                  Interactive Learning Tools
                                </span>
                              </li>
                            </ul> */}
                            {/* button */}
                            <div className="flex-1"></div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              <iframe
                                width="100%"
                                height={300}
                                src={grade6}
                                frameBorder={0}
                                allow="autoplay; encrypted-media"
                                allowFullScreen=""
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === "course-item-3" && (
                        <div
                          className={`tab-pane fade text-left clearfix ${
                            activeTab === "course-item-3" ? "active in" : ""
                          }`}
                          id="course-item-3"
                        >
                          <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                            <div className="table mb40">
                              <div className="title-bl table-cell valign-middle">
                                <div className="title color-2">
                                  <span
                                    style={{
                                      fontSize: "25px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    Supercharge Your Child's Future with Coding!{" "}
                                  </span>
                                </div>
                                <div className="subtitle fweight-600 color-4 mt20">
                                  Explore the world of coding from the comfort
                                  of your home with our Online Coding Tutorials
                                </div>
                              </div>
                            </div>
                            <p className="lheight-30 mt30">
                              Embrace Online Coding Tutorials for a dynamic
                              learning experience. Dive into a world of
                              interactive lessons, expert guidance, and flexible
                              accessibility. Whether you're a beginner or aiming
                              to refine your skills, our tutorials empower you
                              with the knowledge needed for success.
                            </p>
                            <ul className="list1">
                              <li>
                                <span className="table-cell valign-middle">
                                  <h5
                                    style={{
                                      fontSize: "18px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    Boosts Critical Thinking:
                                  </h5>{" "}
                                  Develops logical and analytical skills for
                                  academic excellence.
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  <h5
                                    style={{
                                      fontSize: "18px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    Math Made Fun:
                                  </h5>{" "}
                                  Coding enhances math proficiency in an
                                  engaging way.
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  <h5
                                    style={{
                                      fontSize: "18px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    Creative Exploration:
                                  </h5>{" "}
                                  Unleash creativity through coding adventures.
                                </span>
                              </li>
                            </ul>
                            {/* button */}
                            <div className="flex-1"></div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              <iframe
                                width="100%"
                                height={300}
                                src={game}
                                frameBorder={0}
                                allow="autoplay; encrypted-media"
                                allowFullScreen=""
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === "course-item-4" && (
                        <div
                          className={`tab-pane fade text-left clearfix ${
                            activeTab === "course-item-4" ? "active in" : ""
                          }`}
                          id="course-item-4"
                        >
                          <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                            <div className="table mb40">
                              <div className="title-bl table-cell valign-middle">
                                <div className="title color-2">
                                  <span
                                    style={{
                                      fontSize: "25px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    Excel in Competitive Exams with Our Proven
                                    Expertise
                                  </span>
                                </div>
                                <div className="subtitle fweight-600 color-4 mt30">
                                  Your success in PSAT, SAT, ACT, NAPLAN, and
                                  Olympiads begins with EDUFUSION TUTOR - Your
                                  Trusted Guide to Academic Excellence!
                                </div>
                              </div>
                            </div>
                            <p className="lheight-30 mt30">
                              Unlock the door to success in competitive exams
                              such as PSAT, SAT, ACT, NAPLAN, and Olympiads with
                              <span
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "600",
                                  marginLeft: "10px",
                                }}
                              >
                                EDUFUSION TUTOR
                              </span>
                              . With over 12 years of unparalleled experience,
                              we have been guiding students towards academic
                              excellence and achieving top scores in these
                              prestigious examinations.
                            </p>
                            <ul className="list1">
                              <li>
                                <span className="table-cell valign-middle">
                                  Proven Track Record
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Comprehensive Exam Coverage
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Expert Tutors with Specialized Knowledge
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Strategic Test-Taking Strategies
                                </span>
                              </li>
                            </ul>
                            {/* button */}
                            <div className="flex-1"></div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              <iframe
                                width="100%"
                                height={300}
                                src={sat}
                                frameBorder={0}
                                allow="autoplay; encrypted-media"
                                allowFullScreen=""
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === "course-item-5" && (
                        <div
                          className={`tab-pane fade text-left clearfix ${
                            activeTab === "course-item-5" ? "active in" : ""
                          }`}
                          id="course-item-5"
                        >
                          <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                            <div className="table mb40">
                              <div className="title-bl table-cell valign-middle">
                                <div className="title color-2">
                                  <span
                                    style={{
                                      fontSize: "25px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    Master the PSAT with EDUFUSION TUTOR
                                  </span>
                                </div>
                                <div className="subtitle fweight-600 color-4 mt30">
                                  Your success in PSAT, SAT, ACT, NAPLAN, and
                                  Olympiads begins with EDUFUSION TUTOR - Your
                                  Trusted Guide to Academic Excellence!
                                </div>
                              </div>
                            </div>
                            <p className="lheight-30 mt30">
                              Unlock Your Potential with PSAT Online Tutoring!
                              🌟 Are you ready to ace the PSAT and set the stage
                              for your academic success? Look no further! Our
                              PSAT Online Tutoring program is designed to
                              empower students like you to confidently tackle
                              the exam and achieve outstanding results. can you
                              add more features or information about psat
                            </p>
                            <ul className="list1 mt30">
                              <li>
                                <span className="table-cell valign-middle">
                                  Expert Guidance
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Tailored Programs
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  PSAT Confidence
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Top Scores Assurance
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Academic Opportunities
                                </span>
                              </li>
                            </ul>
                            {/* button */}
                            <div className="flex-1"></div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              <iframe
                                width="100%"
                                height={300}
                                src={sat}
                                frameBorder={0}
                                allow="autoplay; encrypted-media"
                                allowFullScreen=""
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === "course-item-6" && (
                        <div
                          className={`tab-pane fade text-left clearfix ${
                            activeTab === "course-item-6" ? "active in" : ""
                          }`}
                          id="course-item-6"
                        >
                          <div className="course-info-header col-lg-6 col-md-12 col-sm-12 col-xs-12 ptb60 pl60">
                            <div className="table mb40">
                              <div className="title-bl table-cell valign-middle">
                                <div className="title color-2">
                                  <span
                                    style={{
                                      fontSize: "25px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    {" "}
                                    Competitive Exam{" "}
                                  </span>
                                </div>
                                <div
                                  className="subtitle fweight-600 color-4"
                                  style={{ marginTop: "20px" }}
                                >
                                  Embark on a Journey to Academic Excellence
                                  with edufusion ACADEMY!
                                </div>
                              </div>
                            </div>
                            <p className="lheight-30">
                              Are you ready to conquer a myriad of competitive
                              exams, from PSAT, SAT, ACT, NAPLAN, Olympiads, to
                              AP courses and beyond? Look no further! Edufusion
                              Tutors is your one-stop destination for
                              comprehensive exam preparation, guiding you
                              towards success in every academic endeavor .
                            </p>
                            <p
                              className="lheight-30 "
                              style={{ marginTop: "2px" }}
                            >
                              Master a spectrum of exams including PSAT, SAT,
                              ACT, NAPLAN, Olympiads, AP courses, and various
                              university-level exams. Our expert tutors are
                              well-versed in diverse curricula, ensuring you're
                              prepared for any challenge.{" "}
                            </p>
                            <ul className="list1">
                              <li>
                                <span className="table-cell valign-middle">
                                  Solving Complex Puzzles with Precision
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Exploring Phenomena Through Inquiry and
                                  Experimentation
                                </span>
                              </li>
                              <li>
                                <span className="table-cell valign-middle">
                                  Crafting Algorithms, Transforming Ideas into
                                  Digital Realities
                                </span>
                              </li>
                            </ul>
                            {/* button */}
                            <div className="flex-1"></div>
                          </div>
                          <div className="course-slider-bl col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="course-slider arrow-btn slick-initialized slick-slider">
                              <iframe
                                width="100%"
                                height={300}
                                src={sat}
                                frameBorder={0}
                                allow="autoplay; encrypted-media"
                                allowFullScreen=""
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* End Single tab content */}
                    </div>
                  </div>
                </div>
                {/* End course items */}
              </div>
            </div>
          </div>
        </section>

        {/* tabs */}
        <div className="enroll-wrapper" data-v-0a6dbf09>
          <div
            data-aos="fade-up"
            data-aos-duration={1000}
            className="title-container aos-init aos-animate"
            data-v-0a6dbf09
          >
            <h2 className="title" data-v-0a6dbf09>
              A Simple 3-Step Process To Enroll Your Kid to Any Course
            </h2>
          </div>{" "}
          <div className="enroll-container" data-v-0a6dbf09>
            <div className="enroll-box" data-v-0a6dbf09>
              <div data-v-0a6dbf09>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4762/4762311.png"
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
                    Select A Course
                  </div>{" "}
                  <div className="enroll-description" data-v-0a6dbf09>
                    <ul>
                      <li>Maths Course</li>
                      <li>Coding </li>
                      <li>Science Course</li>
                      <li>Competitive Exam</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="enroll-box" data-v-0a6dbf09>
              <div data-v-0a6dbf09>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/trial-7-404313.png"
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
                    Choose your mentor of choice from 200+ mentors as well as
                    your preferred time slot
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="enroll-box" data-v-0a6dbf09>
              <div data-v-0a6dbf09>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4413/4413569.png"
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

        {/*================================================================================= 
                          START why-choose 
    ==================================================================================*/}
        <section id="education-why-choose" className="why-choose  pb80">
          <div className="container">
            <div className="row">
              <div className="why-choose-items">
                <div className="tabs text-center">
                  <div className="tabs-nav">
                    <ul className="list-inline nav nav-tabs fsize-0">
                      <li className={activeTab1 === 1 ? "active" : ""}>
                        <a
                          href="#img-why-choose"
                          data-toggle="tab"
                          className="fsize-12 uppercase tab"
                          onClick={() => handleTabClick1(1)}
                        >
                          Image
                        </a>
                      </li>
                      <li className={activeTab1 === 2 ? "active" : ""}>
                        <a
                          href="#video-why-choose"
                          data-toggle="tab"
                          className="fsize-12 uppercase tab"
                          onClick={() => handleTabClick1(2)}
                        >
                          Video
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content relative background-white plr80 bdrs-10">
                    {/* Start tab content - Image */}
                    <div
                      className={`tab-pane fade text-left clearfix ${
                        activeTab1 === 1 ? "active in" : ""
                      }`}
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
                                WebkitAnimationDuration: "2s",
                                animationDuration: "2s",
                                animationName: "fadeIn",
                              }}
                            >
                              <div className="ptb5">
                                <div className="subtitle">
                                  Make your courses standout
                                </div>
                                <div className="title color-2">
                                  <span
                                    style={{
                                      fontSize: "25px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    Why choose us
                                    <span className="color-15">.</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <h2 style={{ fontSize: "24px", fontWeight: "700" }}>
                              Transforming Lives Through Personalized Education
                            </h2>
                            <p>
                              At EDUFUSION TUTOR, we envision a world where
                              every learner, regardless of background or
                              circumstance, has the opportunity to unlock their
                              full potential through personalized education. We
                              aspire to be a guiding light on the educational
                              journey, fostering a love for learning that
                              transcends boundaries.
                            </p>
                            <h5 style={{ fontSize: "20px", fontWeight: "700" }}>
                              Our Commitment
                            </h5>
                            <p>
                              <h5
                                style={{ fontSize: "18px", fontWeight: "600" }}
                              >
                                Empowerment:
                              </h5>
                              We envision empowering students with the tools and
                              knowledge to confidently navigate the
                              ever-evolving landscape of education and beyond.
                            </p>
                            <h5 style={{ fontSize: "20px", fontWeight: "700" }}>
                              Inclusivity:{" "}
                            </h5>
                            <p>
                              Our vision includes breaking down barriers to
                              learning. We strive to create an inclusive space
                              where every student feels valued and supported.
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="img-exp">
                              <img
                                src="https://www.internationaltalentacademy.org/wp-content/uploads/2020/09/Happy-kids-with-books-thumbs-up-1-1.jpg"
                                alt="choose"
                                className="img-fluid"
                                style={{
                                  width: "433px",
                                  marginTOp: "85px",
                                  width: "489px",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End tab content - Image */}

                    {/* Start tab content - Video */}
                    <div
                      className={`tab-pane fade text-left clearfix ${
                        activeTab1 === 2 ? "active in" : ""
                      }`}
                      id="video-why-choose"
                      style={{ margin: "40px 0" }}
                    >
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
                              <span
                                style={{ fontSize: "25px", fontWeight: "700" }}
                              >
                                Why choose us<span className="color-15">.</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <h5 style={{ fontSize: "25px", fontWeight: "700" }}>
                          Global Impact:{" "}
                        </h5>
                        <p>
                          Our vision extends globally, reaching learners around
                          the world. We aspire to contribute to the development
                          of a knowledgeable and empowered global community.
                        </p>
                        <p>
                          <span style={{ fontSize: "20px", fontWeight: "600" }}>
                            {" "}
                            Lifelong Learning
                          </span>
                          : Beyond academic success, our vision encompasses
                          instilling a love for lifelong learning. We aspire to
                          cultivate curious, adaptable individuals prepared for
                          the challenges and opportunities of the future.
                        </p>
                        <h5 style={{ fontSize: "20px", fontWeight: "700" }}>
                          Time Rescheduling
                        </h5>
                        <p>
                          Recognizing the busy nature of life, we offer
                          hassle-free time rescheduling options. Your education
                          should fit your schedule, not the other way around.
                        </p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="video-exp">
                          <iframe
                            width="100%"
                            height={400}
                            src={mathsvideo}
                            frameBorder={0}
                            allow="autoplay; encrypted-media"
                            allowFullScreen=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* End tab content - Video */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*================================================================================= 
                          END why-choose 
    ==================================================================================*/}

        {/* our vission start */}
        <div className="VISION">
          <h1 className="text-center" style={{ marginTop: "20px" }}>
            OUR VISION
          </h1>
          <div className="container mx-auto">
            <div className="row  mt30">
              <div
                className="col-lg-6 col-md-6 col-sm-1  mt50"
                style={{ lineHeight: "2.5" }}
              >
                At EDUFUSION TUTOR, we envision a world where every learner,
                regardless of background or circumstance, has the opportunity to
                unlock their full potential through personalized education. We
                aspire to be a guiding light on the educational journey,
                fostering a love for learning that transcends boundaries.
              </div>
              <div className="col-lg-6 col-md-6 col-sm-1">
                <img
                  src="https://www.codeyoung.com/_nuxt/img/our_vision.0088ebd.png"
                  alt="image"
                  style={{ height: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* our vision end */}

        {/* our mission  start*/}
        <div className="mission">
          <h1 className="text-center">OUR MISSION</h1>
          <div className="container mx-auto">
            <div className="row mt30">
              <div className="mission-content">
                <div className="col-lg-5 col-md-6 col-sm-1 gap0">
                  <img
                    src="https://www.codeyoung.com/_nuxt/img/our_mission.017c97b.png"
                    alt="image"
                    style={{ height: "327px", maxWidth: "100%" }}
                  />
                </div>
                <div
                  className="col-lg-7 col-md-6 col-sm-1 mt50"
                  style={{ lineHeight: "2.5" }}
                >
                  At Edufusion Tutor, we're on a mission to make learning
                  accessible to everyone. We're creating a welcoming and
                  inclusive space where every student is supported and valued.
                  Through easy-to-access learning opportunities, we want to help
                  individuals grow, celebrate diversity, and ensure that
                  education is a positive experience for everyone. Our goal is
                  to break down barriers and make knowledge accessible to all.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* our mission end */}

        {/*================================================================================= 
                          START PRICE  
    ==================================================================================*/}

        {/*================================================================================= 
                          END PRICE  
    ==================================================================================*/}
        {/* counterstart */}

        <div
          className="section progress-bars section-padding"
          style={{ background: "#2f384a", marginTop: "66px" }}
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
                      <div className="fsize-40 num" style={{ color: "white" }}>
                        {studentsCount}
                      </div>
                      <p className="name-inner" style={{ color: "white" }}>
                        students taught{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-3 col-xs-6">
                    <div
                      className="progress-bar-number"
                      style={{ marginTop: "20px" }}
                    >
                      <div className="fsize-40 num" style={{ color: "white" }}>
                        {classesCount}
                      </div>
                      <p className="name-inner" style={{ color: "white" }}>
                        classes taken{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-xs-6">
                    <div
                      className="progress-bar-number"
                      style={{ marginTop: "20px" }}
                    >
                      <div className="fsize-40 num" style={{ color: "white" }}>
                        {registeredCount}
                      </div>
                      <p className="name-inner" style={{ color: "white" }}>
                        registered mentors{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-3 col-xs-6">
                    <div className="progress-bar-number">
                      <div className="fsize-40 num" style={{ color: "white" }}>
                        {countryCount}
                      </div>
                      <p className="name-inner" style={{ color: "white" }}>
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

        {/*================================================================================= 
                          START TESTIMONIALS  
    ==================================================================================*/}
        <section
          className=" testimonials__area-2 fix p-relative pt-120 pb-120  "
          id="education-testmonial"
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
                      fontSize: "35px",
                      fontWeight: "700",
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
                    <span style={{ fontSize: "23px", fontWeight: "600" }}>
                      {" "}
                      Empowering Every Child for Success
                    </span>
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
                          learning. Once a source of fear, math has now become
                          her favorite subject. The foundational concepts are
                          developing impressively, evident in my daughter's
                          ability to solve complex problems effortlessly and
                          swiftly. Thanks to Edufusion for facilitating
                          conceptual learning and helping my child
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text"></div>
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
                        <div className="testimonials__client-text"></div>
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
                          an enriching experience for my child. The curriculum
                          is well-structured, offering a comprehensive
                          understanding of coding concepts. Edufusion's
                          instructors are knowledgeable and provide effective
                          guidance, making complex coding principles accessible.
                          which has ignited a genuine interest and proficiency
                          in coding for my child."
                        </p>
                      </div>
                      <div className="testimonials__client d-flex align-items-center">
                        <div className="testimonials__client-thumb"></div>
                        <div className="testimonials__client-text"></div>
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
                    {/* <div className="testimonials__item-content">
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
                    </div> */}
                  </div>
                </div>
                {/* 4th */}

                
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
<div>
        <div
          className="text-center wow fadeIn"
          data-wow-duration="2s"
          id="education-blog"
          style={{
            visibility: "visible",
            animationDuration: "2s",
            animationName: "fadeIn",
       
         
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
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
  {cardContents.map((card, index) => (
    <div
      key={index}
      style={{
        flex: "1 0 30%",  // Adjust the percentage as needed for larger screens
        maxWidth: "300px", // Set a max width if necessary
        border: `1px solid ${expandedCardIndex === index ? "blue" : "black"}`,
        padding: "10px",
        margin: "10px",
        transition: "border 0.3s ease",
        boxSizing: "border-box", // Ensure padding and border are included in the width
        ...(window.innerWidth <= 768 && {
          flex: "1 0 100%", // Make each card take up the full width in mobile view
          maxWidth: "none", // Remove the max width in mobile view if necessary
          margin: 0, // Remove margin for better spacing in mobile view
        }),
        ...(window.innerWidth <= 480 && {
          display: "grid",
          gridTemplateColumns: "1fr", // Display one column in grid for smaller screens
          gap: "10px", // Add some gap between grid items for better spacing
        }),
      }}
    >
              <img
                src={card.imageSrc}
                alt={`Image for ${card.title}`}
                style={{
                  width: "100%",
                  maxHeight: "270px",
                  objectFit: "cover",
                }}
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
        </div>
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

        {/* whats app */}
        <WhatsAppButton1 />
        <WhatsAppButton />

        {/*================================================================================= 
                          START CONTACT POP-UP  
    ==================================================================================*/}
        {/* Modal */}

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
                            className="form-control fo.section-subscribe-st .btn {
                              rm-control-lg"
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

        {/*  */}
      </>
    </div>
  );
};

export default Home;
