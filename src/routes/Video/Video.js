import React from "react";
import Office from "../../layuots/office/Office";
import ReactPlayer from "react-player";
import NET from "../../network";


const Video = () => {

    return (
        <Office>
            <div>
               <ReactPlayer
               // url= {`${NET.WEB_URL}/video.mp4`}
               url= {`https://youtu.be/ZivrpRL5-5o`}
               playing = {true}
               controls = {true}
               />
            </div>
        </Office>
    );
}

export default Video;