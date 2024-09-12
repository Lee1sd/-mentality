import React from 'react';
import Header from '../components/common/Header';
import Hero from '../components/MainPage/Hero';
import Intro from '../components/MainPage/Intro';
import Service from '../components/MainPage/Service';
import Footer from '../components/common/Footer';
import '../style/MainPage.css'
import Technology from '../components/MainPage/Technology';


function MainPage() {
  const commonStyle = { paddingTop: '80px' };
 

  return (
    <div className="MainPage">
      <Header style={commonStyle} />
      <Hero  style={commonStyle}/> 
      <Intro style={commonStyle}/>
      <Service style={commonStyle}/>
      <Technology style={commonStyle}/>
      <Footer style={commonStyle}/>
    </div>
  );
}

export default MainPage;