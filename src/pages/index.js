import React from 'react';
import Layout from '../components/layout';
import Video from '../components/Video';
import LogoLarge from '../components/svg/Logo';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import '../styles/index.scss';
// import SEO from "../components/seo"
// <SEO title="Home" />

const IndexPage = () => (
  <Layout>
    <div className="mainContainer">
      <Video />
      <div className="videoOverlay" />
      <div className="logoContainer">
        <LogoLarge />
      </div>
    </div>
    <section id="about">
      <About />
    </section>

    <section id="services">
      <Services />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </Layout>
);

export default IndexPage;
