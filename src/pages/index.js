import React from "react"
import Layout from "../components/layout"
// import ContactForm from "../components/ContactForm"
import video from '../images/forest.mp4'
import LogoLarge from '../components/svg/LogoLarge'
import Services from './Services'
import About from './About'
import '../styles/index.scss'
// import SEO from "../components/seo"
// <SEO title="Home" />

const IndexPage = () => {

  return (
    <Layout>
      <div className="mainContainer">
        <div className="videoContainer">
            <video
             autoPlay
             loop                  
             muted
            >
          <source src={video}  type="video/mp4"/>
          </video>
        </div>
        <div className="videoOverlay"></div>    
          <div className="logoContainer">
            <LogoLarge />
          </div>
      </div>
      <About />
      <Services />
    </Layout>
)}

export default IndexPage
