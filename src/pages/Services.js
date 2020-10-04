import React from 'react'
import LeftSideContainer from '../components/LeftSide'
import RightSide from '../components/RightSide'
import PageBody from '../components/RightSide'
import '../styles/services.scss'
const PAGE_HEDING = {
  services: 'what we offer',
}

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

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
    }}>
      <LeftSideContainer heading={PAGE_HEDING.services}/>
      <RightSide >
          <div className="servicesContainer">{displayServiceText}</div>    
      </RightSide >
    </div>
  )
}