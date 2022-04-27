import styled from "styled-components";

interface IActive {
  $isActive: boolean;
}

export const Form = styled.form`
  width: 80%;
  height: 75%;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0;
  color: black;
`;

export const CepInfo = styled.h3`
  font-size: 0.6rem;
  font-weight: bold;
  margin: 0;
  color: #636e72;
`;

export const Correios = styled.a`
  font-size: 0.6rem;
  font-weight: bold;
  color: #0984e3;
  text-decoration: none;
`;

export const CepInput = styled.input`
  width: 85%;
  height: 35px;
  border-radius: 5px;
  color: #2d3436;
  border: 1px solid #8395a7;
  transition: 0.3s;
  background: none;
  outline: none;
  margin: 10px 0px;
  &:focus {
    border: 1px solid #341f97;
  }
  &::placeholder {
    color: #8395a7;
    font-size: 0.6rem;
  }
`;

export const AddressBox = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const InputBox = styled.div`
  width: 45%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 0px;
`;

export const Label = styled.label`
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  font-size: 0.7rem;
`;

export const Input = styled.input`
  width: 95%;
  height: 30px;
  border-radius: 5px;
  color: #2d3436;
  border: 1px solid #8395a7;
  transition: 0.3s;
  background: none;
  outline: none;
  margin: 10px 0px;

  &:focus {
    border: 1px solid #341f97;
  }
  &::placeholder {
    color: #8395a7;
    font-size: 0.6rem;
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
  cursor: ${(props) => (props.$isActive ? "pointer" : "not-allowed")}; ;
`;
