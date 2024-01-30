// CookieBanner.js

import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import './cookiesstyles.css'
const CookieBanner = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const [showBanner, setShowBanner] = useState(cookies.cookieConsent);

  const handleAccept = () => {
    setCookie('cookieConsent', true, { path: '/' });
    setShowBanner(false);
  };

  return (
    showBanner && (
        <div className="cookie-banner">
          <p>This website uses cookies. By using our website, you consent to our use of cookies.</p>
          <button onClick={handleAccept}>Accept</button>
        </div>
      )
  );
};

export default CookieBanner;
