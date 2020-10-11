import React, { Component } from 'react'
import '../styles/leftSide.scss'
const LeftSideContainer = ({ heading, children }) => {

  const style = {
    height: '100%',
    width: 'calc(100% - 65%)',
    paddingLeft: '200px',
    marginTop: '100px',
  }
  
  return (<div style={style}>
    <div className="heading">
      {heading}  
    </div>
    {children}
  </div>
)}

export default LeftSideContainer;