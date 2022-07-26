import React, { useContext } from 'react';
import StoryCard from '../StoryCard';
import * as C from './styles';
import AuthContext from '../../contexts/auth';

import geovani from '../../images/geovani.jpg';
import react from '../../images/react_js.png';
import rossoni from '../../images/rossoni.jpg';
import fabricio from '../../images/fabricio.jpg';
import elon from '../../images/elon.jpg';

const Stories = () => {

 // const { user } = useContext(AuthContext);

  const itens = [
    { src: geovani, profile: geovani, name: 'Geovani' },
    { src: fabricio, profile: fabricio, name: 'Fabricio' },
    { src: react, profile: react, name: 'React' },
    { src: rossoni, profile: rossoni, name: 'Marcelo Rossoni' },
    { src: elon, profile: elon, name: 'Elon Musk' },
  ];

  return (
    <C.Container>
      {itens.map((item, index) => (
        <StoryCard
          key={index}
          src={item.src}
          name={item.name}
          profile={item.profile}
        />
      ))}
    </C.Container>
  );
};

export default Stories;