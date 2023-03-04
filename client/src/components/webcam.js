import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
import "../App.css";
var temp = '0,0,0,0'

function WebcamCapture() {
    const webcamRef=React.useRef(null);
    const videoConstraints = {
        width:200,
        height:200,
        facingMode:'user'
    };
    const[name,setName]=useState('');
    
    useEffect(() => {
        setInterval(()=>{
            try{
            const imageSrc = webcamRef.current.getScreenshot();
            axios.post('http://127.0.0.1:5000/api',{data:imageSrc})
            .then(res=>{
                try{
                    temp = res.data
                }catch(e){}
                })
                .catch(error=>{
                })
            }catch(a){}}, 1000)
    },[]);
    
        return(
            <div>
                <Webcam className="webcam"
                audio = {false}
                height = {300}
                ref = {webcamRef}
                screenshotFormat = 'image/jpeg'
                width = {350}
                videoConstraints = {videoConstraints}/>
            </div>

        )
    };
    
export var coord = temp
 export default WebcamCapture