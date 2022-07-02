import React from 'react';
import Contacts from '../Contacts';
// import Feed from "../Feed";
import Shortcuts from '../Shortcuts';
import * as C from './styles';

const Body = () => {
  return (
    <C.Container>
      <Shortcuts />
      <Contacts />
      {/*  <Feed />
       */}
    </C.Container>
  );
};

export default Body;