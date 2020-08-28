import React, { useState } from "react";
import Modal from "react-native-modal";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
const Container = styled.View``;
const ItemContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: ${width / 1.2}px;
  height: ${height / 3}px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
`;
const Modal = ({ isVisible, toggleModal }) => {
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
        <ItemContainer></ItemContainer>
      </Modal>
    </Container>
  );
};
export default Modal;
