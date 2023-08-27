export const msgConstructor = (inputArr: any) => {
  const msg = `Please generate a JSON response based on the given input array. Each object in the input array has the structure:
  - "element": a unique identifier for the object
  - "dev": an object representing the development values
  - "design": an object representing the design values

  You need to compare the values inside "dev" and "design" objects and create an output array of objects. Each object in the output array should have the following structure:
  - "element": the same unique identifier as in the input
  - "totalScore": which returns us back the total overall score based on how many matching values are present out of the available keys on both sides. If there are no matching values, return 0. If everything matches, return 5.

  Input Array: ${JSON.stringify(inputArr)}

  Please ONLY return the corresponding JSON output which is assigned to a key called "response" with no explanations or text outside json.
`;
  return msg;
};
