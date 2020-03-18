import { configureStore } from '@reduxjs/toolkit'
import { counterSlice, initialState as counterInitialState } from './lib/counter'

const initialStates = {
  counter: counterInitialState
}

export const initializeStore = (preloadedState = initialStates) => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer
    },
    preloadedState
  })
}
