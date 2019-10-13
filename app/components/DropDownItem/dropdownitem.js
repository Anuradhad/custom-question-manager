import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const DropDown = ({ item }) => (
  <div className="list-item-wrapper">
    <option value="${item}">{item}</option>
  </div>
);

DropDown.propTypes = {
  item: PropTypes.any
};

export default DropDown;
