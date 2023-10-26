import {MutableRefObject} from "react";

export type Key = KeyboardEvent['key'];
export type Callback = (event: KeyboardEvent) => void;

export type WrappedCallback = { callback: Callback } | null;
export type WrappedCallbackRef = MutableRefObject<WrappedCallback>;

export type Queue = WrappedCallbackRef[];
