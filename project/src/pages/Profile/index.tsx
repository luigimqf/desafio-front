import { ProfileContext } from "context/ProfileContext";
import { useContext, useEffect } from "react";
import {
  Input,
  InputBox,
  InputInfoWrapper,
  Label,
  ProfileInfo,
  Wrapper,
} from "./style";
import { IProfile } from "context/ProfileContext";
import { useNavigate } from "react-router-dom";
import { MdEdit as Edit } from "react-icons/md";
import { Select } from "components/shared/customSelect/Select";

export function Profile() {
  const { profileData, handleSelectChange } = useContext(ProfileContext);
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
  return (
    <Wrapper>
      <ProfileInfo>
        {Object.entries(profileData).map((key) => {
          const selectKeys = ["estadoCivil", "genero", "nacionalidade"];
          if (selectKeys.includes(key[0])) {
            return (
              <InputInfoWrapper>
                <Label>Teste</Label>
                <InputBox>
                  <Select
                    identifier="s"
                    onChange={handleSelectChange}
                    options={["1", "2"]}
                    value={"sd"}
                  />
                </InputBox>
              </InputInfoWrapper>
            );
          }
          return (
            <InputInfoWrapper>
              <Label>Teste</Label>
              <InputBox>
                <Input />
                <Edit color="#000" size={15} />
              </InputBox>
            </InputInfoWrapper>
          );
        })}
      </ProfileInfo>
    </Wrapper>
  );
}
