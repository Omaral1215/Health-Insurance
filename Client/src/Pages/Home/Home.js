import React from 'react'
import Header from './Header';
import Stat from './Stat';
import Bcard from './Bcard';
import Banner from './Banner';
import Claimp from './Claimp';
import Cim from './Cim';
import Tsp from './Tsp'; 
import Review from './Review';
import BenefitIsu from './BenefitIsu';
import Accordian from './Accordian';
const Home = () => {
  return (
    <div >
      <Header /> 
      <Stat /> 
      <Bcard /> 
      <Banner /> 
      <Claimp /> 
      <Cim /> 
      <Tsp /> 
      <Review/> 
      <BenefitIsu /> 
      <Accordian />
    </div>
  );
}

export default Home