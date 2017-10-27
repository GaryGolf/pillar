import * as React from 'react';
interface Props {}
interface State {
  email: string;
}

export default class Subscribe extends React.Component <Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleInput = (event) => {
    const email = event.target.value;
    this.setState({ email });
  }
  handleSubscribe = (event) => {
    const { email } = this.state;
    event.preventDefault();
    if (!email) return;
    console.log('Email:',email);
  }
  render() {
    const { email } = this.state;
    const dataError = 'Please fill all fields correctly.';
    const dataSuccess = 'Thanks for signing up! Please check your inbox for ' +
      'confirmation email.';
    return (
      <section className="subscribe subscribe-1 space--sm imagebg" data-overlay="3">
        <div className="background-image-holder" 
          style={{ background:'url(img/header4.jpg)',opacity:1 }}>
          <img alt="image" src="/img/header4.jpg"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="subscribe__title">
                <h4>Subscribe for exclusive deals and updates</h4>
              </div>
            </div>
            <div className="col-sm-6">
              {/* <form className="form--merge form--no-labels form--active" 
              action="http://mrareco.createsend.com/t/d/s/kieth/?callback=?" 
              method="post" id="subForm" data-error="Please fill all fields correctly." 
              data-success="Thanks for signing up! Please check your inbox for confirmation email." 
              noValidate> */}
              <form className="form--merge form--no-labels form--active"  
                onSubmit={this.handleSubscribe}
                data-error={dataError}
                data-success={dataSuccess}
                noValidate>
                <br/>
                <input type="email"
                  id="fieldEmail" 
                  className="col-md-8 col-sm-6 validate-required validate-email" 
                  name="cm-kieth-kieth"  
                  placeholder="you@yoursite.net"
                  value={email}
                  onChange={this.handleInput}
                />
                <button type="submit" className="col-md-4 col-sm-6 btn">Subscribe</button>
                      
              </form>
            </div>
          </div>
      </div>
    </section>
    );
  }
}
