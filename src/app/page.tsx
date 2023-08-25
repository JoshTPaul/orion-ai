"use client";
import { styled } from "styled-components";
import Iframe from "./iframe/page";
import axios from "axios";
import UserInput from "./components/UserInput";
import { useEffect, useState } from "react";
import Computation from "./components/Computation";
import Results from "./components/Results";
import { QueryClientProvider } from "react-query";
import HomeLayer from "./HomeLayer";
import { reactQueryClient } from "./config/reactQueryClient";
import "./globalStyles.css";

const Home = () => {
  const onRefLoad = (ref: any) => {
    console.log("ref", ref.background);
    axios.post("/api/ai", {
      ref,
    });
  };

  const [activeStep, setActiveStep] = useState(0);
  const [devLink, setDevLink] = useState(null);
  const [designLink, setDesignLink] = useState(null);

  useEffect(() => {
    if (activeStep === 0 && devLink !== null && designLink !== null) {
      setActiveStep(1);
    }
  }, [activeStep, devLink, designLink]);

  return (
    <QueryClientProvider client={reactQueryClient}>
      {activeStep === 0 && (
        <UserInput setDevLink={setDevLink} setDesignLink={setDesignLink} />
      )}
      {activeStep === 1 && (
        <Computation
          devLink={devLink}
          designLink={designLink}
          setActiveStep={setActiveStep}
        />
      )}
      {activeStep === 2 && <Results />}
      {/* <HomeLayer /> */}
    </QueryClientProvider>
  );
};

export default Home;
