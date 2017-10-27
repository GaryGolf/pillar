import * as React from 'react';
import TabComponent from 'components/common/tab';
import Tabs from './tabs';

interface Props {}
interface Tab {
  title: string;
  component: JSX.Element;
}

export default class Features extends React.Component <Props, null> {
  private tabs: Tab[];
  constructor(props:Props) {
    super(props);

    this.tabs = [
      { title: 'Craftsmanship', component: <Tabs.Craftsmanship/> },
      { title: 'Sustainability', component: <Tabs.Sustainability/> },
      { title: 'Service Guarantee', component: <Tabs.ServiceGuarantee/> },
    ];
  }


  render() {
   
    return (
      <section className="bg--secondary space--sm shop-tabs">
        <div className="container">
          <div className="row">
            <TabComponent tabs={this.tabs} />
          </div>
        </div>
    </section>
    );
  }
}
