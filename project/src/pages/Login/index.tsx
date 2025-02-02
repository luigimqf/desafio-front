import React, { useContext, useEffect, useState } from "react";
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
import noName from "assets/noName.png";
import { AiFillMinusCircle as Minus } from "react-icons/ai";

export function Login() {
  const { profileData, handleInputChange } = useContext(ProfileContext);

  const navigate = useNavigate();

  const [isLoginValid, setIsLoginValid] = useState(true);

  const isInputFilled =
    emailPattern.test(profileData?.email) && profileData?.senha?.length > 3;

  const isEmailCorrect =
    profileData?.email?.length > 2 && !emailPattern.test(profileData?.email);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const user = users.find((u) => u.email === profileData?.email);

    if (!user) {
      setIsLoginValid(false);
      setTimeout(() => {
        setIsLoginValid(true);
      }, 2500);
      return;
    }

    if (user?.senha !== profileData?.senha) return;

    localStorage.setItem("user", JSON.stringify(user?.id));

    navigate("/create");
  }

  useEffect(() => {
    localStorage.removeItem("user");
  }, []);
  return (
    <Wrapper>
      <Icon src={noName} alt="Some Logo" />
      <Form onSubmit={(e) => handleSubmit(e)}>
        {isEmailCorrect && (
          <Notify>
            <Minus color="#d63031" size={15} />{" "}
            <NotifyDescription>E-mail invalido</NotifyDescription>
          </Notify>
        )}
        {!isLoginValid && (
          <Notify>
            <Minus color="#d63031" size={15} />{" "}
            <NotifyDescription>Usuário Inválido</NotifyDescription>
          </Notify>
        )}
        <Input
          type="text"
          name="email"
          onChange={handleInputChange}
          value={profileData?.email ?? ""}
          placeholder="E-mail"
        />
        <Input
          type="password"
          name="senha"
          onChange={handleInputChange}
          value={profileData?.senha ?? ""}
          placeholder="Password"
        />
        <Submit disabled={!isInputFilled} $isActive={isInputFilled}>
          Logar
        </Submit>
      </Form>
    </Wrapper>
  );
}
