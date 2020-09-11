import { useEffect, useState } from 'react';
import { IuseCustomHook } from './types';

export const useCustomHook:IuseCustomHook = (initialState) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState)
  }, [initialState])

  return [state, setState]
};
