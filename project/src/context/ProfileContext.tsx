import React, {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface IProps {
  children: React.ReactNode;
}

interface IContext {
  profileData: IProfile;
  setProfileData: React.Dispatch<React.SetStateAction<IProfile>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  loginSuccess: boolean;
  setLoginSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IProfile {
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
  numero?: string;
  complemento?: string;
}

export const ProfileContext = createContext({} as IContext);

export const ProfileProvider = ({ children }: IProps) => {
  const [profileData, setProfileData] = useState<IProfile>({} as IProfile);
  const [currentStep, setCurrentStep] = useState(1);
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    console.log(loginSuccess);
  }, [loginSuccess]);
  return (
    <ProfileContext.Provider
      value={{
        profileData,
        setProfileData,
        currentStep,
        setCurrentStep,
        loginSuccess,
        setLoginSuccess,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
