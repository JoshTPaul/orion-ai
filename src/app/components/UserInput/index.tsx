import React from "react";

function UserInput({
  // setActiveStep,
  setDevLink,
  setDesignLink,
}: any) {
  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const devLink = e?.target?.[0]?.value;
          const designLink = e?.target?.[1]?.value;

          setDevLink(devLink);
          setDesignLink(designLink);
        }}
      >
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
