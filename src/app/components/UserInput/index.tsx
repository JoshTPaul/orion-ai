import React from "react";
import { UserInputWrapper } from "./styles";
import { useMutation } from "react-query";
import axios from "axios";

function UserInput({ setDevLink, setDesignLink, computeError }: any) {
  const onSubmit = (e: any) => {
    e.preventDefault();

    const devLink = e?.target?.[0]?.value;
    const designLink = e?.target?.[1]?.value;

    setDevLink(devLink?.includes("http") ? devLink : "https://" + devLink);
    setDesignLink(designLink);
  };

  const generatePdf = () => {
    return axios.post("/api/export");
  };

  const { data, mutate } = useMutation(generatePdf);

  return (
    <UserInputWrapper>
      <form onSubmit={onSubmit}>
        <h1 onClick={mutate}>Welcome to Orion</h1>
        <p>
          Orion is your ultimate solution for streamlining and enhancing the
          design audit process. Harnessing the power of cutting-edge Artificial
          Intelligence, Orion redefines the way design audits are conducted,
          ensuring efficiency, accuracy, and unmatched precision in every
          assessment.
        </p>
        <h3>Get Started</h3>

        <input
          placeholder="Enter Dev URL"
          type="text"
          // defaultValue="http://localhost:3000/pages/button"
          required
        />

        <input
          type="text"
          // defaultValue="https://www.figma.com/file/kFGBtg88aoYKtNGE0HPONq/Untitled?node-id=1%3A2&mode=dev"
          required
          placeholder="Enter Figma Frame Link"
        />
        <div>
          <button type="reset" className="secondary">
            Reset
          </button>
          <button type="submit" className="primary">
            Submit
          </button>
        </div>
      </form>
    </UserInputWrapper>
  );
}

export default UserInput;
