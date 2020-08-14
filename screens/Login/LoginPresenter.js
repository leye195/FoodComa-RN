import React from "react";
import styled, { css } from "styled-components";
import { Dimensions, KeyboardAvoidingView, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DismissKeyboard from "../../components/DissmissKeyboard";
import { GREY_COLOR } from "../../constants/color";
import SubmitButton from "../../components/SubmitButton";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import SocialButton from "../../components/Login/SocialButton";
const { height, width } = Dimensions.get("screen");
const Container = styled.View`
  flex: 1;
  background-color: rgba(25, 20, 20, 0.2);
  width: ${width}px;
  align-items: center;
`;
const ImageBackground = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 40px;
  padding: 35px;
  margin-bottom: 10px;
`;
const ButtonContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 25px;
  padding: 5px;
  width: 100%;
  flex: 1;
  text-align: center;
  ${(props) =>
    props.on === false &&
    css`
      opacity: 0.5;
    `}
`;

const FormSection = styled.View`
  position: absolute;
  bottom: 2%;
  background-color: white;
  width: 90%;
  min-height: ${height * 0.3}px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 5px;
  border-radius: 20px;
  box-shadow: 1px 1px 5px black;
`;
const TextInputContainer = styled.View`
  border-radius: 10px;
  border: 1px solid ${GREY_COLOR};
  width: 80%;
  margin: 0px auto;
  margin-top: 25px;
  padding: 0px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const TextInput = styled.TextInput`
  width: 80%;
  height: 60px;
  padding: 20px;
  font-size: 18px;
  color: black;
`;
const SocialSection = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 10px;
`;

const LoginPresenter = ({
  handleSelect,
  selected,
  email,
  password,
  passwordAgain,
  onChangeEmail,
  onChangePassword,
  onChangePasswordAgain,
  handleLogin,
  handleSignUp,
}) => {
  return (
    <ImageBackground
      source={{
        uri:
          "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      }}
      style={{ resizeMode: "cover" }}
      blurRadis={90}
    >
      <KeyboardAvoidingView behavior="padding">
        <DismissKeyboard>
          <Container>
            <Title>FoodComa</Title>
            <ButtonContainer>
              <Text onPress={() => handleSelect(0)} on={selected === 0}>
                로그인
              </Text>
              <Text onPress={() => handleSelect(1)} on={selected === 1}>
                가입
              </Text>
            </ButtonContainer>
            <FormSection>
              <TextInputContainer>
                <MaterialIcons name={"email"} size={20} color={GREY_COLOR} />
                <TextInput
                  placeholder={"이메일"}
                  editable
                  value={email}
                  onChangeText={onChangeEmail}
                  keyboardType={"email-address"}
                />
              </TextInputContainer>
              <TextInputContainer>
                <Ionicons
                  name={Platform.OS === "ios" ? "ios-lock" : "md-lock"}
                  size={20}
                  color={GREY_COLOR}
                />
                <TextInput
                  placeholder={"비밀번호"}
                  value={password}
                  onChangeText={onChangePassword}
                  secureTextEntry={true}
                />
              </TextInputContainer>
              {selected === 1 && (
                <TextInputContainer>
                  <Ionicons
                    name={Platform.OS === "ios" ? "ios-lock" : "md-lock"}
                    size={20}
                    color={GREY_COLOR}
                  />
                  <TextInput
                    placeholder={"비밀번호 확인"}
                    value={passwordAgain}
                    onChangeText={onChangePasswordAgain}
                    secureTextEntry={true}
                  />
                </TextInputContainer>
              )}
              <SubmitButton
                title={selected === 0 ? "로그인" : "가입"}
                handlePress={selected === 0 ? handleLogin : handleSignUp}
              />
              <SocialSection>
                <SocialButton>
                  <Ionicons name={"logo-google"} size={20} />
                </SocialButton>
                <SocialButton>
                  <Ionicons name={"logo-facebook"} size={20} />
                </SocialButton>
              </SocialSection>
            </FormSection>
          </Container>
        </DismissKeyboard>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
export default LoginPresenter;
