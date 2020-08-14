import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";
import { useNavigation } from "@react-navigation/native";

const LoginContainer = () => {
  const [selected, setSelected] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const navigation = useNavigation();
  const handleSelect = (idx) => {
    if (idx === 0) {
      setEmail("");
      setPasswordAgain("");
      setPassword("");
    } else {
      setEmail("");
      setPasswordAgain("");
    }
    setSelected(idx);
  };
  const handleLogin = () => {
    if (email.length === 0 || password.length === 0)
      alert("이메일과 비밀번호를 입력해주세요");
    else {
      console.log(email, password);
      navigation.replace("FoodComa");
    }
  };
  const handleSignUp = () => {
    if (
      email.length === 0 ||
      password.length === 0 ||
      passwordAgain.length === 0
    )
      alert("가입에 필요한 정보들을 전부 입력해주세요");
  };
  const onChangeEmail = (text) => {
    setEmail(text);
  };
  const onChangePassword = (text) => {
    setPassword(text);
  };
  const onChangePasswordAgain = (text) => {
    setPasswordAgain(text);
  };

  return (
    <LoginPresenter
      selected={selected}
      handleSelect={handleSelect}
      handleLogin={handleLogin}
      handleSignUp={handleSignUp}
      email={email}
      password={password}
      passwordAgain={passwordAgain}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangePasswordAgain={onChangePasswordAgain}
      handleLogin={handleLogin}
      handleSignUp={handleSignUp}
    />
  );
};
export default LoginContainer;
