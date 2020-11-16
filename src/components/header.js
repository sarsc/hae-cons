import PropTypes from 'prop-types';
import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import '../styles/header.scss';

const Header = ({ menuLinks, isSticky }) => (
  <header className="headerContainer">
    <nav className={isSticky ? 'stickyNav navbar' : 'navbar navbarTransparent'}>
      <div className="linksContainer">
        {menuLinks.map((link) => (
          <div key={link.name}>
            <AnchorLink
              className="link"
              to={`/#${link.value}`}
              title={link.name}
              stripHash
            >
              {link.name}
            </AnchorLink>
          </div>
        ))}
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
