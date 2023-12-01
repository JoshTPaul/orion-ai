import React, { useState } from "react";
import { UserInputWrapper } from "./styles";
import { Close } from "./Close";
import { Tick } from "./Tick";
import { Alert } from "./Alert";

function UserInput({ setDevLink, setDesignLink, computeError }: any) {
  const basePath = global?.window && window?.location?.origin;
  const [_devLink, _setDevLink] = useState<string>("");
  const [_designLink, _setDesignLink] = useState<string>("");
  const [showDemoTools, setShowDemoTools] = useState<boolean>(false);
  const [selectedDemo, setSelectedDemo] = useState<number>(-1);

  const DEMOS = [
    {
      title: "Bad Dev Implementation",
      design:
        "https://www.figma.com/file/kFGBtg88aoYKtNGE0HPONq/Untitled?type=design&node-id=219-20&mode=design&t=iCoMLAa1GURfiNjY-4",
      dev: basePath + "/pages/examplePage2",
    },
    {
      title: "Good Dev Implementation",
      design:
        "https://www.figma.com/file/kFGBtg88aoYKtNGE0HPONq/Untitled?type=design&node-id=219-20&mode=design&t=iCoMLAa1GURfiNjY-4",
      dev: basePath + "/pages/examplePage",
    },
  ];

  const onSubmit = (e: any) => {
    e.preventDefault();

    const devLink = e?.target?.[0]?.value;
    const designLink = e?.target?.[1]?.value;

    setDevLink(devLink?.includes("http") ? devLink : "https://" + devLink);
    setDesignLink(designLink);
  };

  return (
    <UserInputWrapper>
      <form onSubmit={onSubmit}>
        <h1>Welcome to Orion</h1>
        <p>
          Orion is your ultimate solution for streamlining and enhancing the
          design audit process. Harnessing the power of cutting-edge Artificial
          Intelligence, Orion redefines the way design audits are conducted,
          ensuring efficiency, accuracy, and unmatched precision in every
          assessment.
          <br />
          <br />
          <span className="alert" onClick={() => setShowDemoTools(true)}>
            <Alert />
            First time? Click here for demo tools and more information.
          </span>
        </p>

        <h3>Get Started</h3>

        <input
          placeholder="Enter Dev URL"
          type="text"
          value={_devLink}
          onChange={(e) => _setDevLink(e.target.value)}
          required
        />

        <input
          type="text"
          value={_designLink}
          required
          onChange={(e) => _setDesignLink(e.target.value)}
          placeholder="Enter Figma Frame Link"
        />
        <div>
          <button type="button" className="secondary">
            Reset
          </button>
          <button type="submit" className="primary">
            Submit
          </button>
        </div>
      </form>

      <aside className={showDemoTools ? "active" : "inactive"}>
        <div className="backdrop" onClick={() => setShowDemoTools(false)}></div>
        <div className="drawer">
          <h3>
            Disclaimer{" "}
            <Close className="close" onClick={() => setShowDemoTools(false)} />
          </h3>
          <p>
            Orion is a proof-of-concept, created in one day during the TIFIN AI
            Hackathon 2023. Due to this, certain features may or may not work
            based on the validity of API keys, or the security behind links
            provided by users, etc.
            <br />
            <br />
            As such, we have provided two curated demos for users to explore the
            purpose and potential of Orion. Please select one:{" "}
          </p>
          {DEMOS.map(({ title, dev, design }, i: number) => (
            <div
              key={`demo-${i}`}
              className={selectedDemo === i ? "selected" : ""}
              onClick={() => {
                setSelectedDemo(i);
                _setDevLink(dev);
                _setDesignLink(design);
              }}
            >
              <h4>
                {title} {selectedDemo === i && <Tick />}
              </h4>
              <ul>
                <li>
                  Design Link:{" "}
                  <a href={design} target="_blank">
                    {design}
                  </a>{" "}
                </li>
                <li>
                  Dev Link:{" "}
                  <a href={dev} target="_blank">
                    {dev}
                  </a>{" "}
                </li>
              </ul>
            </div>
          ))}
          {selectedDemo !== -1 && (
            <p>
              Your selection has been recorded. You can now close this drawer
              and proceed by clicking the submit button on the main page.
            </p>
          )}
        </div>
      </aside>
    </UserInputWrapper>
  );
}

export default UserInput;
