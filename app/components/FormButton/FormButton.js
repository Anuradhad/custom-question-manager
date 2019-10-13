import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const FormButton = ({ buttonType, text, onClickFunc }) => (
  <button onClick={onClickFunc} type={buttonType} className="form-button">
    {text}
  </button>
);

FormButton.propTypes = {
  text: PropTypes.string,
  buttonType: PropTypes.string,
  onClickFunc: PropTypes.func
};

export default FormButton;
