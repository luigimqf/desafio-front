import styled from "styled-components";

interface IFilled {
  $isFilled: boolean;
}

export const Wrapper = styled.div`
width:fit-content:
max-width:33%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div<IFilled>`
  width: 35px;
  aspect-ratio: 1/1;
  border-radius: 5px;
  border: 1px solid #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  transition: 1s;
  background-color: ${(props) => (props.$isFilled ? "#00b894" : "transparent")};
`;

export const Line = styled.div<IFilled>`
  width: 100px;
  height: 5px;
  transition: 1s;
  background-color: ${(props) => (props.$isFilled ? "#00b894" : "#fff")};
  @media (max-width: 820px) {
    width: 50px;
  }
`;
