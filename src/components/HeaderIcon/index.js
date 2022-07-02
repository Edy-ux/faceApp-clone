import React from "react";
import * as C from "./styles";

const HeaderIcon = ({
  Icon,
  section = "section2",
  active = false,
  display = "default",
  title
}) => {
  return (
    <C.Container className={section} display={display} title={title}  >
      <Icon className={active ? "active" : ""} />
    </C.Container>
  );
};

export default HeaderIcon;