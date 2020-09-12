import { useEffect, useState } from 'react';
import { IuseCustomHook } from './types';

const useCustomHook:IuseCustomHook = (initialState) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState)
  }, [initialState])

  return [state, setState]
};

export default useCustomHook
