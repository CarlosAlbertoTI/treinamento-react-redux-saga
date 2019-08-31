import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar';
import MainNav from 'components/MainNav';
import List from 'components/List';

const Wrapper = styled.header`
  background-color: ${props => props.theme.palettes.primary};
  padding-top: 1em;
  padding-bottom: 1em;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`;

const LeftContent = styled.div``;
const CenterContent = styled.div`
  flex-basis: 700px;
`;

const RightContent = styled.div``;

const BottomContent = styled.div`
  display: flex;
  justify-content: center;
  paddinf-bottom: 1em;
`;

const Header = ({ onChangeSearchFn, onSearchFn }) => (
  <Wrapper>
    <TopContent>
      <LeftContent>Logotipo</LeftContent>
      <CenterContent>
        <SearchBar
          onChangeFn={onChangeSearchFn}
          onSearchFn={onSearchFn}
          dropdown={
            <List>
              <List.Item divider>Últimos buscados</List.Item>
              <List.Item>Moto G7</List.Item>
              <List.Item>Moto G2</List.Item>
            </List>
          }
          dropdownIsOpen={false}
        />
      </CenterContent>
      <RightContent>Card</RightContent>
    </TopContent>
    <BottomContent>
      <MainNav />
    </BottomContent>
  </Wrapper>
);

Header.defaultProps = {
  onSearchFn: undefined,
  onChangeSearchFn: undefined,
};

Header.propTypes = {
  // optional
  onSearchFn: PropTypes.func,
  onChangeSearchFn: PropTypes.func,
};

export default Header;
