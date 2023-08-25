"use client";
import { styled } from "styled-components";
import Iframe from "./iframe/page";
import axios from "axios";
import UserInput from "./components/UserInput";
import { useEffect, useState } from "react";
import Computation from "./components/Computation";

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
    <>
      {activeStep === 0 && (
        <UserInput setDevLink={setDevLink} setDesignLink={setDesignLink} />
      )}
      {activeStep === 1 && (
        <Computation devLink={devLink} designLink={designLink} />
      )}
    </>
  );
};

export default Home;
