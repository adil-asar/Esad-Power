import React from 'react'
import power from '../images/power.jpg'
import '../css/difference.css'
const Difference = () => {
  return (
    <div id='difference'>
<div className='container-fluid '>
<div className="row mt-5">
  <div className="col-md-11 col-11 mx-auto ">
    <h2 className='difference_heading'>
    The Power Of Data
    </h2>
    <p className='difference_para'> 
    Connecting people, processes, and assets has never been more 
    important in a society where Big Data has become the norm. More
     than ever industries have the need to optimize operations and 
     leverage the power of digital technologies to make better and 
     faster decisions.</p>
     <p className='difference_para'>
    Where data is accessible and contextualized to departmental
     tasks driven through a digital thread that provides frictionless 
     data sharing and brings complete situational awareness across 
     maintenance and operations, supporting end-to-end visibility into
      standardized processes and asset states, autonomous digital twins,
       and AI-driven insights. </p>
       <p  className='difference_para'>
    Operationalizing and scaling technologies like predictive alerts
     and prescriptive analytics are key success factors for a profitable
      and resilient operations strategy, a single lens of truth where you have 
      the intelligence you need to seize the power of modern industry and 
      achieve optimal reliability in any situation.

    </p>
<div className='text-center'>
    <img src={power}  className='img-fluid' alt="" /></div>
  </div>
</div>
{/* second row */}
 <div className="row">
 
{/* <Common 
icon={<FaBandcamp/>}
headname="Operationalize Your Knowledge"
paragraph="You use expert knowledge in every aspect of your organization.
 Capture and deploy that knowledge with NarrativeWave to fully tap that information's potential.
 Data becomes a tool you use to consistently 
 and repeatedly elevate your organization."
 /> */}
{/* col2 */}
{/* <Common 
icon={<FaCertificate/>}
headname="Time To Value"
paragraph="Use NarrativeWave's rapid builders and 
pre-built analytics to quickly build and deploy analytics across your fleet."
 /> */}
 {/* col3 * */}
 {/* <Common 
icon={<FaEnvira/>}
headname="Transparency"
paragraph="Increase adoption of analytics with full transparency to how outcomes are being triggered.
Every line of code used in your analytics is accessible and editable by your experts."
 /> */}
{/* col4 */}
{/* <Common 
icon={<FaArtstation/>}
headname="Automate Decisions"
paragraph="Stop simply receiving alerts and harness the power of automated decisions your engineers create.
 This dramatically improves your organization's productivity and operational efficiency."
 /> */}
 {/* <Common 
icon={<AiFillCheckCircle/>}
headname="Self-Service"
paragraph="Empower your experts with easy to use self-service tools so they can solve problems faster 
and better. Your team members can create, deploy and scale analytics without coding experience."
 /> */}
 {/* <Common 
icon={<FaFlask/>}
headname="Open Source Data Science"
paragraph="Import libraries, create code and utilize machine learning using a system written in Python.
 NarrativeWave's system offers you a gateway into the world of data science"
 /> */}
 {/* <Common 
icon={<BsFillCameraReelsFill/>}
headname="Flexibility "
paragraph="NarrativeWave has unmatched flexibility to apply to any type of 
asset. Using our self-service builders, we'll help you tackle your analytics goals - immediately."
 /> */}
  {/* <Common 
icon={<BsFillChatQuoteFill/>}
headname="Ready To Learn More"
paragraph="Learn how NarrativeWave can impact your business today"
 /> */}
</div> 
</div>


    </div>
  )
}

export default Difference