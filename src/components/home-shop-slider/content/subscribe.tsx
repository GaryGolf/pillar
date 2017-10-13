import * as React from 'react'
interface Props {}
interface State {}

export default class Subscribe extends React.Component <Props, State> {
  render() {
    return (
      <section className="subscribe subscribe-1 space--sm imagebg" data-overlay="3">
        <div className="background-image-holder" style={{background:"url(img/header4.jpg)",opacity:1}}>
          <img alt="image" src="img/header4.jpg"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="subscribe__title">
                <h4>Subscribe for exclusive deals and updates</h4>
              </div>
            </div>
            <div className="col-sm-6">
              <form className="form--merge form--no-labels form--active" action="http://mrareco.createsend.com/t/d/s/kieth/?callback=?" method="post" id="subForm" data-error="Please fill all fields correctly." data-success="Thanks for signing up! Please check your inbox for confirmation email." novalidate="novalidate">

                <br/>
                <input className="col-md-8 col-sm-6 validate-required validate-email" id="fieldEmail" name="cm-kieth-kieth" type="email" placeholder="you@yoursite.net"/>
                <button type="submit" className="col-md-4 col-sm-6 btn">Subscribe</button>
                      
              </form>
            </div>
          </div>
      </div>
    </section>
    )
  }
}