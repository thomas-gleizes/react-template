import { useCallback, useState } from "react";

const useCallBackRef = () => {
  const [state, setState] = useState<HTMLElement | null>(null);

  const ref = useCallback<any>(
    (node: any) => {
      if (node) setState(node);
    },
    [state]
  );

  return [state, ref];
};

export default useCallBackRef;
