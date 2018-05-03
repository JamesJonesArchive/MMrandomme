import React from 'react';
import IoAndroidMoreHorizontal from
    'react-icons/lib/io/android-more-horizontal';
import { Button } from 'react-bootstrap';

export default class PersonDropDown extends React.Component {
  render() {
    return (
      <div className="nav-item dropdown">
        <a href="#" 
          className="nav-link dropdown-toggle" 
          id="navbarDropdownMenuLink"
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false">
          <IoAndroidMoreHorizontal />
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    );
  }
}
