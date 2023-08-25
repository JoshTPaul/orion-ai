"use client";
import { styled } from "styled-components";
import Iframe from "./iframe/page";
import axios from "axios";

const IF = styled.div``;

const Home = () => {
  const onRefLoad = (ref: any) => {
    axios.post("/api/ai", {
      ref,
    });
  };
  return (
    <IF>
      <Iframe onRefLoad={onRefLoad} />
      <p>SUBMIT</p>
    </IF>
  );
};

export default Home;
