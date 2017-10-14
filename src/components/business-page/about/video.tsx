import * as React from 'react';
interface Props {
  active: boolean;
  stop(): void;
}

export default (props:Props) => {
  if (!props.active) return null;
  return (
    <div className="modal-container modal-active" 
      data-modal-index="0"
      onClick={props.stop}>

      <div className="modal-content bg-dark" 
        data-width="60%" 
        data-height="60%" 
        style={{ width:'60%', height:'75%' }}>
        
        <iframe 
          src="https://www.youtube.com/embed/4QUVRm4UZA4?autoplay=1" 
          allowFullScreen 
          data-src="https://www.youtube.com/embed/4QUVRm4UZA4?autoplay=1"
        />
        
        <div className="modal-close modal-close-cross"
          onClick={props.stop}
        />
      </div>
    </div>
  );
};

