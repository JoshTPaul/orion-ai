import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import Iframe from "@/app/iframe";
import { ComputationWrapper } from "./styles";

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
  // fadeIn = true, fadeOut = false
  const [fadeInOut, setFadeInOut] = useState(true);

  const designUrl = new URL(designLink);
  const fileId = designUrl.pathname.split("/")[2];
  const nodeId = designUrl.searchParams.get("node-id");

  const STEPS = [
    "Accessing Dev data",
    "Collecting Figma data",
    "Consolidating data",
    "Dispatching to AI",
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
        setFadeInOut(false);
        setTimeout(() => {
          setComputeStep(2);
        }, 400);
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
          setFadeInOut(true);
          if (devData === "loading") break;
          else if (!!devData) {
            setFadeInOut(false);
            setTimeout(() => setComputeStep(1), 400);
          } else setComputeError("Dev data fail");

          break;
        case 1:
          // get design data
          setFadeInOut(true);

          getDesignData({
            id: fileId,
            nodeId: nodeId || "",
          });
          break;
        case 2:
          // combine data
          setFadeInOut(true);
          setTimeout(() => {
            setComputeStep(3);
          }, 2000);
          const node =
            designData?.data?.data?.nodes?.[
              (nodeId || "").replaceAll("-", ":")
            ];
          console.log("design data", node);
          break;
        case 3:
          // send to AI
          // mutate();
          setTimeout(() => {
            setActiveStep(2);
          }, 2000);
          break;
      }
    }
  }, [computeStep, devData]);

  const fetchApiData = () => {
    return axios.post("/api/ai", {
      devData,
      designData: designDataApi?.data?.data,
    });
  };

  return (
    <ComputationWrapper>
      <div className="loaderContainer">
        <div className="loader">
          {[...new Array(5)]?.map((_: any, i: number) => (
            <div key={`loader-circle-${i}`} className="loader-circle"></div>
          ))}
        </div>
        <h2 className={fadeInOut ? "fadeIn" : "fadeOut"}>
          {STEPS[computeStep]}
        </h2>
      </div>
      <Iframe
        link={devLink}
        onRefLoad={(resp: any) => setDevData(resp)}
        hidden
      />
    </ComputationWrapper>
  );
}

export default Computation;
