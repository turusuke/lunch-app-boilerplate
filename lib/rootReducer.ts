import { combineReducers } from '@reduxjs/toolkit'
import { counterSlice } from './counter'
export const rootReducer = combineReducers({
  counter: counterSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>
