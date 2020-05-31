import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"
import LogoLarge from '../components/svg/LogoLarge'

// import SEO from "../components/seo"
// <SEO title="Home" />

const IndexPage = () => (
  <Layout>
    <LogoLarge />
    <h1>BIM Landscape consultants</h1>
    <ContactForm />
  </Layout>
)

export default IndexPage
