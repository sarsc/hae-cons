import React from 'react';
import Layout from '../components/layout';
import LogoLarge from '../components/svg/Logo';

export default () => {
  const mainContainer = {
    background: 'rgba(196, 188, 179, 0.5)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };

  return (
    <div style={mainContainer}>
      <LogoLarge />
      <h1 style={{ margin: '50px 0', fontSize: '50px' }}>BIM Landscape Consultants</h1>
      <div style={{}}>
        <h1>COMING SOON</h1>
        <h2>Our website is currently under cosntruction</h2>
      </div>
    </div>
  );
};
