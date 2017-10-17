import * as React from 'react';
import { push } from 'redux-first-routing';
import * as Actions from '../../constants/actions';
import { EmptyState } from '../../reducers/empty';

const { connect } = require('react-redux');

interface Props {
  empty?: EmptyState;
  doNothing?(): void;
}
interface State {
  name: string;
  email: string;
  comment: string;
}
@connect(
  state => ({
    empty: state.empty as EmptyState,
  }),
  dispatch => ({ 
    doNothing: async () => { 
      await dispatch({ type: Actions.DO_NOTHING });
      await dispatch(push('/'));
    },
  }),
)
export default class BlogPostForm extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      comment: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, comment } = this.state;
    if (!name || !email || !comment) return;
    console.log(this.state);
    this.props.doNothing();
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]:value });
  }

  render() {
    const { name, email, comment } = this.state;
    console.log(this.props.empty);
    return (
      <form className="comment__form form--square" onSubmit={this.handleSubmit}>
        <h6>Leave a Comment</h6>
        <input name="name"
          type="text" 
          placeholder="Your Name" 
          value={name}
          onChange={this.handleChange}
        />
        <input  name="email"
          type="email"
          placeholder="Email Address" 
          value={email}
          onChange={this.handleChange}
        />
        <textarea name="comment" 
          rows={4}
          placeholder="Your Comment" 
          value={comment}
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn--primary">Submit Comment</button>
      </form>
    );
  }
}
