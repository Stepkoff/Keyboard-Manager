import { getOrCreateQueue, allQueuesAreEmpty } from './queue';
import { addEventListener, removeEventListener } from './event';
import { WrappedCallbackRef, Queue, Key } from '../types';

type RemoveParams = {
  queue: Queue;
  wrappedCallback: WrappedCallbackRef;
};

const removeCallback = ({ queue, wrappedCallback }: RemoveParams) => {
  const index = queue.findIndex((queueCallback) => queueCallback === wrappedCallback);

  if (index > -1) {
    queue.splice(index, 1);
  }

  if (allQueuesAreEmpty()) {
    removeEventListener();
  }
};

type AddParams = {
  key: Key;
  wrappedCallback: WrappedCallbackRef;
  insertPosition: number;
};

export const addCallback = ({ key, wrappedCallback, insertPosition }: AddParams) => {
  const needAddEventListener = allQueuesAreEmpty();

  const queue = getOrCreateQueue(key);
  queue.splice(insertPosition, 0, wrappedCallback);

  if (needAddEventListener) {
    addEventListener();
  }

  return () => removeCallback({ queue, wrappedCallback });
};
