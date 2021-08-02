import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import { Link } from 'gatsby';
import SEO from './seo';
import Header from './header';
import Logo from './svg/Logo';
import stickyNav from '../stickyNav';

import '../styles/layout.scss';

const Layout = ({ children, isMobile }) => {
  const imagesCredits = 'Images Credits';
  const showCredits = 'Michael Syke/Scopio, Nikolas Gogstad/Scopio';
  const [creditsText, setCreditsText] = useState(imagesCredits);

  const links = [
    { value: 'about', name: 'About' },
    { value: 'services', name: 'Services' },
    { value: 'contact', name: 'Contact' },
  ];
  const isSticky = stickyNav();

  return (
    <div>
      <SEO title="Hae BIM Landscape Consultants" />
      <Header
        menuLinks={links}
        isSticky={isSticky}
        isMobile={isMobile}
      />
      {/* <CookieConsent
        location="bottom"
        buttonText="Accept"
        enableDeclineButton
        declineButtonText="Decline"
        cookieName="gatsby-plugin-gdpr-cookies"
        disableStyles
        containerClasses="cookiesContainer"
        buttonClasses="cookieAccept"
        declineButtonClasses="cookieDecline"
        contentStyle={{ margin: '0 50px' }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent> */}
      <div>
        <main>{children}</main>
      </div>
      <footer className="footer">
        <Logo scale={0.2} color="#000" />
        <div className="linksFooter">
          <div className="linksLeft">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span><Link to="/terms-and-conditions">Terms and Conditions</Link></span>
            <div
              onMouseOver={() => setCreditsText(showCredits)}
              onFocus={() => setCreditsText(showCredits)}
              onMouseLeave={() => setCreditsText(imagesCredits)}
              onBlur={() => setCreditsText(imagesCredits)}
            >
              <p>{creditsText}</p>
            </div>
          </div>
          <div className="footerRt">
            <FontAwesomeIcon icon={faLinkedinIn} className="social" />
          </div>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool,
};

Layout.defaultProps = {
  isMobile: false,
};

export default Layout;
