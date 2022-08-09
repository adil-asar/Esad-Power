import React from 'react'

const Common = (props) => {
  return (
    <>
<div className="col-md-3 px-4 py-3 col-10 mx-auto">
       
       <div className='icon_style my-2'>
      { props.icon}
         </div>
              
       
             <h4 className='heading2'>
             {props.headname}
            </h4>
       
            <p className='paragraph2'>
            {props.paragraph}
            </p>
       </div>
    </>
  )
}

export default Common