'use strict';
import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return (
      <nav className='nav-bar-width'>
        <div className='nav-bar'>
          <div> ReactBase </div>
          <div className='logo'> // </div>
          <div> Mahmud Ahmad </div>
        </div>
      </nav>
    );
  };
};

