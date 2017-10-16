import * as React from 'react';
import BlogPaginator from './blog-cards-paginator';
import CardTemplate from './blog-card-template';
const json: BlogCardLarge[] = require('./blog-cards-data.json');


interface Props {}
interface State {
  page: number;
}

export default class Masonry extends React.PureComponent <Props, State> {
  private cardsPerPage = 4
  constructor(props:Props) {
    super(props);
    this.state = { page: 1 };
  }

  isCardInThePage(idx:number): boolean {
    const high = this.state.page * this.cardsPerPage;
    const low = (this.state.page - 1) * this.cardsPerPage;
    if ( idx >= low && idx < high) return true;
    return false;
  }

  handlePaginatorClick(page) {
    this.setState({ page });
  }

  render() {
    const cards = json.map((item,idx) => {
      if (!this.isCardInThePage(idx)) return null;
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
              pages={2}
              onClick={this.handlePaginatorClick}
            />
          </div>
        </div>  
      </section>
    );
  }
}
