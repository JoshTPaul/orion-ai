"use client";
import { useEffect, useState } from "react";
import { QueryClientProvider, useMutation } from "react-query";
import "../globalStyles.css";
import Head from "next/head";
import axios from "axios";
import Header from "../components/Layout/Header";
import UserInput from "../components/UserInput";
import Computation from "../components/Computation";
import Results from "../components/Results";

function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [devLink, setDevLink] = useState(null);
  const [designLink, setDesignLink] = useState(null);

  const [computeError, setComputeError] = useState<string | boolean>(false);
  const [devData, setDevData] = useState<any>("loading");
  const [designData, setDesignData] = useState(null);

  const [aiInput, setAiInput] = useState(null);

  const fetchApiData = ({ inputArr }: any) => {
    setAiInput(inputArr);
    return axios.post("/api/ai", {
      inputArr,
    });
  };

  const {
    data: aiData,
    mutate,
    isLoading,
  } = useMutation(fetchApiData, {
    onSuccess: () => setActiveStep(2),
    onError: () => setComputeError("AI fail"),
  });

  useEffect(() => {
    if (activeStep === 0 && devLink !== null && designLink !== null) {
      setActiveStep(1);
    }
  }, [activeStep, devLink, designLink]);

  const restartFlow = () => {
    setDevLink(null);
    setDesignLink(null);
    setDesignData(null);
    setDevData("loading");
    setComputeError(false);
    setActiveStep(0);
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {activeStep === 0 && (
        <UserInput
          setDevLink={setDevLink}
          setDesignLink={setDesignLink}
          computeError={computeError}
        />
      )}
      {activeStep === 1 && (
        <Computation
          devLink={devLink}
          designLink={designLink}
          setActiveStep={setActiveStep}
          computeError={computeError}
          setComputeError={setComputeError}
          devData={devData}
          setDevData={setDevData}
          designData={designData}
          setDesignData={setDesignData}
          triggerAiApi={mutate}
        />
      )}
      {activeStep === 2 && (
        <Results
          devLink={devLink}
          designLink={designLink}
          restartFlow={restartFlow}
          aiData={aiData}
          aiInput={aiInput}
        />
      )}
    </>
  );
}

export default Home;
