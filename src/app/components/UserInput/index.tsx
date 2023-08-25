import React from "react";

function UserInput({ setDevLink, setDesignLink }: any) {
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
        <div>
          Dev Link:{" "}
          <input
            type="text"
            defaultValue="http://localhost:3000/pages/button"
          />
        </div>
        <div>
          Design Link: <input />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default UserInput;
