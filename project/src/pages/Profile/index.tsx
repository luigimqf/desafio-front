import { ProfileContext } from "context/ProfileContext";
import { useContext, useEffect } from "react";
import { Wrapper } from "./style";
import { IProfile } from "context/ProfileContext";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const { profileData } = useContext(ProfileContext);
  const navigate = useNavigate();

  useEffect(() => {
    const areFilled = checkIfFieldsAreFilled(profileData);
    console.log(areFilled);
    if (!areFilled) {
      navigate("/create");
    }
  }, [profileData]);

  function checkIfFieldsAreFilled(profile: IProfile) {
    let areFieldsFilled = true;
    const profileKeys = Object.keys(profile);

    if (profileKeys.length === 0) return false;

    for (const profileKey of Object.keys(profile)) {
      const key = profileKey as keyof IProfile;

      const optionalField = ["numero", "complemento"];

      if (optionalField.includes(key)) continue;

      if (!profile[key]) {
        areFieldsFilled = false;
      }

      if (!areFieldsFilled) break;
    }
    return areFieldsFilled;
  }
  return <Wrapper></Wrapper>;
}
