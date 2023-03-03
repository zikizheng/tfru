import React, {Component} from 'react'
import Webcam from 'react-webcam';
import WebcamCapture from './components/webcam.js'
import Note from './components/note.js'

class App extends Component{

  render(){
    return(
      <div>
        <div className='head'>
          <h2>Live Face Recognition</h2>
        </div>
        <WebcamCapture/>
        <Note/>
      </div>
    )
  }
}

export default App;