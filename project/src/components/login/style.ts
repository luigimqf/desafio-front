import styled, { keyframes } from "styled-components";

interface IActive {
  $isActive: boolean;
}

const FadeIn = keyframes`
  from {opacity:0}
  to {opacity:1;}
`;

export const Wrapper = styled.div`
  width: 35%;
  height: 85%;
  background-color: #341f97;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export const Icon = styled.img`
  width: 75px;
  height: 75px;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  animation: ${FadeIn} 1s linear;
`;

export const Form = styled.form`
  width: 70%;
  height: 60%;
  margin: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Notify = styled.div`
  width: 70%;
  height: 25px;
  margin-bottom: 5px;
  position: absolute;
  top: 65px;
  display: flex;
  align-items: center;
`;

export const NotifyDescription = styled.p`
  font-size: 0.7rem;
  font-weight: bold;
  color: #d63031;
  margin-left: 5px;
`;

export const Input = styled.input`
  width: 70%;
  height: 35px;
  border-radius: 5px;
  color: #fff;
  border: 1px solid #8395a7;
  transition: 0.3s;
  background: none;
  outline: none;
  margin-bottom: 25px;
  animation: ${FadeIn} 1s linear;

  &:focus {
    border: 1px solid #fff;
  }
  &::placeholder {
    color: #8395a7;
  }
`;

export const Submit = styled.button<IActive>`
  width: 40%;
  height: 35px;
  background-color: ${(props) => (props.$isActive ? "#10ac84" : "#3d3d3d")};
  color: #fff;
  transition: 0.4s;
  margin-top: 35px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.8rem;
  animation: ${FadeIn} 1s linear;
  cursor: ${(props) => (props.$isActive ? "pointer" : "not-allowed")}; ;
`;
