import styled from "styled-components";

export const Wrapper = styled.div`
  width: 45%;
  height: 95%;
  background-color: #341f97;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 15px;
`;

export const ProfileInfo = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  overflow: auto;
`;

export const InputInfoWrapper = styled.div`
  width: 60%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 0px;
`;

export const Label = styled.label`
  width: 100%;
  height: 25px;
  font-size: 0.8rem;
`;

export const InputBox = styled.div`
  width: 100%;
  height: 35px;
  position: relative;
  border-radius: 5px;
  color: #fff;
  border: 1px solid #8395a7;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
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
