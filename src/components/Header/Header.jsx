import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar';
import Menu from 'components/Menu';
import MenuItem from 'components/MenuItem';

import {
  faMobileAlt,
  faTv,
  faLaptop,
  faBlender,
  faCar,
  faBook,
  faMapMarked,
  faDice,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Style from './style/Header.scss';
import MainMenu from '../MainMenu';

class Header extends PureComponent {
  onSearch = e => {
    e.preventDefault();
    window.alert('cliquei na busca');
  };

  onChangeSearch = e => {
    console.log(e);
  };

  goToHome = e => {
    const { pushFn } = this.props;
    e.preventDefault();
    pushFn('/');
  };

  goToSignIn = e => {
    const { pushFn } = this.props;
    e.preventDefault();
    pushFn('/signin');
  };

  goToSignUp = e => {
    const { pushFn } = this.props;
    e.preventDefault();
    pushFn('/signup');
  };

  render() {
    const { onSearchFn, onChangeSearchFn } = this.props;
    return (
      <header className={Style.root}>
        <div className={Style.container}>
          <div className={Style.contentLeftContainer}>logo</div>
          <div className={Style.contentCenterContainer}>
            <SearchBar onSearchFn={onSearchFn} onChangeFn={onChangeSearchFn} />
          </div>
          <div className={Style.contentRightContainer}>card</div>
        </div>

        <div className={Style.shrinkDiv}>
          <MainMenu>
            <Menu>
              <MenuItem icon={faMobileAlt}>Celulares</MenuItem>
              <MenuItem icon={faTv}>TV</MenuItem>
              <MenuItem icon={faLaptop}>Notebook</MenuItem>
              <MenuItem icon={faBlender}>Eletrodom</MenuItem>
              <MenuItem icon={faCar}>Auto Peças</MenuItem>
              <MenuItem icon={faBook}>Livros</MenuItem>
              <MenuItem icon={faMapMarked}>Retire na Loja</MenuItem>
              <MenuItem icon={faDice}>Desafio</MenuItem>
              <MenuItem icon={faPlus}>Ver Todas</MenuItem>
            </Menu>
          </MainMenu>
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  onSearchFn: undefined,
  onChangeSearchFn: undefined,
};

Header.propTypes = {
  // required
  pushFn: PropTypes.func.isRequired,
  // optional
  onSearchFn: PropTypes.func,
  onChangeSearchFn: PropTypes.func,
};

export default Header;
