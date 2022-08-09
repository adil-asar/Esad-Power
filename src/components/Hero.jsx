import React, { useState } from 'react'

import '../css/home.css'



const Hero = () => {

  const [show, setshow] = useState(0);
 const toggle =()=>{
   setshow(!show)
 }

  return (

    <div id='hero_page' className='herostyle'>

<div className='container-fluid'>
<div className="row ">

  <div className="col-md-5  mx-md-0 col-10 mx-auto p-3">
    <h1 className='home_heading'>
    Optimize Risk, Cost, & Output Across Your Assets
    </h1>
    
<p className='home_paragraph'> 
ESAD connects people and assets with technology that improves efficiency, safety, and reliability. 
ESAD’s capabilities in engineering, monitoring & control, asset performance,
 and operations optimization is a perfect fit for the power industry operators seeking to 
      
</p>

    {/* <Swipper className="text-white" /> */}
<div className='text-center'>
<button onClick={toggle} className='btn text-center home_btn1'>
  Learn More
</button>
</div>


     
  </div>

  
  
</div>
<div className="row">
{
  show ? <p className=' home_paragraph'> 
 digitally transform their operations to reduce risk, save costs, optimize performance, 
 and speed crisis response.
Our energy-systems based portfolio of Asset Performance Management combined with deep domain
 expertise have led to 
proven success with customers.
  </p>
 
  
  :null
}
  </div>
</div>


    </div>
  )
}

export default Hero