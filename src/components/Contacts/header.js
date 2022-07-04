import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { RiVideoAddFill } from 'react-icons/ri';
import { GoKebabHorizontal } from 'react-icons/go';
import * as C from './styles';

const Header = () => {
  return (
    <>
      <C.Label>Contatos</C.Label>
      <RiVideoAddFill />
      <FiSearch />
      <GoKebabHorizontal />
    </>
  );
};

export default Header;
