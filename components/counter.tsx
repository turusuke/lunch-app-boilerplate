import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterSlice, fetchTodoThunk } from '../lib/counter'

const { increment, decrement, reset } = counterSlice.actions
const useCounter = () => {
  const count = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const _increment = () => dispatch(increment())
  const _decrement = () => dispatch(decrement())
  const _reset = () => dispatch(reset())
  return { count, increment: _increment, decrement: _decrement, reset: _reset }
}

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter()
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(fetchTodoThunk())}>ボタン</button>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
