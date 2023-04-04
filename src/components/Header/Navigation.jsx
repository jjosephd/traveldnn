import React from 'react';
import { UilUser } from '@iconscout/react-unicons';
import { UilFileSearchAlt } from '@iconscout/react-unicons';

import default_logo from '../../assets/images/default_logo.png';
function Navigation() {
  return (
    <header className="nav-header">
      <nav className="navbar">
        <img src={default_logo} alt="img" id="dnn_logo" />
        <div className="location-bar">
          <div id="location">
            <button>Location</button>
          </div>
          <div id="vert-line"></div>
          <div id="date">
            <button>Date</button>
          </div>

          <div id="vert-line"></div>
          <button id="num-guests">Add Guests</button>
        </div>

        <div className="options-wrap">
          <button id="partnerships">Partnerships</button>
          <button id="reviews-btn">
            <UilFileSearchAlt id="reviews-icon" />
          </button>
          <div className="user-options">
            <div id="icon-wrap">
              <UilUser id="user-icon" />
              <div id="notification"></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
