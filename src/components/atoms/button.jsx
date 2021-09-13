import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const Button = ({ title, type, children, ...props }) => {
    return (
        <ButtonStyling type={type} {...props}>
            {title || children}
        </ButtonStyling>
    );
};

const ButtonStyling = styled.button`
  border: none;
  min-width: 100px;
  cursor: pointer;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  margin: 0 10px;
  border-radius: 8px;
  ${({ green }) =>
    green &&
    css`
      background-color: #66b366;
      color: #fff;
    `}
  ${({ red }) =>
    red &&
    css`
      background-color: transparent;
      color: red;
      border: 1px solid red;
    `}
`

Button.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Button;
