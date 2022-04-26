import { ProfileContext } from "context/ProfileContext";
import { useContext } from "react";
import { Wrapper } from "./style";

export function StepsHolder() {
  const { currentStep } = useContext(ProfileContext);
  return <Wrapper></Wrapper>;
}
