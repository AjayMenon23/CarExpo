import React, { Component } from 'react';
import './resources/styles.css';
import Header from './Components/Header_Footer/Header';
import Featured from './Feature/'
import VenueInfo from './Components/VenueInfo'
import Highlights from './Components/Highlights'
import Pricing from './Components/Pricing'
import Location from './Components/Location'
import Footer from './Components/Header_Footer/Footer';
import {Element} from 'react-scroll'

class App extends Component {
  render(){
    return (
    <div className="app" style={{height:"1500px",background:"royalblue"}}>

      <Header/> 
      <Element name="event">
          <Featured/>
      </Element>
      <Element name="venue">
         <VenueInfo/>
      </Element>
      <Element name="highlights">
         <Highlights/>
     </Element>
     <Element name="pricing">
          <Pricing/>
      </Element>
     <Element name="location">
         <Location/>
     </Element>
     <Footer/>
    </div>
    );
  }
} 


export default App;
