import React from 'react'

const ActivitiesContainer = (props) => {
  return (
    <>
         <div className="d-flex gap-4 col-sm-12 col-md-6 col-lg-4 mb-5">
          <i className={props.icon} style={props.style}></i>
          <div>
            <h4 className='text-capitalize'>{props.title}</h4>
            <div className="content mt-3">{props.content}</div>
          </div>
        </div>
    </>
  )
}

export default ActivitiesContainer