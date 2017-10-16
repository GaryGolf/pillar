import * as React from 'react';
interface Props {}
interface State {
  tab: number;
}

interface TabButtonProps {
  tab: number;
  title: string;
  active: boolean;
  onClick(tab:number):void;
} 

interface TabContentProps {
  header: string;
  text: string;
  photo: string;
  active: boolean;
}

const TabButton = (props:TabButtonProps) => (
  <li className={props.active ? 'active' : ''}>
    <div className="tab__title btn"
      onClick={() => props.onClick(props.tab)}>
      <span className="btn__text">{props.title}</span>
    </div>
  </li>
);

const TabContent = (props:TabContentProps) => (
  <li className={props.active ? 'active' : ''}>
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
);

export default class Features extends React.Component <Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      tab: 0,
    };
  }

  switchTab = tab => this.setState({ tab });

  render() {
   
    const { tab } = this.state;
    const text1 = 'Robust design, sustainable production and honest pricing are the cornerstones ' +
      'of the Pillar vision — Ours values of craftsmanship and authenticity pervade every piece.';
    const text2 = 'Pillar combines smart, modern styling with all the features you’ll need ' +
      'to launch websites of almost any kind. Couple it with our exclusive page builder Variant ' +
      'and you’re golden.';
    const text3 = 'Pillar combines smart, modern styling with all the features you’ll ' +
      'need to launch websites of almost any kind. Couple it with our exclusive page ' +
      'builder Variant and you’re golden.';
    return (
      <section className="bg--secondary space--sm shop-tabs">
        <div className="container">
          <div className="row">
            <div className="tabs-container tabs-1">
              <ul className="tabs text-center">
                <TabButton
                  tab={0}
                  title="Craftsmanship"
                  active={tab === 0}
                  onClick={this.switchTab}
                />
                <TabButton
                  tab={1}
                  title="Sustainability"
                  active={tab === 1}
                  onClick={this.switchTab}
                />
                <TabButton
                  tab={2}
                  title="Service Guarantee"
                  active={tab === 2}
                  onClick={this.switchTab}
                />
              </ul>
              <ul className="tabs-content">
                <TabContent
                  header="A Commitment To Quality"
                  text={text1}
                  photo="img/shop-aux-1.jpg"
                  active={tab === 0}
                />
                <TabContent
                  header="Responsible Production"
                  text={text2}
                  photo="img/shop-aux-2.jpg"
                  active={tab === 1}
                />
                <TabContent
                  header="A Commitment To Quality"
                  text={text3}
                  photo="img/shop-aux-3.jpg"
                  active={tab === 2}
                />
              </ul>
            </div>
          </div>
        </div>
    </section>
    );
  }
}
