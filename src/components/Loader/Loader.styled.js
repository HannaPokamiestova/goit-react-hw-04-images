import styled from '@emotion/styled';

export const BackdropLoader = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(33, 150, 243, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 250ms linear, visibility 250ms linear;
`;

export const StyledLoader = styled.div`
  margin: 0 auto;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`;
