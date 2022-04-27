import React, { createContext, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

interface IContext {
  profileData: IProfile;
  setProfileData: React.Dispatch<React.SetStateAction<IProfile>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  loginCreated: boolean;
  setLoginCreated: React.Dispatch<React.SetStateAction<boolean>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSelectChange: (key: string, value: string) => void;
}

export interface IProfile {
  email: string;
  senha: string;
  nome: string;
  telefone: string;
  nacionalidade: string;
  cep: string;
  estado: string;
  cidade: string;
  endereco: string;
  bairro: string;
  genero: string;
  estadoCivil: string;
  numero?: string;
  complemento?: string;
}

export const ProfileContext = createContext({} as IContext);

export const ProfileProvider = ({ children }: IProps) => {
  const [profileData, setProfileData] = useState({} as IProfile);
  const [currentStep, setCurrentStep] = useState(1);
  const [loginCreated, setLoginCreated] = useState(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setProfileData((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleSelectChange(key: string, value: string) {
    setProfileData((prevValue) => ({ ...prevValue, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (currentStep > 3) return;

    setCurrentStep(currentStep + 1);
  }

  return (
    <ProfileContext.Provider
      value={{
        handleSelectChange,
        profileData,
        setProfileData,
        currentStep,
        setCurrentStep,
        loginCreated,
        setLoginCreated,
        handleInputChange,
        handleSubmit,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
