import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
import "../App.css";
export let temp = '0,0,0,0'

function WebcamCapture() {
    const webcamRef=React.useRef(null);
    const videoConstraints = {
        width:640,
        height:480,
        facingMode:'user'
    };
    const[name,setName]=useState('');
    
    useEffect(() => {
        setInterval(()=>{
            try{
            const imageSrc = webcamRef.current.getScreenshot();
            axios.post('http://127.0.0.1:5000/api',{data:imageSrc})
            .then(res=>{
                    temp = res.data
                })
                .catch(error=>{
                })
            }catch(a){}}, 1000)
    },[]);
    
        return(
            <div>
                <Webcam className="webcam"
                audio = {false}
                height = {960}
                ref = {webcamRef}
                screenshotFormat = 'image/jpeg'
                width = {1280}
                videoConstraints = {videoConstraints}/>
            </div>

        )
    };
export default WebcamCapture