import * as React from 'react';

interface Props {
  tab: number;
  title: string;
  active?: boolean;
  onClick(tab:number):void;
}

export default (props:Props) => {
  return (
    <li className={props.active ? 'active' : ''}>
      <div className="tab__title btn"
        onClick={() => props.onClick(props.tab)}>
      <span className="btn__text">{props.title}</span>
      </div>
    </li>
  );
};
