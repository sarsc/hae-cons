/* eslint-disable max-len */
import React from 'react';
import '../styles/about.scss';

export default () => (
  <div className="aboutContainer pageContainer">
    <div className="pageTitle">
      <h1 className="heading">Who We Are</h1>
    </div>
    <div className="aboutTextContainer">
      <div className="separator">
        <p>
          <span className="startText">we are</span>
          Designers and Developers of Landscape Architecture, Urbanism, Planning, Technology and Design Strategy.
        </p>
        <p style={{ padding: '20px 0' }}>
          <span className="startText">our mission</span>
          is to enable and improve the use of spaces interfacing their natural and socially constructed environment including buildings, places and experiences.
        </p>
        <p>
          <span className="startText">our purpose and core business</span>
          are to help Landscape Architects to develop and deliver projects using BIM thought Standards and Templates were created to provide efficiency during the Design and Construction Phases.
        </p>
      </div>
    </div>
  </div>
);
