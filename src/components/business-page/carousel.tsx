import * as React from 'react';
// import OwlCarousel from 'react-owl-carousel';

interface Props {}

export default (props:Props) => {
  const partners: JSX.Element[] = [];
  partners.length = 7;
  partners  
    .fill(<div/>)
    .map((item,idx) => (
      <div key={idx} style={{ opacity:.3 }}>
        <img alt="img" 
          src={`img/partner${idx + 1}.png`} 
          style={{ width:'auto' }}
        />
      </div>
    ));
  return (
    <section className="bg--white partners-1 space--sm">
      <div className="container">
        <div className="col-sm-12">
          {/* <OwlCarousel 
            className="owl-theme slider"
            autoplayTimeout={2000} 
            dots={false}
            margin={60} 
            autoWidth loop autoplay center
          >
            {partners}
          </OwlCarousel> */}
        </div>
      </div>
  </section>
  );
};
