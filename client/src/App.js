import React, {Component} from 'react'
import Webcam from 'react-webcam';
import Box from './components/box.js';
import WebcamCapture from './components/webcam.js'
import "./App.css";
import iphone from "./images/iphone.png"

class App extends Component{

  render(){
    return(
      <div>
        <div className='head'>
      </div>
        <div className='face'>
          <WebcamCapture/>
          <Box/>
          <img src={iphone} className='overlay'/>
        </div>
        
      </div>
    )
  }
}

export default App;