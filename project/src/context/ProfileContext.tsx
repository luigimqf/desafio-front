import React, { createContext, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

interface IProfile {
  profileData: string;
}

export const ProfileContext = createContext({} as IProfile);

export const ProfileProvider = ({ children }: IProps) => {
  const [profileData, setProfileData] = useState("");

  return (
    <ProfileContext.Provider value={{ profileData }}></ProfileContext.Provider>
  );
};
