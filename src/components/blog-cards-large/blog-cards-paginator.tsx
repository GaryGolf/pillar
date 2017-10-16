import * as React from 'react';
interface Props {
  pages: number;
  onClick(page):void;
}
interface State {
  current: number;
}

export default class BlogPaginator extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = { current: 1 };
  }

  handlePrevPage = (event) => {
    event.preventDefault();
    this.setState((state:State) => {
      if (state.current <= 1) return { current: 1 };
      return { current: state.current - 1 };
    });
  }

  handleNextPage = (event) => {
    event.preventDefault();
    const { pages } = this.props;
    this.setState((state:State) => {
      if (state.current >= pages) return { current: pages };
      return { current: state.current + 1 };
    });
  }

  render() {
    const { pages, onClick } = this.props;
    const { current } = this.state;
    const tabs: JSX.Element[] = new Array(pages)
      .fill(<div/>)
      .map((item, idx) => {
        const page = idx + 1;
        const active = current === page ? 'active' : ''; 
        return (
          <li key={idx} className={active}>
            <a href="#"
              data-page={page}
              onClick={(event) => { 
                event.preventDefault(); 
                onClick(page);
                this.setState({ current: page });
              }}>
              {page}
            </a>
          </li>
        );
      });
    return (
      <div className="pagination-container">
        <hr/>
        <ul className="pagination">
          <li>
              <a href="#"
                onClick={this.handlePrevPage}>
                <span>←</span>
              </a>
          </li>
          {tabs}
          <li>
            <a href="#"
              onClick={this.handleNextPage}>>
              <span>→</span>
            </a>
          </li>
        </ul>
    </div>
    );
  }
}
