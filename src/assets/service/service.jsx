import React from 'react'
import "./Service.css"
export default function service() {
  return (
    <>
      <div className="con mt-5 pt-4  ">
        {/* first container */}
            <div className="Service pt-2 d-flex flex-wrap ">

              <div className='service-sub-content col-lg-6 col-sm-12'>
                <div className='top-op  d-flex justify-content-center align-items-center  col-lg-12 '>
                <h1 className=''>Services</h1>
                  
                </div>
              </div>

              <div className='service-sub-content-2 d-flex flex-column justify-content-center p-4 col-lg-6 col-ms-12'>
                     <h3 className='px-4'>We Serve A Huge Range Of Industries </h3>
                     <p className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aut vitae soluta libero dolores nostrum quam iure ullam debitis hic.</p>
                    <button className='col-lg-3 col-md-3 mx-5 my-3 rounded-5 text-white bg-transparent border-white p-2'>know more</button>
              </div>
            </div>

{/* second container */}
          <div className="Service-2 d-flex flex-column justify-content-center align-items-center m-5 pb-5 ">
                      <h1 className='pb-4'>Strategy. Planning. Execution.</h1>
                      <p>Neque porro quisquam est, quiipsum quia dolor sit amet, consectetur adipisci numquam eius modi tempora incidunt lores ta porro ame.</p>
          </div>

{/* third container  */}
        <div className="service-3 d-flex flex-row flex-wrap ">

          <dv className="sub-service-3 col-lg-6 col-sm-12">
          <div className='top-op-sec col-lg-12 '>
                  
                </div>
          </dv>
          <dv className="sub-service-3-2 p-5 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <div className='my-3'>
              <span>Finanace</span>
              <h2>Finance Management</h2>
              <p className='text-secondary'>Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
            </div>
            <div className='my-3'>
              <span>Tax</span>
              <h2>Tax Planning / Preparation</h2>
              <p className='text-secondary'>Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
            </div>
          </dv>
        </div>

        <div className="service-3  d-flex flex-row flex-wrap ">

        <dv className="sub-service-3-2 p-5 col-lg-6 d-flex flex-column justify-content-center align-items-center  ">
  <div className='my-3'>
    <span>Business</span>
    <h2>Business Advice</h2>
    <p className='text-secondary'>Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
  </div>
  <div className='my-3'>
    <span>Payroll</span>
    <h2>Payroll Management​</h2>
    <p className='text-secondary'>Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
  </div>
</dv>
<dv className="sub-service-4  col-lg-6 col-sm-12">
<div className='top-op-sec col-lg-12 '>
        
      </div>
</dv>

</div>
      </div>
    </>
  )
}
