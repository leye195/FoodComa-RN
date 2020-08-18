import React from "react";
import styled from "styled-components";
import SwipeContainer from "../../components/SwipeContainer";
import Slide from "../../components/Slide";
import { Bounce } from "react-native-animated-spinkit";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { ACTIVE_COLOR } from "../../constants/color";
import Scroll from "../../components/Scroll";
import IconButton from "../../components/IconButton";
import Map from "../../components/Detail/Map";
import Empty from "../../components/Review/Empty";
import ReviewList from "../../components/Detail/ReviewList";
const DetailScroll = styled(Scroll)``;
const Container = styled.View`
  padding-bottom: 10px;
`;
const HeadSection = styled.View`
  box-shadow: 1px 1px 5px #e3e3e3;
  width: 100%;
  height: 105px;
  position: relative;
  top: 0%;
  background-color: ${ACTIVE_COLOR};
  padding-top: 5px;
  padding-bottom: 10px;
`;
const InfoContainer = styled.View`
  background-color: white;
  border-radius: 20px;
  width: 90%;
  height: 100px;
  left: 5%;
  padding: 10px 0;
`;
const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;
const AddressContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Address = styled.Text`
  text-align: center;
  margin: 5px 0;
  width: 60%;
  align-items: center;
  justify-content: center;
`;
const RateContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Rate = styled.Text`
  margin-left: 5px;
`;
const ContentSection = styled.View`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const MapSection = styled.View`
  width: 100%;
  max-height: 250px;
  background-color: white;
  display: flex;
  margin: 15px 0px;
`;
const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
`;
const SubTitle = styled.Text`
  font-size: 15px;
  margin-left: 10px;
`;
const ReviewSection = styled.View`
  width: 100%;
  min-height: 100px;
  height: 100%;
  background-color: white;
  display: flex;
  margin: 60px 0px;
`;

const DetailPresenter = ({
  loading,
  data,
  getData,
  onPressLike,
  onPressReview,
  isLiked,
}) => {
  return (
    <DetailScroll getData={getData}>
      <Container>
        {loading ? (
          <Bounce size={45} color={"#fff"} />
        ) : (
          <>
            <SwipeContainer>
              {data &&
                data.imgUrl &&
                data.imgUrl.map((img, idx) => <Slide key={idx} url={img} />)}
            </SwipeContainer>
            <HeadSection>
              <InfoContainer>
                <Title>{data.name}</Title>
                <AddressContainer>
                  <Address>{data.address}</Address>
                </AddressContainer>
                <RateContainer>
                  <Ionicons
                    name={Platform.OS === "ios" ? "ios-star" : "md-star"}
                    color={ACTIVE_COLOR}
                    size={20}
                  />
                  <Rate>{data.avg_rate}</Rate>
                </RateContainer>
              </InfoContainer>
            </HeadSection>
            <ContentSection>
              <IconButton
                title={"좋아요"}
                id={data.id}
                onPressButton={onPressLike}
              >
                <MaterialIcons
                  name={isLiked ? "favorite" : "favorite-border"}
                  size={30}
                  color={isLiked ? "pink" : "black"}
                />
              </IconButton>
              <IconButton
                title={"평가 하기"}
                id={data.id}
                name={data.name}
                onPressButton={onPressReview}
              >
                <MaterialIcons name={"rate-review"} size={30} />
              </IconButton>
            </ContentSection>
            <MapSection>
              {/*맵에 위치 마킹*/}
              <TitleContainer>
                <FontAwesome5 name="map-marked" size={20} />
                <SubTitle>위치 정보</SubTitle>
              </TitleContainer>
              <Map
                latitude={data && parseFloat(data.latitude, 10)}
                longitude={data && parseFloat(data.longitude, 10)}
                title={data.name}
              />
            </MapSection>
            <ReviewSection>
              {/* 리뷰 리스트*/}
              <TitleContainer>
                <MaterialIcons name={"rate-review"} size={20} />
                <SubTitle>
                  {data.name} 리뷰 ({data.reviews && data.reviews.length})
                </SubTitle>
              </TitleContainer>
              {data.reviews && data.reviews.length === 0 ? (
                <Empty text={"리뷰가 없습니다."} />
              ) : (
                <ReviewList reviews={(data && data.reviews) || []} />
              )}
            </ReviewSection>
          </>
        )}
      </Container>
    </DetailScroll>
  );
};
export default DetailPresenter;
