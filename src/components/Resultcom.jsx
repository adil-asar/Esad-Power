import React from 'react'

const Resultcom = (props) => {
  return (
 <div className="col-md-3 col-11 mx-auto py-3 text-center shadow-sm">
<h1 className='result_head'>
{props.name}
</h1>
<p className='description'>
  {props.des}
</p>
 </div>
    
  )
}

export default Resultcom