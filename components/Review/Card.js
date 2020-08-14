import React from "react";
import styled from "styled-components";
import HorizontalScroll from "../HorizontalScroll";
import Rate from "../Rate";
import { getImage } from "../../api";
import { height } from "../../constants/layout";

const Container = styled.View``;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const Card = ({ review }) => {
  return (
    <Container>
      <HorizontalScroll>
        {review.imgUrl.map((url) => (
          <Image source={{ url: getImage(url) }} />
        ))}
      </HorizontalScroll>
      <Rate rate={review.rate} />
      <Content text={review.content} />
    </Container>
  );
};
export default Card;
