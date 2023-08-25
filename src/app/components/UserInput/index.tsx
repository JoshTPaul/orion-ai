import React from "react";

function UserInput({ setDevLink, setDesignLink, computeError }: any) {
  const onSubmit = (e: any) => {
    e.preventDefault();

    const devLink = e?.target?.[0]?.value;
    const designLink = e?.target?.[1]?.value;

    setDevLink(devLink);
    setDesignLink(designLink);
  };
  return (
    <section>
      <form onSubmit={onSubmit}>
        {computeError && <p>{computeError}</p>}
        <div>
          Dev Link:{" "}
          <input
            type="text"
            defaultValue="http://localhost:3000/pages/button"
            required
          />
        </div>
        <div>
          Design Link:{" "}
          <input
            type="text"
            defaultValue="https://www.figma.com/file/kFGBtg88aoYKtNGE0HPONq/Untitled?node-id=1%3A2&mode=dev"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default UserInput;
