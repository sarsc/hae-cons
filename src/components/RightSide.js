import React from "react"
import PropTypes from "prop-types"
import LeftSideContainer from './LeftSide'

const RightSide = ({ children }) => {
  const style = {
    height: '100%',
    width: 'calc(100% - 30%)',
    fontSize: '30px',
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
