import React, { Component } from 'react'

const LeftSideContainer = ({ heading, children }) => {

  const style = {
    height: '100%',
    width: 'calc(100% - 65%)',
    fontSize: '30px',
    fontWeight: '500',
    color: '#42B390',
    textTransform: 'uppercase',
    paddingTop: '80px',
    paddingLeft: '200px',
    marginTop: '100px',
  }
  
  return (<div style={style}>
    {heading}  
    {children}
  </div>
)}

export default LeftSideContainer;