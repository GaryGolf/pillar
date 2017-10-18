import * as React from 'react';

interface Props {}
interface State {
  name: string;
  email: string;
  telephone: string;
  message: string;
}

export default class PageContactForm extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      telephone: '',
      message: '',
    };
  }

  handleSubmit = (event) => {
    const { name, email, telephone, message } = this.state;
    event.preventDefault();
    if (!name || !email || !telephone || !message) return;
    console.log(this.state);
  }

  handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]:value });
  }

  render() {
    const { name, email, telephone, message } = this.state;
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <form className="form--square form-email" 
                data-success="Thanks for your enquiry, we'll be in touch soon" 
                data-error="Please fill all required fields" 
                onSubmit={this.handleSubmit}
                noValidate>
                <h4 className="text-center">Or reach us right here…</h4>
                <div className="input-with-icon col-sm-12">
                  <i className="icon-MaleFemale"/>
                  <input name="name" 
                    className="validate-required" 
                    type="text" 
                    placeholder="Your Name"
                    value={name}
                    onChange={this.handleInput}
                  />
                </div>
                <div className="input-with-icon col-sm-6">
                  <i className="icon-Email"/>
                  <input name="email"
                    className="validate-required validate-email" 
                    type="email" 
                    placeholder="Email Address"
                    value={email}
                    onChange={this.handleInput}
                  />
                </div>
                <div className="input-with-icon col-sm-6">
                  <i className="icon-Phone-2"/>
                  <input name="telephone" 
                    type="tel" 
                    placeholder="Phone Number"
                    value={telephone}
                    onChange={this.handleInput}
                  />
                </div>
                <div className="col-sm-12">
                  <textarea name="message"
                    className="validate-required"  
                    placeholder="Your Message" 
                    rows={8}
                    value={message}
                    onChange={this.handleInput}
                  />
                </div>
                <div className="col-sm-12">
                    <button type="submit" className="btn btn--primary">
                        Submit Form
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
