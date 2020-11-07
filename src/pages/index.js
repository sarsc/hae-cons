import React from "react"
import Layout from "../components/layout"
import video from '../images/forest.mp4'
import LogoLarge from '../components/svg/LogoLarge'
import Services from './Services'
import About from './About'
import Contact from './Contact'
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
      <section id="about">
        <About/>
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Layout>
)}

export default IndexPage
