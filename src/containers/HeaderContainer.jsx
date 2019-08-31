import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ui } from '../redux';
import Header from '../components/Header';

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const onChangeSearchAction = useCallback(
    value => {
      dispatch(ui.actions.onChangeSearch(value));
    },
    [dispatch],
  );

  const onSearchAction = useCallback(
    value => {
      console.log('dsds', value);
    },
    [dispatch],
  );

  return <Header onChangeSearchFn={onChangeSearchAction} onSearchFn={onSearchAction} />;
};

export default HeaderContainer;
