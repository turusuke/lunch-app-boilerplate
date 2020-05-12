import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ky from 'ky-universal'

export const initialState = 0

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export const fetchTodoThunk = createAsyncThunk(
  'users/fetchTodo',
  async () => {
    const response = await ky.get('https://jsonplaceholder.typicode.com/todos/1').json<Todo>()
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
  extraReducers: (builder) => {
    builder.addCase(fetchTodoThunk.fulfilled, (state, action) => {
      console.log(state);
    })
  }
})
