import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import Iframe from "@/app/iframe";

function Computation({
  devLink,
  designLink,
  setActiveStep,
  computeError,
  setComputeError,
  devData,
  setDevData,
  designData,
  setDesignData,
}: any) {
  const [computeStep, setComputeStep] = useState(0);

  const STEPS = [
    "Fetching Dev data",
    "Fetching Figma data",
    "Combining data",
    "Sending to AI",
    "SUCCESS",
  ];

  const { data, mutate, isLoading } = useMutation(() => fetchApiData(), {
    onSuccess: () => setActiveStep(2),
    onError: () => setComputeError("AI fail"),
  });

  const fetchDesignData = ({ id, nodeId }: { id: string; nodeId: string }) => {
    return axios.post("/api/get-figma-data", {
      id,
      nodeId,
    });
  };

  const { data: designDataApi, mutate: getDesignData } = useMutation(
    fetchDesignData,
    {
      onSuccess: (res) => {
        setComputeStep(2);
        setDesignData(res);
      },
      onError: () => {
        setComputeError("design data fail");
      },
    }
  );

  useEffect(() => {
    if (computeError) setActiveStep(0);
    else {
      switch (computeStep) {
        case 0:
          // get dev data
          if (devData === "loading") break;
          else if (!!devData) setComputeStep(1);
          else setComputeError("Dev data fail");

          break;
        case 1:
          // get design data
          const designUrl = new URL(designLink);
          const fileId = designUrl.pathname.split("/")[2];
          const nodeId = designUrl.searchParams.get("node-id");

          getDesignData({
            id: fileId,
            nodeId: nodeId || "",
          });
          break;
        case 2:
          // combine data
          setTimeout(() => {
            setComputeStep(3);
          }, 2000);
          break;
        case 3:
          // send to AI
          mutate();
          break;
      }
    }
  }, [computeStep, devData]);

  const fetchApiData = () => {
    return axios.post("/api/ai", {
      devData,
      designDataApi,
    });
  };

  return (
    <section>
      Computation Step:
      <ul>
        <p>Compute Error: {computeError ? "true" : "false"}</p>
        {STEPS[computeStep]}
      </ul>
      <Iframe
        link={devLink}
        onRefLoad={(resp: any) => setDevData(resp)}
        hidden
      />
    </section>
  );
}

export default Computation;
