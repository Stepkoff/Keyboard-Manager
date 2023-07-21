import { getQueue } from './queue';

const onKeyDown = (event: KeyboardEvent) => {
  const queue = getQueue(event.key);

  if (!queue || queue.length === 0) {
    return;
  }

  const wrappedCallback = queue[queue.length - 1];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  wrappedCallback.current?.callback(event);
};

export const addEventListener = (): void => {
  window.addEventListener('keydown', onKeyDown);
};

export const removeEventListener = (): void => {
  window.removeEventListener('keydown', onKeyDown);
};
