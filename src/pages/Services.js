import React from 'react'
import '../styles/services.scss'

const servicesInfo = [
  {
    name: 'BIM Strategic Consultancy',
    text: 'Establishing all documents concerning BIM for Landscape.\
      Providing support for any contract phases as Pre-Contract (EIR, PQQ’s, BEP),\
      Contract (BEP,TIDP, MIDP, MDPT, CIC) and  Post-Contract (BEP,TIDP, MIDP, MDPT).'
  },
  {
    name: 'BIM Implementation',
    text: 'Establishing coordination workflows and standards.\
      Providing Revit template exclusively for Landscape purpose.',
  },
  {
    name: 'Project Modelling',
    text: '3D BIM Landscape project development using Revit and BIM Level 2 accredited (TBC)',
  },
  {
    name: 'Information Management',
    text: 'Reviewing Landscape Revit model for approval before submission. Providing clash detection reports.',
  }
]

export default () => {

  const displayServiceText = servicesInfo.map(service => <div className="service">{service.text}</div>)
  const displayTitles = servicesInfo.map(service => <h4>{service.name}</h4>)
  return (
    <div className="servicesContainer pageContainer">
      <div className="leftSideContainer">          
        <h1 className="heading">what we offer</h1>
        <div className="servicesTitles">{displayTitles}</div>
      </div>
      <div className="rightSideContainer">
          <div className="servicesTextContainer">{displayServiceText}</div>    
      </div>
    </div>
  )
}