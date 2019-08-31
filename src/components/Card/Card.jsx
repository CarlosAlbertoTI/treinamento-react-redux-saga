import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CardWrapper from './CardWrapper';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

const Wrapper = styled.section`
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 0 0 3px #dbdbdb;
`;

const Card = ({ children }) => <Wrapper>{children}</Wrapper>;

Card.defaultProps = {
  children: undefined,
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Card.Wrapper = CardWrapper;
Card.Body = CardBody;
Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.Title = CardTitle;

export default Card;
