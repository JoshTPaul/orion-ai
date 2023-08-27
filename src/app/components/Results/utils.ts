export function calculateCombinedScore(inputArray: any) {
  let totalCombinedScore = 0;

  inputArray.forEach((item: any) => {
    totalCombinedScore += item.totalScore;
  });

  const orionScore = (totalCombinedScore / (5 * inputArray.length)) * 100;

  return orionScore;
}
