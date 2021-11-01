import styled from "styled-components";

export const Container = styled.div`
    text-align: center;   
`;

export const Loader = styled.div<{size?: number}>`
  font-size: 50px;
        margin-bottom: 20px;

        img{
            width: ${prop => prop.size ? `${prop.size}px` : "100px"};
        }
`;