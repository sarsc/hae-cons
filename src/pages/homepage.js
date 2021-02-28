import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Video from '../components/Video';
import Logo from '../components/svg/Logo';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import '../styles/index.scss';

const IndexPage = () => {
  const [isMobile, setMobile] = useState(false);
  const getWindowWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
  console.warn(document.documentElement.clientWidth);
  console.warn(document.body.clientWidth);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  function debounce(func, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        // eslint-disable-next-line prefer-rest-params
        func.apply(this, arguments);
      }, ms);
    };
  }

  useEffect(() => {
    const debounceResize = debounce(() => {
      setWindowWidth(getWindowWidth());
    }, 80);

    window.addEventListener('resize', debounceResize);

    if (windowWidth <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    return () => window.removeEventListener('resize', debounceResize);
  });

  return (
    <Layout isMobile={isMobile}>
      <div className="mainContainerVideo">
        <Video />
        <div className="videoOverlay" />
        <div className="logoContainer">
          <Logo scale={isMobile ? 0.7 : 1} />
        </div>
      </div>
      <div className="lineBreak" />
      {/** <div className="lineBreak"
       *  style={{ textAlign: 'center', padding: '50px', fontSize: '30px' }}>
       * We will help you to better address and shape a dynamic world through BIM</div> * */}

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
};

export default IndexPage;
