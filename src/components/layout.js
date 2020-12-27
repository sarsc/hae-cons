/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
// import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import { Link } from 'gatsby';
import Header from './header';
import Logo from './svg/Logo';
import stickyNav from '../stickyNav';

import '../styles/layout.scss';

const Layout = ({ children, isMobile }) => {
  const links = [
    { value: 'services', name: 'Services' },
    { value: 'about', name: 'About' },
    { value: 'contact', name: 'Contact' },
  ];
  const isSticky = stickyNav();
  // console.warn(getCookieConsentValue(), '');
  return (
    <div>
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
        <Logo scale={0.4} />
        <div className="linksFooter">
          <div>
            <span>
              <Link to="/">Privacy Policy</Link>
            </span>
            <Link to="/">Terms and Conditions</Link>
          </div>
          <FontAwesomeIcon icon={faLinkedinIn} className="social" />
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
