import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = ({ type, error, name, label, ...props }) => {
    return (
        <InputStyling>
            <label className={'Input__label'} htmlFor={name}>{`${label}:`}</label>
            <input className={'Input__input'} id={name} name={name} {...props} />
            <div className={error ? 'Input__error' : ''}>{error && error[name]}</div>
        </InputStyling>
    );
};

const InputStyling = styled.div`
    margin-bottom: 5px;
    .Input {
        &__label {
            font-size: 14px;
            font-weight: bold;
            display: inline-block;
            margin-bottom: 0.50em;
        }
        &__input {
            height: 30px;
            padding: 5px 10px;
            width: 100%;
        }
        &__error {
            color: red;
            font-size: 12px;
            height: 12px;
        }
    }
`;

Input.propTypes = {
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
};

export default Input;
