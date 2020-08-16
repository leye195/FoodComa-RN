import React, { useState, useEffect } from "react";
import LoginPresenter from "./LoginPresenter";
import { useNavigation } from "@react-navigation/native";
import { signIn, getToken } from "../../utils";
import { useMutation } from "@apollo/react-hooks";
import { SIGNIN_BY_EMAIL, SIGNUP } from "../../graqhql/mutation";
import { useDispatch } from "react-redux";
import { changeLoginStatus } from "../../reducers/user";
const LoginContainer = () => {
  const [selected, setSelected] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [
    signInEmail,
    { loading: signInEmailLoading, data: signInEmailData, error },
  ] = useMutation(SIGNIN_BY_EMAIL);
  const [signUp, { loading: signUpLoading, data: signUpData }] = useMutation(
    SIGNUP
  );
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
      signInEmail({ variables: { email, password } }).then(({ data }) => {
        const {
          signInEmail: { success, user },
        } = data;
        if (success) {
          handleChangeLoginState(true, user.token);
          navigation.replace("FoodComa");
        } else alert("로그인에 실패헸습니다");
      });
    }
  };
  const handleSignUp = () => {
    if (email.length === 0) {
      alert("가입에 필요한 정보들을 전부 입력해주세요");
    } else if (password.length === 0) {
      alert("비밀번호를 입력해주세요");
    } else if (passwordAgain.length === 0) {
      alert("비밀번호 확인을 입력해주세요");
    } else if (password !== passwordAgain) {
      alert("비밀번호가 일치하지 않습니다");
    } else {
      signUp({ variables: { email, password } }).then(({ data }) => {
        const {
          signUp: { success, user },
        } = data;
        if (success) {
          handleChangeLoginState(true, user.token, user._id);
          alert("가입 성공");
          navigation.replace("FoodComa");
        } else {
          alert("가입에 실패했습니다");
        }
      });
    }
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
  const handleChangeLoginState = (loggedIn = false, token) => {
    dispatch(changeLoginStatus({ loggedIn }));
    if (loggedIn) {
      signIn(token);
    } else {
      signOut();
    }
  };
  const loadToken = async () => {
    const token = await getToken();
    if (token) {
      dispatch(changeLoginStatus({ loggedIn: true }));
      navigation.replace("FoodComa");
    }
  };
  useEffect(() => {
    loadToken();
  }, []);
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
