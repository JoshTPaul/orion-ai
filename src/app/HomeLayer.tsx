"use client";
import { styled } from "styled-components";
import Iframe from "./iframe/page";
import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";

const HomeLayer = () => {
  const IF = styled.div`
    iframe {
      display: none;
    }
  `;

  const [devData, setDevData] = useState(null);

  const fetchApiData = () => {
    return axios.post("/api/ai", {
      devData,
    });
  };

  const { data, mutate, isLoading } = useMutation(() => fetchApiData());

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <IF>
        <p>{JSON.stringify(data?.data?.res?.text)}</p>
        <p onClick={() => mutate()}>SUBMIT</p>
        <Iframe onRefLoad={(ref: any) => setDevData(ref)} />
      </IF>
    </>
  );
};

export default HomeLayer;
