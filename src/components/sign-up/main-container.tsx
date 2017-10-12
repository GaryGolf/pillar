import * as React from 'react'
import Image from './image'
import Form from './form'
import Footer from '../footer'
interface Props {}

export default (prop:Props) => {
  return (
    <div className="main-container transition--fade transition--active">
      <section className="height-100 cover cover-8">
        <Image/>
        <Form/>
      </section>
      <Footer/>
    </div>
  )
}