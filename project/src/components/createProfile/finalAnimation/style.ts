import styled, { keyframes } from "styled-components";

interface IDisplay {
  $display: boolean;
}

const rotate = keyframes`
  50%{
    border-left-color:#9b59b6
  }
  75%{
    border-left-color:#e67e22;
  }
  100%{
    transform:rotate(360deg);
  }
`;
const checkApear = keyframes`
  0%{
    height:0;
    width:0;
    opacity:1;
  }
  20%{
    height:0;
    width:28px;
    opacity:1;
  }
  40%{
    height:56px;
    width:28px;
    opacity:1;
  }
  100%{
    height:56px;
    width:28px;
    opacity:1;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 75%;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnimatedCircle = styled.div`
  width: 125px;
  aspect-ratio: 1/1;
  border: 2px solid #b2bec3;
  border-radius: 50%;
  border-left-color: #5cb85c;
  position: relative;
  animation: ${rotate} 2s linear;
`;

export const Check = styled.div<IDisplay>`
  position: absolute;
  opacity: ${(props) => (props.$display ? "1" : "0")};
  height: 56px;
  width: 28px;
  border-top: 4px solid #5cb85c;
  border-right: 4px solid #5cb85c;
  top: 50%;
  left: 28px;
  transform: scaleX(-1) rotate(135deg);
  transform-origin: left top;
  animation: ${checkApear} 0.8s ease;
  animation-delay: 2.5s;
`;
