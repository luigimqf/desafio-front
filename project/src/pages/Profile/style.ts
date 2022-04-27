import styled from "styled-components";

interface IActive {
  $isActive: boolean;
}

export const Wrapper = styled.div`
  width: 45%;
  height: 95%;
  position: relative;

  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  box-shadow: 2px 1px 15px -3px #000000;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`;

export const ProfileTitleBox = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileText = styled.h1`
  margin: 0;
  text-align: center;
`;

export const ProfileInfo = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const InputBox = styled.div<IActive>`
  width: 100%;
  height: 35px;
  position: relative;
  background-color: ${(props) => (props.$isActive ? "transparent" : "#ecf0f1")};
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
  transition: 0.3s;
  border: none;
  background: none;
  border-radius: 5px;

  &::placeholder {
    color: #8395a7;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    border: 1px solid #341f97;
  }
`;
