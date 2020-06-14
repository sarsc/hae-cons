import React from "react"
import Layout from "../components/layout"
// import ContactForm from "../components/ContactForm"
import video from '../images/video-test.mp4'
import LogoLarge from '../components/svg/LogoLarge'
import '../styles/index.scss'
// import SEO from "../components/seo"
// <SEO title="Home" />

const IndexPage = () => {

  return (
    <Layout>
      <div className="mainContainer">
        <video
         autoPlay
         loop                  
         muted
        >
          <source src={video}  type="video/mp4"/>
        </video>
        <div className="videoOverlay"></div>    
        <div className="textContainer">
          <div className="logoContainer">
            <LogoLarge />
            <p>BIM Landscape consultants</p>
          </div>
          {/* <div>
              <h2>COMING SOON</h2>
              <h2>Our website is currently under cosntruction.</h2>
          </div> */}
        </div>
      </div>
    </Layout>
)}

export default IndexPage
