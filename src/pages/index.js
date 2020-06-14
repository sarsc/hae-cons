import React from "react"
import Layout from "../components/layout"
// import ContactForm from "../components/ContactForm"
import video from '../images/video-test.mp4'
import LogoLarge from '../components/svg/LogoLarge'
import '../styles/index.scss'
// import SEO from "../components/seo"
// <SEO title="Home" />

const IndexPage = () => {

const style = {
  width: '50%',
  padding: '40px',
  textAlign: 'center',
  margin: '200px 0'
}

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
        <div className="textContainer" style={style}>
          <div className="logoContainer">
            <LogoLarge />
            <h1>BIM Landscape consultants</h1>
          </div>
          <div style={{ background: 'rgba(196, 188, 179, 0.5)', display: 'flex', alignItems: 'center', width: '50%'}}>
            <div style={{width: '100%', color: '#FFF'}}>
              <h1>COMING SOON</h1>
              <h2>Our website is currently under cosntruction.</h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
)}

export default IndexPage
