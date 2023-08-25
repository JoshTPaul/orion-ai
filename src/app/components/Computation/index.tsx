import React from "react";

function Computation({ devLink, designLink }) {
  return (
    <section>
      Computation Step:
      <ul>
        <li>Dev Link: {devLink} - pass/fail</li>
        <li>Design Link: {designLink} - pass/fail</li>

        <li>Combine</li>
        <li>Send to AI</li>
        <li>Get AI result</li>
      </ul>
    </section>
  );
}

export default Computation;
