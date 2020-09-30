import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/header.scss'
const Header = ({ menuLinks }) => (
  <header className="headerContainer">
    <div>
     <nav>
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
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
