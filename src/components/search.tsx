import * as React from 'react';
const { connect } = require('react-redux');
import * as Actions from '../constants/actions';

interface Props {
  active?: boolean;
  close?():void;
}
interface State {}
@connect(
  store => ({
    active: store.app.showSearch as boolean,
  }),
  dispatch => ({
    close: () => dispatch({ type: Actions.SHOW_SEARCH, payload: false }),
  })
)
export default class Search extends React.Component <Props, State> {
  render() {
    const { active, close } = this.props;
    const searchStyle = active
      ? 'modal-container search-modal modal-active'
      : 'modal-container search-modal';
    return (
      <div className={searchStyle} data-modal-id="search-form">
        <div className="modal-content bg-white imagebg" 
          data-width="100%" 
          data-height="100%" 
          style={{ width:'100%', height:'100%' }}>
          <div className="pos-vertical-center clearfix">
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
              <form className="clearfix">
                <div className="input-with-icon">
                  <i className="icon-Magnifi-Glass2 icon icon--sm"></i>
                  <input type="search" name="query" placeholder="Type your search and hit enter"/>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-close modal-close-cross"
            style={{ color:'white' }}
            onClick={close}
          />
        </div>
      </div>
    );
  }
}
