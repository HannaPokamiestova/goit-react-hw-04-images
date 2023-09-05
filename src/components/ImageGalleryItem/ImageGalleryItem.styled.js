import styled from '@emotion/styled';

export const Item = styled.li`
  width: calc((100% - 45px) / 4);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 200px;
  transition: scale 250ms linear;

  &:hover,
  :focus {
    scale: 1.05;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
