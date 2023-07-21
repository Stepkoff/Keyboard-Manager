# Keyboard Manager

Keyboard manager is a JavaScript library for keyboard handling.

This library is based on a solution that, according to our observation, covers all the needs of various projects. This solution is based on a queue of callbacks. Each key has its own queue. The queue is represented as a [stack](<https://en.wikipedia.org/wiki/Stack_(abstract_data_type)>). The idea of a queue describes how only the last callback added to the queue will be called when the corresponding key is pressed on the keyboard.

## Usage

```jsx
import { useKeyboard } from 'keyboardManager';

const Modal = ({ onClose, children }) => {
  useKeyboard({
    key: 'Escape',
    callback: onClose,
    disabled: false,
  });

  return <div>{children}</div>;
};
```

## Props:

- **key** is `KeyboardEvent.key`. It is a way to specify key. The whole list of available key names [here](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values). _Required parameter_
- **callback** is a function that should be called when the `key` is pressed. _Required parameter_
- **disabled** is a flag to disable / enable the hook. _Optional parameter. `false` by default_
