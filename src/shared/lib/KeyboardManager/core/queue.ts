import { Queue, Key } from '../types';

const keyToQueue: Record<Key, Queue> = {};

export const allQueuesAreEmpty = (): boolean => {
  return Object.values(keyToQueue).every((queue) => queue.length === 0);
};

export const getQueue = (key: Key): Queue | undefined => {
  return keyToQueue[key];
};

export const getOrCreateQueue = (key: Key): Queue => {
  const queue = getQueue(key);

  if (queue) {
    return queue;
  }

  const newQueue: Queue = [];
  keyToQueue[key] = newQueue;

  return newQueue;
};
