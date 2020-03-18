import { createAction, createReducer } from '@reduxjs/toolkit'

export const initialState = 0

const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')
const reset = createAction('RESET')

export const counter = createReducer(initialState, {
  [increment.type]: state => state + 1,
  [decrement.type]: state => state - 1,
  [reset.type]: state => initialState
})
