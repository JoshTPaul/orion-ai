"use client";
import UserInput from "./components/UserInput";
import { useEffect, useState } from "react";
import Computation from "./components/Computation";
import Results from "./components/Results";
import { QueryClientProvider } from "react-query";
import { reactQueryClient } from "./config/reactQueryClient";
import "./globalStyles.css";
import Header from "./components/Layout/Header";
import Head from "next/head";

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [devLink, setDevLink] = useState(null);
  const [designLink, setDesignLink] = useState(null);

  const [computeError, setComputeError] = useState(false);
  const [devData, setDevData] = useState<any>("loading");
  const [designData, setDesignData] = useState(null);

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
    <QueryClientProvider client={reactQueryClient}>
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
        />
      )}
      {activeStep === 2 && (
        <Results
          devLink={devLink}
          designLink={designLink}
          restartFlow={restartFlow}
        />
      )}
    </QueryClientProvider>
  );
};

export default Home;
