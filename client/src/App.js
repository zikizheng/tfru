import React, {Component} from 'react'
import WebcamCapture from './components/webcam.js'
import Box from './components/box.js'


class App extends Component{

  render(){
    return(
      <div>
        <div className='head'>
          <h2>Live Face Recognition</h2>
        </div>
        <div className='body'>
          <WebcamCapture/>
          <Box/>
        </div>
        

      </div>
    )
  }
}

export default App;