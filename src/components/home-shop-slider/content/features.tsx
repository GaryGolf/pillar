import * as React from 'react'
interface Props {}
interface State {
  tab: number
}

interface TabProps {
  header: string
  text: string
  photo: string
  active: boolean
}

const Tab = (props:TabProps) => (
  <li className={props.active?"active":""}>
    <div className="tab__content">
      <div className="row pos-vertical-align-columns">
        <div className="col-md-6">
          <h6>{props.header}</h6>
          <p className="lead">{props.text}</p>
        </div>
        <div className="col-md-4 col-md-push-1 hidden-sm">
          <img alt="pic" src={props.photo}/>
        </div>
      </div>
    </div>
  </li>
)

export default class Features extends React.Component <Props, State> {
  constructor(props:Props){
    super(props)

    this.state = {
      tab: 0
    }
  }

  render(){
   
    const {tab} = this.state
    
    return (
      <section className="bg--secondary space--sm shop-tabs">
        <div className="container">
          <div className="row">
            <div className="tabs-container tabs-1">
              <ul className="tabs text-center">
                <li className={tab==0?"active":""}>
                  <div className="tab__title btn"
                    onClick={()=>this.setState({tab:0})}>
                    <span className="btn__text">Craftsmanship</span>
                  </div>
                </li>
                <li className={tab==1?"active":""}>
                  <div className="tab__title btn"
                    onClick={()=>this.setState({tab:1})}>
                    <span className="btn__text">Sustainability</span>
                  </div>
                          
                </li>
                <li className={tab==2?"active":""}>
                  <div className="tab__title btn"
                    onClick={()=>this.setState({tab:2})}>
                    <span className="btn__text">Service Guarantee</span>
                  </div>
                          
                </li>
              </ul>
              <ul className="tabs-content">
                <Tab
                  header="A Commitment To Quality"
                  text="Robust design, sustainable production and honest pricing are the cornerstones of the Pillar vision — Ours values of craftsmanship and authenticity pervade every piece."
                  photo="img/shop-aux-1.jpg"
                  active={tab==0}
                />
                <Tab
                  header="Responsible Production"
                  text="Pillar combines smart, modern styling with all the features you’ll need to launch websites of almost any kind. Couple it with our exclusive page builder Variant and you’re golden."
                  photo="img/shop-aux-2.jpg"
                  active={tab==1}
                />
                <Tab
                  header="A Commitment To Quality"
                  text="Pillar combines smart, modern styling with all the features you’ll need to launch websites of almost any kind. Couple it with our exclusive page builder Variant and you’re golden."
                  photo="img/shop-aux-3.jpg"
                  active={tab==2}
                />
              </ul>
              </div>
              {/* <!--end of tabs container--> */}
          </div>
          {/* <!--end of row--> */}
      </div>
      {/* <!--end of container--> */}
  </section>
    )
  }
}