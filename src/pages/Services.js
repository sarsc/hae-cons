import React from 'react'
import LeftSideContainer from '../components/LeftSide'

const PAGE_HEDING = {
  services: 'what we offer',
}


const Services = () => {
  return (
    <div>
      <LeftSideContainer heading={PAGE_HEDING.services}/>
    </div>
  )
}

export default Services;