import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  list-style: none;
  display: table;
`;

const Anchor = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 1.5em;
  color: ${props => props.theme.palettes.secondary};
`;

const MenuItem = ({ children, href, onClick, className }) => (
  <Wrapper className={className}>
    <Anchor href={href} onClick={onClick}>
      {children}
    </Anchor>
  </Wrapper>
);

MenuItem.defaultProps = {
  href: '#',
  onClick: undefined,
  className: undefined,
};

MenuItem.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
};

export default MenuItem;
