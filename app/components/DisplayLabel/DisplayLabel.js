import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const DisplayLabel = ({ mode, text }) => (
  <div className={`display-label display-label-${mode}`}>
    {text}
  </div>
);

DisplayLabel.propTypes = {
  mode: PropTypes.string,
  text: PropTypes.string
};

export default DisplayLabel;
