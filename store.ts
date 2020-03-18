import { configureStore } from '@reduxjs/toolkit'
import {counter, initialState} from './lib/counter'
import { initialState as counterInitialState } from './lib/counter'

const initialStates = {
  counter: counterInitialState
}

export const initializeStore = (preloadedState = initialStates) => {
  return configureStore({
    reducer: {
      counter
    },
    preloadedState
  })
}
