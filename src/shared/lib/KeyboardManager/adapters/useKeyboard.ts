import {useCallback, useRef, useSyncExternalStore} from 'react';

import { addCallback } from '../core';
import { Callback, WrappedCallback, Key } from '../types';

type Props = {
  key: Key;
  callback: Callback;
  disabled?: boolean;
};

export const useKeyboard = ({ key, callback, disabled = false }: Props) => {
  const wrappedCallback = useRef<WrappedCallback>(null);

  console.log('render')
  wrappedCallback.current = { callback };


  const subscribe = useCallback(() => {
    if(disabled) return () => null
    console.log('sub')
    const removeCallback = addCallback({
      key,
      wrappedCallback
    })
    return () => {
      console.log('unsub')
      removeCallback()
    }
  }, [key, disabled])


  useSyncExternalStore(subscribe, () => null)
};
