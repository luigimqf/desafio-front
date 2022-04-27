import { useContext, useEffect, useState } from "react";
import { AnimatedCircle, Check, Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "context/ProfileContext";

export function FinalAnimation() {
  const { currentStep } = useContext(ProfileContext);
  const [displayCheck, setDisplayCheck] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setDisplayCheck(true);
      setTimeout(() => {
        if (currentStep === 4) navigate("/");
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
