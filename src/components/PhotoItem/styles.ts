import styled from "styled-components";

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 96%;
    max-height: 100px;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  :hover {
    opacity: 0.6;
  }
`;
