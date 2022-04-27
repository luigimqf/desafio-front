import { ProfileContext } from "context/ProfileContext";
import { useContext, useEffect } from "react";
import { cepRequest } from "services/cepInformation";
import { cepPattern } from "utils/cepValidator";
import {
  AddressBox,
  Input,
  CepInput,
  Form,
  InputBox,
  Label,
  Title,
  CepInfo,
  Correios,
  Submit,
} from "./style";

export function StepTwo() {
  const { profileData, setProfileData, handleInputChange, handleSubmit } =
    useContext(ProfileContext);

  async function handleCepRequest() {
    const cepInfo = await cepRequest(profileData?.cep);

    if (cepInfo) {
      // for (const [key, value] of Object.entries(cepInfo)) {
      //   setProfileData((prevValue) => ({ ...prevValue, [key]: value }));
      // }
      setProfileData((prevValue) => ({ ...prevValue, estado: cepInfo.uf }));
      setProfileData((prevValue) => ({
        ...prevValue,
        cidade: cepInfo.localidade,
      }));
      setProfileData((prevValue) => ({
        ...prevValue,
        endereco: cepInfo.logradouro,
      }));
      setProfileData((prevValue) => ({ ...prevValue, bairro: cepInfo.bairro }));
    }
  }

  useEffect(() => {
    if (profileData?.cep?.length === 9) {
      handleCepRequest();
    }
  }, [profileData.cep]);

  const isInputFilled =
    profileData?.cep?.length > 3 &&
    profileData?.estado?.length > 1 &&
    profileData?.cidade?.length > 1 &&
    profileData?.endereco?.length > 3 &&
    profileData?.bairro?.length > 3;
  return (
    <Form onSubmit={handleSubmit}>
      <Title>Nos informe seu CEP</Title>

      <CepInput
        type="text"
        name="cep"
        required
        onChange={handleInputChange}
        value={profileData?.cep ?? ""}
        placeholder="Ex: 12345-67"
      />
      <AddressBox>
        <InputBox>
          <Label>Estado</Label>
          <Input
            type="text"
            name="estado"
            required
            onChange={handleInputChange}
            value={profileData?.estado ?? ""}
            placeholder="Ex: MG"
          />
        </InputBox>
        <InputBox>
          <Label>Cidade</Label>
          <Input
            type="text"
            name="cidade"
            required
            onChange={handleInputChange}
            value={profileData?.cidade ?? ""}
            placeholder="Ex: Belo Horizonte"
          />
        </InputBox>
        <InputBox>
          <Label>Endereço</Label>
          <Input
            type="text"
            name="endereco"
            required
            onChange={handleInputChange}
            value={profileData?.endereco ?? ""}
            placeholder="Ex: Rua da felicidade"
          />
        </InputBox>
        <InputBox>
          <Label>Bairro</Label>
          <Input
            type="text"
            name="bairro"
            required
            onChange={handleInputChange}
            value={profileData?.bairro ?? ""}
            placeholder="Ex: Bairro Liberdade"
          />
        </InputBox>
        <InputBox>
          <Label>Número</Label>
          <Input
            type="text"
            name="numero"
            onChange={handleInputChange}
            value={profileData?.numero ?? ""}
            placeholder="Opcional"
          />
        </InputBox>
        <InputBox>
          <Label>Complemento</Label>
          <Input
            type="text"
            name="complemento"
            onChange={handleInputChange}
            value={profileData?.complemento ?? ""}
            placeholder="Opcional"
          />
        </InputBox>
      </AddressBox>
      <CepInfo>Não sabe seu CEP?</CepInfo>
      <Correios href="https://buscacepinter.correios.com.br/app/endereco/index.php">
        Confira no site dos Correios
      </Correios>
      <Submit disabled={!isInputFilled} $isActive={isInputFilled}>
        Avançar
      </Submit>
    </Form>
  );
}
