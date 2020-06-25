import React from "react";
import Image from "./Image.jpg";
import CountdownTimer from "./Counter";


function Sect(){
return (
  <>
  <div className="sec" style={{  
  backgroundImage: `url(${Image})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height:'80vh',
  backgroundRepeat: 'no-repeat'
}}>
    <CountdownTimer/>
  </div>
  </>
)
}

export default Sect;