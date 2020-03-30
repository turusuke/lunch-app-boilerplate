import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit'
import ky from 'ky-universal'

export const initialState = 0 as any

export const fetchTodoThunk = createAsyncThunk(
  'users/fetchTodo',
  async () => {
    const response = await ky.get('https://jsonplaceholder.typicode.com/todos/1').json()
    console.log(response);
    return response
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // reducers
    increment: state => state + 1,
    decrement: state => state - 1,
    reset: state => initialState
  },
  extraReducers: {
    [fetchTodoThunk.fulfilled]: ({ state, action }) => {
      console.log(state)
    }
  }
})
