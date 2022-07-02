import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  border-radius: 8px;
  width: 98%;
  &:hover {
    background-color: #0000000d;
  }
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;