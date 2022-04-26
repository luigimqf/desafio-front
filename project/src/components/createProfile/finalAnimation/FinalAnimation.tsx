import { useEffect, useState } from "react";
import { AnimatedCircle, Check, Wrapper } from "./style";
import { useNavigate } from "react-router-dom";

export function FinalAnimation() {
  const [displayCheck, setDisplayCheck] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setDisplayCheck(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }, 2500);
  }, []);
  return (
    <Wrapper>
      <AnimatedCircle>
        <Check $display={displayCheck} />
      </AnimatedCircle>
    </Wrapper>
  );
}
