import { createSlice } from '@reduxjs/toolkit'

export const initialState = 0
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // reducers
    increment: state => state + 1,
    decrement: state => state - 1,
    reset: state => initialState
  }
})
