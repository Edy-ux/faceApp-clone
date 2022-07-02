import React from "react";
import * as C from "./styles";



const ShortcutItem = ({ Icon, Title, colorIcon, srcPofile }) => {
  return (
    <C.Container colorIcon={colorIcon}>
      {Icon ? <Icon/> : <C.ImageProfile src={srcPofile} alt="Profile" />}
      <C.Label>{Title}</C.Label>
    </C.Container>
  );
 
};

export default ShortcutItem;