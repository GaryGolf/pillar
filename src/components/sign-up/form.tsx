import * as React from 'react';
interface Props {}
interface State {
  name: string;
  email:  string;
  password: string;
  agree: boolean;
}

export default class Form extends React.Component <Props, State > {
  constructor(props:Props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      agree: false,
    };
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, agree } = this.state;
    if (!name || !email || !password || !agree) return;
    console.log(this.state);
  }
  
  handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' 
      ? event.target.checked 
      : event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }

  render() {
    const checkboxStyle = !this.state.agree 
      ? 'input-checkbox' 
      : 'input-checkbox checked';
    return (
      <div className="col-md-5 col-sm-7 bg--white text-center">
        <div className="pos-vertical-center">
          <img className="logo" alt="Pillar" src="img/logo-large-dark.png"/>
          <p className="lead">
              A beautiful collection of <br/> hand-crafted web components
          </p>
          <div className="text-left">
            <form method="post" onSubmit={this.handleFormSubmit}>
              <div className="row">
                <div className="col-sm-12">
                  <div className="input-with-icon">
                    <label>Username:</label>
                    <i className="icon icon-Male-2"></i>
                    <input type="text" 
                      name="name" 
                      placeholder="Username"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="input-with-icon">
                    <label>Email Address:</label>
                    <i className="icon icon-Mail-2"></i>
                    <input type="email" 
                      name="email" 
                      placeholder="you@yourwebsite.com"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="input-with-icon">
                    <label>Create Password:</label>
                    <i className="icon icon-Security-Check"></i>
                    <input type="password" 
                      name="password" 
                      placeholder="••••••"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 text-center">
                  <div className={checkboxStyle}>
                    {/* <div className="inner"/> */}
                    <input type="checkbox"
                      name="agree"
                      style={{ padding:'.3rem' }}
                      className="inner"
                      checked={this.state.agree}
                      onChange={this.handleInputChange}
                    />
                  </div>
                    <span className="type--fine-print">I agree to the
                      <a href="#"> terms and conditions</a>
                    </span>
                  </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <button type="submit" className="btn btn--primary">Get Started</button>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
    );
  }
}
