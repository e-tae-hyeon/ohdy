import {useEffect, useState} from 'react';

/** @param 충족하지 못하면 disabled */
function useDisabled(conditions: boolean[]) {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const anyConditionMet = conditions.some(condition => condition);
    setDisabled(anyConditionMet);
  }, [conditions]);

  return disabled;
}

export default useDisabled;
