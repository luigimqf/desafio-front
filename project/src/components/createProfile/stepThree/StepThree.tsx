import { ProfileContext } from "context/ProfileContext";
import { useContext } from "react";
import { MdEdit as Edit } from "react-icons/md";
import {
  Avatar,
  AvatarHolder,
  Form,
  Input,
  InputBox,
  Label,
  PencilHolder,
  Submit,
} from "./style";

export function StepThree() {
  const { profileData, handleInputChange, handleSubmit } =
    useContext(ProfileContext);

  const isInputFilled =
    profileData?.genero?.length > 3 && profileData?.estadoCivil?.length > 1;
  return (
    <Form onSubmit={handleSubmit}>
      <AvatarHolder>
        <PencilHolder>
          <Edit size={20} />
        </PencilHolder>
        <Avatar />
      </AvatarHolder>
      <InputBox>
        <Label>Gênero</Label>
        <Input
          type="tel"
          name="genero"
          onChange={handleInputChange}
          value={profileData?.genero}
          placeholder="Ex: Masculino"
        />
      </InputBox>
      <InputBox>
        <Label>Estado Civil</Label>
        <Input
          type="tel"
          name="estadoCivil"
          onChange={handleInputChange}
          value={profileData?.estadoCivil}
          placeholder="Ex: Solteiro"
        />
      </InputBox>
      <Submit disabled={!isInputFilled} $isActive={isInputFilled}>
        Finalizar
      </Submit>
    </Form>
  );
}
