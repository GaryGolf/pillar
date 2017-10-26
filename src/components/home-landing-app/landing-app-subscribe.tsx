import * as React from 'react';

interface State {
  name: string;
  email: string;
}
interface Props {}

export default class LandingAppSubscribe extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }

  handleSubmit = (event) => {
    const { name, email } = this.state;
    event.preventDefault();
    if (!name || !email) return;
    console.log(this.state);
  }

  handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]:value });
  }

  render() {
    const { name, email } = this.state;
    const errorPrompt = 'Please fill all fields correctly.';
    const successPrompt = 'Thanks for signing up! Please check your ' +
      'inbox for confirmation email.';
    return (
      <section className="subscribe subscribe-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-md-offset-1 col-sm-6">
              <div className="form-subscribe-1 boxed boxed--lg bg--white box-shadow-wide">
                <div className="subscribe__title text-center">
                  <h4>Keep Informed</h4>
                  <p className="lead">
                    Subscribe for free resources and news updates.
                  </p>
                </div>

                <form className="form--center-submit-button form--active" 
                  onSubmit={this.handleSubmit}  
                  id="subForm" 
                  data-error={errorPrompt}
                  data-success={successPrompt}
                  noValidate>
                  <div className="input-with-icon">
                    <label htmlFor="fieldName">Your Name</label>
                    <i className="icon icon-Male-2"/>
                    <input id="fieldName" 
                      name="name" 
                      type="text" 
                      value={name}
                      onChange={this.handleInput}
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="input-with-icon">
                    <label htmlFor="fieldEmail">Email Address</label>
                    <i className="icon icon-Mail-2"/>
                    <input className="validate-required validate-email" 
                      id="fieldEmail" 
                      name="email" 
                      type="email" 
                      value={email}
                      onChange={this.handleInput}
                      placeholder="Email Address"
                    />
                  </div>

                  <button type="submit" className="btn">Subscribe Now</button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">
              <div className="subscribe__feature">
                <h6>Free Resources</h6>
                <p>
                    Our team of designers give back with mockups, logos and tons more.
                </p>
              </div>
              <div className="subscribe__feature">
                <h6>Expert Interviews</h6>
                <p>
                    We speak with some of the web’s foremost designers 
                    and developers on a range of topics.
                </p>
              </div>
              <div className="subscribe__feature">
                <h6>Monthly Prizes</h6>
                <p>
                  As if the free resources weren’t enough - we give away a sweet 
                  design stash each month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
