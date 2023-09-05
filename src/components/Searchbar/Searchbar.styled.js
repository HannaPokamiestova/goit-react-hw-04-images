import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { FcSearch } from 'react-icons/fc';

export const SearchHeader = styled.header`
  width: 100vw;
  background-color: #2196f3;
  position: fixed;
  left: 0px;
  top: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const StyledForm = styled(Form)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
  width: 300px;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 35px;
  border-radius: 4px;
  padding-left: 35px;
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  height: 100%;
  width: 35px;
  background-color: initial;
  border: none;
  border-radius: 4px;
  color: #fff;
  transition: background-color 250ms linear;

  &:hover,
  :focus {
    background-color: #f7f7f7;
    border: 2px solid black;
  }
`;

export const Icon = styled(FcSearch)`
  width: 25px;
  height: 25px;
`;
