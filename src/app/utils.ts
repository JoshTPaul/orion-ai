export const msgConstructor = (designData: any, devData: any) => {
  const msg = `I have 2 objects with me, one is design data which is this one ${designData} 
        and the other one is dev data which is this one ${devData}. You as a chatGPT,
        take both the data and analys the entire data and 
        compare their values such that dev data is closer to the design data and find differences 
        in each element, categorize the discrepancies and provide individual score plus over all score. Also please return me the data in json format.`;
  return msg;
};
