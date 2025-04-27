import React from 'react'
import Background from "../../assets/images/background_video.mp4"
function Hero() {
  return (
    <>
      <div className="bghero">
        <video autoplay muted loop>
          <source src={Background} type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <h1>Welcome to My Simple Website</h1>
        <p>
          This is a basic webpage created using HTML and CSS, now with a
          navigation bar!
        </p>
      </div>
   
    </>
  )
}

export default Hero