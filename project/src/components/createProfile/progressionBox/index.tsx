import { ProfileContext } from "context/ProfileContext";
import { useContext } from "react";
import { Box, Line, Wrapper } from "./style";

interface IProps {
  boxIndex: number;
}

export function ProgressionBox({ boxIndex }: IProps) {
  const { currentStep, setCurrentStep } = useContext(ProfileContext);

  function handleStepChange() {
    if (currentStep < boxIndex + 1) return;
    setCurrentStep(boxIndex + 1);
  }

  return (
    <Wrapper>
      <Box onClick={handleStepChange} $isFilled={currentStep > boxIndex + 1}>
        {boxIndex + 1}
      </Box>
      {boxIndex + 1 < 3 && <Line $isFilled={currentStep > boxIndex + 1} />}
    </Wrapper>
  );
}
