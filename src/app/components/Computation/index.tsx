import React, { useState } from "react";

function Computation({ devLink, designLink, setActiveStep }: any) {
  return (
    <section>
      Computation Step:
      <ul>
        <li>Dev Link: {devLink} - pass/fail</li>
        <li>Design Link: {designLink} - pass/fail</li>

        <li>Combine</li>
        <li>Send to AI</li>
        <li>Get AI result</li>
        <button onClick={() => setActiveStep(2)}>Submit</button>
      </ul>
    </section>
  );
}

export default Computation;
