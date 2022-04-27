import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  height: 35px;
  position: relative;
  border-radius: 5px;
  color: #fff;
  border: 1px solid #8395a7;
  transition: 0.3s;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Drop = styled.input`
  width: 90%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  border-radius: 5px;

  &::placeholder {
    color: #8395a7;
  }
`;

export const OptionsWrapper = styled.div`
  width: 100%;
  max-height: 200px;
  height: fit-content;
  background-color: #ffffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  top: 35px;
  left: 0px;
  height: fit-content;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-shadow: 2px 1px 15px -2px #000000;
  z-index: 1;
`;

export const Option = styled.div`
  width: 98%;
  height: 35px;
  padding: 10px 0px 10px 10px;
  font-size: 0.8rem;
  color: #000;
  user-select: none;

  &:hover {
    background-color: #b2bec3;
  }
`;
