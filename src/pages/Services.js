import React from 'react';

import '../styles/services.scss';

const servicesInfo = [
  {
    name: 'Modelling',
    text: ['BIM Level 2 Compliant Landscape Model development using Revit.'],
  },
  {
    name: 'Information Management',
    text: ['Landscape Revit Model Revision.', 'Quality Control and Clash Detection Reports.'],
  },
  {
    name: 'BIM Strategic Consultancy',
    text: [
      'BIM Documents support for all phases',
      'Pre-Contract (EIR, PQQ’s, BEP) Contract (BEP,TIDP, MIDP, MDPT, CIC) Post-Contract (BEP, TIDP, MIDP, MDPT)',
    ],
  },
  {
    name: 'BIM Implementation',
    text: [
      'Workflow Coordination and BIM Strategic Implementation',
      'Revit Template for Landscape Architecture.',
    ],
  },
];

export default () => {
  const displayServiceText = servicesInfo.map((service, i) => (
    <div className={`text${i + 1}`}>
      <div className="gridHeader">
        <span>
          0
          {i + 1}
        </span>
        <h4 className="servicesTitles">{service.name}</h4>
      </div>
      <ul className="service">
        {service.text.map((text) => (<li>{text}</li>))}
      </ul>
    </div>
  ));

  return (
    <div className="pageContainer servicesContainer" style={{ paddingTop: '0' }}>
      <div className="leftSideContainer leftText">
        <div className="headingContainer">
          <h1 className="heading">our services</h1>
          <h2>BIM Consultancy for Landscape Architecture.</h2>
        </div>
      </div>
      <div className="rightSideContainer rightText">
        <div className="grid">{displayServiceText}</div>
      </div>
    </div>
  );
};
