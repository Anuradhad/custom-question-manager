import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const DropDown = ({ name, items }) => (
  <div className="list-wrapper">
    <select className="form-control" name={name}>
      {items.map((i) => (<option key={i}>{i}</option>))}
    </select>
  </div>
);

DropDown.propTypes = {
  name: PropTypes.string,
  items: PropTypes.array,
};

export default DropDown;
