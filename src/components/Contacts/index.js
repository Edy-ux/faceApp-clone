import React from 'react';
import ConcactItem from '../ContactItem';
import * as C from './styles';
import { FiSearch } from 'react-icons/fi';
import { RiVideoAddFill } from 'react-icons/ri';
import { GoKebabHorizontal } from 'react-icons/go';
import Header from './header';

import geovani from '../../images/geovani.jpg';
import roberto from '../../images/roberto.jpg';
import rossoni from '../../images/rossoni.jpg';
import fabricio from '../../images/fabricio.jpg';
import elon from '../../images/elon.jpg';



const Contacts = () => {
  const itens = [
    { src: geovani, name: 'Geovani' },
    { src: fabricio, name: 'Fabricio' },
    { src: roberto, name: 'Roberto' },
    { src: rossoni, name: 'Marcelo Rossoni' },
    { src: elon, name: 'Elon Musk' },
  ];

  return (
    <C.Container>
      <C.Header>
        <C.HeaderIcons>
          <Header />
        </C.HeaderIcons>
      </C.Header>
      <>
        {itens.map(({ src, name }, index) => (
          <ConcactItem key={index} src={src} name={name} />
        ))}
      </>
    </C.Container>
  );
};

export default Contacts;
