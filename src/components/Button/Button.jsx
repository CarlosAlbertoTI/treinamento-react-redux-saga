import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
  border-width: 1px;
  border-style: solid;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #22b14c;
  color: #fff;
`;

const Button = ({ onClick, children }) => <Wrapper onClick={onClick}>{children}</Wrapper>;

Button.defaultProps = {
  children: undefined,
  onClick: undefined,
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onClick: PropTypes.func,
};

export default Button;
