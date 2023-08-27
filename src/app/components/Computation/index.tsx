import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import Iframe from "@/app/iframe";
import { ComputationWrapper } from "./styles";
import { rgbaToHex } from "@/app/utils/rgbaToHex";

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
  triggerAiApi,
}: any) {
  const [computeStep, setComputeStep] = useState(0);
  // fadeIn = true, fadeOut = false
  const [fadeInOut, setFadeInOut] = useState(true);

  const designUrl = new URL(designLink);
  const fileId = designUrl.pathname.split("/")[2];
  const nodeId = designUrl.searchParams.get("node-id")?.replaceAll("-", ":");
  const [aiInput, setAiInput] = useState(null);

  const getIds = () => {
    const nodes = designData?.data?.data?.nodes;
    if (nodes) {
      const idArr = nodes?.[nodeId || ""]?.document?.children.map(
        (x: any) => x?.name
      );
      return idArr;
    }
  };

  const STEPS = [
    "Accessing Dev data",
    "Collecting Figma data",
    "Consolidating data",
    "Dispatching to AI",
  ];

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
          const ids = getIds();

          const devDataClean = ids?.map((x: any) => {
            const ele = devData?.querySelector(`#${x}`);
            const css = getComputedStyle(ele);

            return {
              [x]: {
                x: ele?.offsetLeft,
                y: ele?.offsetTop,
                width: ele?.offsetWidth,
                height: ele?.offsetHeight,
                color: css?.color,
                backgroundColor: css?.backgroundColor,
              },
            };
          });

          const designDataClean = designData?.data?.data?.nodes[
            nodeId || ""
          ].document.children.map((ele: any) => ({
            [ele.name]: {
              x: ele.absoluteBoundingBox.x,
              y: ele.absoluteBoundingBox.y,
              width: ele.absoluteBoundingBox.width,
              height: ele.absoluteBoundingBox.height,
              color: rgbaToHex(ele.fills[0].color),
              backgroundColor: rgbaToHex(ele.fills[0].color),
            },
          }));

          const inputArr = designDataClean.map((obj: any, i: number) => {
            const elementName = Object.keys(obj)?.[0];
            return {
              element: elementName,
              design: designDataClean[i][elementName],
              dev: devDataClean.find(
                (devObj: any) => Object.keys(devObj)[0] === elementName
              )[elementName],
            };
          });

          setAiInput(inputArr);
          setFadeInOut(false);

          setTimeout(() => {
            setComputeStep(3);
          }, 500);

          break;
        case 3:
          setFadeInOut(true);
          triggerAiApi({
            inputArr: aiInput,
          });
          break;
      }
    }
  }, [computeStep, devData]);

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
