"use client";
import UserInput from "./components/UserInput";
import { useEffect, useState } from "react";
import Computation from "./components/Computation";
import Results from "./components/Results";
import { QueryClientProvider } from "react-query";
import { reactQueryClient } from "./config/reactQueryClient";
import "./globalStyles.css";

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [devLink, setDevLink] = useState(null);
  const [designLink, setDesignLink] = useState(null);

  const [computeError, setComputeError] = useState(false);
  const [devData, setDevData] = useState("loading");
  const [designData, setDesignData] = useState(null);

  useEffect(() => {
    if (activeStep === 0 && devLink !== null && designLink !== null) {
      setActiveStep(1);
    }
  }, [activeStep, devLink, designLink]);

  return (
    <QueryClientProvider client={reactQueryClient}>
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
        <Results devLink={devLink} designLink={designLink} />
      )}
    </QueryClientProvider>
  );
};

export default Home;
