/* eslint-disable max-len */
import React from 'react';

import '../styles/info.scss';

export default () => (
  <div className="info pageContainer infoContainer" style={{ paddingTop: '0' }}>
    <div className="info leftText">
      <div className="info headingContainer">
        <h1 className="heading">
          Landscape &
          <span> BIM Process</span>
        </h1>
        <h2>
          We will help you to better address and shape a dynamic world through BIM
        </h2>
      </div>
    </div>
    <div className="info rightText">
      <div className="textLong">
        <p>
          In increasing pressures on our urban environment, Landscape Architects have the unique position to use living systems to improve outcomes.
        </p>
        <p style={{ fontStyle: 'italic' }}>
          &quot;Revit® and BIM are not just for buildings.&quot;
        </p>
        <p>
          Clients, both public and private, are demanding Landscape Architecture practices to use Revit more frequently for design and documentation around the globe. That is a need to simulate and prevent the effects of our landscape projects during time.
        </p>
        <p>
          Many practices still do not know which data is necessary or how to represent Landscape elements, so design teams do not know what to provide BIM projects. This lack of skills is why HAE is willing to provide thorough documentation and process integration substantial improvements.
        </p>
      </div>
    </div>
  </div>
);
