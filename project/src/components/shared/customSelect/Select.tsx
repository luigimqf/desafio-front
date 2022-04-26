import { Drop, Option, OptionsWrapper, Wrapper } from "./style";
import { nacionalidades } from "utils/listaNacionalidades";
import {
  IoMdArrowDropup as Up,
  IoMdArrowDropdown as Down,
} from "react-icons/io";
import { useContext, useState } from "react";
import { ProfileContext } from "context/ProfileContext";

export function Select() {
  const { profileData, setProfileData } = useContext(ProfileContext);
  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(pais: string) {
    setProfileData((prevValue) => ({ ...prevValue, nacionalidade: pais }));
  }
  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)}>
      <Drop
        disabled={true}
        value={profileData?.nacionalidade}
        placeholder="Ex: Brasil"
      />
      {isOpen ? <Up size={20} /> : <Down size={20} />}
      {isOpen && (
        <OptionsWrapper>
          {nacionalidades.map((pais) => {
            return <Option onClick={() => handleSelect(pais)}>{pais}</Option>;
          })}
        </OptionsWrapper>
      )}
    </Wrapper>
  );
}
