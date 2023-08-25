import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import Iframe from "@/app/iframe";

function Computation({ devLink, designLink }: any) {
  const [devData, setDevData] = useState(null);

  const { data, mutate, isLoading } = useMutation(() => fetchApiData());
  console.log("🚀 ~ file: index.tsx:10 ~ Computation ~ data:", data);

  const fetchDesignData = ({ id, nodeId }: { id: string; nodeId: string }) => {
    return axios.post("/api/get-figma-data", {
      id,
      nodeId,
    });
  };

  const { data: designData, mutate: getDesignData } =
    useMutation(fetchDesignData);

  useEffect(() => {
    getDesignData({
      id: "kFGBtg88aoYKtNGE0HPONq",
      nodeId: "1-2",
    });
  }, []);

  const fetchApiData = () => {
    return axios.post("/api/ai", {
      devData,
      designData: designData?.data?.data,
    });
  };

  return (
    <section>
      Computation Step:
      <ul>
        <li>Dev Link: {devLink} - pass/fail</li>
        <li>Design Link: {designLink} - pass/fail</li>

        <li>Combine</li>
        <li>Send to AI</li>
        <li>Get AI result</li>
        <button onClick={() => mutate()}>Submit</button>
      </ul>
      <p>{isLoading ? "loading" : JSON.stringify(data?.data?.res?.text)}</p>
      <Iframe link={devLink} onRefLoad={(resp: any) => setDevData(resp)} />
    </section>
  );
}

export default Computation;
