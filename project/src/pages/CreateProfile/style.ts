import styled from "styled-components";

export const Wrapper = styled.div`
  width: 35%;
  height: 85%;
  background-color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 0px 15px -3px #000000;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Progression = styled.div`
  width: 100%;
  height: 15%;
  background-color: #341f97;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
