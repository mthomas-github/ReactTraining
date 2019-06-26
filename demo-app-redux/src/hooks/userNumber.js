import { useState } from "react";

export const useNumber = initialValue => {
  const [num, setNum] = useState(0);

  return [
    num,
    ({ target: { value } }) => setNum(Number(value)),
    () => setNum(initialValue)
  ];
};
