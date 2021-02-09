import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import '../styles/services.scss';

export default () => (
  <div className="pageContainer servicesContainer" style={{ paddingTop: '0' }}>
    <div className="leftSideContainer leftText">
      <div className="headingContainer">
        <h1 className="heading">Our Services</h1>
        <h2>BIM Consultancy for Landscape Architecture</h2>
      </div>
    </div>
    <div className="rightSideContainer rightText">
      <div className="grid">
        <div className="text1">
          <div className="gridHeader">
            <span>01</span>
            <h4 className="servicesTitles">Project Modelling</h4>
          </div>
          <div>
            <div className="service">
              <FontAwesomeIcon icon={faCircle} className="listDots" />
              <p>BIM Level 2 Compliant</p>
            </div>
            <div className="service">
              <FontAwesomeIcon icon={faCircle} className="listDots" />
              <p>Landscape Model development using Revitt</p>
            </div>
          </div>
        </div>
        <div className="text2">
          <div className="gridHeader">
            <span>02</span>
            <h4 className="servicesTitles">Information Management</h4>
          </div>
          <div>
            <div className="service">
              <FontAwesomeIcon icon={faCircle} className="listDots" />
              <p>Landscape Revit Model Revision</p>
            </div>
            <div className="service">
              <FontAwesomeIcon icon={faCircle} className="listDots" />
              <p>Quality Control and Clash Detection Report</p>
            </div>
          </div>
        </div>
        <div className="text3">
          <div className="gridHeader">
            <span>03</span>
            <h4 className="servicesTitles">BIM Strategic Consultancy</h4>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faCircle} className="listDots" />
            <p>
              BIM Documents support for all phases:
              <span style={{ paddingTop: '20px' }}>Pre-Contract (EIR, PQQ’s, BEP)</span>
              <span>Contract (BEP,TIDP, MIDP, MDPT, CIC)</span>
              <span>Post-Contract (BEP, TIDP, MIDP, MDPT)</span>
            </p>
          </div>
        </div>
        <div className="text4">
          <div className="gridHeader">
            <span>04</span>
            <h4 className="servicesTitles">BIM Implementation</h4>
          </div>
          <div>
            <div className="service">
              <FontAwesomeIcon icon={faCircle} className="listDots" />
              <p>BIM Strategy and Coordination Workflow</p>
            </div>
            <div className="service">
              <FontAwesomeIcon icon={faCircle} className="listDots" />
              <p>Revit Template for Landscape Architecture</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
