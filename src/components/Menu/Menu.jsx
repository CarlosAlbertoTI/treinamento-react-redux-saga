import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const Wrapper = styled.menu`
  display: flex;
  margin: 0;
  padding: 0;
`;

const Menu = ({ as, children, className }) => (
  <Wrapper as={as} className={className}>
    {children}
  </Wrapper>
);

Menu.defaultProps = {
  children: undefined,
  as: 'menu',
  className: undefined,
};

Menu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  as: PropTypes.string,
  className: PropTypes.string,
};

Menu.Item = MenuItem;

export default Menu;
