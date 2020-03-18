import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterSlice } from '../lib/counter'

const useCounter = () => {
  const count = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const increment = () => dispatch(counterSlice.actions.increment())
  const decrement = () => dispatch(counterSlice.actions.decrement())
  const reset = () => dispatch(counterSlice.actions.reset())
  return { count, increment, decrement, reset }
}

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter()
  return (
    <div>
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
