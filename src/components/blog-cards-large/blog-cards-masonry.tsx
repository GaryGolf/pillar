import * as React from 'react';
interface Props {}
interface State {}

export default class Masonry extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props)
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
            <div className="pagination-container">
              <hr/>
              <ul className="pagination">
                <li>
                    <a href="#"><span>←</span></a>
                </li>
                <li className="active">
                    <a href="#">1</a>
                </li>
                <li>
                    <a href="#">2</a>
                </li>
                <li>
                    <a href="#">3</a>
                </li>
                <li>
                  <a href="#"><span>→</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>  
      </section>
    );
  }
}
