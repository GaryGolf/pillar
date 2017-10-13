import * as React from 'react'
interface Props {}

export default (props:Props) => {
  return (
    <div className="modal-container modal-active" data-modal-index="0">
      <div className="modal-content bg-dark" data-width="60%" data-height="60%" style={{width:'60%',height:'75%'}}>
        <iframe src="https://www.youtube.com/embed/4QUVRm4UZA4?autoplay=1" allowFullScreen data-src="https://www.youtube.com/embed/4QUVRm4UZA4?autoplay=1"></iframe>
        <div className="modal-close modal-close-cross"/>
      </div>
    </div>
  )
}
