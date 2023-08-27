const reponseTemplate = [
  {
    element: "button_1",
    discrepancies: [
      {
        property: "x",
        devValue: 12,
        designValue: 14,
        level: "Minor",
        score: 2,
        description: "Dev x value is 2 units lower than Design.",
      },
      {
        property: "y",
        devValue: 12,
        designValue: 14,
        level: "Minor",
        score: 2,
        description: "Dev y value is 2 units lower than Design.",
      },
      {
        property: "width",
        devValue: 200,
        designValue: 200,
        level: "No Discrepancy",
        score: 0,
        description: "Dev width matches Design width.",
      },
      {
        property: "height",
        devValue: 100,
        designValue: 100,
        level: "No Discrepancy",
        score: 0,
        description: "Dev height matches Design height.",
      },
      {
        property: "backgroundColor",
        devValue: "#ff0000",
        designValue: "#ff0000",
        level: "No Discrepancy",
        score: 0,
        description: "Dev backgroundColor matches Design backgroundColor.",
      },
    ],
    totalScore: 4,
    overallScoreText: "Minor discrepancies detected. Total Score: 4",
  },
  {
    element: "button_2",
    discrepancies: [
      {
        property: "width",
        devValue: 300,
        designValue: 200,
        level: "Moderate",
        score: 20,
        description: "Dev width is 50% higher than Design.",
      },
    ],
    totalScore: 20,
    overallScoreText: "Moderate discrepancies detected. Total Score: 20",
  },
  {
    element: "card_container_1",
    discrepancies: [
      {
        property: "height",
        devValue: 100,
        designValue: 1000,
        level: "Major",
        score: 50,
        description: "Dev height is 90% lower than Design.",
      },
      {
        property: "backgroundColor",
        devValue: "#f00000",
        designValue: "#ff0000",
        level: "Moderate",
        score: 20,
        description: "Dev backgroundColor is slightly different from Design.",
      },
    ],
    totalScore: 70,
    overallScoreText:
      "Major and Moderate discrepancies detected. Total Score: 70",
  },
];
export const msgConstructor = (inputArr: any) => {
  const msg = `Generate a JSON response for the given input array. Each object in the input array has the following structure:
  - "element": a unique identifier for the object
  - "dev": an object representing the development values
  - "design": an object representing the design values
  
  You need to compare the values inside "dev" and "design" objects and create an output array of objects. Each object in the output array should have the following structure:
  - "element": the same unique identifier as in the input
  - "discrepancies": an array of objects representing discrepancies between "dev" and "design" values
  - "totalScore": which returns us back the total overall score
  - "overallScoreText": which tells us a generic message based on the score
  
  Each discrepancy object should have the following properties:
  - "property": the property that has a discrepancy
  - "score": a number indicating the likelihood of the discrepancy (1 to 5, where 1 is low discrepancy and 5 is high discrepancy)
  - "reason": a reason explaining why an end-user might detect the discrepancy based on the "property"
  - "level": tells the level of discrepancy as in minor mid or major
  - "description": that tells if the user can find out the difference or not.
  
  Here is the input array:
  ${JSON.stringify(inputArr)}
  
  Please only return the corresponding JSON output which is assigned to a key called "response".
  `;
  return msg;
};
