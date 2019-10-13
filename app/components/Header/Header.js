import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <nav className="navbar">
          <div className="topnav-actions">
            <div>Menu</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
