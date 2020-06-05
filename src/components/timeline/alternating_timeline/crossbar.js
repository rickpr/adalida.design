import React from 'react'
const Crossbar = ({ offsetToCenter }) =>
  <div className="col-sm-2" data-aos="fade-up">
    <div className={`centerline-crossbar ${offsetToCenter || 'offset-left'}`}></div>
    <div className="centerline-circle"></div>
    <div className="centerline-line"></div>
  </div>

export default Crossbar
