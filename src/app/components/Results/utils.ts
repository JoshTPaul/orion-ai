export function calculateCombinedScore(
  inputArray: any,
  noOfUniqueKeys: number
) {
  let totalCombinedScore = 0;
  let maxScore = 0;

  inputArray.forEach((item: any) => {
    totalCombinedScore += item.totalScore;
    maxScore += item.maxScore;
  });

  const orionScore = (totalCombinedScore / maxScore) * 100;

  return orionScore;
}
