export const msgConstructor = (inputArr: any) => {
  const msg = `Generate a JSON response for the given input array. Each object in the input array has the following structure:
  - "element": a unique identifier for the object
  - "dev": an object representing the development values
  - "design": an object representing the design values
  
  You need to compare the values inside "dev" and "design" objects and create an output array of objects. Each object in the output array should have the following structure:
  - "element": the same unique identifier as in the input
  - "discrepancies": an array of objects representing discrepancies between "dev" and "design" values

  Each discrepancy object should have the following properties:
  - "property": the property that has a discrepancy
  - "score": a number indicating the likelihood of the discrepancy (1 to 5, where 1 is low discrepancy and 5 is high discrepancy)
  
  Here is the input array:
  ${JSON.stringify(inputArr)}
  
  Please only return the corresponding JSON output which is assigned to a key called "response". JSON response only, please.
  `;
  return msg;
};
