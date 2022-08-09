import React from 'react'
import '../css/result.css'
const ResultEnd = (props) => {
  return (
    <div className="col-md-3 col-9 block_css mx-auto bg-light
       text-center">
<h1 className='res_head2'>
{props.name}
</h1>
<p className='paragraph3'>
  {props.des}
</p>
    </div>
  )
}

export default ResultEnd