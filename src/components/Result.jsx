import React from 'react'
import Resultcoms from './Resultcom';
import ResultEnd from './ResultEnd';
// import Valuecom from './Valuecom';
// import pic from '../images/Pic.jpg'
import '../css/result.css'
const Result = () => {
  return (
    <div id='resultpage'>
 <div className='container-fluid'>

 <div className="col-md-11 mx-auto col-11">
   <h2 className=' value_heading'>
Our Results
</h2> 
</div>
   <div className='row g-3  mt-3 p-3  '>
  

<Valuecom 
name="Reduce downtime"
para="Predict uptime and detect failures days, weeks or even months before 
they occur. Minimize production losses and realize higher production 
throughput

"
/>
<Valuecom
name=" 
Improve availability 
"
para="Minimize downtime due to unnecessary cleaning cycles by predicting the optimal time frame for cleaning or doing periodic maintenance of an asset. 

"/>
<Valuecom
name=" Predictable asset life 
"
para="Forecast remaining asset life and influence operations and maintenance 
costs and life cycle management. Make confident CAPEX decisions with data driven analytics. 
"/>
<Valuecom
name=" Energy efficiency
"
para="Reduce your carbon footprint and facilitate the insights for better energy use. Tightly monitor energy use to expose hidden costs.

"/>

   </div>

   <div className="row my-3 g-3  p-3">
<Resultcoms name="100 s" des="of million saved with predictive analystics" />
<Resultcoms name="30%" des="reduction in maintance cost" />
<Resultcoms name="25%" des="improvement in workforce efficiency" />
<Resultcoms name="25%" des="reduction in unplanned downtime" />
   </div>

<div className="row g-3 my-3 p-3 ">
  <h3 className='res_head pb-3'>
  Expected Value
  </h3>
<ResultEnd name="3-40%" des="EH&S Incident Reduction "  />
<ResultEnd name="2-6%" des="Increased Availibility"  />
<ResultEnd name="10-40%" des="Reduction In Reactive Cost Maintainance" />
<ResultEnd name="5-10%" des="Inventory Cost Reduction" />



</div>


</div>


    </div>
  )
}

export default Result