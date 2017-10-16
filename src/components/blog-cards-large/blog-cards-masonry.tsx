import * as React from 'react';
import BlogPaginator from './blog-cards-paginator';
interface Props {}
interface State {}

export default class Masonry extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
  }
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="masonry masonry-blog">
              <div className="masonry__container masonry--animate masonry--active" 
                style={{ position:'relative', height:'2518.5px' }}>
                     
                
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
