"use client";
import Iframe from "./iframe/page";
import axios from "axios";
import UserInput from "./components/UserInput";
import { useEffect, useState } from "react";
import Computation from "./components/Computation";
import Results from "./components/Results";
import { QueryClientProvider, useMutation } from "react-query";
import { reactQueryClient } from "./config/reactQueryClient";
import "./globalStyles.css";

const Home = () => {
  const [devData, setDevData] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [devLink, setDevLink] = useState(null);
  const [designLink, setDesignLink] = useState(null);

  const { data, mutate, isLoading } = useMutation(() => fetchApiData());

  const fetchApiData = () => {
    return axios.post("/api/ai", {
      devData,
    });
  };

  useEffect(() => {
    if (activeStep === 0 && devLink !== null && designLink !== null) {
      setActiveStep(1);
    }
  }, [activeStep, devLink, designLink]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <QueryClientProvider client={reactQueryClient}>
      <p>{JSON.stringify(data?.data?.res?.text)}</p>
      {activeStep === 0 && (
        <UserInput
          setDevLink={setDevLink}
          setDesignLink={setDesignLink}
          mutate={mutate}
        />
      )}
      {activeStep === 1 && (
        <Computation
          devLink={devLink}
          designLink={designLink}
          setActiveStep={setActiveStep}
        />
      )}
      {activeStep === 2 && <Results />}
      <Iframe onRefLoad={(ref: any) => setDevData(ref)} />
    </QueryClientProvider>
  );
};

export default Home;
