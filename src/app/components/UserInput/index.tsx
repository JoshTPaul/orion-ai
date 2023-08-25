import React from "react";

function UserInput({
  // setActiveStep,
  setDevLink,
  setDesignLink,
  mutate,
}: any) {
  const onSubmit = (e: any) => {
    e.preventDefault();

    const devLink = e?.target?.[0]?.value;
    const designLink = e?.target?.[1]?.value;

    setDevLink(devLink);
    setDesignLink(designLink);
    mutate();
  };
  return (
    <section>
      <form onSubmit={onSubmit}>
        <div>
          Dev Link: <input />
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
