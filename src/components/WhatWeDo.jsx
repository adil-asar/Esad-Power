import React from 'react'
 import '../css/whatwedo.css'
import four from '../images/who.jpg'
import team from '../images/team.jpg'

const WhatWeDo = () => {
  return (
    <div id='whatwedo' >
 <div className='container-fluid'>
 <div className="row my-5" >
<div className="col-md-11 col-11 mx-auto ">
<h2 className='whatwedo_heading'> 
Our Team
</h2>

<p className='whatwedo_para'>
ESAD comprises a group of engineering experts with extensive experience 
in the design, development, digitization, operations, and maintenance of
 turbo-machinery and power plant equipment. These experts teamed up with
  data-scientists with a proven track record of complex analytics solutions
   custom-designed for energy systems.</p>
   <p className='whatwedo_para' >
    The aim is to conceive a product 
   that can execute advanced industrial predictive analytics and to produce
    a diagnostics solution custom-designed to a specific power plant asset.
     The team has practical knowledge of designing, development, and 
     implementation of industrial digital products.
     </p> 
    
     


</div>

 </div>
 <div className="row  my-5">
<div className="col-md-11 mx-auto">
  <div className="row text-center">
  <div className="col-md-6 mx-auto col-11 g-3 my-3  ">
    <img src={four}  className="img-fluid img-css"    alt="" />
  </div>
  <div className="col-md-6 col-11 g-3 my-3 mx-auto">
  <img src={team} className="img-fluid img-css"    alt="" />
  </div>
  </div>
</div>
</div>
 </div>
    
        </div>
  )
}

export default WhatWeDo