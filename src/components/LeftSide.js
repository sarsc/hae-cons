import React, { Component } from 'react'

const LeftSideContainer = ({...props}) => {
  const { heading } = props;

  const style = {
    height: '100%',
    width: 'calc(100% - 65%)',
    fontSize: '30px',
    fontWeight: '500',
    color: '#42B390',
    textTransform: 'uppercase',
  }
  
  return (<div style={style}>
   {heading}
  </div>
)}

export default LeftSideContainer;