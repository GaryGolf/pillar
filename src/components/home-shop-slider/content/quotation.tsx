import * as React from 'react'
interface Props {}

export default (props:Props) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-sm-12 text-center">
            <h6>Fall Collection 2016</h6>
            <p className="lead">Robust design, sustainable production and honest pricing are the cornerstones of the Pillar vision — Ours values of craftsmanship and authenticity pervade every piece.</p>
            <img className="signature" alt="signature" src="img/signature.png"/>
          </div>
        </div>
      </div>
    </section>
  )
}