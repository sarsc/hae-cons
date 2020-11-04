import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import stickyNav from "../stickyNav";
import '../styles/header.scss';

const Header = ({ menuLinks, isSticky }) => {
  
  return (
    <header className="headerContainer">
      <nav className={isSticky ? 'stickyNav navbar' : 'navbar navbarTransparent'}>
        <div className="linksContainer">
           {menuLinks.map(link => (
             <div key={link.name}>
              <Link className="link" to={`#${link.link}`}>
                {link.name}
              </Link>
             </div>
           ))}
         </div>
      </nav>
    </header>
)};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
