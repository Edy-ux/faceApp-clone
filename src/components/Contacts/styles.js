import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  width: 15%;
  margin-right: 20px;
  @media (max-width: 875px) {
    display: none;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  color: #65676b;
  font-weight: 500;
  font-size: 14px;
  margin-right: 20px;
  
 
`;

export const HeaderIcons = styled.div`
  display: flex;
  gap: 10px;
  svg {
    width: 20px;
    height: 20px;
    color: #65676b;
    cursor: pointer;
  }
`;