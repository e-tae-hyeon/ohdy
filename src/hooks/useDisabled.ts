import {useMemo} from 'react';

function useDisabled(conditions: boolean[]) {
  return useMemo(() => {
    let disabled = false;
    conditions.forEach(condition => {
      if (!condition) disabled = true;
    });
    return disabled;
  }, [conditions]);
}

export default useDisabled;
