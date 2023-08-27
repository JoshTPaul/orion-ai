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
export const msgConstructor = (designData: any, devData: any) => {
  const msg = `Compare the following dev and design JSON arrays. For each matching key and element, calculate discrepancies and scores inside each element inside discrepancy object with some description for each property and also give total score and a total score description within the main object. Return the JSON response as shown.
  - Award 20 points for each matching key in the outer dictionary.
  - Award 13.33 points for each matching attribute within the objects, given there are 6 attributes.
  Dev: ${JSON.stringify(devData)}
  Design: ${JSON.stringify(designData)}
  `;
  return msg;
};
