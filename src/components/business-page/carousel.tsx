import * as React from 'react'
import OwlCarousel from 'react-owl-carousel'

interface Props {}

export default (props:Props) => {
  const partners = new Array(7)
    .fill(' ')
    .map((item,idx)=>(
      <li key={idx}>
        <img key={idx} alt="img" src={`img/partner${idx+1}.png`} />
        </li>
    ))
  return (
    <section className="bg--white partners-1 space--sm">
      <div className="container">
        <div className="col-sm-12">
          <ul className="slides owl-carousel owl-theme owl-loaded owl-text-select-on"> 
          <OwlCarousel 
          className="owl-theme slider"
          autoplayTimeout={2000} 
          dots={false}
          margin={50} 
          items={4}
          loop autoplay
        >
          {partners}
        </OwlCarousel>
        </ul>
        </div>
      </div>
  </section>
  )
}