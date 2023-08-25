import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import Iframe from "@/app/iframe/page";

function Computation({ devLink, designLink, setActiveStep }: any) {
  const [devData, setDevData] = useState(null);

  const { data, mutate, isLoading } = useMutation(() => fetchApiData());

  const fetchApiData = () => {
    return axios.post("/api/ai", {
      devData,
    });
  };

  const onRefLoad = (r: any) => {
    console.log("🚀 ~ file: index.tsx:18 ~ x ~ r:", r);
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
      <Iframe link={devLink} onRefLoad={onRefLoad} />
    </section>
  );
}

export default Computation;
