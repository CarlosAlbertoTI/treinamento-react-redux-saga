import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  min-height: 80px;
  background-color: ${props => props.theme.palettes.default};
`;

const Footer = () => <Wrapper>footer</Wrapper>;

export default Footer;
