import { useEffect, useRef } from 'react';

import { addCallback, getInsertPosition } from '../core';
import { Callback, WrappedCallback, Key } from '../types';

type Props = {
  key: Key;
  callback: Callback;
  disabled?: boolean;
};

export const useKeyboard = ({ key, callback, disabled = false }: Props) => {
  const wrappedCallback = useRef<WrappedCallback>(null);

  wrappedCallback.current = { callback };

  const insertPosition = getInsertPosition(key);

  useEffect(() => {
    if (disabled) return () => null;

    const removeCallback = addCallback({
      key,
      wrappedCallback,
      insertPosition,
    });

    return removeCallback;
  }, [key, disabled]);
};
