import React from "react";
import styled from "styled-components";
import ProfileImage from "./ProfileImage";
import { GREY_COLOR } from "../../constants/color";
import Rate from "../Rate";

const Container = styled.View`
  padding: 5px;
  margin-bottom: 5px;
`;
const Header = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
`;
const ProfileContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const RateContainer = styled.View``;
const HeaderText = styled.Text`
  font-weight: bold;
  margin-left: 5px;
`;
const ContentSection = styled.View`
  margin: 0 5px;
  background-color: ${GREY_COLOR};
  padding: 10px;
  border-radius: 5px;
`;
const Content = styled.Text``;
const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${GREY_COLOR};
  margin: 10px 0;
`;

const ReviewCard = ({
  review: {
    writer: { email, image },
    rate,
    content,
  },
}) => {
  return (
    <>
      <Container>
        <Header>
          <ProfileContainer>
            <ProfileImage image={image} email={email} />
            <HeaderText>{email && email.split("@")[0]}</HeaderText>
          </ProfileContainer>
          <RateContainer>
            <Rate rate={rate} />
          </RateContainer>
        </Header>
        <ContentSection>
          <Content>{content}</Content>
        </ContentSection>
      </Container>
      <Line />
    </>
  );
};
export default ReviewCard;
