import { ProfileContext } from "context/ProfileContext";
import { useContext, useEffect } from "react";
import { Form, Input, InputBox, Label, Submit } from "./style";
import { telefonePattern } from "utils/telefoneValidator";
import { Select } from "../../shared/customSelect/Select";
import { nacionalidades } from "utils/listaNacionalidades";

export function PersonInfoForm() {
  const { profileData, handleInputChange, handleSubmit, handleSelectChange } =
    useContext(ProfileContext);

  const isInputFilled =
    telefonePattern.test(profileData?.telefone) &&
    profileData?.nome?.length > 3 &&
    profileData?.nacionalidade?.length > 0;

  return (
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <Label>Nome</Label>
        <Input
          type="text"
          name="nome"
          onChange={handleInputChange}
          value={profileData?.nome ?? ""}
          placeholder="Ex: Junior"
        />
      </InputBox>
      <InputBox>
        <Label>Telefone</Label>
        <Input
          type="tel"
          name="telefone"
          onChange={handleInputChange}
          value={profileData?.telefone ?? ""}
          placeholder="(00) 0000-0000"
        />
      </InputBox>
      <InputBox>
        <Label>Nacionalidade</Label>
        <Select
          identifier="nacionalidade"
          value={profileData?.nacionalidade ?? ""}
          options={nacionalidades}
          onChange={handleSelectChange}
        />
      </InputBox>

      <Submit disabled={!isInputFilled} $isActive={isInputFilled}>
        Avançar
      </Submit>
    </Form>
  );
}
