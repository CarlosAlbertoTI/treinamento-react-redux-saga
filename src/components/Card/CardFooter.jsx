import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.footer`
  min-height: 40px;
  align-items: center;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  border-left-width: 0;
  border-top-width: 1px;
  border-right-width: 0;
  border-bottom-width: 0;
  border-style: solid;
  border-color: #ececec;
`;

const CardFooter = ({ children }) => <Wrapper>{children}</Wrapper>;

CardFooter.defaultProps = {
  children: undefined,
};

CardFooter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
export default CardFooter;
