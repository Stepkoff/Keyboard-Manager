import { getOrCreateQueue, allQueuesAreEmpty } from './queue';
import { addEventListener, removeEventListener } from './event';
import { WrappedCallbackRef, Queue, Key } from '../types';

type RemoveParams = {
  queue: Queue;
  wrappedCallback: WrappedCallbackRef;
};

const removeCallback = ({ queue, wrappedCallback }: RemoveParams) => {

  const index = queue.findIndex(
    (queueCallback) => queueCallback === wrappedCallback
  );

  if (index > -1) {
    queue.splice(index, 1);
  }

  if (allQueuesAreEmpty()) {
    removeEventListener();
  }
  console.log('remove callback', queue)
};

type AddParams = {
  key: Key;
  wrappedCallback: WrappedCallbackRef;
};

export const addCallback = ({ key, wrappedCallback }: AddParams) => {
  const needAddEventListener = allQueuesAreEmpty();

  const queue = getOrCreateQueue(key);

  queue.push(wrappedCallback);

  if (needAddEventListener) {
    addEventListener();
  }
  console.log('add callback', queue)
  return () => removeCallback({ queue, wrappedCallback });
};
