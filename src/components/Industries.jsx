import React from 'react' 
import Induscom from './Induscom'
import solution from '../images/solution.jpeg'
import '../css/industries.css'
const Industries = () => {
  return (
    <div id='industries'>
<div className='container-fluid mt-5'>
  <div className="row py-3">
<div className=' col-md-11  pt-3  col-11 mx-auto '>
<h1 className=' indus_heading'>
Solutions
</h1>

<h3 className='indushead'>
Asset Performance Management (APM) - Intelligent Systems Analytics (ISA) 

</h3>

<p  className='indus_para'> 
ESAD has developed a proprietary Intelligent Systems Analytics (ISA)
 prototype based on AI machine learning algorithms. These prototypes 
 are tailor-made for gas turbines, steam turbines, pumps, heat exchangers,
  condensers, and cooling towers and other energy systems assets.
   Historical raw data is filtered and later used in training the
    proprietary model.
    <p  className='indus_para'> 
    </p> Every time the current data is compared with the 
    archive-trained model and identical data sets are segregated. These 
    identical data sets are then further mathematically processed to 
    produce predicted data. The difference between raw data and predicted 
    data provides the anomaly of operation and derives various engineering
     knowledge-based diagnostics alerts custom-designed for a particular
      asset.

</p>





</div>
  </div>

{/* another row */}
<div className="row py-3">
  <div className="col-11 mx-auto">
    <div className="row">
  <div className="col-md-5 col-11 text-center">
  <h3 className='indushead'>
Operation Performance Management (OPM)- Advance performance intelligence 
(API)
</h3>
<p  className='indus_para'>
Thermodynamic based models are developed as digital twins to estimate the expected performance of
 whole plant and individual assets. The expected performance then 
compared with current performance of plant to estimate the deviation in performance.

Site reference based corrected performance derivatives are also estimated for certain KPI’s
 </p>
  </div>
  <div className="col-md-6  col-11 mx-auto text-center py-3"> 
  <img src={solution} className="img-fluid" alt="" /></div>
  </div>
  </div>
</div>

  {/* another row */}



<div className="row  px-3">
<Induscom

head="Visualize"
detail="Visualize months of  process data instantaneously. Make projections and assessments
 of various aasset 
and performance parameters and filter and overlay data with the click of a button to identify opportunities."
 />
<Induscom 

head="Diagnose"
detail="Quickly compare current and past process data to identify similarities in trends and behaviour.
 Perform a speedy root cause analysis by identifying how the parameters relate to each other. Integrate
  digital organization knowledge
 management with live process data to reduce breakdowns."
/>
<Induscom

head="Predict" 
detail="Our prediction features help users get a sneak peek of how different parameters are expected
 to behave under ongoing conditions in the future. This aids in decision support to run the plant at 
 optimum levels and take corrective actions 
before incidents occur."
/>


</div>







</div>

    </div>
  )
}

export default Industries