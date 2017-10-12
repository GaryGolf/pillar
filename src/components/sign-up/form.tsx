import * as React from 'react'
interface Props {}
interface State {
  username: string
  email:  string
  password: string
  agree: boolean
}

export default class Form extends React.Component <Props, State > {
  constructor(props:Props){
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      agree: false
    }
  }
  handleFormSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }
  handleUsernameChange = e => {
    const username = e.target.value
    this.setState({username})
  }
  render(){
    return (
      <div className="col-md-5 col-sm-7 bg--white text-center">
        <div className="pos-vertical-center">
          <img className="logo" alt="Pillar" src="img/logo-large-dark.png"/>
          <p className="lead">
              A beautiful collection of <br/> hand-crafted web components
          </p>
          <div className="text-left">
            <form method="post">
              <div className="row">
                <div className="col-sm-12">
                  <div className="input-with-icon">
                    <label>Username:</label>
                    <i className="icon icon-Male-2"></i>
                    <input type="text" 
                      name="name" 
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.handleUsernameChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="input-with-icon">
                    <label>Email Address:</label>
                    <i className="icon icon-Mail-2"></i>
                    <input type="email" name="email" placeholder="you@yourwebsite.com"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="input-with-icon">
                    <label>Create Password:</label>
                    <i className="icon icon-Security-Check"></i>
                    <input type="password" name="password" placeholder="••••••"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 text-center">
                  <div className="input-checkbox">
                    <div className="inner"></div>
                    <input type="checkbox"/>
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
    )
  }
}