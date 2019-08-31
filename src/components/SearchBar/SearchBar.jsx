import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Search as SearchIcon } from 'styled-icons/boxicons-regular';
import { debounce } from '../../utils';
import Button from '../Button';

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  align-items: stretch;
  background-color: $white;
  min-height: 40px;
  border-radius: 5px;
  padding: 2px;
  position: relative;
`;
const Input = styled.input`
  flex: 1;
  border: 0;
  margin-left: 10px;
  margin-right: 10px;
`;

const Icon = styled(SearchIcon)`
  width: 20px;
  margin-left: 10px;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 5px;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  min-height: 400px;
  box-shadow: 0 0 5px #999;
`;

const SearchBar = ({ dropdown, dropdownIsOpen, onChangeFn, onFocusFn, onSearchFn }) => {
  const debouncedOnchange = debounce(value => {
    if (onChangeFn) {
      onChangeFn(value);
    }
  }, 300);

  const handleOnChange = event => {
    debouncedOnchange(event.target.value);
  };

  return (
    <Wrapper>
      <Icon />
      <Input type="text" onChange={handleOnChange} onFocus={onFocusFn} />
      <Button onClick={onSearchFn}>Buscar</Button>
      {dropdown && dropdownIsOpen && <DropdownWrapper>{dropdown}</DropdownWrapper>}
    </Wrapper>
  );
};

SearchBar.defaultProps = {
  onSearchFn: undefined,
  onChangeFn: undefined,
  onFocusFn: undefined,
  dropdown: undefined,
  dropdownIsOpen: false,
};

SearchBar.propTypes = {
  onSearchFn: PropTypes.func,
  onChangeFn: PropTypes.func,
  onFocusFn: PropTypes.func,
  dropdown: PropTypes.node,
  dropdownIsOpen: PropTypes.bool,
};

export default SearchBar;
