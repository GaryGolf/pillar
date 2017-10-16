import * as React from 'react';
import ImageHeader from './blog-post-image';
import BlogPostApproach from './blog-post-approach';
import BlogPostShare from './blog-post-share';
interface Props {}
interface State {}

export default class BlogPostContainer extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
  }

  render() {
    return (
      <section className="blog-post">
        <ImageHeader/>
        <div className="container">
          <BlogPostApproach/>
          <BlogPostShare/>
        </div>
      </section>
    );
  }
}