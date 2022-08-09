import React from 'react'
import '../css/industries.css'

const Induscom = (props) => {
  return (
    

<div className="col-md-3 p-4 col-11  mx-auto"> 

<h3 className='heading3 py-2'>
{props.head}
</h3>
<p  className='indus_para2'>
{props.detail}
 </p>
</div>



    
  )
}

export default Induscom