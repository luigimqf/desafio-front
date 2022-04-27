import { ProfileContext } from "context/ProfileContext";
import { useContext, useEffect, useState } from "react";
import {
  Input,
  InputBox,
  InputInfoWrapper,
  Label,
  ProfileInfo,
  ProfileTitleBox,
  ProfileText,
  Wrapper,
} from "./style";
import { IProfile } from "context/ProfileContext";
import { useNavigate } from "react-router-dom";
import { MdEdit as Edit } from "react-icons/md";
import { AiOutlinePoweroff as Logout } from "react-icons/ai";
import { Select } from "components/shared/customSelect/Select";
import { nacionalidades } from "utils/listaNacionalidades";

export function Profile() {
  const { profileData, handleSelectChange, handleInputChange } =
    useContext(ProfileContext);

  const navigate = useNavigate();

  const [isEditModeOn, setIsEditModeOn] = useState(false);

  const [activeInput, setActiveInput] = useState(-1);

  const reducedName =
    profileData?.nome?.split(" ")[0] + " " + profileData?.nome?.split(" ")[1] ||
    "";

  useEffect(() => {
    const areFilled = checkIfFieldsAreFilled(profileData);

    if (!areFilled) {
      navigate("/create");
    }
  }, [profileData]);

  function setEditMode(index: number) {
    setIsEditModeOn(true);
    setActiveInput(index);
  }

  function getOptions(key: keyof IProfile) {
    if (key === "nacionalidade") return nacionalidades;
    if (key === "genero")
      return ["Masculino", "Feminino", "Não-Binario", "Prefiro não dizer"];
    if (key === "estadoCivil") return ["Solteiro", "Casado", "Viúvo(a)"];

    return [];
  }

  function getLabel(key: keyof IProfile) {
    if (key === "endereco") return "endereço";
    if (key === "estadoCivil") return "estado civil";
    if (key === "genero") return "gênero";

    return key;
  }

  function checkIfFieldsAreFilled(profile: IProfile) {
    let areFieldsFilled = true;

    const profileKeys = Object.keys(profile);

    if (isEditModeOn) return true;

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
      <ProfileTitleBox>
        <ProfileText style={{ fontSize: "1rem" }}>Seja bem vindo! </ProfileText>
        <ProfileText style={{ fontSize: "1.1rem" }}>{reducedName}</ProfileText>
        <ProfileText style={{ fontSize: "0.7rem", marginTop: "10px" }}>
          Essas são suas informações pessoais.
        </ProfileText>
      </ProfileTitleBox>
      <ProfileInfo>
        {Object.keys(profileData).map((profileKey, index) => {
          const selectKeys = ["estadoCivil", "genero", "nacionalidade"];
          const key = profileKey as keyof IProfile;
          const options = getOptions(key);
          const label = getLabel(key);
          const isActive = activeInput === index;
          const senha = key === "senha";
          if (selectKeys.includes(key)) {
            return (
              <InputInfoWrapper key={key}>
                <Label>{label}</Label>
                <InputBox $isActive={isActive}>
                  <Select
                    identifier={key}
                    onChange={handleSelectChange}
                    options={options}
                    value={profileData[key] ?? ""}
                  />
                </InputBox>
              </InputInfoWrapper>
            );
          }
          return (
            <InputInfoWrapper key={key}>
              <Label>{label}</Label>
              <InputBox $isActive={isActive}>
                <Input
                  type={senha ? "password" : "text"}
                  disabled={!isActive}
                  name={key}
                  onChange={handleInputChange}
                  value={profileData[key] ?? ""}
                />
                {!(key === "email" || key === "senha") && (
                  <Edit
                    onClick={() => setEditMode(index)}
                    style={{ marginRight: "5px", cursor: "pointer" }}
                    color="#000"
                    size={15}
                  />
                )}
              </InputBox>
            </InputInfoWrapper>
          );
        })}
      </ProfileInfo>
      <Logout
        onClick={() => navigate("/login")}
        style={{
          position: "absolute",
          right: "20px",
          top: "15px",
          color: "red",
          width: "20px",
          height: "20px",
          cursor: "pointer",
        }}
      />
    </Wrapper>
  );
}
