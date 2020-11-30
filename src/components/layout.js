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

import { Link } from 'gatsby';
// import { useStaticQuery, graphql } from "gatsby"
import Header from './header';
import Logo from './svg/Logo';
import stickyNav from '../stickyNav';

import '../styles/layout.scss';

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const links = [
    { value: 'services', name: 'Services' },
    { value: 'about', name: 'About' },
    { value: 'contact', name: 'Contact' },
  ];

  const isSticky = stickyNav();

  return (
    <div>
      <Header menuLinks={links} isSticky={false} />
      <div>
        <main>{children}</main>
      </div>
      <footer className="footer">
        <Logo scale={0.4} />
        <div className="linksFooter">
          <Link to="/">policy</Link>
          <div className="iconsContainer">
            <div>
              <FontAwesomeIcon icon={faEnvelopeSquare} className="envelope" />
              <span>
                info.haeconsultans@gmail.com
              </span>
            </div>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
