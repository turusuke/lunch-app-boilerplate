import { createAction, createReducer } from '@reduxjs/toolkit'

export const initialState = {
  count: 0
}

const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')
const reset = createAction('RESET')

export const counter = createReducer(initialState, {
  [increment.type]: state => ({
    ...state,
    count: state.count + 1
  }),

  [decrement.type]: state => ({
    ...state,
    count: state.count - 1
  }),

  [reset.type]: state => ({
    ...state,
    count: initialState.count
  })
})
