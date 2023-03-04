import React, {useCallback, useState} from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
import "../App.css";

const WebcamCapture = () => {
    const webcamRef=React.useRef(null);
    const videoConstraints = {
        width:200,
        height:200,
        facingMode:'user'
    };
    const[name,setName]=useState('');
    const capture = React.useCallback(
        ()=>{
            setInterval(function(){
                const imageSrc = webcamRef.current.getScreenshot();
                console.log(`imageSrc = ${imageSrc}`)
                axios.post('http://127.0.0.1:5000/api',{data:imageSrc})
                .then(res=>{
                    console.log(`response = ${res}`)

                    //setName(res.data)
                    const coord = res.data;
                }) 
                .catch(error=>{
                    console.log(`error = ${error}`)
                })
                
            }, 100)
    },
        [webcamRef]
    );
        return(
            <div>
                <Webcam className="webcam"
                audio = {false}
                height = {300}
                ref = {webcamRef}
                screenshotFormat = 'image/jpeg'
                width = {350}
                videoConstraints = {videoConstraints}
            />
            <button onClick = {capture}>Click me</button>
                <h2>{name}</h2>
            </div>
        )
};

 export default WebcamCapture