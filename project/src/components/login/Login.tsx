import React, { useContext, useState } from "react";
import {
  Form,
  Icon,
  Input,
  Notify,
  NotifyDescription,
  Submit,
  Wrapper,
} from "./style";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "context/ProfileContext";
import { emailPattern } from "utils/emailValidator";
import { users } from "config/users";
import logopng from "assets/logopng.png";
import { AiFillMinusCircle as Minus } from "react-icons/ai";

export function Login() {
  const { profileData, setProfileData, loginSuccess, setLoginSuccess } =
    useContext(ProfileContext);
  const navigate = useNavigate();
  const isInputFilled =
    emailPattern.test(profileData?.email) && profileData?.senha?.length > 3;

  const isEmailCorrect =
    profileData?.email?.length > 2 && !emailPattern.test(profileData?.email);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setProfileData((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    for (let i = 0; i < users.length; i++) {
      if (
        profileData?.email === users[i]?.email &&
        profileData?.senha === users[i]?.senha
      ) {
        navigate("/create");
        return;
      }
    }
  }
  return (
    <Wrapper>
      <Icon src={logopng} alt="Some Logo" />
      <Form onSubmit={(e) => handleSubmit(e)}>
        {isEmailCorrect && (
          <Notify>
            <Minus color="#d63031" size={15} />{" "}
            <NotifyDescription>E-mail invalido</NotifyDescription>
          </Notify>
        )}
        <Input
          type="text"
          name="email"
          onChange={handleInputChange}
          value={profileData?.email}
          placeholder="E-mail"
        />
        <Input
          type="password"
          name="senha"
          onChange={handleInputChange}
          value={profileData?.senha}
          placeholder="Password"
        />
        <Submit disabled={!isInputFilled} $isActive={isInputFilled}>
          Logar
        </Submit>
      </Form>
    </Wrapper>
  );
}
