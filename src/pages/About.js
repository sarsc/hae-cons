/* eslint-disable max-len */
import React from 'react';
import '../styles/about.scss';

export default () => (
  <div className="aboutContainer pageContainer">
    <div className="pageTitle">
      <h1 className="heading">Who We Are</h1>
      {/* <h2>We will help you to better address and shape a dynamic world through BIM</h2> */}
    </div>
    <div className="aboutTextContainer">
      <div className="separator">
        <p>
          <span>we are</span>
          designers and developers of landscape architecture, urbanism and planning, technology and design strategy.
        </p>
        <p style={{ padding: '20px 0' }}>
          <span>our missions</span>
          is to enable and improve the space humans use to interface with their natural, built and socially constructed environments including spaces, buildings, places, and experiences.
        </p>
        <p>
          <span>our purpose and core business</span>
          is to help landscape architects to develop and deliver projects using bim.
        </p>
      </div>
    </div>
  </div>
);
