import * as React from 'react';
import Link from '../common/link';

interface Props {
  menu: IMenuItem[];
}

export default (props:Props) => {
  if (!props.menu) return null;

  const template = props.menu.map(item => (
    <li key={item.label}>
      <Link to={item.url ? item.url : '#'} >
        {item.label}
      </Link>
    </li>
  ));

  return <ul>{template}</ul>;
};
