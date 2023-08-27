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
  const [transformedDevData, setTransformedDevData] = useState(null);
  const [transformedDesignData, setTransformedDesignData] = useState(null);

  const getIds = () => {
    const nodes = designData?.data?.data?.nodes;
    if (nodes) {
      const idArr = nodes?.["1:2"]?.document?.children.map(
        (x: string) => x?.name
      );
      return idArr;
    }
  };

  const fetchApiData = ({ devData, designData }: any) => {
    return axios.post("/api/ai", {
      devData,
      designData,
    });
  };

  const { data, mutate, isLoading } = useMutation(fetchApiData, {
    // onSuccess: () => setActiveStep(2),
    onError: () => setComputeError("AI fail"),
  });

  const STEPS = [
    "Fetching Dev data",
    "Fetching Figma data",
    "Combining data",
    "Sending to AI",
    "SUCCESS",
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

          setTransformedDevData(devDataClean);

          const designDataClean = designData?.data?.data?.nodes[
            "1:2"
          ].document.children.map((ele: any) => ({
            [ele.name]: {
              x: ele.absoluteBoundingBox.x,
              y: ele.absoluteBoundingBox.y,
              width: ele.absoluteBoundingBox.width,
              height: ele.absoluteBoundingBox.height,
              color: `rgb(0,0,0)`,
              backgroundColor: `rgb(0,0,0)`,
            },
          }));
          setTransformedDesignData(designDataClean);

          setTimeout(() => {
            designDataClean?.length > 0 &&
              devDataClean?.length > 0 &&
              setComputeStep(3);
          }, 3000);

          break;
        case 3:
          mutate({
            designData: transformedDesignData,
            devData: transformedDevData,
          });
          break;
      }
    }
  }, [computeStep, devData]);

  return (
    <section>
      <p>{JSON.stringify(data)}</p>
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
