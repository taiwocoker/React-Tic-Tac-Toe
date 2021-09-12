import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Typography = ({ text, children, as, ...props }) => {
    return <TextStyling {...props}>{text || children}</TextStyling>;
};

const Heading = ({ text, level, children, ...rest }) => {
    const props = { as: `h${level || 1}`, ...rest };
    return React.createElement(TextStyling, props, text || children);
};

Typography.Heading = Heading;

const TextStyling = styled.p`
    ${({ capitalize }) =>
        capitalize &&
        css`
            text-transform: capitalize;
        `}
`;

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Typography.propTypes = {
    text: PropTypes.string,
};

export default Typography;
