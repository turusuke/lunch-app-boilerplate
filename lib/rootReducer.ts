import { combineReducers } from '@reduxjs/toolkit'
import { counter } from './counter'
export const rootReducer = combineReducers({
  counter
})

export type RootState = ReturnType<typeof rootReducer>
