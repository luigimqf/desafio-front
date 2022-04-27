import { FinalAnimation } from "components/createProfile/FinalAnimation";
import { ProgressionBox } from "components/createProfile/ProgressionBox";
import { PersonInfoForm } from "components/createProfile/PersonInfoForm";
import { GenderForm } from "components/createProfile/GenderForm";
import { AddressForm } from "components/createProfile/AddressForm";
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
          return <ProgressionBox key={index} boxIndex={index} />;
        })}
      </Progression>
      {currentStep === 1 && <PersonInfoForm />}
      {currentStep === 2 && <AddressForm />}
      {currentStep === 3 && <GenderForm />}
      {currentStep === 4 && <FinalAnimation />}
    </Wrapper>
  );
}
