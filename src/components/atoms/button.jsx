import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  padding: 5px 10px;
  cursor: pointer;
`;

Button.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Button;
