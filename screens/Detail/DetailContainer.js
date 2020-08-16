import React, { useState, useLayoutEffect, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { GET_FOOD } from "../../graqhql/query";

const DetailContainer = ({ route: { params } }) => {
  const [data, setData] = useState({
    id: params.id,
    name: params.name,
    imgUrl: params.imgUrl,
    longitude: params.longitude,
    latitude: params.latitude,
    address: params.address,
    avg_rate: params.avg_rate,
  });
  const [getFood, { loading }] = useLazyQuery(GET_FOOD, {
    onCompleted: (data) => {
      setData(data.food);
    },
    onError: (err) => console.log(err),
  });
  const getData = async () => {
    const { id } = params;
    await getFood({ variables: { id } });
  };
  useEffect(() => {
    getData();
  }, [loading]);
  return <DetailPresenter loading={loading} data={data} getData={getData} />;
};
export default DetailContainer;
