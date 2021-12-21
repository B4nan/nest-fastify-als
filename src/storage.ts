import { AsyncLocalStorage } from 'async_hooks';

export const storage = new AsyncLocalStorage<any>();
export const state = { counter: 0 };
