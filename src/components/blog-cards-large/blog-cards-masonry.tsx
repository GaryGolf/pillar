import * as React from 'react';
import BlogPaginator from './blog-cards-paginator';
import CardTemplate from './blog-card-template';
const json: BlogCardLarge[] = require('./blog-cards-data.json');


interface Props {}
interface State {}

export default class Masonry extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
  }
  render() {
    const cards = json.map((item,idx) => {
      return (
        <CardTemplate
          key={idx}
          image={item.image}
          type={item.type}
          title={item.title}
          note={item.note}
          by={item.by}
        />
      );
    });
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="masonry masonry-blog">
              <div className="masonry__container masonry--animate masonry--active" 
                style={{ position:'relative', height:'2518.5px' }}>

                {cards}
           
              </div>
            </div>
            <BlogPaginator
              pages={3}
              onClick={console.log}
            />
          </div>
        </div>  
      </section>
    );
  }
}
