import { ProfileContext } from "context/ProfileContext";
import { useContext, useState } from "react";
import { FinalAnimation } from "./finalAnimation/FinalAnimation";
import { StepBox } from "./progressionBox/StepBox";
import { Box } from "./progressionBox/style";
import { StepOne } from "./stepOne/StepOne";
import { StepThree } from "./stepThree/StepThree";
import { StepTwo } from "./stepTwo/StepTwo";
import { Progression, Wrapper } from "./style";

export function StepsHolder() {
  const { currentStep } = useContext(ProfileContext);
  const [steps, setSteps] = useState<number[]>([1, 2, 3]);
  return (
    <Wrapper>
      <Progression>
        {steps.map((step, index) => {
          return <StepBox key={index} boxIndex={index} />;
        })}
      </Progression>
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
      {currentStep === 4 && <FinalAnimation />}
    </Wrapper>
  );
}
