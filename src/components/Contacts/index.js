import React from 'react';
import ConcactItem from '../ContactItem';
import * as C from './styles';
import { FiSearch } from "react-icons/fi";
import { RiVideoAddFill } from 'react-icons/ri';
import { GoKebabHorizontal } from 'react-icons/go';

import bezos from '../../images/bezos.jpg';
import bill from '../../images/bill.jpg';
import mark from '../../images/mark.jpg';
import elon from '../../images/elon.jpg';

const Contacts = () => {
  const itens = [
    { src: bezos, name: 'Jeff Bezoz' },
    { src: bill, name: 'Bill Gates' },
    { src: mark, name: 'Mark Zuckerberg' },
    { src: elon, name: 'Elon Musk' },
  ];

  return (
    <C.Container>
      <C.Header>
        <C.Label>Contatos</C.Label>
        <C.HeaderIcons>
          <RiVideoAddFill />
          <FiSearch />
          <GoKebabHorizontal />
        </C.HeaderIcons>
      </C.Header>
      {itens.map(({ src, name }, index) => {
        return <ConcactItem key={index} src={src} name={name}></ConcactItem>;
      })}
    </C.Container>
  );
};

export default Contacts;
