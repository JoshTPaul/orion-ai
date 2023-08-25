export const msgConstructor = (designData: any, devData: any) => {
  const msg = `I have 2 objects with me, one is design data which is this one ${designData} 
        and the other one is dev data which is this one ${devData}. Compare the dev and design data 
        differences for each element, categorize the discrepancies and provide a score with proper text 
        in json format:`;
  return msg;
};
