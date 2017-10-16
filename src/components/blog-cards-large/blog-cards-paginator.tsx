import * as React from 'react';
interface Props {
  pages: number;
  onClick(page):void;
}
interface State {
  current: number
}

export default class BlogPaginator extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
    this.state= { current: 1 }
  }

  handleClick = (event) => {
    event.preventDefault();
  }

  render() {
    const { pages, onClick } = this.props;
    const tab = new Array(pages);
    return (
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
    );
  }
}
