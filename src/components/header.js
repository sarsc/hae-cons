import PropTypes from 'prop-types';
import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { slide as Menu } from 'react-burger-menu';

import '../styles/header.scss';

const Header = ({ menuLinks, isSticky, isMobile }) => {
  const displayLinks = (
    <div className="linksContainer">
      {menuLinks.map((link) => (
        <div key={link.name}>
          <AnchorLink
            className="link"
            to={`/#${link.value}`}
            title={link.name}
            stripHash
            id={`${link.value}`}
          >
            {link.name}
          </AnchorLink>
        </div>
      ))}
    </div>
  );

  return (
    <header className="headerContainer">
      {!isMobile
        ? (
          <nav className={isSticky ? 'stickyNav navbar' : 'navbar navbarTransparent'}>
            {displayLinks}
          </nav>
        )
        : (
          <Menu right>
            {menuLinks.map((link) => (
              <div key={link.name}>
                <AnchorLink
                  className="link menu-item"
                  to={`/#${link.value}`}
                  title={link.name}
                  stripHash
                >
                  {link.name}
                </AnchorLink>
              </div>
            ))}
          </Menu>
        )}
    </header>
  );
};

Header.propTypes = {
  menuLinks: PropTypes.array,
  isSticky: PropTypes.bool,
};

Header.defaultProps = {
  isSticky: false,
  menuLinks: [],
};

export default Header;
