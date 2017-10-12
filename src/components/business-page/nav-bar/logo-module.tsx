import * as React from 'react'
interface Props {}

export default (props:Props) => {
  return (
    <div className="row">
      <div className="nav-stack__upper">
        <div className="col-xs-6">
          <a href="index.html">
            <img alt="logo" className="logo" src="img/logo-large-dark.png"/>
          </a>
        </div>
        <div className="col-xs-6 text-right">
          <a href="http://themeforest.net/item/pillar-multipurpose-html-with-page-builder/16164427?ref=medium_rare" className="btn btn--sm btn--square">
            <span className="btn__text">Purchase Now</span>
          </a>
        </div>
      </div>
    </div>
  )
}