import React from 'react';
import styled from 'styled-components';
import Menu from 'components/Menu';

const Wrapper = styled.nav``;

const MenuItem = styled(Menu.Item)`
  svg {
    margin-bottom: 0.5em;
  }
`;

const MainNav = () => (
  <Wrapper>
    <Menu as="ul">
      <MenuItem>Celulares</MenuItem>
      <MenuItem>TV</MenuItem>
      <MenuItem>Notebook</MenuItem>
      <MenuItem>Eletro</MenuItem>
      <MenuItem>Auto peças</MenuItem>
      <MenuItem>Livros</MenuItem>
      <MenuItem>Retire na loja</MenuItem>
      <MenuItem>Desafio</MenuItem>
      <MenuItem>Ver todos</MenuItem>
    </Menu>
  </Wrapper>
);

export default MainNav;
