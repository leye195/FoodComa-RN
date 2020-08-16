import React from "react";
import Modal from "react-native-modal";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 100%;
`;
const ItemContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: ${width / 1.2}px;
  height: ${height / 3}px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
`;
const ModalButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;
const Text = styled.Text`
  text-align: center;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
`;
const UserModal = ({ isVisible, toggleModal, handleLogout }) => {
  return (
    <Container>
      <Modal
        animationType="fade"
        visible={isVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          borderRadius: 10,
          width: width,
          height: height,
          position: "absolute",
          left: -20,
          top: -20,
        }}
      >
        <ItemContainer>
          <ModalButton>
            <Text>정보 수정</Text>
          </ModalButton>
          <ModalButton onPress={() => handleLogout()}>
            <Text>로그아웃</Text>
          </ModalButton>
          <ModalButton onPress={() => toggleModal()}>
            <Text>취소</Text>
          </ModalButton>
        </ItemContainer>
      </Modal>
    </Container>
  );
};
export default UserModal;
