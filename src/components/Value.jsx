import React from 'react'
 import '../css/value.css'
 import Valuecom from './Valuecom';
import two from '../images/Artifical.jpg'
const Value = () => {




  return (
    <div  id='value' >
 <div className='container-fluid '>
   <div className='row mt-3 pt-3  '>
<div className='col-md-11 col-11 mx-auto'>
<h2 className=' result_heading'>
Artificial Intellegence And Machine Learning
</h2> 
</div>
</div>
<div className="row mb-5 text-center">
<div className=' col-md-5 p-3 text-center col-10 m-auto '>

<p  className='value_para'>
Optimize operations at scale by leveraging the power of Artificial 
Intelligence (AI) and machine learning in the cloud. This range of 
fit-for-purpose algorithms combined with prescriptive actions enables 
users to institutionalize analytics as closed loops within their business
 processes. 

</p>
</div>
<div className="col-md-5 p-3 text-center col-10 m-auto">
<img src={two} className='img-fluid ' alt="" />
</div>
</div>
  
   <div className="row g-3 px-3">
<Valuecom 
 name="Advanced Analytics "
 para="Trained, cleansed data, multi variable analysis, rigorous models 
 Targeted for the most critical assets and processes with expert engineering engagement
 "
/>
<Valuecom 
 name="Guided 
 Analytics "
 para="Guides the user in creating  anomaly alerts with higher fidelity to Newsfeed
 Targeted for infrastructure assets with repeatable failure patterns, user configurable
 
 "
/>
<Valuecom 
 name="Condition -Based Rules 
 "
 para="Rules based approach for known conditions and workflows
 Captures operator experience for timely intervention, set it and forget it
 "
/>
<Valuecom 
 name="Automated  Analytics "
 para="Unsupervised, automatically draws inferences from data
 Analyses streamed data from multiple sources to detect anomalies, out of the box
 
 "
/>
   </div>

 
  
 </div> 
    
        </div>
  )
}

export default Value