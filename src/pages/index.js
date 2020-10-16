import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"
import LogoLarge from '../components/svg/LogoLarge'

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
      <div style={{display: 'flex' }}>
        <div style={style}>
          <LogoLarge />
          <h1>BIM Landscape Consultants</h1>
        </div>
        <div style={{ background: 'rgba(196, 188, 179, 0.5)', display: 'flex', alignItems: 'center', width: '50%'}}>
          <div style={{width: '100%', color: '#FFF'}}>
            <h1>COMING SOON</h1>
            <h2>Our website is currently under cosntruction.</h2>
          </div>
        </div>
      </div>
    </Layout>
)}

export default IndexPage
