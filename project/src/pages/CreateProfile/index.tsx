import { FinalAnimation } from "components/createProfile/finalAnimation/FinalAnimation";
import { StepBox } from "components/createProfile/progressionBox/StepBox";
import { StepOne } from "components/createProfile/stepOne/StepOne";
import { StepThree } from "components/createProfile/stepThree/StepThree";
import { StepTwo } from "components/createProfile/stepTwo/StepTwo";
import { Progression } from "pages/CreateProfile/style";
import { ProfileContext } from "context/ProfileContext";
import { useContext, useEffect, useState } from "react";
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";

export function CreateProfile() {
  const { currentStep } = useContext(ProfileContext);
  const [steps, setSteps] = useState<number[]>([1, 2, 3]);
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) navigate("/login");
  }, []);
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
