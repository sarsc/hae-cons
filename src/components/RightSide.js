import React from "react"
import PropTypes from "prop-types"
// import "../styles/layout.scss"
import LeftSideContainer from './LeftSide'

    // const LeftSidesContainer = <LeftSideContainer heading={PAGE_HEDING.services}/>

const RightSide = ({ children }) => {
  const style = {
    height: '100%',
    width: 'calc(100% - 30%)',
    fontSize: '30px',
    border: '5px solid red',  
    // padding: '40px 100px',
    paddingRight: '200px',
    paddingTop: '80px',
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

RightSide.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RightSide
