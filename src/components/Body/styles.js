
import styled from "styled-components";

export const Container = styled.div`
  
  display: flex;
  justify-content: space-around;
  gap: 20px;
  width: 100%;
  position: relative;
  height: calc(100vh - 60px);
  @media (max-width: 600px) {
    gap: 0;
  }
`;