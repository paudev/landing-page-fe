import { Dispatch, SetStateAction, useState } from "react";

type ArraySplitReturn = {
  activeSplit: number;
  setActiveSplit: Dispatch<SetStateAction<number>>;
  activeData: any[];
  splitLength: number;
};

type UseArraySplit = (data: any[], perChunk?: number) => ArraySplitReturn;

type SplitArray = (inputArray: any[], perChunk: number) => any[];

const splitArray: SplitArray = (inputArray = [], perChunk) => {
  const result = inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
  return result;
};

/** cheap way to paginate cards */
const useArraySplit: UseArraySplit = (data, perChunk = 3) => {
  const [activeSplit, setActiveSplit] = useState(0);

  if (!Array.isArray(data) || data.length < perChunk)
    return {
      activeSplit: 0,
      setActiveSplit: () => {},
      activeData: data,
      splitLength: 0,
    };

  const arraySplit = splitArray(data, perChunk);
  return {
    activeSplit,
    setActiveSplit,
    activeData: arraySplit[activeSplit],
    splitLength: arraySplit.length,
  };
};

export default useArraySplit;
