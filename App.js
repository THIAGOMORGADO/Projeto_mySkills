/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Platform, StatusBar } from 'react-native';

import { Home } from './src/pages/Home';


export default function App() {
  return(
    <>
   
      <StatusBar 
        barStyle={'light-content'} 
        backgroundColor={"#121015"}
      />
      <Home />
    </>
    
  )
}
