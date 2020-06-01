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
      <div style={{display: 'flex'}}>
        <div style={style}>
          <LogoLarge />
          <h1>BIM Landscape consultants</h1>
        </div>
          <ContactForm />
      </div>
    </Layout>
)}

export default IndexPage
