/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../styles/layout.scss"
import stickyNav from "../stickyNav"

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
  
  const links =  [
    {link: 'service', name: 'Service'},
    {link: 'about', name: 'About'},
    {link: 'contact', name: 'Contact'},
  ];

  const isSticky = stickyNav();

  return (
    <div>
      <Header menuLinks={links} isSticky={isSticky} />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
