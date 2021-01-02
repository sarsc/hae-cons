import PropTypes from 'prop-types';
import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { slide as Menu } from 'react-burger-menu';
import '../styles/header.scss';

const Header = ({ menuLinks, isSticky, isMobile }) => {
  const displayLinks = (
    <div className="linksContainer">
      {menuLinks.map((link) => (
        <div key={link.name}>
          <button
            className="link"
            title={link.name}
            type="button"
            onClick={() => scrollTo(`#${link.value}`)}
          >
            {link.name}
          </button>
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
                <button
                  className="link"
                  title={link.name}
                  type="button"
                  onClick={() => scrollTo(`#${link.value}`)}
                >
                  {link.name}
                </button>
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
