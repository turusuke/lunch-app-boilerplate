import { configureStore } from '@reduxjs/toolkit'
import { counter } from './lib/counter'
import { initialState as counterInitialState } from "./lib/counter";

export const initializeStore = (preloadedState = counterInitialState) => {
  return configureStore({
    reducer: counter,
    preloadedState,
  })
}
