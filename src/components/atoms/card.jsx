import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = ({ children, ...props }) => {
    return <CardStyling {...props}>{children}</CardStyling>;
};

const CardStyling = styled.div`
    // padding: 5px;
    background-color: white;
    border-radius: 8px;
`;
Card.propTypes = {};

export default Card;
