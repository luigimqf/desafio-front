import { Select } from "components/shared/customSelect/Select";
import { ProfileContext } from "context/ProfileContext";
import { useContext } from "react";
import { Form, InputBox, Label, Submit } from "./style";

export function StepThree() {
  const { profileData, handleSubmit, handleSelectChange } =
    useContext(ProfileContext);

  const isInputFilled =
    profileData?.genero?.length > 3 && profileData?.estadoCivil?.length > 1;
  return (
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <Label>Gênero</Label>
        <Select
          identifier="genero"
          value={profileData?.genero ?? ""}
          options={[
            "Masculino",
            "Feminino",
            "Não-Binario",
            "Prefiro não dizer",
          ]}
          onChange={handleSelectChange}
        />
      </InputBox>
      <InputBox>
        <Label>Estado Civil</Label>
        <Select
          identifier="estadoCivil"
          value={profileData?.estadoCivil ?? ""}
          options={["Solteiro", "Casado", "Viúvo(a)"]}
          onChange={handleSelectChange}
        />
      </InputBox>
      <Submit disabled={!isInputFilled} $isActive={isInputFilled}>
        Finalizar
      </Submit>
    </Form>
  );
}
