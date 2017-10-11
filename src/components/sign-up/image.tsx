import * as React from 'react'
interface Props {}

export default (props:Props) => {
  return (
    <div className="col-md-7 col-sm-5">
      <div className="background-image-holder" style={{background: "url(&quot;img/hero24.jpg&quot;)"}}>
        <img alt="image" src="img/hero24.jpg"/>
      </div>
    </div>
  )
}