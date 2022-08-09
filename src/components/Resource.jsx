import React from 'react'
import one from '../images/one.jpg'
import ResultEnd from './ResultEnd';
// import Valuecom from './Valuecom';
import '../css/resource.css'
const Resource = () => {
  return (
    <div id='resourcepage'>
    <div className='container-fluid mt-5'>
  <div className="row py-3">
<div className=' col-md-11 pt-3  col-11 mx-auto '>
<h2 className=' resource_heading'>
Value for Customer
</h2>
<p  className='resource_para'>
ESAD monitors assets to identify, diagnose, and prioritize impending equipment
 problems – continuously and in real-time. ESAD empowers organizations to reduce
  unscheduled downtime, prevent equipment failures, reduce maintenance costs, 
  increase asset utilization, extend equipment life, and identify underperforming 
  assets to support their business objectives. At the heart of ESAD is the concept 
  of maximizing profitability by balancing risk, cost, and performance of the plant, 
  of the assets, or of the people that are operating those assets.



</p>
</div>
</div>
<div className="row">
  <div className="col-md-11 img_css  text-center col-11 mx-auto">
<img src={one} className='img-fluid'  alt="" />
  </div>
</div>

<div className="row g-4 my-2  ">
  <h3 className='res_head pb-3'>
  Expected Value
  </h3>


<ResultEnd name="5-15%" des="Reduction in maintenance cost" />
<ResultEnd name="3-15%" des=" Reduction in EHS incidents
 " />
<ResultEnd name="2-4%" des=" Increased availability
 " />

</div>
<div className="row g-4 my-2  ">

<ResultEnd name="10-15%" des="Reduction in unplanned downtime"  />
<ResultEnd name="10-15%" des="Improvement in workforce efficiency"  />
<ResultEnd name="5-10%" des="Inventory cost reduction" />

</div>
</div>
    </div>
  )
}

export default Resource