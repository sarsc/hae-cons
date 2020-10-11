import React from 'react'
import LeftSideContainer from '../components/LeftSide'
import RightSide from '../components/RightSide'
import PageBody from '../components/RightSide'
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
    <div style={{
      display: 'flex',
      minHeight: '100vh',
    }} className="servicesContainer">
      <LeftSideContainer heading="what we offer">
        <div className="servicesTitles">{displayTitles}</div>
      </LeftSideContainer>
      <RightSide >
          <div className="servicesTextContainer">{displayServiceText}</div>    
      </RightSide >
    </div>
  )
}