import * as React from 'react'
interface Props {}

export default (props:Props) => {
  const style = {
    background: "url('img/hero24.jpg')",
    opacity: 1
  }
  return (
    <div className="col-md-7 col-sm-5">
      <div className="background-image-holder" style={style}>
        <img alt="image" src="img/hero24.jpg"/>
      </div>
    </div>
  )
}