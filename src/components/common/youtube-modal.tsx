import * as React from 'react';

interface Props {
  src: string;
  active?: boolean;
  onClose(): void;
}

export default (props:Props) => {
  if (!props.active) return null;
  return (
    <div className="modal-container modal-active" 
      data-modal-index="0"
      onClick={props.onClose}>

      <div className="modal-content bg-dark" 
        data-width="60%" 
        data-height="60%" 
        style={{ width:'60%', height:'75%' }}>
      
        <iframe 
          src={props.src}
          allowFullScreen 
          data-src={props.src}
        />
      
        <div className="modal-close modal-close-cross"
          onClick={props.onClose}
        />
      </div>
    </div>
  );
};
