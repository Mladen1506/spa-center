import React from 'react';
import { useEffect } from 'react';
import { responsiveUtils } from '../utils/responsive-utils';
import Layout from './Layout';

const App = () => {

  useEffect(()=>{
    
    // INIT
    responsiveUtils.init();

  }, []);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
