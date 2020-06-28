import { createStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';

export const store = createStore({
  extensions: [getSagaExtension()]
});
